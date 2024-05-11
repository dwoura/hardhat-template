// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Math{
    uint public a;

    function add() public {
        a = a + 1;
    }

    function sub() public{
        a = a - 1;
    }
}