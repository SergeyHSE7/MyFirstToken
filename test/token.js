
const { expect } = require("chai");
const { ethers } = require("hardhat");


beforeEach(async function () {
  TokenA = await ethers.getContractFactory("MFToken");
  [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

  let totalSupply = "10000000000000000000000"
  hardhatToken = await TokenA.deploy(totalSupply);
});

describe("Deployment", function () {
  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});