const numSpace = document.getElementById('numSpace');
const plusButton = document.getElementsByClassName('plusButton')[0];
let num = 100;

numSpace.innerText = num;

function render(){
    numSpace.innerHTML = num;
}

const update = (value) =>{
    num+=value;
    render();
};
const reset = () =>{
    num = 100;
    render();
};
render();
/* plusButton.addEventListener("click", () =>{
    num += 1;
        numSpace.innerHTML = num;
});
*/

/*
let num = 0;
    function plus(){
        num += 1;
        numSpace.innerHTML = num;
    }

    function minus(){
        num -= 1;
        numSpace.innerHTML = num;
    }
*/