var ERC20_ABI = [
	 {
		"constant": false,
		"inputs": [
		  {
			"name": "_mintAmountSheesh",
			"type": "uint256"
		  },
		  {
			"name": "receiver",
			"type": "address"
		  }
		],
		"name": "publicMintWithSheesh",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_to",
			"type": "address"
		  },
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "transfer",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_spender",
			"type": "address"
		  },
		  {
			"name": "_value",
			"type": "uint256"
		  }
		],
		"name": "approve",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  }
]