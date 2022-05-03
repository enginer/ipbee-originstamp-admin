import React, {useState} from "react";
import {defaultConfig, getContract} from "../utils";
import {useWeb3React} from "@web3-react/core";

export function TransferOwnership() {
    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)
    const [hash, setHash] = useState('')

    function transferHandler() {
        if (!hash) return
        getContract(library).then( async (contract) => {
            setLoading(true)
            try {
                const tx = await contract.transferOwnership(hash, defaultConfig)
                await tx.wait()
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        })
    }

    return (
        <div className={'transfer section'}>
            <h3 className={'transfer-title'}>transfer ownership</h3>
            <div className="transfer-form">
                <input className={'transfer-input'} placeholder={'new owner address'} type="text" required
                       name={'new-own-address'} onChange={(event) => setHash(event.target.value)}/>
                { loading ? ('Loading...') : (
                    <a className={'transfer-btn btn'} onClick={transferHandler}>transfer</a>
                )}
            </div>
        </div>
    )
}
