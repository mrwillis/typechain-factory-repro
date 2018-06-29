import { BigNumber } from "bignumber.js";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";
import moment from "moment";
import Web3 from "web3";
import { DummyFactory } from "../generated_wrappers/DummyFactory";

const { assert, expect } = chai;
chai.use(chaiAsPromised);

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

contract("Dummy", (accounts: string[]) => {
  describe("#test", () => {
    let factoryWrapper: DummyFactory;

    before("set up contracts", async () => {
      const factory = await artifacts.require("DummyFactory").deployed();

      factoryWrapper = await DummyFactory.createAndValidate(
        web3,
        factory.address
      );

      const tx = factoryWrapper.newDummyTx(
        accounts[0],
        accounts[1],
        [accounts[2], accounts[3]],
        [new BigNumber(50), new BigNumber(50)],
        moment()
          .add(8, "week")
          .unix()
      );

      await tx.send({ from: accounts[0] });
    });

    it("compiles", async () => {
      assert.equal(true,true)
    })
  });
});
