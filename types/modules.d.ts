declare module "abi-decoder" {
    import * as Web3 from "web3";
    import { AbiDefinition, LogEntry } from "@0xproject/types";

    interface DecodedLog {
        name: string;
        events: DecodedMethodParam[];
        address: string;
    }

    interface DecodedMethodParam {
        name: string;
        value: string | boolean;
        type: string;
    }

    interface DecodedMethod {
        name: string;
        params: DecodedMethodParam[];
    }

    export function addABI(abi: AbiDefinition[]): void;
    export function removeABI(abi: AbiDefinition[]): void;
    export function decodeLogs(logs: LogEntry[]): DecodedLog[];
    export function decodeMethod(data: string): DecodedMethod;
}