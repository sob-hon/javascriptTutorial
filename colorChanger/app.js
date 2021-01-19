// factory functions
function colorMaker(r, g, b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function (){
        const {r, g, b} = this; //destructure values needed from this in function and particulary in color object
        return `rgb(${r}, ${g}, ${b})`;   
    };
    color.hex = function(){
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}
// instantiation of object and callin' me
const firstColor = colorMaker(0, 10, 255);
console.log(`${firstColor.hex()} => ${firstColor.hex()}`);





// constructor function
function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}
// method definition
Color.prototype.rgb = function(){
    const {r, g, b} = this; //destructure values needed from this in function and particulary in color object
    return `rgb(${r}, ${g}, ${b})`; 
};
// method definition
Color.prototype.hex = function(){
    const {r, g, b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
// instantiation of object and callin' me
const colorSecond = new Color(30, 40, 150);
console.log(`${colorSecond.hex()} => ${colorSecond.hex()}`);



// class and constructor syntax
class Colorizer {

    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb(){
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`; 
    }
    hex(){
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
// instantiation of class and callin' me
const colorThird = new Colorizer(85, 69, 100);
console.log(`${colorThird.hex()} => ${colorThird.hex()}`);