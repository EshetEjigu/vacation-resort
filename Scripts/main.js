const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const model = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    model.classList.add('showModal');
});
cancelBtn.addEventListener('click', function()){
    sideNav.classList.remove('show');
    model.classList.remove('showModel');
});

window.addEventListener('click', function(event){
    if(event.target === model){
    sideNav.classList.remove('show');
    model.classList.remove('showModal');
    }
});

