function billWithInterval(n) {
    if (5000<=n && n<=30000) {
        return n*1.15
    } else {
        return n*1.2
    }
}
let n=parseInt(prompt("Enter your lunch bill PLS"))
console.log("Total bill is ",billWithInterval(n));

function addBill(n) {
    if (5000<=n && n<=30000) {
        return n*0.15
    } else {
        return n*0.2
    }
}
console.log("Added bill is ",addBill(n));

let bills=[3000, 27500, 100000]
let average=0;
for (i=0; i<bills.length; i++){
    average+=billWithInterval(bills[i])
}
console.log("Average is ",average/bills.length);