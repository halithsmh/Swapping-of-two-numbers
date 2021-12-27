let a = document.querySelector('#num1');
let b = document.querySelector('#num2');
let B1 = document.querySelector('#num1B');
let B2 = document.querySelector('#num2B');
let P1 = document.querySelector('#num1A');
let P2 = document.querySelector('#num2A');




function swap() {
    if (a.value == "" || b.value == "") {
        alert('Enter the numbers properly');
        B1.innerHTML = "";
        B2.innerHTML = "";
    }
    else {
        B1.innerHTML = (a).value;
        B2.innerHTML = (b).value;
        let x = document.querySelector('#num1').value;
        let y = document.querySelector('#num2').value;
        let z = x;
        x = y;
        y = z;
        P1.innerHTML = x;
        P2.innerHTML = y;
    }
};

/*--========Reset-btn==========--*/

function reset() {
    a.value = "";
    b.value = "";
    B1.innerHTML = "";
    B2.innerHTML = "";
    P1.innerHTML = "";
    P2.innerHTML = "";
};