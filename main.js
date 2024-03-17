// doRun() function
// images/old.jpg --- this old version 
// images/child.png --- child version 
// images/right.jpg --- right version
// images/lie.jpg --- lie version 
// move 0.3s alternate
let writing = document.querySelector('.writing')
let image = document.querySelector('.image')
let input = document.querySelector('.accept')


function doRun(){
    let amount = Number(input.value);
    if(amount > 61){
        writing.textContent = 'Error! Please enter smaller number!'
        writing.style.color = 'red'
        
        image.src = 'images/old.jpg'
        writing.classList.add('anim')
        setTimeout(() => {
            writing.classList.remove('anim')
        }, 400);

        
    }else if(amount < 1){
        writing.textContent = "Error! Age can't be fewer than 1!"
        writing.style.color = 'red'
        image.src = 'images/lie.jpg'
        writing.classList.add('anim')
        setTimeout(() => {
            writing.classList.remove('anim')
        }, 400);
    }else if(amount < 61){
        writing.textContent = 'Error! Please enter larger number!'
        writing.style.color = 'red'
        image.src = 'images/child.png'
        writing.classList.add('anim')
        setTimeout(() => {
            writing.classList.remove('anim')
        }, 400);
    }else{
        writing.textContent = 'Congrats! You are right!'
        writing.style.color = 'green'
        image.src = 'images/right.jpg'
        writing.classList.add('anim')
        setTimeout(() => {
            writing.classList.remove('anim')
        }, 400);
        
    }
    


    input.value = ''
}



