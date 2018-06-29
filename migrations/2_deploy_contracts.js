const DummyFactory = artifacts.require("./DummyFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(DummyFactory);
};
