'use strict'
module.exports = {
  ACCOUNT_ADDRESS: '0x7563a48997Dc1364347E8AA57d1710573F39EEF3',
  CONTRACT_ADDRESS: '0x5cfe554c5ae9b887499f0531c8c745536864dda8',
  CONTRACT_ABI: [
    {
      constant: false,
      inputs: [
        {
          name: "primeraLetra",
          type: "string"
        },
        {
          name: "nuevaPalabra",
          type: "string"
        },
        {
          name: "nuevaUltimaLetra",
          type: "string"
        }
      ],
      name: "setNuevaPalabra",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      constant: true,
      inputs: [],
      name: "getPalabra",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
}