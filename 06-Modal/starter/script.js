'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

const handleModalOpen = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


const handleModalClose = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => {
    btn.addEventListener(
        'click', handleModalOpen
    );
});

btnCloseModal.addEventListener(
    'click', handleModalClose
);

overlay.addEventListener(
    'click', handleModalClose
);

document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    if(event.key === 'Escape' && !modal.classList.contains('hidden'))
        handleModalClose();
});