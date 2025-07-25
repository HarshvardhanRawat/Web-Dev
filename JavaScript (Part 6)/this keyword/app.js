const student = {
    name : "harsh",
    chem : 74,
    math : 80,
    phy : 76,

    getAvg(){
        let avg = (this.chem + this.phy + this.math) / 3; 
        console.log(avg);
    }
}