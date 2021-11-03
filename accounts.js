
var accountInfoList = [];

var accountmodule = (function (){
    var acctObj = {
        accountName: '',
        depositAmount: 0
    };
    return {
        createAccount : function(acctName, depositAmnt){
            var acc = Object.create(acctObj);
            acc.accountName = acctName;
            acc.depositAmount = depositAmnt;
            return acc;
    }};
})();

window.onload = function(){
    var clickcreate = document.getElementById("create");
    clickcreate.onclick = addAccount;
}

function  addAccount(){
    let nameInput = document.getElementById("nameofaccount");
    let depositInput = document.getElementById("deposit");
    const name = nameInput.value.trim();
    const amount = depositInput.value.trim();

    if(name === "" || deposit === "") {
        alert("Please enter account name and deposit!")
    }else{
        var newAcc = accountmodule.createAccount(name, amount);
        accountInfoList.push(newAcc);
    }

    let textArea = '';
    for(let i =0; i<accountInfoList.length;i++){
        textArea += "Account name: "+accountInfoList[i].accountName+" Balance: "+accountInfoList[i].depositAmount+"\n"; 
    }
    document.getElementById("accounts").value = textArea;
}