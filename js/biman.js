
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const btnResult = document.querySelector("#btnResult");
const txtResult = document.querySelector("#txtResult");
const txtResultNum = document.querySelector("#txtResult .num");
const txtResultTxt = document.querySelector("#txtResult .txt");
const btnReset = document.querySelector("#btnReset");

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

// txtResult 사라지기
// 나도 사라지기
// txtResultNum.textContent=""
// txtResultTxt.textContent=""
function hideAlertTxt(){
    txtResult.style.display = "none";
    btnReset.style.display = "none";
    inputHeight.value = "";
    inputWeight.value = "";
    inputHeight.focus();
}

function showAlertTxt(msg, _biman){    
    txtResult.style.display = "flex";
    txtResultNum.textContent = Math.round(_biman*100)/100;
    txtResultTxt.textContent = msg;
    btnReset.style.display = "block";
}

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
        // alert("저체중 입니다. 삼겹살을 권합니다.");
        showAlertTxt("저체중 입니다. 삼겹살을 권합니다.", biman);
    } else if(biman < 23) {
        // alert("정상 입니다. 이대로 쭉...");
        showAlertTxt("정상 입니다. 이대로 쭉...", biman);
    } else if(biman < 25) {    
        // alert("과체중 입니다. 좀만 덜 드시면 무병장수...");
        showAlertTxt("과체중 입니다. 좀만 덜 드시면 무병장수...", biman);
    } else {
        showAlertTxt("언제 죽어도 모른다는....", biman);
    }
});

btnReset.addEventListener("click", hideAlertTxt);

// console.log(Math.round(8.44498754*100)/100);
