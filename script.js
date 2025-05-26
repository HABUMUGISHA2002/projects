// Open modal
function openModal() {
    document.getElementById("loginModal").classList.add("show");
}

// Close modal
function closeModal() {
    document.getElementById("loginModal").classList.remove("show");
}

// Optional: Close modal when clicking outside modal-content
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        closeModal();
    }
}

