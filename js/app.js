const openBtn = document.getElementById('order-btn');
const overlayModal = document.getElementById('overlay_modal');
const closeBtn = document.getElementById('modal-close')

const handlerModal = (openModal, closeModal, modal, triggerModal) => {

	openModal.addEventListener('click', () => {
		modal.classList.add(triggerModal);
	});

	closeModal.addEventListener('click', () => {
		modal.classList.remove(triggerModal);
	});
}

handlerModal(openBtn, closeBtn, overlayModal, 'page__overlay_modal_open');
