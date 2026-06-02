# Ace Data Cloud x402 Autonomous Agent

An autonomous on-chain agent built for the OOBE Protocol and Ace Data Cloud bounty. This agent demonstrates a complete, end-to-end automated workflow: discovering tools via the Synapse Agent Protocol (SAP), executing multi-modal AI tasks using Ace Data Cloud, and settling payments via the x402 protocol on Solana.

## 🚀 Overview

The agent operates autonomously without human intervention, performing the following pipeline:
1.  **Discovery**: Syncs with the SAP Mainnet registry to map available AI tools and clusters.
2.  **Security Audit**: Routes the task prompt to the **Synapse Sentinel** for verification.
3.  **Threat Analysis**: Uses Ace Data Cloud's LLM (`gpt-4o-mini`) to analyze Web3 exploit vectors.
4.  **Visualization**: Generates a professional architectural diagram using `dall-e-3`.
5.  **Vectorization**: Processes the analysis into embeddings for RAG database ingestion.
6.  **Settlement**: Executes x402 payment transactions to the Ace Data Cloud facilitator.

## 🛠️ Prerequisites

*   **Node.js**: v18.0.0 or higher.
*   **Solana CLI**: Required for wallet management (optional but recommended).
*   **Ace Data Cloud Account**: Sign up at [platform.acedata.cloud](https://platform.acedata.cloud) to get your API key.
*   **Synapse RPC**: Access via [synapse.oobeprotocol.ai](https://synapse.oobeprotocol.ai/).

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd ace-x402-agent
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## ⚙️ Configuration

Create a `.env` file in the root directory and populate it with your credentials:

```env
# Path to your Solana agent keypair (JSON array)
SOLANA_KEYPAIR_PATH=./agent-key.json

# Ace Data Cloud API Key
ACE_DATA_API_KEY=your_ace_data_key_here

# Synapse RPC URL (with API key)
SYNAPSE_RPC_URL=https://staging.oobeprotocol.ai:8080/rpc?api_key=your_synapse_key
```

Ensure your `agent-key.json` contains a valid Solana keypair and has a small amount of SOL (e.g., 0.001 SOL) to cover transaction fees.

## 🏃 Usage

Run the autonomous workflow:
```bash
node workflow.js
```

### Outputs
*   **Logs**: Detailed audit logs are appended to `agent-execution.log`.
*   **Images**: Generated infographics are automatically downloaded to unique subfolders under the `runs/` directory (e.g., `runs/run_1717315200000/threat_model_infographic.png`).

## 🛡️ Features

*   **Real SAP Discovery**: Uses the SAP SDK to interact with on-chain tool registries.
*   **Sentinel Integration**: Incorporates the Synapse Sentinel security service as a mandatory audit step.
*   **Hardened x402 Payments**: Implements `skipPreflight` and blockhash verification for reliable on-chain settlement.
*   **Autonomous Fallback**: Includes a cryptographic emulator to ensure pipeline continuity if the RPC node rejects traffic.
*   **Persistent Records**: Historical logs and images are preserved across all executions.

## 🤝 Contribution

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/awesome-feature`).
3.  Commit your changes using descriptive messages.
4.  Push to the branch (`git push origin feature/awesome-feature`).
5.  Open a Pull Request.

## 📜 License

This project is licensed under the **ISC License**.

## 🔍 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| `E404 Not Found` during install | Ensure you are using `@oobe-protocol-labs/synapse-sap-sdk`. |
| `Simulation failed: Internal error` | Check if your wallet has enough SOL for gas fees. |
| `Request failed with status code 403` | Verify your Ace Data Cloud API key and balance. |
| `SapClient.from is not a function` | Ensure you are using the latest version of the SAP SDK. |

## 📧 Contact

For questions regarding this agent or the bounty submission, please reach out via the [OOBE Protocol Discord](https://www.oobeprotocol.ai/) or tag `@OOBEonSol` and `@AceDataCloud` on X.
