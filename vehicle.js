class Vehicle{
    constructor(wheels){
        this.wheels = wheels;
    }
    toString(){
        return '(Number of wheels:' + this.wheels +')';
    }
}

class Car extends Vehicle{
    constructor(color){
        super(4);
        this.color = color;
    }
    toString(){
        return super.toString() + ' colored: '+ this.color;
    }
}

export {Vehicle,Car};
