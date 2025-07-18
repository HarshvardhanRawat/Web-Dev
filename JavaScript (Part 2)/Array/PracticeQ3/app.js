let months = ['january' , 'july' , 'march' , 'august'];
//final arr should be ['july' ; 'june' ; 'march' ; 'august']

months.splice(0 , 2, 'july' , 'june')

console.log(months)

months.reverse();

console.log(months);