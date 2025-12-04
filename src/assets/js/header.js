document.addEventListener('DOMContentLoaded', () => {
    // Select Elements
    const announceBtn = document.getElementById('announcement-btn');
    const announceModal = document.getElementById('announcement-modal');
    const closeAnnounceBtn = document.getElementById('close-announcement');
    const announceBackdrop = document.getElementById('announcement-backdrop');

    // Function to Open Modal
    function openAnnouncement() {
        if(announceModal) {
            announceModal.classList.remove('hidden');
            announceModal.classList.add('flex');
            
            // Re-initialize icons to ensure they appear inside the modal
            if(window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    // Function to Close Modal
    function closeAnnouncement() {
        if(announceModal) {
            announceModal.classList.add('hidden');
            announceModal.classList.remove('flex');
        }
    }

    // Event Listeners
    if (announceBtn) {
        announceBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default button behavior
            openAnnouncement();
        });
    }

    if (closeAnnounceBtn) {
        closeAnnounceBtn.addEventListener('click', closeAnnouncement);
    }

    if (announceBackdrop) {
        announceBackdrop.addEventListener('click', closeAnnouncement);
    }

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !announceModal.classList.contains('hidden')) {
            closeAnnouncement();
        }
    });
});
// --- FEEDBACK MODAL LOGIC ---

    // Select Elements
    const feedbackBtn = document.getElementById('feedback-btn');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeFeedbackBtn = document.getElementById('close-feedback');
    const feedbackBackdrop = document.getElementById('feedback-backdrop');
    const feedbackForm = document.getElementById('feedback-form');

    // Open Function
    function openFeedback() {
        if(feedbackModal) {
            feedbackModal.classList.remove('hidden');
            feedbackModal.classList.add('flex');
            if(window.lucide) window.lucide.createIcons();
        }
    }

    // Close Function
    function closeFeedback() {
        if(feedbackModal) {
            feedbackModal.classList.add('hidden');
            feedbackModal.classList.remove('flex');
        }
    }

    // Event Listeners for Open/Close
    if(feedbackBtn) feedbackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openFeedback();
    });
    if(closeFeedbackBtn) closeFeedbackBtn.addEventListener('click', closeFeedback);
    if(feedbackBackdrop) feedbackBackdrop.addEventListener('click', closeFeedback);

    // --- FORM SUBMISSION LOGIC (Required for Project) ---
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload

            // Get values (Optional: you can use these if you want to display the name)
            const name = document.getElementById('f-name').value;

            // 1. Show the Alert [Project Requirement]
            alert(`Thank you, ${name}! Your feedback has been submitted successfully.`);

            // 2. Reset the form
            feedbackForm.reset();

            // 3. Close the modal
            closeFeedback();
        });
    }