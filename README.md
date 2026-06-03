# 0xNeural V2 Orchestrator | Ace Data Cloud x402 Autonomous Agent

An advanced, fully autonomous on-chain AI agent built for the OOBE Protocol and Ace Data Cloud bounty. This project represents a "native protocol citizen" that fully integrates with the latest Synapse Agent Protocol (SAP) v0.7.0+ features, executing a flawless, unsupervised workflow from live data ingestion to multi-modal AI analysis and cryptographic settlement.

**Target Category:** Ace Data Cloud Usage (x402 Facilitator)

## 🚀 Overview

The **Ace Data Cloud x402 Orchestrator** is a production-ready Web3 security node. It dynamically ingests live transaction data, autonomously reasons about its required toolset, generates technical threat models, and pays for its own API usage entirely on-chain without human intervention.

### **The Autonomous Pipeline**

1. **Live Mempool Ingestion**: Captures unpredicted, real-time transaction signatures directly from the Jupiter Aggregator contract on Solana Mainnet.
2. **Deep Security Audit**: Routes the payload through the **Synapse Sentinel** (`Ccr2yK...`) using simulated transaction execution to check for malicious instructions before cognitive processing.
3. **Unsupervised Orchestration**: Utilizes a LangChain `createToolCallingAgent` with zero hardcoded sequences. The AI deduces the dependency graph of its tools purely from their inputs and outputs.
4. **Dynamic Tool Discovery**: Autonomously binds routing vectors via the SAP Discovery Registry.
5. **Multi-Modal AI Execution**:
* **LLM Analysis**: Deep threat modeling via `gpt-4o-mini`.
* **Visualization**: Infographic background generation via `dall-e-3`.
* **RAG Vectorization**: Embedding generation via `text-embedding-3-small`.


6. **Canvas UI Post-Processing**: Programmatically intercepts the DALL-E image and uses the Node Canvas API to "burn" a crisp, professional, and hallucination-free text overlay (Glassmorphism UI) onto the final schematic.
7. **3-Tier Cryptographic Settlement**: Aggressively fights for transaction finality via an exponential backoff loop.

## 🏆 Engineering Highlights ("The Winner's Architecture")

* **True Unsupervised Autonomy:** The agent is not a rigid script. The LangChain prompt contains zero step-by-step instructions. The AI autonomously parallelizes and sequences its tasks.
* **3-Tier x402 Fallback System:** Built to survive hackathon RPC congestion.
1. *Attempt 1:* Escrow V2 Settlement (`escrowV2.settle`) wrapped in a high-speed exponential backoff loop.
2. *Attempt 2:* Reroutes liquidity directly to the Ace Data Cloud x402 Facilitator.
3. *Attempt 3:* Pure Cryptographic Truth. If all layers fail, it throws a fatal error rather than hallucinating a mock success.


* **Memory Leak Eradication:** Employs ultra-short "SUCCESS" tool returns to prevent OpenAI's 64-character `tool_call_id` overflow bug during extended network delays.
* **Flawless Artifact Generation:** Solves the notorious "AI text hallucination" problem by restricting DALL-E 3 to abstract geometric backgrounds, and programmatically drawing a precise, readable HTML-canvas dashboard over it.

## 🛠️ Prerequisites

* **Node.js**: v18.0.0+
* **Solana CLI**: For wallet management.
* **Dependencies**: Native build tools (for `canvas` support).
* **Ace Data Cloud Account**: Sign up at [platform.acedata.cloud](https://platform.acedata.cloud).

## 📦 Installation

1. **Clone & Enter**:
```bash
git clone <your-repo-url>
cd ace-x402-agent

```


2. **Install Dependencies** (Note: `--legacy-peer-deps` is required to bypass LangChain/Dotenv peer conflicts while installing Canvas):
```bash
npm install
npm install canvas --legacy-peer-deps

```



## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
SOLANA_KEYPAIR_PATH=./agent-key.json
ACE_DATA_API_KEY=your_ace_data_key_here
SYNAPSE_RPC_URL=https://staging.oobeprotocol.ai:8080/rpc?api_key=your_synapse_key

```

## 🏃 Usage

### 1. Launch the Dashboard

Start the real-time visualization server (if utilizing the optional UI):

```bash
node server.js

```

Visit `http://localhost:3000` in your browser.

### 2. Run the Autonomous Orchestrator

Execute the high-volume, live-ingestion workflow:

```bash
node workflow.js

```

Check the `runs/` folder to view the highly polished, auto-generated architectural blueprints of the detected threat vectors.

## 📜 License

Licensed under the **ISC License**.

## 📧 Contact

Built for the **Build Autonomous Agents. Get Paid.** Solana Bounty.
Tag `@OOBEonSol` and `@AceDataCloud` on X.