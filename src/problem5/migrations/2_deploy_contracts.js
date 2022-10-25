var TokenBalances = artifacts.require("TokenBalances");

module.exports = function(deployer) {
  deployer.deploy(TokenBalances);
};