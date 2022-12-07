// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.
// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.
// 6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

// 7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

// 8. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг том үсэг болгох функц бич.

// 9. Өгөгдсөн тэмдэгт мөрийн бүх үсгийг жижиг үсэг болгох функц бич.

// console.log("Exercise 1");
// let a=parseInt(prompt("Enter number pls"))
// let b=parseInt(prompt("Enter number pls"))
// function whichIs(a, b) {
//     if (a>b){
//         console.log("a нь илүү ", a);
//     }else if (a<b){
//         console.log("b нь илүү ", b);
//     } else {
//         console.log('a=b equivalient');
//     }
// }
// console.log(whichIs(a,b));

// console.log("Exercise 2");
// let array1=[1,2,3,4,5,6]
// let inputNumber=parseInt(prompt("Davhardsan too oloh"))
// for (i=0; i<array1.length; i++){
//     if (array1[i]===inputNumber){  

//     } else {

//     }
// }

// 1.  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// 2. arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.

let array1=[4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
let temp;
function arraySorter(a) {
    for (let i=0; i<a.length; i++){
        for (let j=i+1; j<a.length; j++){
            if (a[j] < a[j+1]){
            a=a
            }else if (a[j]>a[j+1]){
                temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
            }
        }
    }
}
arraySorter(array1);
console.log(array1);
