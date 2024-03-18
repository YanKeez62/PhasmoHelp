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

        const help2 = document.createElement('li');
        help1.classList.add("help2");
        help1.textContent = entity.help2;

        const help3 = document.createElement('li');
        help1.classList.add("help3");
        help1.textContent = entity.help3;

        const help4 = document.createElement('li');
        help1.classList.add("help4");
        help1.textContent = entity.help4;

        const ulHelp = document.createElement('ul');
        ulHelp.classList.add('ul-help');
        ulHelp.appendChild(help1);
        ulHelp.appendChild(help2);
        ulHelp.appendChild(help3);
        ulHelp.appendChild(help4);

        card.appendChild(name);
        card.appendChild(speed);
        card.appendChild(treshold);
        card.appendChild(divProofs);
        card.appendChild(ulHelp);

        entityContainer.appendChild(card);
    });
}