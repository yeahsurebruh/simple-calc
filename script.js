const resultBox = document.querySelector(".result-box");

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function sub(num1, num2){
    return Number(num1) - Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function divide(num1, num2){
    return Number(num1) / Number(num2);
}

function eval(op, num1, num2){
    let result;
    switch(op){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = sub(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log("no operators matched in eval function");
            break;
    }
    updateResultBox(result);
    return result;
}

function addDecimal(result){
    for(let i=0; i<result.length; i++){
        if(result[i] === '.'){
            return result;
        }
    }
    return result.toString() + '.';
}

function changeSign(result){
    return (Number(result) * (-1)).toString();
}

let currResult = "";
function updateResultBox(){
    resultBox.textContent = currResult;
}
const clearBtn = document.querySelector("button.clear");
clearBtn.addEventListener('click', ()=>{
    calcBoot();
});

function calcBoot(){
    currResult = "";
    const specialOperator = document.querySelectorAll("button.special-operator");
    const operatorBtns = document.querySelectorAll("button.operator");
    const numberBtns = document.querySelectorAll("button.number");
    let currOp = "";
    let num1, num2;
    
    specialOperator.forEach(btn=>{
        if(btn.id === "decimal"){
            btn.addEventListener("click", ()=>{
                currResult = addDecimal(currResult);
                updateResultBox();
            });
        }
        else{
            btn.addEventListener("click", ()=>{
                currResult = changeSign(currResult);
                updateResultBox();
            });
        }
    });
    
    numberBtns.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            currResult = currResult + btn.textContent;
            updateResultBox();
        });
    });

    operatorBtns.forEach(btn=>{
        if(btn.id === "equal"){
            btn.addEventListener("click", ()=>{
                num2 = resultBox.textContent;
                currResult = eval(currOp, num1, num2);
                updateResultBox();
            })
        }
        else{
            btn.addEventListener("click", ()=>{
                currOp = btn.textContent;
                num1 = currResult;
                currResult = "";
                updateResultBox();
            });
        }
    });

}

calcBoot();

// const numberbtn = document.querySelectorAll("button .number");

// numberbtn.forEach(btn => {
//     btn.addEventListener("click", ()=>{
//         currResult = currResult + btn.textContent;
//         updateResultBox();
//     })
// });



