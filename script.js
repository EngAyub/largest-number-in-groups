// Good Luck 💪🏾
function A(AK){
    let LargestArray = [];

    for(let i=0; i<AK.length; i++)
    {
        LargestArray.push(Math.max(...AK[i]))
    
        
    }

    return (LargestArray)
}

console.log(A([[7, 3, 8, 15], [54, 12, 43, 99], [21, 11, 8]]))    //➞ [15, 99, 21]
console.log(A([[22, 59, 12], [45, 66, 90], [28, 5, 11]])) ; // ➞ [59, 90, 28]