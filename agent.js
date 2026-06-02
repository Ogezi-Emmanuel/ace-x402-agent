require('dotenv').config();
const { Connection, Keypair } = require('@solana/web3.js');
const { SapClient } = require('@oobe-protocol-labs/synapse-sap-sdk');
const { ToolsModule } = require('./node_modules/@oobe-protocol-labs/synapse-sap-sdk/dist/cjs/modules/tools');
const { DiscoveryRegistry } = require('./node_modules/@oobe-protocol-labs/synapse-sap-sdk/dist/cjs/registries/discovery');
const fs = require('fs');
const path = require('path');

// --- CONFIGURATION VALIDATION ---
const REQUIRED_ENV = ['SOLANA_KEYPAIR_PATH', 'SYNAPSE_RPC_URL'];
REQUIRED_ENV.forEach(env => {
    if (!process.env[env]) {
        console.error(`🛑 FATAL: Missing environment variable: ${env}`);
        process.exit(1);
    }
});

const keypairPath = path.resolve(process.env.SOLANA_KEYPAIR_PATH);
const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync(keypairPath)));
const agentKeypair = Keypair.fromSecretKey(secretKey);
const connection = new Connection(process.env.SYNAPSE_RPC_URL, 'confirmed');

async function initializeAgent() {
    console.log("🛡️ Initializing Agent on SAP Mainnet...");
    
    // Create a proper wallet object for Anchor
    const wallet = {
        publicKey: agentKeypair.publicKey,
        signTransaction: async (tx) => { tx.partialSign(agentKeypair); return tx; },
        signAllTransactions: async (txs) => txs.map(tx => { tx.partialSign(agentKeypair); return tx; })
    };
    
    const sapClient = new SapClient({ connection, wallet });
    
    // Manually attach high-level modules
    sapClient.toolsV2 = new ToolsModule(sapClient.program);
    sapClient.discoveryV2 = new DiscoveryRegistry(sapClient.program);
    
    console.log(`✅ Agent Authenticated: ${agentKeypair.publicKey.toBase58()}`);

    // --- NEW: Tool Inscription (Become a Merchant) ---
    try {
        console.log("🛠️ Inscribing Threat Analysis Tool on SAP...");
        await sapClient.toolsV2.publishByName(
            "ThreatAnalyzer", 
            "ace-x402-v1", 
            "Autonomous Web3 Threat Analysis & Visualization",
            '{"type":"object","properties":{"threat":{"type":"string"}}}', // Input Schema
            '{"type":"object","properties":{"analysis":{"type":"string"},"image":{"type":"string"}}}', // Output Schema
            1, // POST
            5, // Data category
            1, // 1 param
            1, // 1 required
            false // Not compound
        );
        console.log("✅ Tool published to SAP Network.");
    } catch (e) {
        if (e.message.includes("already published")) {
            console.log("ℹ️ Tool already inscribed. Skipping...");
        } else {
            console.warn("⚠️ Tool inscription failed:", e.message);
        }
    }

    return sapClient;
}

async function discoverTools(sapClient) {
    console.log("🔍 Discovering AI tools via SAP Registry...");
    try {
        // REAL SAP DISCOVERY: Search for Ace Data Cloud capabilities
        const tools = await sapClient.discoveryV2.findAgentsByCapability("ace-data:llm");
        if (tools.length > 0) {
            console.log(`✅ Discovery complete. Found ${tools.length} active service providers.`);
            return tools;
        }
        
        // Fallback if registry is empty
        console.log("ℹ️ No active providers found. Using fallback cluster mappings.");
        return [];
    } catch (e) {
        console.log("⚠️ Discovery warning:", e.message);
        return [];
    }
}

module.exports = { initializeAgent, discoverTools, agentKeypair };
