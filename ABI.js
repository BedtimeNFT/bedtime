var ABI = [
	{
		"constant": false,
		"inputs": [
		  {
			"name": "_mintAmount",
			"type": "uint256"
		  },
		  {
			"name": "receiver",
			"type": "address"
		  }
		],
		"name": "publicMint",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "getPausedState",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalSupply",
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
]