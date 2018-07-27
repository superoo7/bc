pragma solidity ^0.4.21;
contract SampleContract {
    uint storageData;

    function set(uint x) public {
        storageData = x;
    }

    function get() public view returns (uint) {
        return storageData;
    }
}