let months = ['january' , 'july' , 'march' , 'august'];
//final arr should be ['july' ; 'june' ; 'march' ; 'august']

months.shift();
months.shift();

months.unshift('june');
months.unshift('july');

console.log(months);
