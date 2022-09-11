function reduce (array, callback){
    let sum = 0 ; 
    for (let item of array) {
        sum = callback(item,sum); 
    }
    return sum; 
}
console.log(reduce([5,7,3,5], (item,sum) => (sum+item)))