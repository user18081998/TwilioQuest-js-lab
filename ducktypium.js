class Ducktypium{
    constructor(ccolor){
        this.calibrationSequence=[];
        let colors=["red", "blue", "yellow"];
        if(colors.reduce((sum,color)=> ccolor==color? sum + 1 : sum + 0 , 0) ==1)
            this.color=ccolor;
        else 
            throw new Error();
    }
    refract(s){
        let colors=["red", "blue", "yellow"];
        if(colors.reduce((sum,color)=> s==color? sum + 1 : sum + 0 , 0) !=1) throw new Error();
        if(this.color==s) return s;
        if(this.color=="red"){
            if(s=="blue") return "purple";
            if(s=="yellow") return "orange";
        }
        if(this.color=="blue"){
            if(s=="red") return "purple";
            if(s=="yellow") return "green";
        }
        if(this.color=="yellow"){
            if(s=="red") return "orange";
            if(s=="blue") return "green";
        }
    }

    calibrate(a){
        this.calibrationSequence=a.sort().map(x=>x*3);
    }

}