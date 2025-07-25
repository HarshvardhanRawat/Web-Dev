const student = {
    name : "harsh",
    marks : 90,
    prop : this, //global scope
    getName : function () {
        console.log(this);
        return this.name; 
    },
    getMarks: () => { 
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => { //student
            console.log(this) 
        }, 2000);
    },
    getInfo2: function() {
        setTimeout( function() { //window
            console.log(this)
        }, 2000);
    },
};


