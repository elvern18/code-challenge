const { ethers } = require("ethers");

const addresses : string[] = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
"0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
"0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"]

const tokenAddress : string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b71142a1330940d09175623b410f99bd");

const ABI: string[] = [
    "function balanceOf(address account) view returns (uint)"
  ];

const contract = new ethers.Contract(tokenAddress, ABI, provider);


const main = async () => {
    for (const address of addresses) {
        const balance: BigInt = await contract.balanceOf(address);
        console.log(address + " " + balance);
    }
}

main();
