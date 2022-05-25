const { ethers } = require('hardhat')

const main = async () => {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const whitelistContract = await ethers.getContractFactory("Whitelist")

  //deploy the contract and set 10 for max whitelisted address allowed
  const deployedWhitelistContract = await whitelistContract.deploy(10)

  //wait for contract to be deployed
  await deployedWhitelistContract.deployed()

  //print out the address of the deployed contract
  console.log("Whiteslited Contract Address:", deployedWhitelistContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })