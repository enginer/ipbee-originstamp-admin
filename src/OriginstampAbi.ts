export const OriginstampAbi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Originstamp",
    "sourceName": "contracts/Originstamp.sol",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newDocHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "expiredDocHash",
                    "type": "bytes32"
                }
            ],
            "name": "NewVersionRegistered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "docHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "validUntil",
                    "type": "uint256"
                }
            ],
            "name": "Registered",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "docRegistrationTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "newVersions",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_docHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_validUntil",
                    "type": "uint256"
                }
            ],
            "name": "register",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "_docHashes",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_validUntil",
                    "type": "uint256[]"
                }
            ],
            "name": "registerMultiply",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_newDocHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_expiredDocHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_newDocValidUntil",
                    "type": "uint256"
                }
            ],
            "name": "registerNewVersion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "_newDocHashes",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "_expiredDocHashes",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_newDocValidUntil",
                    "type": "uint256[]"
                }
            ],
            "name": "registerNewVersionMultiply",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "validUntil",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611445806100606000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063ad49536911610066578063ad4953691461011e578063bc58e65d1461014e578063d53fcbec1461016a578063f2fde38b1461019a578063ff3617f8146101b657610093565b806305c3480b146100985780630d49e76c146100c8578063283bec10146100e45780638da5cb5b14610100575b600080fd5b6100b260048036038101906100ad9190610c33565b6101d2565b6040516100bf9190610ff4565b60405180910390f35b6100e260048036038101906100dd9190610bb2565b6101ea565b005b6100fe60048036038101906100f99190610afe565b610324565b005b6101086104c2565b6040516101159190610e7e565b60405180910390f35b61013860048036038101906101339190610c33565b6104e6565b6040516101459190610e99565b60405180910390f35b61016860048036038101906101639190610c60565b6104fe565b005b610184600480360381019061017f9190610c33565b6106f5565b6040516101919190610ff4565b60405180910390f35b6101b460048036038101906101af9190610ad1565b61070d565b005b6101d060048036038101906101cb9190610cb3565b61084e565b005b60016020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610278576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026f90610eb4565b60405180910390fd5b8181905084849050146102c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b790610f14565b60405180910390fd5b60005b8484905081101561031d5761030a8585838181106102e4576102e36110de565b5b905060200201358484848181106102fe576102fd6110de565b5b9050602002013561084e565b808061031590611066565b9150506102c3565b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990610eb4565b60405180910390fd5b8383905086869050146103fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f190610f54565b60405180910390fd5b818190508686905014610442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043990610f74565b60405180910390fd5b60005b868690508110156104b9576104a6878783818110610466576104656110de565b5b905060200201358686848181106104805761047f6110de565b5b9050602002013585858581811061049a576104996110de565b5b905060200201356104fe565b80806104b190611066565b915050610445565b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058390610eb4565b60405180910390fd5b600060016000858152602001908152602001600020549050600081146105e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105de90610f94565b60405180910390fd5b60006001600085815260200190815260200160002054905060008111610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063990610f34565b60405180910390fd5b6000600360008681526020019081526020016000205490506000811461069d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069490610fd4565b60405180910390fd5b6106a7868561084e565b85600360008781526020019081526020016000208190555084867fb5dac8ad49578955a20b2a5179573fe2be183efb3659e0daded600bd59b3975e60405160405180910390a3505050505050565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461079b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079290610eb4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290610ef4565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390610eb4565b60405180910390fd5b60006001600084815260200190815260200160002054905060008114610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092e90610ed4565b60405180910390fd5b600082111561099b57428211610982576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097990610fb4565b60405180910390fd5b8160026000858152602001908152602001600020819055505b42600160008581526020019081526020016000208190555081837fc8704a622f3eb8c9fc5a2ddf1775b5ea7695359b13dec8111874e266a4d5fbc960405160405180910390a3505050565b6000813590506109f5816113ca565b92915050565b60008083601f840112610a1157610a10611112565b5b8235905067ffffffffffffffff811115610a2e57610a2d61110d565b5b602083019150836020820283011115610a4a57610a49611117565b5b9250929050565b60008083601f840112610a6757610a66611112565b5b8235905067ffffffffffffffff811115610a8457610a8361110d565b5b602083019150836020820283011115610aa057610a9f611117565b5b9250929050565b600081359050610ab6816113e1565b92915050565b600081359050610acb816113f8565b92915050565b600060208284031215610ae757610ae6611121565b5b6000610af5848285016109e6565b91505092915050565b60008060008060008060608789031215610b1b57610b1a611121565b5b600087013567ffffffffffffffff811115610b3957610b3861111c565b5b610b4589828a016109fb565b9650965050602087013567ffffffffffffffff811115610b6857610b6761111c565b5b610b7489828a016109fb565b9450945050604087013567ffffffffffffffff811115610b9757610b9661111c565b5b610ba389828a01610a51565b92509250509295509295509295565b60008060008060408587031215610bcc57610bcb611121565b5b600085013567ffffffffffffffff811115610bea57610be961111c565b5b610bf6878288016109fb565b9450945050602085013567ffffffffffffffff811115610c1957610c1861111c565b5b610c2587828801610a51565b925092505092959194509250565b600060208284031215610c4957610c48611121565b5b6000610c5784828501610aa7565b91505092915050565b600080600060608486031215610c7957610c78611121565b5b6000610c8786828701610aa7565b9350506020610c9886828701610aa7565b9250506040610ca986828701610abc565b9150509250925092565b60008060408385031215610cca57610cc9611121565b5b6000610cd885828601610aa7565b9250506020610ce985828601610abc565b9150509250929050565b610cfc81611020565b82525050565b610d0b81611032565b82525050565b6000610d1e60158361100f565b9150610d2982611126565b602082019050919050565b6000610d4160208361100f565b9150610d4c8261114f565b602082019050919050565b6000610d64601d8361100f565b9150610d6f82611178565b602082019050919050565b6000610d87603c8361100f565b9150610d92826111a1565b604082019050919050565b6000610daa60298361100f565b9150610db5826111f0565b604082019050919050565b6000610dcd604b8361100f565b9150610dd88261123f565b606082019050919050565b6000610df060408361100f565b9150610dfb826112b4565b604082019050919050565b6000610e1360248361100f565b9150610e1e82611303565b604082019050919050565b6000610e36601f8361100f565b9150610e4182611352565b602082019050919050565b6000610e5960338361100f565b9150610e648261137b565b604082019050919050565b610e788161105c565b82525050565b6000602082019050610e936000830184610cf3565b92915050565b6000602082019050610eae6000830184610d02565b92915050565b60006020820190508181036000830152610ecd81610d11565b9050919050565b60006020820190508181036000830152610eed81610d34565b9050919050565b60006020820190508181036000830152610f0d81610d57565b9050919050565b60006020820190508181036000830152610f2d81610d7a565b9050919050565b60006020820190508181036000830152610f4d81610d9d565b9050919050565b60006020820190508181036000830152610f6d81610dc0565b9050919050565b60006020820190508181036000830152610f8d81610de3565b9050919050565b60006020820190508181036000830152610fad81610e06565b9050919050565b60006020820190508181036000830152610fcd81610e29565b9050919050565b60006020820190508181036000830152610fed81610e4c565b9050919050565b60006020820190506110096000830184610e6f565b92915050565b600082825260208201905092915050565b600061102b8261103c565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110718261105c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110a4576110a36110af565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b7f53656e646572206e6f7420617574686f72697a65640000000000000000000000600082015250565b7f446f63756d656e74206861736820616c72656164792072656769737465726564600082015250565b7f4e6577206f776e657220697320746865207a65726f2061646472657373000000600082015250565b7f446f63756d656e74732068617368206c69737420616e642076616c696420756e60008201527f74696c206c6973742073686f756c642062652073616d652073697a6500000000602082015250565b7f4578706972656420646f63756d656e7420686173682077657265206e6f74207260008201527f6567697374657265640000000000000000000000000000000000000000000000602082015250565b7f4e657720646f63756d656e74732068617368206c69737420616e64206578706960008201527f72656420646f63756d656e74732068617368206c6973742073686f756c64206260208201527f652073616d652073697a65000000000000000000000000000000000000000000604082015250565b7f4e657720646f63756d656e74732068617368206c69737420616e642076616c6960008201527f6420756e74696c206c6973742073686f756c642062652073616d652073697a65602082015250565b7f4e657720646f63756d656e74206861736820616c72656164792072656769737460008201527f6572656400000000000000000000000000000000000000000000000000000000602082015250565b7f56616c696420756e74696c2073686f756c6420626520696e2066757475726500600082015250565b7f4578706972656420646f63756d656e7420616c726561647920686173206e657760008201527f2076657273696f6e207265676973746572656400000000000000000000000000602082015250565b6113d381611020565b81146113de57600080fd5b50565b6113ea81611032565b81146113f557600080fd5b50565b6114018161105c565b811461140c57600080fd5b5056fea2646970667358221220ab75096a7fc82af4822fc18e4da7edc25681084f06a4ff128d8d1c1ef1a31c0464736f6c63430008070033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063ad49536911610066578063ad4953691461011e578063bc58e65d1461014e578063d53fcbec1461016a578063f2fde38b1461019a578063ff3617f8146101b657610093565b806305c3480b146100985780630d49e76c146100c8578063283bec10146100e45780638da5cb5b14610100575b600080fd5b6100b260048036038101906100ad9190610c33565b6101d2565b6040516100bf9190610ff4565b60405180910390f35b6100e260048036038101906100dd9190610bb2565b6101ea565b005b6100fe60048036038101906100f99190610afe565b610324565b005b6101086104c2565b6040516101159190610e7e565b60405180910390f35b61013860048036038101906101339190610c33565b6104e6565b6040516101459190610e99565b60405180910390f35b61016860048036038101906101639190610c60565b6104fe565b005b610184600480360381019061017f9190610c33565b6106f5565b6040516101919190610ff4565b60405180910390f35b6101b460048036038101906101af9190610ad1565b61070d565b005b6101d060048036038101906101cb9190610cb3565b61084e565b005b60016020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610278576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026f90610eb4565b60405180910390fd5b8181905084849050146102c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b790610f14565b60405180910390fd5b60005b8484905081101561031d5761030a8585838181106102e4576102e36110de565b5b905060200201358484848181106102fe576102fd6110de565b5b9050602002013561084e565b808061031590611066565b9150506102c3565b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990610eb4565b60405180910390fd5b8383905086869050146103fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f190610f54565b60405180910390fd5b818190508686905014610442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043990610f74565b60405180910390fd5b60005b868690508110156104b9576104a6878783818110610466576104656110de565b5b905060200201358686848181106104805761047f6110de565b5b9050602002013585858581811061049a576104996110de565b5b905060200201356104fe565b80806104b190611066565b915050610445565b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058390610eb4565b60405180910390fd5b600060016000858152602001908152602001600020549050600081146105e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105de90610f94565b60405180910390fd5b60006001600085815260200190815260200160002054905060008111610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063990610f34565b60405180910390fd5b6000600360008681526020019081526020016000205490506000811461069d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069490610fd4565b60405180910390fd5b6106a7868561084e565b85600360008781526020019081526020016000208190555084867fb5dac8ad49578955a20b2a5179573fe2be183efb3659e0daded600bd59b3975e60405160405180910390a3505050505050565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461079b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079290610eb4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290610ef4565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390610eb4565b60405180910390fd5b60006001600084815260200190815260200160002054905060008114610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092e90610ed4565b60405180910390fd5b600082111561099b57428211610982576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097990610fb4565b60405180910390fd5b8160026000858152602001908152602001600020819055505b42600160008581526020019081526020016000208190555081837fc8704a622f3eb8c9fc5a2ddf1775b5ea7695359b13dec8111874e266a4d5fbc960405160405180910390a3505050565b6000813590506109f5816113ca565b92915050565b60008083601f840112610a1157610a10611112565b5b8235905067ffffffffffffffff811115610a2e57610a2d61110d565b5b602083019150836020820283011115610a4a57610a49611117565b5b9250929050565b60008083601f840112610a6757610a66611112565b5b8235905067ffffffffffffffff811115610a8457610a8361110d565b5b602083019150836020820283011115610aa057610a9f611117565b5b9250929050565b600081359050610ab6816113e1565b92915050565b600081359050610acb816113f8565b92915050565b600060208284031215610ae757610ae6611121565b5b6000610af5848285016109e6565b91505092915050565b60008060008060008060608789031215610b1b57610b1a611121565b5b600087013567ffffffffffffffff811115610b3957610b3861111c565b5b610b4589828a016109fb565b9650965050602087013567ffffffffffffffff811115610b6857610b6761111c565b5b610b7489828a016109fb565b9450945050604087013567ffffffffffffffff811115610b9757610b9661111c565b5b610ba389828a01610a51565b92509250509295509295509295565b60008060008060408587031215610bcc57610bcb611121565b5b600085013567ffffffffffffffff811115610bea57610be961111c565b5b610bf6878288016109fb565b9450945050602085013567ffffffffffffffff811115610c1957610c1861111c565b5b610c2587828801610a51565b925092505092959194509250565b600060208284031215610c4957610c48611121565b5b6000610c5784828501610aa7565b91505092915050565b600080600060608486031215610c7957610c78611121565b5b6000610c8786828701610aa7565b9350506020610c9886828701610aa7565b9250506040610ca986828701610abc565b9150509250925092565b60008060408385031215610cca57610cc9611121565b5b6000610cd885828601610aa7565b9250506020610ce985828601610abc565b9150509250929050565b610cfc81611020565b82525050565b610d0b81611032565b82525050565b6000610d1e60158361100f565b9150610d2982611126565b602082019050919050565b6000610d4160208361100f565b9150610d4c8261114f565b602082019050919050565b6000610d64601d8361100f565b9150610d6f82611178565b602082019050919050565b6000610d87603c8361100f565b9150610d92826111a1565b604082019050919050565b6000610daa60298361100f565b9150610db5826111f0565b604082019050919050565b6000610dcd604b8361100f565b9150610dd88261123f565b606082019050919050565b6000610df060408361100f565b9150610dfb826112b4565b604082019050919050565b6000610e1360248361100f565b9150610e1e82611303565b604082019050919050565b6000610e36601f8361100f565b9150610e4182611352565b602082019050919050565b6000610e5960338361100f565b9150610e648261137b565b604082019050919050565b610e788161105c565b82525050565b6000602082019050610e936000830184610cf3565b92915050565b6000602082019050610eae6000830184610d02565b92915050565b60006020820190508181036000830152610ecd81610d11565b9050919050565b60006020820190508181036000830152610eed81610d34565b9050919050565b60006020820190508181036000830152610f0d81610d57565b9050919050565b60006020820190508181036000830152610f2d81610d7a565b9050919050565b60006020820190508181036000830152610f4d81610d9d565b9050919050565b60006020820190508181036000830152610f6d81610dc0565b9050919050565b60006020820190508181036000830152610f8d81610de3565b9050919050565b60006020820190508181036000830152610fad81610e06565b9050919050565b60006020820190508181036000830152610fcd81610e29565b9050919050565b60006020820190508181036000830152610fed81610e4c565b9050919050565b60006020820190506110096000830184610e6f565b92915050565b600082825260208201905092915050565b600061102b8261103c565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110718261105c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110a4576110a36110af565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b7f53656e646572206e6f7420617574686f72697a65640000000000000000000000600082015250565b7f446f63756d656e74206861736820616c72656164792072656769737465726564600082015250565b7f4e6577206f776e657220697320746865207a65726f2061646472657373000000600082015250565b7f446f63756d656e74732068617368206c69737420616e642076616c696420756e60008201527f74696c206c6973742073686f756c642062652073616d652073697a6500000000602082015250565b7f4578706972656420646f63756d656e7420686173682077657265206e6f74207260008201527f6567697374657265640000000000000000000000000000000000000000000000602082015250565b7f4e657720646f63756d656e74732068617368206c69737420616e64206578706960008201527f72656420646f63756d656e74732068617368206c6973742073686f756c64206260208201527f652073616d652073697a65000000000000000000000000000000000000000000604082015250565b7f4e657720646f63756d656e74732068617368206c69737420616e642076616c6960008201527f6420756e74696c206c6973742073686f756c642062652073616d652073697a65602082015250565b7f4e657720646f63756d656e74206861736820616c72656164792072656769737460008201527f6572656400000000000000000000000000000000000000000000000000000000602082015250565b7f56616c696420756e74696c2073686f756c6420626520696e2066757475726500600082015250565b7f4578706972656420646f63756d656e7420616c726561647920686173206e657760008201527f2076657273696f6e207265676973746572656400000000000000000000000000602082015250565b6113d381611020565b81146113de57600080fd5b50565b6113ea81611032565b81146113f557600080fd5b50565b6114018161105c565b811461140c57600080fd5b5056fea2646970667358221220ab75096a7fc82af4822fc18e4da7edc25681084f06a4ff128d8d1c1ef1a31c0464736f6c63430008070033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}
