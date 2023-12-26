function mycallbackfuntion(){
    console.log("HELLO BUDDIES");
}

function myFunctionWithCallBackFunction(callback){
    console.log("Doing Something before callback ");
    callback();
}
myFunctionWithCallBackFunction(mycallbackfuntion);