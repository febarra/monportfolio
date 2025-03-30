// Typing Animation
const welcomeText = "Développeur Full Stack Créatif"; // Texte à afficher lettre par lettre
const greetingElement = document.getElementById('greeting'); // Sélection de l'élément où afficher le texte
let index = 0; // Indice de la lettre actuelle

// Fonction pour afficher le texte lettre par lettre
function typeText() {
    if (index <= welcomeText.length) {
        greetingElement.textContent = welcomeText.slice(0, index); // Affiche une portion du texte
        index++; // Incrémente l'indice
        setTimeout(typeText, 100); // Répète la fonction toutes les 100ms
    }
}

typeText(); // Démarre l'animation

// Project Data
const projects = [ // Tableau contenant les projets à afficher
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Une plateforme e-commerce moderne et performante",
        longDescription: "Développement complet d'une plateforme e-commerce utilisant React, Node.js et PostgreSQL. Intégration de paiements Stripe, gestion des stocks en temps réel et tableau de bord administrateur personnalisé.",
        image: "C:/Users/HP envy/Desktop/bew/com.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"] // Technologies utilisées
    },
    {
        id: 2,
        title: "Application Mobile",
        description: "Application de suivi de fitness",
        longDescription: "Application mobile cross-platform développée avec React Native. Fonctionnalités incluant le suivi d'exercices, analyses de progression, et synchronisation cloud.",
        image: "mob.jpg",
        technologies: ["React Native", "Firebase", "TypeScript"]
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        description: "Tableau de bord analytique en temps réel",
        longDescription: "Dashboard analytique sophistiqué avec visualisations de données en temps réel, rapports personnalisables et intégration API multiple.",
        image: "dash.jpg",
        technologies: ["D3.js", "Next.js", "Python", "AWS"]
    }
];

// Modal Functionality
const modal = document.getElementById('project-modal'); // Récupération du modal
const modalImage = document.getElementById('modal-image'); // Image du projet dans le modal
const modalTitle = document.getElementById('modal-title'); // Titre du projet
const modalDescription = document.getElementById('modal-description'); // Description détaillée du projet
const modalTechnologies = document.getElementById('modal-technologies'); // Liste des technologies utilisées
const modalClose = document.querySelector('.modal-close'); // Bouton pour fermer le modal

// Fonction pour ouvrir le modal avec les détails du projet sélectionné
function openModal(projectId) {
    const project = projects.find(p => p.id === parseInt(projectId)); // Recherche du projet par ID
    if (!project) return; // Si le projet n'est pas trouvé, on arrête la fonction

    // Mise à jour du contenu du modal
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.longDescription;
    
    // Génération dynamique des technologies sous forme de balises HTML
    modalTechnologies.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    modal.classList.add('active'); // Ajoute la classe pour afficher le modal
    document.body.style.overflow = 'hidden'; // Empêche le défilement en arrière-plan
}

// Fonction pour fermer le modal
function closeModal() {
    modal.classList.remove('active'); // Cache le modal
    document.body.style.overflow = ''; // Réactive le défilement
}

// Event Listeners
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id)); // Ouvre le modal en cliquant sur un projet
});

modalClose.addEventListener('click', closeModal); // Ferme le modal en cliquant sur la croix
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(); // Ferme le modal si on clique en dehors
});

// Form Handling
const contactForm = document.getElementById('contact-form'); // Sélection du formulaire de contact

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi classique du formulaire
    alert('Message envoyé !'); // Affiche une alerte
    contactForm.reset(); // Réinitialise les champs du formulaire
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const target = document.querySelector(this.getAttribute('href')); // Récupère la cible du lien
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth' // Défilement fluide vers la section ciblée
            });
        }
    });
});
