fetch('https://raw.githubusercontent.com/YanKeez62/PhasmoHelp/main/js%2Bjson/entity.json')
    .then(response => response.json())
    .then(data => {
        displayEntities(data);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement des données :', error);
    });

function displayEntities(entities) {
    const entityContainer = document.getElementById('entity-container');

    entities.forEach(entity => {
        const card = document.createElement('div');
        card.classList.add('entity-card');

        const name = document.createElement('h2');
        name.classList.add('entity-name');
        name.textContent = entity.name;

        const speed = document.createElement('p');
        speed.classList.add('entity-speed');
        speed.textContent = "Vitesse de l'entité : " + entity.speed;

        const treshold = document.createElement('p');
        treshold.classList.add('entity-chase-treshold');
        treshold.textContent = "Seuil de santé mentale pour chasser : " + entity.treshold;

        card.appendChild(name);
        card.appendChild(speed);
        card.appendChild(treshold);

        entityContainer.appendChild(card);
    });
}