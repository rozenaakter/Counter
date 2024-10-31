const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');



let counter = 0;

const updatecounter = (value) =>{
    counter = counter + value;

    counterElement.textContent = counter;

    if(counter >= 10){
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled')
    }

    // for minus btn

    if(counter <= 0){
        minusBtn.setAttribute('disabled', true);
    }
    else{
        minusBtn.removeAttribute('disabled')
    }

}


plusBtn.addEventListener('click',() =>{
    updatecounter(1);
})

minusBtn.addEventListener('click', () =>{
    updatecounter(-1);
})