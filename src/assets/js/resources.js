document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the Modal Elements
    const modal = document.getElementById('resource-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('modal-backdrop');

    // 2. Select all Cards
    const cards = document.querySelectorAll('.resource-card');

    // 3. Function to Open Modal
    function openModal(card) {
        // Get data from the clicked card's data attributes
        const title = card.getAttribute('data-title');
        const type = card.getAttribute('data-type');
        const desc = card.getAttribute('data-desc');
        const link = card.getAttribute('data-link');

        // Inject data into the modal
        modalTitle.textContent = title;
        modalType.textContent = type;
        modalDesc.textContent = desc;
        modalLink.setAttribute('href', link);

        // Customize button text based on type (Optional polish)
        if(type && type.toLowerCase().includes('pdf')) {
            modalLink.querySelector('span').textContent = "Download PDF";
        } else if (type && type.toLowerCase().includes('video')) {
             modalLink.querySelector('span').textContent = "Watch Video";
        } else {
             modalLink.querySelector('span').textContent = "Visit Link";
        }

        // Show the modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Refresh icons inside modal (if you have icons in the dynamic content)
        lucide.createIcons();
    }

    // 4. Function to Close Modal
    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    // 5. Attach Event Listeners to Cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // 6. Attach Close Listeners (Button & Backdrop)
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});