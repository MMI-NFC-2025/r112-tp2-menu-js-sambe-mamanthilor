const nav = document.querySelector('.menu');
const toggle =document.querySelector('.menu-btn');


toggle.addEventListener("click", () => {
 const isOpen = toggle.getAttribute('aria-expanded') === 'true'; 
 nav.setAttribute('aria-hidden', String(isOpen));
 toggle.setAttribute('aria-expanded', String(!isOpen));
});
