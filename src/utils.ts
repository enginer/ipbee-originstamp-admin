import {Web3Provider} from "@ethersproject/providers";
import {Originstamp} from "./contracts/originstamp";
import {OriginstampAbi} from "./OriginstampAbi";
import {Contract} from "@ethersproject/contracts";

export const contractAddress = '0x3aE064c3c15254e5669270069Ca40055D1050561' //'0x3a60d9d5f70ad0b56d602e71fc1653d11fce5d89'
let _contract: Originstamp

export async function getContract(library: Web3Provider): Promise<Originstamp> {
    if (!_contract) {
        const contract = new Contract(
            contractAddress,
            OriginstampAbi.abi,
            library.getSigner()
        )
        await contract.deployed()
        _contract = contract as unknown as Originstamp
    }
    return _contract
}

export const defaultConfig = { gasLimit: 500000 }

export const add0x = (hash) => {
    if (!hash) return hash

    return "0x" + hash.replace("0x", "")
}

export const handleTransactionError = (e) => {
    alert('Transaction Failed!\nUse "Open Last Transaction" link for error details')
}
