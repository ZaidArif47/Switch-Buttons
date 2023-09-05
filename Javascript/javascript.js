
let buttonVariable = document.querySelector('.js-button');
let buttonJudgement = buttonVariable.classList.contains('js-button');
console.log(buttonJudgement);

let gamingVariable = document.querySelector('.gamingButton');
function gaming() {        
    if (gamingVariable.classList.contains('OnGamingButton')) {
        gamingVariable.classList.remove('OnGamingButton')
    }
    else {
    gamingVariable.classList.add('OnGamingButton');
    }
}

let gamingVariable2 = document.querySelector('.gamingButton2');
function gaming2() {        
    if (gamingVariable2.classList.contains('OnGamingButton2')) {
        gamingVariable2.classList.remove('OnGamingButton2')
    }
    else {
    gamingVariable2.classList.add('OnGamingButton2');
    }
}

let gamingVariable3 = document.querySelector('.gamingButton3');
function gaming3() {        
    if (gamingVariable3.classList.contains('OnGamingButton3')) {
        gamingVariable3.classList.remove('OnGamingButton3')
    }
    else {
    gamingVariable3.classList.add('OnGamingButton3');
    }
}
