// үгнүүдийн дундуур зураас оруулаx функц бичнэ үү
// example: console.log(parameterizeStr("This Is Where I Begin"))
// this-is-where-i-begin

// let word=prompt("Enter sentence pls")
// console.log(word);
// console.log(word.replaceAll(' ', '-'));

// let number=parseInt(prompt('Enter number pls'))
// console.log(number);
// let text=number.toString()
// let arr=text.split("")
// let join=Number(arr.reverse().join(''))
// console.log(join)

// 1. Input - ээр авсан утгыг palindromic гэдэгийг шалгадаг function бич. (loop хэрэглэхгүй method хэрэглээрэй)
// let word1=(prompt('Enter word pls'))
// console.log(word1);
// let arr=word1.split("")
// let arr2=arr.reverse().join('')
// if (word1===arr2){
//     console.log(word1, "this is palandrome");
// }else{
//     console.log(word1, "this is not palandrome");
// }

// урын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
// Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. / 
// РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
// РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
// Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү.
let letter=[
['А','Архангай'],
['Б', 'Баян-Өлгий'],
['В', 'Баянхонгор'],
['Г', 'Булган'],
['Д', 'Говь-Алтай'],
['Е', 'Дорноговь'],
['Ж', 'Дорнод'],
['З', 'Дундговь'],
['И', 'Завхан'],
['Й', 'Өвөрхангай'],
['К', 'Өмнөговь'],
['Л', 'Сүхбаатар'],
['М', 'Сэлэнгэ'],
['Н', 'Төв'],
['О', 'Увс'],
['П', 'Ховд'],
['Р', 'Хөвсгөл'],
['С', 'Хэнтий'],
['Т', 'Дархан-Уул'],
['Ф', 'Орхон'],
['Х','Говьсүмбэр'],
['У','Улаанбаатар'],
['Ц','Улаанбаатар']]
//  let checkLetter=['А', 'Б','В', 'Г', 'Д', 'Е','Ё','Ж','З', 'И', 'Й', 'К', 'Л', 'М', 'Н','О', 'Ө', 'П', 'Р', 'С', 'Т','У', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
function isCorrectReg(a) {
    let arr=a.split('')
    if (arr.length==10) {
        if (!Number.isNaN(a.substr(0,2)) && Number.isNaN(a.substr(2,10))) {
            for (let index = 0; index < arr.length; index++) {
                if (letter[i][0]==a[0]){
                    console.log("Correct Register");
                }
                
            }
        }
}
}
let Reg=prompt('Enter your register plss')
isCorrectReg(Reg)
