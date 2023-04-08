pragma solidity >=0.7.0 <0.9.0;

contract Token{
    address public minter;
    mapping(address => uint) public balances;

    event Sent(address from, address to, uint amount);

    constructor(){
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        balances[receiver] += amount;
    }

    error InsufficientBalance(uint required, uint actual);

    function send(address receiver, uint amount) public {
        if(amount > balances[msg.sender]){
        revert InsufficientBalance({
            required: amount,
            actual: balances[msg.sender]
        });
        }
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}