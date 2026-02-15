// Translations
const translations = {
    it: {
        'nav-about': 'Chi Sono',
        'nav-skills': 'Competenze',
        'nav-projects': 'Progetti',
        'nav-experience': 'Esperienza',
        'nav-contact': 'Contatti',
        'hero-badge': 'Disponibile per nuove opportunità',
        'hero-greeting': 'Ciao, sono',
        'hero-role': 'Full Stack Developer',
        'hero-tagline': 'Creo soluzioni web innovative con tecnologie moderne',
        'hero-viewWork': 'Vedi il mio lavoro',
        'hero-getInTouch': 'Contattami',
        'about-title': 'Chi Sono',
        'about-subtitle': 'Chi Sono',
        'about-description': 'Sono un Full Stack Developer appassionato con esperienza nelle tecnologie web moderne. Amo creare applicazioni efficienti, scalabili e user-friendly che risolvono problemi reali.',
        'about-highlight1': '3+ anni di esperienza nello sviluppo',
        'about-highlight2': 'Specializzato in React e Node.js',
        'about-highlight3': 'Focus su ottimizzazione delle performance',
        'about-highlight4': 'Appassionato di codice pulito e best practices',
        'about-whatIDo': 'Cosa Faccio',
        'about-whatIDoDesc': 'Mi specializzo nella creazione di applicazioni web moderne con focus su performance, scalabilità ed esperienza utente.',
        'about-myApproach': 'Il Mio Approccio',
        'about-myApproachDesc': 'Credo nella scrittura di codice pulito e manutenibile seguendo le best practices.',
        'skills-title': 'La Mia Expertise',
        'skills-subtitle': 'Competenze & Tecnologie',
        'skills-description': 'Un toolkit completo di tecnologie e framework moderni con cui lavoro',
        'projects-subtitle': 'Progetti in Evidenza',
        'projects-description': 'Ecco alcuni dei miei progetti recenti',
        'project1-title': 'Sito per vendita di Plugin',
        'project1-desc': 'una pagina web per la vendità di plugin minecraft',
        'project2-title': 'Store Minecraft per FrostMC',
        'project2-desc': 'Store Minecraft con sistema back-end',
        'experience-title': 'Percorso Professionale',
        'experience-subtitle': 'Esperienza Lavorativa',
        'experience-achievements': 'Risultati Principali:',
        'contact-title': 'Mettiti in Contatto',
        'contact-subtitle': 'Lavoriamo Insieme',
        'contact-description': 'Hai un progetto in mente?',
        'contact-formTitle': 'Invia un Messaggio',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Messaggio',
        'contact-send': 'Invia Messaggio',
        'contact-contactInfo': 'Informazioni di Contatto',
        'contact-cvTitle': 'Scarica il Mio CV',
        'contact-cvDescription': 'Ottieni una panoramica dettagliata',
        'contact-downloadCV': 'Scarica CV',
        'footer-tagline': 'Costruisco il web, un progetto alla volta',
        'footer-madeWith': 'Fatto con',
        'footer-and': 'e'
    },
    en: {
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-badge': 'Available for new opportunities',
        'hero-greeting': 'Hi, I\'m',
        'hero-role': 'Full Stack Developer',
        'hero-tagline': 'Building innovative web solutions with modern technologies',
        'hero-viewWork': 'View My Work',
        'hero-getInTouch': 'Get In Touch',
        'about-title': 'About Me',
        'about-subtitle': 'Who I Am',
        'about-description': 'I\'m a passionate Full Stack Developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
        'about-highlight1': '3+ years of development experience',
        'about-highlight2': 'Specialized in React and Node.js',
        'about-highlight3': 'Strong focus on performance optimization',
        'about-highlight4': 'Passionate about clean code and best practices',
        'about-whatIDo': 'What I Do',
        'about-whatIDoDesc': 'I specialize in building modern web applications with a focus on performance, scalability, and user experience.',
        'about-myApproach': 'My Approach',
        'about-myApproachDesc': 'I believe in writing clean, maintainable code and following best practices.',
        'skills-title': 'My Expertise',
        'skills-subtitle': 'Skills & Technologies',
        'skills-description': 'A comprehensive toolkit of modern technologies and frameworks I work with',
        'projects-subtitle': 'Featured Projects',
        'projects-description': 'Here are some of my recent projects',
        'project1-title': 'Plugin Selling Site',
        'project1-desc': 'A web page for selling minecraft plugins',
        'project2-title': 'Store Minecraft for FrostMC',
        'project2-desc': 'Store Minecraft with back-end sistem',
        'experience-title': 'Career Path',
        'experience-subtitle': 'Work Experience',
        'experience-achievements': 'Key Achievements:',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Let\'s Work Together',
        'contact-description': 'Have a project in mind?',
        'contact-formTitle': 'Send a Message',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'contact-contactInfo': 'Contact Information',
        'contact-cvTitle': 'Download My CV',
        'contact-cvDescription': 'Get a detailed overview',
        'contact-downloadCV': 'Download CV',
        'footer-tagline': 'Building the web, one project at a time',
        'footer-madeWith': 'Made with',
        'footer-and': 'and'
    }
};

// Current language
let currentLang = 'it';

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    updateLanguage();
    
    // Update button text
    document.getElementById('langText').textContent = currentLang === 'it' ? 'EN' : 'IT';
    document.getElementById('langTextMobile').textContent = currentLang === 'it' ? 'EN' : 'IT';
}

// Update all translations
function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-mobile a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Language button
document.getElementById('langBtn').addEventListener('click', toggleLanguage);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert(currentLang === 'it'
            ? 'Messaggio inviato! Ti risponderò presto.'
            : 'Message sent! I\'ll get back to you soon.');
        form.reset();
    } else {
        alert('Errore nell’invio. Riprova più tardi.');
    }
});

// Initialize
updateLanguage();