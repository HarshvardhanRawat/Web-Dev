let arr = ["hi" , "hello" , "bye" , "hola"]

function concat(arr){
    let result; 

    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i];
    }
    
    return result;
}