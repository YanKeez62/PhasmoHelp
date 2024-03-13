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

        const proof1 = document.createElement('img');
        proof1.classList.add('entity-proof1');
        proof1.src = entity.proof1;
        proof1.alt = entity.name;

        const proof2 = document.createElement('img');
        proof2.classList.add('entity-proof2');
        proof2.src = entity.proof2;
        proof2.alt = entity.name;

        const proof3 = document.createElement('img');
        proof3.classList.add('entity-proof3');
        proof3.src = entity.proof3;
        proof3.alt = entity.name;

        const divProofs = document.createElement('div');
        divProofs.classList.add('entity-proofs-div');
        divProofs.appendChild(proof1);
        divProofs.appendChild(proof2);
        divProofs.appendChild(proof3);

        const help1 = document.createElement('li');
        help1.classList.add("help1");
        help1.textContent = entity.help1;

        const ulHelp = document.createElement('ul');
        ulHelp.classList.add('ul-help');

        card.appendChild(name);
        card.appendChild(speed);
        card.appendChild(treshold);
        card.appendChild(divProofs);

        entityContainer.appendChild(card);
    });
}