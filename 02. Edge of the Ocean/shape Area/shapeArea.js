function shapeArea(n){
    let area = 1;
    for(let i = 1; i <= n; i++){
        area += (4 * i) - 4;
    }
    return area;
}

console.log(shapeArea(3))

