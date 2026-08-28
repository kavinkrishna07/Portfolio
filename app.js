/**
 * Digital Forensics Presentation App - NotPetya Cyberattack (2017)
 * Handles slide switching, keyboard shortcuts, speaker notes toggle, and fullscreen.
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-card');
  const totalSlides = slides.length;
  let currentSlide = 1;

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnNotes = document.getElementById('btn-notes');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const slideSelect = document.getElementById('slide-select');
  const progressBar = document.getElementById('progress-bar');
  const speakerNotes = document.querySelectorAll('.speaker-notes');

  let isNotesVisible = false;

  // Initialize view
  updateSlideView(1);

  // Button Listeners
  btnPrev.addEventListener('click', () => {
    if (currentSlide > 1) {
      updateSlideView(currentSlide - 1);
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentSlide < totalSlides) {
      updateSlideView(currentSlide + 1);
    }
  });

  slideSelect.addEventListener('change', (e) => {
    const targetSlide = parseInt(e.target.value, 10);
    if (targetSlide >= 1 && targetSlide <= totalSlides) {
      updateSlideView(targetSlide);
    }
  });

  btnNotes.addEventListener('click', toggleSpeakerNotes);

  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Keyboard Shortcuts Listener
  document.addEventListener('keydown', (e) => {
    // Ignore keypresses if focus is on an input or select element
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'Space':
      case 'PageDown':
        e.preventDefault();
        if (currentSlide < totalSlides) updateSlideView(currentSlide + 1);
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        if (currentSlide > 1) updateSlideView(currentSlide - 1);
        break;

      case 'Home':
        e.preventDefault();
        updateSlideView(1);
        break;

      case 'End':
        e.preventDefault();
        updateSlideView(totalSlides);
        break;

      case 'n':
      case 'N':
        toggleSpeakerNotes();
        break;

      case 'f':
      case 'F':
        toggleFullscreen();
        break;

      default:
        // Number keys 1-6 for instant slide jumps
        if (e.key >= '1' && e.key <= String(totalSlides)) {
          updateSlideView(parseInt(e.key, 10));
        }
        break;
    }
  });

  /**
   * Main function to switch slides and update state
   */
  function updateSlideView(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;

    currentSlide = slideNum;

    // Update active slide card
    slides.forEach((slide) => {
      const num = parseInt(slide.getAttribute('data-slide'), 10);
      if (num === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update button states
    btnPrev.disabled = (currentSlide === 1);
    btnNext.disabled = (currentSlide === totalSlides);

    // Update select dropdown
    slideSelect.value = String(currentSlide);

    // Update progress bar percentage
    const progressPercent = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  /**
   * Toggle Speaker Notes Visibility
   */
  function toggleSpeakerNotes() {
    isNotesVisible = !isNotesVisible;
    btnNotes.classList.toggle('active', isNotesVisible);
    speakerNotes.forEach((note) => {
      note.classList.toggle('visible', isNotesVisible);
    });
  }

  /**
   * Toggle Fullscreen Mode
   */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
      btnFullscreen.classList.add('active');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      btnFullscreen.classList.remove('active');
    }
  }
});
