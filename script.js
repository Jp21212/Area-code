function area(shape, measure1, measure2){
    if(shape === "retangle"){
        return measure1 * measure2;
    }else if(shape === "triangle"){
        return 0.5 * measure1 * measure2;
    }else if(shape === "circle"){
        return Math.PI * measure1 * measure2;
    }else{
        return "Shape not recognized";
    }
}

console.log(area("rectangle", 10, 5));