pragma solidity ^0.4.19;
    
contract GuessNumber {
    uint secretNumber = 0;
    
    function GuessNumber() public {
        rand(1);
    }
    
    function rand(uint nonce) private {
        secretNumber = uint(sha3(nonce))%(5);
    }
    
    function resetNumber(uint nonce) public {
        rand(nonce);
    }
    
    function guessNumber(uint number) public view returns (bool){
        if (secretNumber == number) {
            return true;
        }
        else {
            return false;
        }
    }
}