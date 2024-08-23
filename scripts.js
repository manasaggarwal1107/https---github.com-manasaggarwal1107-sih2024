const plants = [
    {
        name: 'Aloe Vera',
        botanicalName: 'Aloe barbadensis',
        commonNames: ['Aloe', 'True Aloe'],
        habitat: 'Tropical and subtropical regions',
        medicinalUses: 'Used for skin care, burns, and digestion',
        cultivation: 'Prefers well-drained soil and full sunlight',
        img: 'assets/aloe_vera.jpg',
        video: 'assets/aloe_vera.mp4',
        audio: 'assets/aloe_vera.mp3',
        category: 'skincare'
    },
    {
        name: 'Tulsi',
        botanicalName: 'Ocimum sanctum',
        commonNames: ['Holy Basil', 'Sacred Basil'],
        habitat: 'Tropical regions, especially India',
        medicinalUses: 'Boosts immunity, relieves stress, and aids digestion',
        cultivation: 'Grows well in warm climates and requires regular watering',
        img: 'assets/tulsi.jpg',
        video: 'assets/tulsi.mp4',
        audio: 'assets/tulsi.mp3',
        category: 'immunity'
    },
    {
        name: 'Ginger',
        botanicalName: 'Zingiber officinale',
        commonNames: ['Ginger'],
        habitat: 'Tropical regions',
        medicinalUses: 'Relieves nausea, improves digestion, and reduces inflammation',
        cultivation: 'Requires rich, well-drained soil and regular watering',
        img: 'assets/ginger.jpg',
        video: 'assets/ginger.mp4',
        audio: 'assets/ginger.mp3',
        category: 'digestive'
    },
    {
        name: 'Peppermint',
        botanicalName: 'Mentha piperita',
        commonNames: ['Peppermint'],
        habitat: 'Temperate regions, often found in gardens',
        medicinalUses: 'Soothes digestive issues, relieves headaches',
        cultivation: 'Prefers moist, well-drained soil and partial shade',
        img: 'assets/peppermint.jpg',
        video: 'assets/peppermint.mp4',
        audio: 'assets/peppermint.mp3',
        category: 'digestive'
    },
];

function displayPlants() {
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = '';

    plants.forEach(plant => {
        const plantItem = document.createElement('div');
        plantItem.classList.add('plant-item');
        plantItem.innerHTML = `
            <img src="${plant.img}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p><strong>Botanical Name:</strong> ${plant.botanicalName}</p>
            <p><strong>Common Names:</strong> ${plant.commonNames.join(', ')}</p>
            <p><strong>Habitat:</strong> ${plant.habitat}</p>
            <p><strong>Medicinal Uses:</strong> ${plant.medicinalUses}</p>
            <p><strong>Cultivation:</strong> ${plant.cultivation}</p>
            <a href="${plant.video}" target="_blank">Watch Video</a>
            <a href="${plant.audio}" target="_blank">Listen to Description</a>
        `;
        plantList.appendChild(plantItem);
    });
}

function searchPlants() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchInput) ||
        plant.commonNames.some(name => name.toLowerCase().includes(searchInput))
    );
    displayFilteredPlants(filteredPlants);
}

function displayFilteredPlants(filteredPlants) {
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = '';

    filteredPlants.forEach(plant => {
        const plantItem = document.createElement('div');
        plantItem.classList.add('plant-item');
        plantItem.innerHTML = `
            <img src="${plant.img}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p><strong>Botanical Name:</strong> ${plant.botanicalName}</p>
            <p><strong>Common Names:</strong> ${plant.commonNames.join(', ')}</p>
            <p><strong>Habitat:</strong> ${plant.habitat}</p>
            <p><strong>Medicinal Uses:</strong> ${plant.medicinalUses}</p>
            <p><strong>Cultivation:</strong> ${plant.cultivation}</p>
            <a href="${plant.video}" target="_blank">Watch Video</a>
            <a href="${plant.audio}" target="_blank">Listen to Description</a>
        `;
        plantList.appendChild(plantItem);
    });
}

function startTour(category) {
    const tourContent = document.getElementById('tour-content');
    const filteredPlants = plants.filter(plant => plant.category === category);
    tourContent.innerHTML = '<h3>Tour: ' + category.charAt(0).toUpperCase() + category.slice(1) + '</h3>';

    filteredPlants.forEach(plant => {
        tourContent.innerHTML += `
            <div>
                <h4>${plant.name}</h4>
                <p>${plant.description}</p>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPlants();
});
