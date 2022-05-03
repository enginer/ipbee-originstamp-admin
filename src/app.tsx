import React, {useEffect, useState} from "react";
import {TransferOwnership} from "./components/transfer-ownership";
import {BulkRegisterDocuments} from "./components/bulk-register-documents";
import {CheckDocument} from "./components/check-document";
import {RegisterDocument} from "./components/register-document";
import {RegisterNewVersion} from "./components/register-new-version";
import {UnsupportedChainIdError, useWeb3React} from "@web3-react/core";
import {currentChainId, injected, polygonChainId} from "./index";
import {UserRejectedRequestError} from "@web3-react/injected-connector";
import Web3 from "web3";

import './css/main.css'
import {contractAddress, getContract} from "./utils";
import { BulkRegisterNewVersions } from "./components/bulk-register-new-versions";

interface AddEthereumChainParameter {
    chainId: string; // A 0x-prefixed hexadecimal string
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string; // 2-6 characters long
        decimals: 18;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[]; // Currently ignored.
}

export const App: React.FC = () => {
    const { active, account, library, connector, activate, setError, deactivate } = useWeb3React()
    const [owner, setOwner] = useState('')

    const changeNetwork = async () => {
        let ethereum = window['ethereum'];
        if (ethereum) {
            const chainIdHex = Web3.utils.toHex(polygonChainId)
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: chainIdHex}]
                })
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: chainIdHex,
                                chainName: 'Polygon Mainnet',
                                nativeCurrency: {
                                    name: 'MATIC',
                                    symbol: 'MATIC',
                                    decimals: 18
                                },
                                rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
                                blockExplorerUrls: ['https://polygonscan.com']
                            } as AddEthereumChainParameter],
                        });
                    } catch (addError) {
                        console.error(addError)
                    }
                }
            }
        } else {
            console.error('No ethereum');
        }
    }

    useEffect(() => {
        activate(injected,async (error) => {
            if (error instanceof UnsupportedChainIdError) {
                await changeNetwork()
            }
            else if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
            } else {
                setError(error)
            }
        }, false)
    }, [])

    if (account && !owner) {
        getContract(library).then( async (contract) => {
            setOwner(await contract.owner())
        })

    }

    return (
        <div className={'container'}>
            { account && <div className="address">Connected to { owner === account && <strong>Owner </strong>}<div><a href={`https://polygonscan.com/address/${account}`} target='_blank'>{account}</a></div></div>}
            <CheckDocument />
            <RegisterDocument />
            <RegisterNewVersion />
            <BulkRegisterDocuments />
            <BulkRegisterNewVersions />
            <TransferOwnership />
            <div className='bottom'>Smart Contract Address: <a href={`https://polygonscan.com/address/${contractAddress}`} target='_blank'>{contractAddress}</a></div>
        </div>
    )
}
