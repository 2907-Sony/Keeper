# dKeeper — Decentralized Notes Keeper

dKeeper is a decentralized note-keeping application built on the Internet Computer Protocol (ICP).
It allows users to create, store, and manage personal notes securely using smart contracts (canisters), without relying on centralized servers.

-- Note:This project is built for learning and portfolio purposes and is not deployed to the ICP mainnet.

# Features

--Create and delete notes securely
--Data stored on-chain using Motoko canisters
--Fully decentralized backend (no traditional database)
--Responsive and minimal UI
--Frontend ↔ backend communication via Candid

# Tech Stack

--Internet Computer (ICP)
--Motoko — Backend smart contract
--DFX SDK
--React
--JavaScript
--CSS
--Candid — Interface definition language

# Project Structure

dKeeper/src/ dKeeper_backend/ dKeeper_frontend/  
|
dfx.json
|
package.json
|
README.md
---

# Run Locally

 ```bash
dfx start --background
dfx deploy
http://localhost:4943/?canisterId=<asset_canister_id>
