//shortest version
const logging = x => console.log(x);
logging('Hello World');

const demo = {
    test: function() {  
        console.log(this);
        console.log('from test function');
        trysomething();

        function trysomething(){
            console.log(this);
            console.log('from inner function');
        }
    
        //the this context gets inherited from parent.
        return () => {console.log(this); console.log('from arrow function');}
    }
}

let thisdemo = demo.test();
thisdemo();