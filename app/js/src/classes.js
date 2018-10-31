class Human{
    /*constructor(){
        this.gender = 'male';
    }*/
    gender = 'male';

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor (){
        super();
        this.name = 'Mani';
        this.gender = 'apache helicopter';
    }

    printName(){
        console.log(this.name);
    }
}

const p = new Person();
p.printName();
p.printGender();