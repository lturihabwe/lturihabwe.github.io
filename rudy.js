
var rudyTimer = (function(){
    var timer = null;
    function rudy(){
        document.getElementById("output").innerHTML += "Rudy!";
    }
    return {
        delayMsg2 : function (){
            if(timer === null){
                timer = setInterval(rudy, 1000);
            }else {
                clearInterval(timer);
                timer = null;
            }
        }
    }
})();



