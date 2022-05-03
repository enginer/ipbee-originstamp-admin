import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {getContract} from "../utils";

export function CheckDocument() {
    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)
    const [hash, setHash] = useState('')
    const [registeredAt, setRegisteredAt] = useState('Undefined')
    const [validUntil, setValidUntil] = useState('Undefined')
    const [newVersion, setNewVersion] = useState('Undefined')

    function checkBtn() {
        getContract(library).then( async (contract) => {
            if (!hash) return
            setLoading(true)
            try {
                const registrationTimestamp = await contract.docRegistrationTime(hash)
                setRegisteredAt(registrationTimestamp.isZero() ? 'Undefined' : new Date(registrationTimestamp.toNumber() * 1000).toLocaleString())
                const validUntilTimestamp = await contract.validUntil(hash)
                setValidUntil(validUntilTimestamp.isZero() ? 'Undefined' : new Date(validUntilTimestamp.toNumber() * 1000).toLocaleString())
                const newVersionRaw = await contract.newVersions(hash);
                setNewVersion(Number(newVersionRaw) ? newVersionRaw : 'No')
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        })
    }

    return (
        <div className={'check'}>
            <h3>check document</h3>
            <div className={'check-form'}>
                <input className={'check-input'} type="text" placeholder={'hash'} name={'hash'} required
                       onChange={(event) => setHash(event.target.value)}/>
                { loading ? ('Loading...') : (<button className={'check-btn btn'} onClick={checkBtn} type={'submit'}>check</button>)}
            </div>
            <div className={'check-info'}>
                <p className={'check-info-one'}>registered at<span className={'check-info-one-span'}>{registeredAt}</span></p>
                <p className={'check-info-one check-info-second'}>valid until<span
                    className={'check-info-two-span'}>{validUntil}</span></p>
                <p className={'check-info-one'}>new version<span
                    className={'check-info-three-span'}>{newVersion}</span></p>
            </div>
        </div>
    )
}
