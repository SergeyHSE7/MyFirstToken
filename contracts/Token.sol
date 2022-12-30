// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MFToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyFirstToken", "MFT") {
        _mint(msg.sender, initialSupply);
    }
}