// Chargement des données depuis le fichier JSON
fetch('entity.json')
    .then(response => response.json())
    .then(data => {
        displayEntities(data);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement des données :', error);
    });

// Fonction pour afficher les entités sur le site
function displayEntities(entities) {
    const entityContainer = document.getElementById('entity-container'); // L'élément HTML où tu veux afficher les entités

    // Parcours des données et création des cartes d'entités
    entities.forEach(entity => {
        const card = document.createElement('div');
        card.classList.add('entity-card');

        const name = document.createElement('h2');
        name.classList.add('entity-name');
        name.textContent = entity.name;

        const speed = document.createElement('p');
        speed.classList.add('entity-speed');
        speed.textContent = entity.speed;

        const treshold = document.createElement('p');
        treshold.classList.add('entity-chase-treshold');
        treshold.textContent = entity.treshold;

        card.appendChild(name);
        card.appendChild(speed);
        card.appendChild(treshold);

        entityContainer.appendChild(card);
    });
}