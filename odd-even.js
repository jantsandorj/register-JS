
let a=parseInt(prompt("Duriin too 1"))
let b=parseInt(prompt("Duriin too 2"))

let len=Math.abs(a-b)/2
let i=0;
let array1=[]
function odd (a, b){
    if (a%2==0){
        for(let i=0; i<Math.floor(len); i++){
            a+=2
            array1[i]=a
        }
        console.log(array1);
    } else {
        a--
        for(let i=0; i<Math.floor(len); i++){
            a+=2
            array1[i]=a
        }
        console.log(array1);
    }
}
odd(a,b)

// Сондгой тоо олдог нь тэгш олохтой ижил тул бодоогүй болно.