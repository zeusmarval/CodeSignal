inputArray = [3, 6, -2, -5, 7, 3]

result = 0

for(let i = 0; i< 2; i++){
    if (i< 1){
        for (let i = inputArray.length-1; i >= 0 && i-1 < inputArray.length-1 && i > 0; i--) {
            if (inputArray[i]*inputArray[i-1] > result || result == 0){
                result = inputArray[i]*inputArray[i-1]
            }
        }
    } else {
        for (let i=0; i < inputArray.length && i+1 < inputArray.length; i++){
            if (inputArray[i]*inputArray[i+1] > result || result == 0){
                result = inputArray[i]*inputArray[i+1]
            }
        }
    }
}

console.log(result)