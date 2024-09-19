# Hardhat Project For Verify Smart Contract

For better understanding :- https://medium.com/@im-shubh/verify-smart-contract-on-etherscan-using-hardhat-ed40913d643e

Set your .env File with below details

INFURA_API_KEY = YOUR_INFURA_API_KEY

GOERLI_PRIVATE_KEY= YOUR_GOERLI_PRIVATE_KEY

ETHERSCAN_API_KEY = YOUR_ETHERSCAN_API_KEY

Try running some of the following tasks:

```shell
npm install
npx hardhat help
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js
```

# If got Error like

NomicLabsHardhatPluginError: Failed to send contract verification request.
Endpoint URL: https://api-goerli.etherscan.io/api
Reason: The Etherscan API responded that the address 0x2157ECA1D4445390adA86281bCA642aAEA7E1FA2 does not have bytecode.
This can happen if the contract was recently deployed and this fact hasn't propagated to the backend yet.

It means your contract just deployed and not render on etherscan that's why it's bytecode note enable so you can simply run

```shell
npx hardhat verify --network <NETWORK> <YOUR_CONTRACT_ADDRESS> <YOUR_CUNSTRUCTOR_ARGUMENTS>

```
Using above command you can verify your contract after deploy the contract.

# If you already deployed contract than simply run below command 

```shell
npx hardhat verify --network <NETWORK> <YOUR_CONTRACT_ADDRESS> <YOUR_CUNSTRUCTOR_ARGUMENTS>

```
