import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {defaultConfig, getContract} from "../utils";

interface NewVersionItem {
    oldHash: string,
    newHash: string,
    date?: string
}

export function BulkRegisterNewVersions() {
    const emptyObject: NewVersionItem = { oldHash: '', newHash: '', date: ''}
    const [items, setItems] = useState<Partial<NewVersionItem>[]>([emptyObject])

    const { library } = useWeb3React()
    const [loading, setLoading] = useState(false)

    function registerHandler() {
        getContract(library).then( async (contract) => {
            setLoading(true)
            try {
                const oldHashes = items.map( item => item.oldHash)
                const newHashes = items.map( item => item.newHash)
                const dates = items.map( item => {
                    return item.date ? Math.floor(new Date(item.date).getTime() / 1000) : 0
                })
                const tx = await contract.registerNewVersionMultiply(newHashes, oldHashes, dates, defaultConfig)
                console.log(`https://polygonscan.com/tx/${tx.hash}`)
                await tx.wait()
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        })
    }

    const setOldHash = (index, value) => {
        const updated = [...items]
        updated[index].oldHash = value
        setItems(updated)
    }
    const setNewHash = (index, value) => {
        const updated = [...items]
        updated[index].newHash = value
        setItems(updated)
    }
    const setDate = (index, value) => {
        const updated = [...items]
        updated[index].date = value.replaceAll(".", "-")
        setItems(updated)
    }
    return (
        <div className={'new-versions section'}>
            <h3 className={'new-versions-title'}>registrate bulk of new versions of documents</h3>
            {items.map((item, index) => (
                <div className="new-versions-form">
                    <input className={'new-versions-input-old'} type="text" placeholder={'old document hash'} required
                           name={'old hash'}
                           onChange={(event) => setOldHash(index, event.target.value)}/>
                    <input className={'new-versions-input-new'} type="text" placeholder={'new document hash'} required
                           name={'new hash'}
                           onChange={(event) => setNewHash(index, event.target.value)}/>
                    <input className={'new-versions-until-input'} type="date" placeholder={'valid until'}
                           name={'valid-until'}
                           onChange={(event) => setDate(index, event.target.value)}/>
                    {index === items.length - 1 &&
                        <a className={'new-versions-form-plus'} onClick={() => setItems([...items, emptyObject])}>+</a>
                    }
                </div>
            ))}

            <div className={'bulk-form-btn-container'} style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px'}}>
                { loading ? ('Loading...') : (
                    <button className={'btn register-btn'} onClick={registerHandler} type={'submit'}>register all at once</button>
                )}
                <button className={'btn clear-btn'} onClick={() => setItems([emptyObject])} style={{marginLeft: '20px'}}>clear</button>
            </div>
        </div>
    )
}
