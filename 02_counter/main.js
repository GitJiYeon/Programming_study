const numSpace = document.getElementById('numSpace');
const plusButton = document.getElementsByClassName('plusButton')[0];
plusButton.addEventListener("click", () =>{
    num += 1;
        numSpace.innerHTML = num;
});

const plus = () =>{
    num++;
    numSpace.innerHTML = num;
};
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