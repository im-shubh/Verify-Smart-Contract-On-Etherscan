// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract VerifyContractUsingHardhat {
    string internal String;

    constructor(string memory _string) {
        String = _string;
    }

    function GetString() public view returns (string memory) {
        return String;
    }
}
