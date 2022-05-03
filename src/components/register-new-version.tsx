import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {defaultConfig, getContract, handleTransactionError} from "../utils";
import {BigNumber} from "ethers";

export function RegisterNewVersion() {
    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)
    const [oldHash, setOldHash] = useState('')
    const [newHash, setNewHash] = useState('')
    const [date, setDate] = useState('')
    const [tx, setTx] = useState('')

    function registerHandler() {
        if (!oldHash || !newHash) return
        getContract(library).then( async (contract) => {
            setLoading(true)
            try {
                const unixTimestamp = date ? Math.floor(new Date(date).getTime() / 1000) : 0
                const tx = await contract.registerNewVersion(newHash, oldHash, unixTimestamp, defaultConfig)
                setTx(tx.hash)
                await tx.wait()
            } catch (e) {
                handleTransactionError(e)
            }
            setLoading(false)
        })
    }

    return (
        <div className={'version section'}>
            <h3 className={'version-title'}>registrate new version of document</h3>
            <div className={'version-form'}>
                <div className={'version-form-container'}>
                    <input className={'version-input-old'} type="text" placeholder={'old document hash'} required
                           name={'old hash'} onChange={(event) => setOldHash(event.target.value)}/>
                    <input className={'version-input-new'} type="text" placeholder={'new document hash'} required
                           name={'old hash'} onChange={(event) => setNewHash(event.target.value)}/>
                </div>
                <div className="version-until">
                    <input className={'version-until-input'} type="date" placeholder={'valid until'}
                           name={'valid-until'}
                           onChange={(event) => setDate(event.target.value.replace("-", ".").replace("-", "."))}/>
                </div>
                { loading ? ('Loading...') : (
                    <button className={'btn register-btn'} onClick={registerHandler} type={'submit'}>register</button>
                )}
            </div>
            {tx && <div className='tx-link'>
                <a target='_blank' href={`https://polygonscan.com/tx/${tx}`}>Open Last Transaction</a>
            </div>}
        </div>
    )
}
