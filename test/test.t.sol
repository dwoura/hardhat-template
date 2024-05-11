// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Test,console} from "forge-std/Test.sol";
import {Math} from "contracts/Math.sol";


contract testCompute is Test{
    Math math;

    function setUp() public{
        math = new Math();
    }

    function testAdd() public{
        math.add();
        assertEq(math.a(),1);
        console.log("a=",math.a());
    }

    function testSub() public{
        math.add();
        math.sub();
        assertEq(math.a(),0);
        console.log("a=",math.a());
    }
}