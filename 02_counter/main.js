const numSpace = document.getElementById('numSpace');
const plusButton = document.getElementsByClassName('plusButton')[0];
let num = 0;


const update = (value) =>{
    num+=value;
    numSpace.innerHTML = num;
};
const reset = (value) =>{
    num = 0;
    numSpace.innerHTML = num;
};

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