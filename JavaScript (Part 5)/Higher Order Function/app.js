function multipleGreet(func , n){
    for( let i = 0 ; i <= n ; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet , 3)
