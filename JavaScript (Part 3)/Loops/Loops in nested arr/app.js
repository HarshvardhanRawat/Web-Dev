let arr = [["superman" , "batman" , "flash" , "aquaman"] , ["ironman" , "thor" , "captain america"]];
let n = arr.length;

for(let i = 0 ; i < n ; i++){
    console.log(`List ${i+1}`);
    for(let j = 0 ; j < arr[i].length; j++){
        console.log(arr[i][j])
    }
}