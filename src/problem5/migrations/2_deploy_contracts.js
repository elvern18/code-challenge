var HelloWorld = artifacts.require("HelloWorld");
var TokenBalances = artifacts.require("TokenBalances");

module.exports = function(deployer) {
  deployer.deploy(TokenBalances);
};