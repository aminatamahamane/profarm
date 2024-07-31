document.addEventListener('DOMContentLoaded', function () {
    // Gestion du formulaire de contact
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message envoyé !');
    });

    // Animation de défilement des partenaires
    const partnerSlider = document.querySelector('.partners-slider');
    const partnerImages = partnerSlider.querySelectorAll('img');
    let currentPartnerIndex = 0;

    function showNextPartnerImage() {
        partnerImages[currentPartnerIndex].classList.remove('visible');
        currentPartnerIndex = (currentPartnerIndex + 1) % partnerImages.length;
        partnerImages[currentPartnerIndex].classList.add('visible');
    }

    setInterval(showNextPartnerImage, 5000); // Change image every 5 seconds

    // Animation de défilement des images de la section d'accueil
    const homeSlider = document.querySelector('.home-slider');
    const slides = homeSlider.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showNextSlide() {
        slides[currentSlideIndex].style.opacity = 0;
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].style.opacity = 1;
    }

    setInterval(showNextSlide, 5000);

    // Gestion du bouton "Next"
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', showNextSlide);

    // Menu hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
