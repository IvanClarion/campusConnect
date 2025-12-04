
    document.addEventListener('DOMContentLoaded', () => {
        // Select Modal Elements
        const eventModal = document.getElementById('event-modal');
        const closeEventBtn = document.getElementById('close-event');
        const eventBackdrop = document.getElementById('event-backdrop');
        
        // Select Dynamic Content Elements
        const modalImg = document.getElementById('modal-event-img');
        const modalTitle = document.getElementById('modal-event-title');
        const modalDesc = document.getElementById('modal-event-desc');

        // Select All "Check Event" Buttons
        const checkBtns = document.querySelectorAll('.check-event-btn');

        // Function to Open Modal
        function openEventModal(btn) {
            // 1. Get data from the clicked button
            const img = btn.getAttribute('data-img');
            const title = btn.getAttribute('data-title');
            const desc = btn.getAttribute('data-desc');

            // 2. Set the data into the modal elements
            modalImg.src = img;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            // 3. Show the modal
            eventModal.classList.remove('hidden');
            eventModal.classList.add('flex');
        }

        // Function to Close Modal
        function closeEventModal() {
            eventModal.classList.add('hidden');
            eventModal.classList.remove('flex');
        }

        // Add Click Listeners to all buttons
        checkBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                openEventModal(btn);
            });
        });

        // Add Close Listeners
        if(closeEventBtn) closeEventBtn.addEventListener('click', closeEventModal);
        if(eventBackdrop) eventBackdrop.addEventListener('click', closeEventModal);
    });
