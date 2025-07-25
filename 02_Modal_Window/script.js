'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

// console.log(modal.textContent)

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', openModal)
}

closeModalBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
})