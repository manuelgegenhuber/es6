class Human {
    /*constructor(){
        this.gender = 'male';
    }*/
    //just like this.gender in the constructor
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Mani';
    gender = 'apache helicopter';

    printName = () => {
        console.log(this.name);
    }
}

const p = new Person();
p.printName();
p.printGender();