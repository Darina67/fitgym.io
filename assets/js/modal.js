const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item =>{
    item.addEventListener('click', event =>{
       let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal'); /*для опознования, какое именно модальное окно было вызвано*/
        let modal  = document.getElementById(modalId);/*выборка по айди, храним модальное окно, которе хотим сохранить*/
        let modalCntent = modal.querySelector('.modal__content');

        modalCntent.addEventListener('click',event =>{
            event.stopPropagation();
        });
    //    вызываем класс для отображения
        modal.classList.add('show');
        body.classList.add('no-scroll');
    });
});
// удаление класса при закрытии модалки
modalClose.forEach(item =>{
    item.addEventListener('click', event =>{
        let currentModal = event.currentTarget.closest('.modal');
           

      closeModal(currentModal);
    });
});

modal.forEach(item =>{
    item.addEventListener('click', event =>{
        let currentModal = event.currentTarget;
   

      closeModal(currentModal);
    }); 
});
function closeModal(currentModal){
    currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
}