// Album Modal Functionality
(function() {
  'use strict';

  // Open modal
  function openModal(albumId) {
    const modal = document.getElementById('album-modal-' + albumId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
  }

  // Close modal
  function closeModal(albumId) {
    const modal = document.getElementById('album-modal-' + albumId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scroll
    }
  }

  // Close modal on outside click
  function handleModalClick(event, albumId) {
    if (event.target.classList.contains('modal')) {
      closeModal(albumId);
    }
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to album cards
    const albumCards = document.querySelectorAll('.album-card');
    albumCards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const albumId = this.dataset.albumId;
        openModal(albumId);
      });
    });

    // Add click handlers to close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const albumId = this.dataset.albumId;
        closeModal(albumId);
      });
    });

    // Add click handlers to modal backgrounds
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      const albumId = modal.id.replace('album-modal-', '');
      modal.addEventListener('click', function(e) {
        handleModalClick(e, albumId);
      });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          const albumId = activeModal.id.replace('album-modal-', '');
          closeModal(albumId);
        }
      }
    });
  });
})();
