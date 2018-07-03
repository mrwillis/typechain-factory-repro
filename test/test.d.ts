import * as Web3 from "web3";

declare type ContractTest = (accounts: string[]) => void;

interface Artifacts {
    require(name: string): Web3.ContractInstance;
}

declare global {
    function contract(name: string, test: ContractTest): void;

    var artifacts: Artifacts;
    var web3: Web3;

    var chaiIsConfigured: boolean;
}
