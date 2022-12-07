let arr1=[4, 2, 34, 4, 1, 12, 1, 4]
let srch=[]
let index=0
for(let i=0; i<arr1.length; i++){
    for(let j=i; j<arr1.length; j++){
        if (i!==j){
            if (arr1[i]===arr1[j] && arr1[i]!==undefined){
                    srch[index]=arr1[i]
                    delete arr1[j]
                    index++
                }else if(arr1[i]==undefined){
                    index
                }
            }
        }
    }
console.log(srch);