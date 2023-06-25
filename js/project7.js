
// VARIABLES *****************

const containerModal = document.querySelector('.containerModal');

const btnOpenModal = document.querySelector('.btnOpenModal');

const xClose = document.querySelector('.xClose');

const btnTomarOferta = document.querySelector('.btnTomarOferta');





// EVENTOS *****************

btnOpenModal.addEventListener('click', ()=>{
    containerModal.classList.remove('hide');
});


xClose.addEventListener('click', ()=>{
    containerModal.classList.add('hide');
});

btnTomarOferta.addEventListener('click', ()=>{
    containerModal.classList.add('hide');
});