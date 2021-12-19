
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const btnResult = document.querySelector("#btnResult");

/*
const now = new Date();
//console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
inputHeight.value = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

function dubae(num){
    // console.log(num * 2);
    return num*2;
}
function jegob(num){
    // console.log(num * num);
    return num*num;
}

dubae(3);
jegob(3);
*/

//리모콘.채널(11) mbc
//리모콘.채널(21) ocn

// console.log(inputHeight);
// console.log(inputWeight);

btnResult.addEventListener("click", function(){
    let myHeight = inputHeight.value;
    let myWeight = inputWeight.value;
    if(myHeight === ""){
        alert("키를 입력하세요.");
        inputHeight.focus();
        return;
    }
    if(myWeight === ""){
        alert("몸무게를 입력하세요.");
        inputWeight.focus();
        return;
    }

    let meterHeight = myHeight/100;
    let biman = myWeight/(meterHeight*meterHeight);

    if(biman < 18.5) {
        alert("저체중 입니다. 삼겹살을 권합니다.");
    } else if(biman < 23) {
        alert("정상 입니다. 이대로 쭉...");
    } else if(biman < 25) {    
        alert("과체중 입니다. 좀만 덜 드시면 무병장수...");
    }
});
