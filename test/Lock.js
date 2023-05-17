const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("VerifyContractUsingHardhat", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const String = "Verified Smart Contract Using Hardhat";

    const VerifyContractUsingHardhatFactory = await ethers.getContractFactory(
      "VerifyContractUsingHardhat"
    );
    const VerifyContractUsingHardhat =
      await VerifyContractUsingHardhatFactory.deploy(String);

    return { VerifyContractUsingHardhat, String, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right String", async function () {
      const { String ,VerifyContractUsingHardhat} = await loadFixture(deployOneYearLockFixture);

      expect(await VerifyContractUsingHardhat.GetString()).to.equal(String);
    });
  });
});
