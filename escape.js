let in1 = document.getElementById('letter1');
let in2 = document.getElementById('letter2');
let in3 = document.getElementById('letter3');
let in4 = document.getElementById('letter4');
let in5 = document.getElementById('letter5');
let in6 = document.getElementById('letter6');
let mainEl = document.getElementById('main');
let video2 = document.getElementById('video2');
let video = document.getElementById('video1');
let nextButton = document.getElementById('nextButton');
console.log('element 6 ', in6);


window.onload = function() {
    in1.focus()
}
let passcode = '';

in1.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1)
    } else {

        passcode += in1.value;
        in2.focus();
    }
})
in2.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    console.log('key presses', e.key)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1);
        in1.focus()
    } else {
        passcode += in2.value;
        in3.focus();

    }
})
in3.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1);
        in2.focus()
    } else {
        passcode += in3.value;
        in4.focus();

    }
})
in4.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1);
        in3.focus()
    } else {
        passcode += in4.value;
        in5.focus();

    }
})
in5.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1);
        in4.focus()
    } else {
        passcode += in5.value;
        in6.focus();

    }
})
in6.addEventListener('keyup', function(e){
    console.log('key presses', in1.value)
    if(e.key === 'Delete' || e.key === 'Backspace') {
        passcode = passcode.slice(0, -1);
        in5.focus()
    } else {
        passcode += in6.value;
        

    }
    
   
    
    if(passcode === '820080') {
       
        mainEl.setAttribute('class', '');
        mainEl.setAttribute("class", "hide")
        video.setAttribute('class', '');
        video.setAttribute('class', 'videoBox');
        nextButton.setAttribute('class', 'button');
        
    //     alert('Correct')
    }
    if(passcode === '274453') {
       
        mainEl.setAttribute('class', '');
        mainEl.setAttribute("class", "hide");
        video2.setAttribute('class', '');
        video2.setAttribute('class', 'videoBox');
        nextButton.setAttribute('class', 'button')
        
    //     alert('Correct')
    }
})


nextButton.addEventListener('click', function (){
    passcode = '';
    mainEl.setAttribute('class', 'showMain');
    video2.setAttribute('class', 'hide');
    video.setAttribute('class', 'hide');
    nextButton.setAttribute('class', 'hide')
    in1.value = '';
    in2.value = '';
    in3.value = '';
    in4.value = '';
    in5.value = '';
    in6.value = '';
    in1.focus();


})