import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {defaultConfig, getContract} from "../utils";
import {BigNumber} from "ethers";

interface DocumentItem {
    hash: string,
    date?: string
}

export function BulkRegisterDocuments() {
    const emptyObject: DocumentItem = { hash: '', date: ''}
    const [items, setItems] = useState<Partial<DocumentItem>[]>([emptyObject])

    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)

    function registerHandler() {
        getContract(library).then( async (contract) => {
            setLoading(true)
            try {
                const hashes = items.map( item => item.hash)
                const dates = items.map( item => {
                    return item.date ? Math.floor(new Date(item.date).getTime() / 1000) : 0
                })
                const tx = await contract.registerMultiply(hashes, dates, defaultConfig)
                console.log(`https://polygonscan.com/tx/${tx.hash}`)
                await tx.wait()
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        })
    }

    const setHash = (index, value) => {
        const updated = [...items]
        updated[index].hash = value
        setItems(updated)
    }
    const setDate = (index, value) => {
        const updated = [...items]
        updated[index].date = value.replaceAll(".", "-")
        setItems(updated)
    }
    return (
        <div className={'bulk section'}>
            <h3 className={'bulk-title'}>registrate bulk of documents</h3>
            <div className={'bulk-form'}>
                {items.map((item, index) => (
                    <div>
                        <div className={'second-container-bulk'}>
                            <input className={'bulk-input-one'} type="text"
                                   required placeholder={'hash'} name={'hash'}
                                   value={item.hash}
                                   onChange={(event) => setHash(index, event.target.value)}/>
                            <div className="bulk-until">
                                <input className={'bulk-input-two'} type="date" placeholder={'valid until'}
                                       name={'valid-until'}
                                       value={item.date}
                                       onChange={(event) => setDate(index, event.target.value.replace("-", ".").replace("-", "."))}/>
                            </div>
                            {index === items.length - 1 &&
                                <a className={'bulk-form-plus'} onClick={() => setItems([...items, emptyObject])}>+</a>
                            }
                        </div>
                    </div>
                ))}
                <div className={'bulk-form-btn-container'} style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px'}}>
                    { loading ? ('Loading...') : (
                        <button className={'btn register-btn'} onClick={registerHandler} type={'submit'}>register all at once</button>
                    )}
                    <button className={'btn clear-btn'} onClick={() => setItems([emptyObject])} style={{marginLeft: '20px'}}>clear</button>
                </div>
            </div>
        </div>
    )
}
