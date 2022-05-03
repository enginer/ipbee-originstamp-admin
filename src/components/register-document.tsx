import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {defaultConfig, getContract, handleTransactionError} from "../utils";

export function RegisterDocument() {
    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)
    const [hash, setHash] = useState('')
    const [date, setDate] = useState('')
    const [tx, setTx] = useState('')

    function registerHandler() {
        if (!hash) return
        setTx('')
        getContract(library).then( async (contract) => {
            setLoading(true)
            try {
                const unixTimestamp = date ? Math.floor(new Date(date).getTime() / 1000) : 0
                const tx = await contract.register(hash, unixTimestamp, defaultConfig)
                setTx(tx.hash)
                await tx.wait()
            } catch (e) {
                handleTransactionError(e)
            }
            setLoading(false)
        })
    }


    return (
        <div className={'register section'}>
            <h3 className={'register-title'}>registrate new document</h3>
            <div className="register-form">
                <input className={'register-input-one'} type="text" placeholder={'hash'} name={'hash'} required
                       onChange={(event) => setHash(event.target.value)}/>
                <div className={'register-form-input-two'}>
                    <input className={'register-input-two'} type="date" placeholder={'valid until'}
                           onChange={(event) => setDate(event.target.value)}/>
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
