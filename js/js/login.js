const login = documnet.querySelector('.form signin');
const register = documnet.querySelector('.form signup');
const sign_in_btn = documnet.querySelector('.inputBox');
const sign_up_btn = documnet.querySelector('.inputBox');
const container = documnet.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});









