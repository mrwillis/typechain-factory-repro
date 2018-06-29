pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Dummy {
    using SafeMath for uint256;

    address public problem;

    constructor(
        address a,
        address b,
        address[] c,
        uint256[] d,
        uint256 e
    )
    public
    {
        problem = 0x0;
    }
}
