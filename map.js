function map(array, callback){
    const mappedArray = []; 
    for (let item of array){
        mappedArray.push(callback(item)); 
    }
    return mappedArray; 
}
console.log(map([1,2,3,4,5], item => (item*5)))