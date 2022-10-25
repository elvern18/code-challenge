pragma solidity ^0.8.3;

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalances {

    struct TokenAmount {
        address token;
        uint256 balance;
    }

    function getBalances(address walletAddress, address[] memory tokenAddresses) public view returns (TokenAmount[] memory) {
        TokenAmount[] memory tokenAmounts;
        for (uint64 i = 0; i < tokenAddresses.length; i++) {
            address token = tokenAddresses[i];
            uint256 balance = ERC20(token).balanceOf(walletAddress);
            TokenAmount memory tokenAmount = TokenAmount(token, balance);
            tokenAmounts[i] = tokenAmount; 
        }
        return tokenAmounts;
    }
}