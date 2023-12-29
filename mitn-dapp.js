<script src="https://bedtime-cayc.vercel.app/ABI.js">

</script>

<script>
const CONTRACT_ADDRESS = "0xaCBC81FE1F56e4138AA1Bc1cF0745D5b52bAcaB5"; //address for your smart contract
const WEI_COST = 40000000000000000;
const CONTRACT_ADDRESS_SHEESH = "0xbB4f3aD7a2cf75d8EfFc4f6D7BD21d95F06165ca"; //address for your smart contract
const WEI_COST_SHEESH = 40000000000000000;
const CHAIN_ID = '0x1'; //'0x89' for polygon an '0x1' for Ethereum
const CHAIN_ID_NAME = 'Ethereum'; //enter name of blockchain used

console.log(ABI);
    
// get a reference to all html elements
const mintAmount = document.querySelector("#mint-amount");
const mintButton = document.querySelector("#mint-button");
const hasWallet = document.querySelector(".has-wallet");
const hasNoWallet = document.querySelector(".no-wallet");
const messageText = document.querySelector(".message-text");
const mintForm = document.querySelector(".mint-form");
const numMinted = document.querySelector(".num-minted");
const maxSupply = document.querySelector(".max-supply");
const mintAmountSheesh = document.querySelector("#mint-amountSheesh");
const mintButtonSheesh = document.querySelector("#mint-buttonSheesh");

// Web3 Setup
//const web3 = new Web3(Web3.givenProvider);
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
console.log(contract);

contract.methods.getPausedState().call().then(paused => {
  console.log('Paused:', paused); 
});

contract.methods.getTotalSupply().call().then(supply => {
  console.log('Total Supply:', supply);  
});


//update totalSupply
//contract.methods.totalSupply().call().then((supply) => numMinted.innerText = supply);
//contract.methods.getmaxSupply().call().then((max) => maxSupply.innerText = max);

// Event Listeners
ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  window.location.reload();  
}

// Mint Function ETH
const mintTokens = async function (amount) {
  // get a list of accounts from metamask
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
	var totalCost = WEI_COST * amount;
  console.log(totalCost);
  // if an account is present
	if (accounts.length > 0) { 
  //contract.methods.Mint(amount).send({
    contract.methods.publicMint(amount, accounts[0]).send({
    from: accounts[0], 
    to: CONTRACT_ADDRESS,
    value: String(totalCost)
   });
  }
}

// Mint Function SHEESH

const mintTokensSheesh = async function (amount) {
  // get a list of accounts from metamask
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
	var totalCostSheesh = WEI_COST_SHEESH * amount;
  console.log(totalCost);
  // if an account is present
	if (accounts.length > 0) { 
  //contract.methods.Mint(amount).send({
    contract.methods.publicMintWithSheesh(amount, accounts[0]).send({
    from: accounts[0], 
    to: CONTRACT_ADDRESS,
    value: String(totalCostSheesh)
   });
  }
} 

const updateChainId = async function () {
	const id = await ethereum.request({ method: 'eth_chainId' });
  console.log('id from async func is: ' + id);  
  
  if (id == CHAIN_ID) {
  	console.log('chain is ' + CHAIN_ID_NAME);
  	messageText.innerText = "👍 You are connected to " + CHAIN_ID_NAME;
    mintForm.classList.remove("disabled");
  } else {
  	console.log('chain is not ' + CHAIN_ID_NAME);
  	messageText.innerText = "Please switch to " + CHAIN_ID_NAME;
    mintForm.classList.add("disabled");
  }  
  return id;
}



// show elements if has a wallet
if (window.ethereum) {
  hasWallet.classList.remove("hidden");
  hasNoWallet.classList.add("hidden");
  updateChainId();
}

// On button click ETH
mintButton.addEventListener("click", function (e) {
  // prevent default action
  e.preventDefault();
  //Alert if input is empty
  if (!mintAmount.value) {
    alert("Please enter number of NFTs to mint!");
  } else {
  	mintTokens(mintAmount.value);
    messageText.innerText = "Please accept in Metamask!";
    mintAmount.value = '';
  }
});


// On button click SHEESH
mintButtonWithSheesh.addEventListener("click", function (e) {
  // prevent default action
  e.preventDefault();
  //Alert if input is empty
  if (!mintAmountSheesh.value) {
    alert("Please enter number of NFTs to mint!");
  } else {
  	mintTokensSheesh(mintAmountSheesh.value);
    messageText.innerText = "Please accept in Metamask!";
    mintAmountSheesh.value = '';
  }
});
</script>