let nums = [ 1 , 2 , 5 , 3 , 8 , 6 , 9 , 12 , 16 , 14 ];

let max = nums.reduce((max , el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
}); 

console.log(max);


// for(let i = 0; i < nums.length ; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }



console.log(max)