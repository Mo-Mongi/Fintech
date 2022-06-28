let ul = document.querySelector('ul')
let myBtn = document.querySelector('.bx-menu')
var show = false;
myBtn.addEventListener('click', function(){
    if (!show){
        ul.style.display = 'block';
        show = true;
    } else{
        ul.style.display = 'none';
        show = false;
    }
})
