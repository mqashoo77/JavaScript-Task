function filter(array, callback){
    const filterdArray = []; 
    for (let item of array){
        if (callback(item)){
            filterdArray.push(item); 
        }
    }
    return filterdArray; 
}

console.log(filter([1,2,3,4,5], item => (item < 4)))