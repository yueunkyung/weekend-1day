//alert("Hello World");
const PI = 3.14;
let myAge = 27;
const myName = "유은경";
let myHeight = 180;
let myWeight = 70;
let meterHeight = myHeight/100;
let biman = myWeight/(meterHeight*meterHeight);

// 18.5보다 작으면 저체중
// 23보다 작으면 정상
// 25보다 작으면 과체중
// 30보다 작으명 비만
// 30보다 크면 고도비만
// 문 -> statement 들은 연산을 하지 않고 분개를 해주는 것.
// 문 -> 조건문(if, else, switch), 반복문(for, while)
if(biman < 18.5) {
    console.log("저체중 입니다. 삼겹살을 권합니다.");
} else if(biman < 23) {
    console.log("정상 입니다. 이대로 쭉...");
} else if(biman < 25) {    
    console.log("과체중 입니다. 좀만 덜 드시면 무병장수...");
} else if(biman < 30) {
    console.log("비만 입니다. ");
} else if(biman > 30) {
    console.log("고도비만 입니다. ");    
}

// boolean - true, false
console.log(10<5);

console.log(biman);

console.log(myName);
console.log(myAge);
