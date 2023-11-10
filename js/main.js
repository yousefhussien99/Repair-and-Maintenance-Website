const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.querySelector('#navbar-default');
const navbarLinks = document.querySelectorAll('.navbar-link');
const ul = document.querySelector('ul');
const myBtn = document.getElementById('myBtn');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
    navbarToggle.innerHTML = navbarMenu.classList.contains('hidden') ? '<i class="fas fa-bars text-2xl "></i>' : '<i class="fas fa-times text-2xl"></i>';
});

navbarLinks.forEach((navbarLink) => {
    navbarLink.addEventListener('click', () => {
        navbarMenu.classList.add('hidden');
    });
});
window.addEventListener('scroll', function() {

  var header = document.querySelector('nav');
  if (window.scrollY > 0) {
    header.classList.add('bg-white');
    header.classList.remove('bg-blue-200');
    ul.classList.add('md:bg-white');
    ul.classList.remove('md:bg-blue-200');
    myBtn.classList.remove('hidden');
    myBtn.classList.add('block');
  } else {
    header.classList.add('bg-blue-200');
    header.classList.remove('bg-white');
    ul.classList.add('md:bg-blue-200');
    ul.classList.remove('md:bg-white');
    myBtn.classList.add('hidden');
    myBtn.classList.remove('block');
  }
});
function topFunction(){
    window.scrollTo(0,0);

}