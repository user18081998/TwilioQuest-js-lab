class Materializer{
    constructor(arg){
        this.target=arg;
        this.activated=false;
    }
    activate(){
        this.activated=true;
    }
    materialize(){
        if(this.activated==true){
            return this.target;
        }
        return undefined;
    }
}

const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"