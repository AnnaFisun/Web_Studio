const btnsOpenModal = document.querySelectorAll('[data-open-modal]')
const backdrop = document.querySelector('.backdrop')
const btnCloseModal = document.querySelector('[data-modal-close]')
const modal = document.querySelector('.modal')

btnsOpenModal.forEach((btn) => {
btn.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden')
    document.body.style.overflow = 'hidden'
})
})
 btnCloseModal.addEventListener('click', () => {
    backdrop.classList.add('is-hidden')
    document.body.style.overflow = 'auto'
 })