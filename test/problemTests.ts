import { BigNumber } from "bignumber.js";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";
import moment from "moment";
import { DummyFactoryContract } from "../types/generated_wrappers/dummy_factory";

const { assert, expect } = chai;
chai.use(chaiAsPromised);

contract("Dummy", (accounts: string[]) => {
  const CONTRACT_OWNER = accounts[0];
  const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

  describe("#test", () => {
    let dummyFactoryWrapper: DummyFactoryContract;

    before("set up contracts", async () => {
      const dummyFactory = await artifacts.require("DummyFactory").deployed();
      dummyFactoryWrapper = await DummyFactoryContract.at(
        dummyFactory.address,
        web3.currentProvider,
        TX_DEFAULTS
      );
      const z = await dummyFactoryWrapper.newDummy.sendTransactionAsync(
        accounts[0],
        accounts[1],
        [accounts[2], accounts[3]],
        [new BigNumber(50), new BigNumber(50)],
        new BigNumber(
          moment()
            .add(8, "week")
            .unix()
        )
      );
      await dummyFactoryWrapper
      console.log(z)

      // const dummyFactoryAbi = DummyFactoryContract.
      // const dummyFactoryInstance = await dummyFactory.deploy

      // dummyFactory.deploy()
      // const factory = await artifacts.require("DummyFactory").deployed();

      // factoryWrapper = await DummyFactory.createAndValidate(
      //   web3,
      //   factory.address
      // );

      // const tx = factoryWrapper.newDummyTx(
      //   accounts[0],
      //   accounts[1],
      //   [accounts[2], accounts[3]],
      //   [new BigNumber(50), new BigNumber(50)],
      //   moment()
      //     .add(8, "week")
      //     .unix()
      // );

      // console.log(await factory.newDummy(
      //   accounts[0],
      //   accounts[1],
      //   [accounts[2], accounts[3]],
      //   [new BigNumber(50), new BigNumber(50)],
      //   moment()
      //     .add(8, "week")
      //     .unix()
      // ));

      // await tx.send({ from: accounts[0] });
    });

    it("compiles", async () => {
      assert.equal(true, true);
    });
  });
});
