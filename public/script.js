const clicked = document.querySelector('submit');

function toggleBtn(){
    clicked.classList.toggle('active');
}

clicked.addEventListener('click', toggleBtn);