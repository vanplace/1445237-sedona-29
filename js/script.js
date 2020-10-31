const ModalToOpen = document.querySelector(".modal-to-open");
const Modal = document.querySelector (".modal");
const ModalToClosen = document.querySelector(".modal-search");

ModalToClosen.addEventListener("click", function(evt){
    evt.preventDefault();
    Modal.classList.add("modal-none");
});

ModalToOpen.addEventListener("click", function(evt){
    evt.preventDefault();
    Modal.classList.remove("modal-none");
    Modal.classList.add("modal-animation");
})