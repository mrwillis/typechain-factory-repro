import { BigNumber } from "bignumber.js";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";
import moment from "moment";
import { DummyFactoryContract } from "../types/generated_wrappers/dummy_factory";
import { Web3Wrapper } from "@0xproject/web3-wrapper";
import abiDecoder from 'abi-decoder';

const { assert, expect } = chai;
chai.use(chaiAsPromised);

contract("Dummy", (accounts: string[]) => {
  const CONTRACT_OWNER = accounts[0];
  const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };
  const web3wrapper: Web3Wrapper = new Web3Wrapper(
    web3.currentProvider,
    TX_DEFAULTS
  );

  describe("#test", () => {
    let dummyFactoryWrapper: DummyFactoryContract;

    before("set up contracts", async () => {
      const dummyFactory = await artifacts.require("DummyFactory").deployed();
      dummyFactoryWrapper = await DummyFactoryContract.at(
        dummyFactory.address,
        web3.currentProvider,
        TX_DEFAULTS
      );
      abiDecoder.addABI(dummyFactoryWrapper.abi)
      const newDummyTx = await dummyFactoryWrapper.newDummy.sendTransactionAsync(
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

      const newDummyReceipt = await web3wrapper.awaitTransactionMinedAsync(newDummyTx);

      abiDecoder.decodeLogs(newDummyReceipt.logs).forEach(z => console.log(z.events));

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

    after("clean up", async () => {
      abiDecoder.removeABI(dummyFactoryWrapper.abi);
    })

    it("compiles", async () => {
      assert.equal(true, true);
    });
  });
});
