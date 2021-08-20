function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
    
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const calcInput = document.getElementById('typed-numbers')
    const number = event.target.innerText;
    if(isNaN(number)){
      if(number == 'C'){
        calcInput.value ='';
        console.log('c');
      }
    }
    else{
        const calcInput = document.getElementById('typed-numbers');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

function verifyPin(){
    const calcInput = document.getElementById('typed-numbers').value;
    const displayPin = document.getElementById('display-pin').value;
    const match =document.getElementById('notify-success');
    const notMatch =  document.getElementById('notify-fail');
    if(calcInput==displayPin){
        match.style.display = 'block';
        notMatch.style.display = 'none';
    }
    else{
        match.style.display = 'none';
        notMatch.style.display = 'block';
    }
}