function find (array, callback){
    for (let item of array) {
        if (callback(item)) {
            return item;
        }
    }
    return undefined;
}

console.log(find([1,2,3,4,5], item => (item == 7))) // find(array, function)