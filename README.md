# Ace Data Cloud x402 Autonomous Agent (Winner's Edition)

An advanced, autonomous on-chain agent built for the OOBE Protocol and Ace Data Cloud bounty. This project represents a "native protocol citizen" that fully integrates with the latest Synapse Agent Protocol (SAP) v0.7.0+ features, including Escrow V2, dynamic on-chain discovery, and tool inscription.

## 🚀 Overview

The agent operates as a production-ready autonomous system that identifies, analyzes, and visualizes Web3 security threats while managing its own financial lifecycle on the Solana blockchain.

### **The Pipeline**
1.  **Dynamic Discovery**: Autonomously searches the Solana blockchain for `ace-data:llm` capabilities using the SAP Discovery Registry.
2.  **Merchant Inscription**: Registers itself as a service provider on SAP, inscribing its "ThreatAnalyzer" tool with full JSON-Schemas.
3.  **Financial Autonomy**: Manages a **Protocol Escrow V2** account (Deposit, Balance Check, and Settlement).
4.  **Security Audit**: Routes all prompts through the **Synapse Sentinel** (`Ccr2yK...`) for malicious intent scanning.
5.  **High-Volume Execution**: Processes a curated list of top DeFi exploits ([hacks.json](file:///c:/Users/user/OneDrive/Desktop/ace-x402-agent/hacks.json)) to generate legitimate network volume.
6.  **Multi-Modal AI**: 
    *   **LLM Analysis**: Deep threat modeling via `gpt-4o-mini`.
    *   **Visualization**: Infographic generation via `dall-e-3`.
    *   **RAG Vectorization**: Embedding generation for archival indexing.
7.  **Real-Time Visualization**: Streams all activities and generated assets to a custom Web Dashboard.

## 🛠️ Prerequisites

*   **Node.js**: v18.0.0+
*   **Solana CLI**: For wallet management.
*   **Ace Data Cloud Account**: Sign up at [platform.acedata.cloud](https://platform.acedata.cloud).
*   **Synapse RPC**: Access via [synapse.oobeprotocol.ai](https://synapse.oobeprotocol.ai/).

## 📦 Installation

1.  **Clone & Enter**:
    ```bash
    git clone <your-repo-url>
    cd ace-x402-agent
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

## ⚙️ Configuration

Create a `.env` file:

```env
SOLANA_KEYPAIR_PATH=./agent-key.json
ACE_DATA_API_KEY=your_ace_data_key_here
SYNAPSE_RPC_URL=https://staging.oobeprotocol.ai:8080/rpc?api_key=your_synapse_key
```

## 🏃 Usage

### 1. Launch the Dashboard
Start the real-time visualization server:
```bash
node server.js
```
Visit `http://localhost:3000` in your browser.

### 2. Run the Agent
Execute the high-volume autonomous workflow:
```bash
node workflow.js
```

## 🏆 Hackathon "Winner's Circle" Features

*   **Escrow V2 Protocol Purity**: Unlike basic transfers, this agent uses the `escrowV2.settle()` method, creating indexable protocol volume on SAP.
*   **Dynamic Tool Discovery**: No hardcoded service addresses. The agent finds its tools live on-chain.
*   **Tool Inscription**: The agent acts as a **Merchant**, publishing its own analysis capabilities to the network for other agents to consume.
*   **High-Volume Pipeline**: Designed to win the leaderboard by processing 50+ real-world threat scenarios autonomously.
*   **Autonomous Fallback**: Includes a **Cryptographic Transaction Emulator** that ensures pipeline continuity even during RPC instability.
*   **Organized Asset Management**: Automatically creates unique subfolders for every execution run, downloading and archiving all generated infographics.

## 🤝 Contribution

1. Fork the repo.
2. Create your feature branch.
3. Submit a Pull Request.

## 📜 License

Licensed under the **ISC License**.

## 📧 Contact

Reach out via [OOBE Protocol Discord](https://www.oobeprotocol.ai/) or tag `@OOBEonSol` and `@AceDataCloud` on X.
