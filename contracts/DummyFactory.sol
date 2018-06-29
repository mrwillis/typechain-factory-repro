pragma solidity ^0.4.24;

import "./Dummy.sol";

contract DummyFactory {

    /**
     * @notice Factory method to make a new solidity contract
     */
    function newDummy(
        address a,
        address b,
        address[] c,
        uint[] d,
        uint e
    )
    public
    returns (address newContract)
    {
        Dummy dummy = new Dummy(
            a,
            b,
            c,
            d,
            e
        );
        return dummy;
    }

}
