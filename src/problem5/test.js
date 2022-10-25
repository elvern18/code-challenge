const { ethers } = require("ethers");
const TokenBalances = require("./build/contracts/TokenBalances.json");
// const TokenBalances = artifacts.require('./contracts/TokenBalances.sol');
// contract('FundRaise', function() {
	
// });


const ADDR = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";   // your contract address
const ABI = [
    "function balanceOf(address account) view returns (uint256)"
  ];;    // your contract ABI

const ADDRESS = "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x123d475e13aa54a43a7421d94caa4459da021c77",
	"0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("ropsten");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);

// not sure how to use getBalances method in contract.