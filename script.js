// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section'); // Corrigé : 'sections' au lieu de 'selections'
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Augmenté un peu pour un déclenchement plus fluide
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if(targetLink) targetLink.classList.add('active');
            });
            
            // active sections for animation
            sec.classList.add('show-animate');
        }
        // Pour répéter l'animation à chaque passage
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    // Note: On ne le fait que si le menu est ouvert pour éviter des calculs inutiles
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }

    // animation footer on scroll
    let footer = document.querySelector('footer');
    if(footer) {
        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight - 10);
    }
}

// Déclenche le scroll une fois au chargement pour activer la section Home immédiatement
window.dispatchEvent(new Event('scroll'));