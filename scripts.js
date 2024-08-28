
const plants = [
    {
        name: 'Aloe Vera',
        botanicalName: 'Aloe barbadensis miller',
        commonNames: ['Aloe', 'Aloe Vera'],
        uses: ['Skin care', 'Digestive health'],
        img: 'https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20=' 
    },
    {
        name: 'Basil',
        botanicalName: 'Ocimum basilicum',
        commonNames: ['Holy Basil', 'Tulsi'],
        uses: ['Immune support', 'Digestive health'],
        img: 'https://m.media-amazon.com/images/I/51W8xfdp-iL._AC_UF1000,1000_QL80_.jpg' 
    },
    {
        name: 'Ginger',
        botanicalName: 'Zingiber officinale',
        commonNames: ['Ginger'],
        uses: ['Digestive health', 'Anti-inflammatory'],
        img: 'https://cdn.britannica.com/19/231119-050-35483892/Indian-ginger-Zingiber-officinale.jpg' 
    }
    
];


const methodologies = [
    {
        name: 'Ayurveda',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPLnwedKSCmdkb5oBoEBun9IDlDc4gFKBeQ&s', 
        description: 'Ayurveda, or Ayurvedic medicine, is an ancient Indian medical system that uses a holistic approach to physical and mental health. The term comes from the Sanskrit words ayur (life) and veda (science or knowledge). The goal of Ayurveda is to restore balance to the body, mind, and spirit by cleansing the body and eliminating impurities.'
    },
    {
        name: 'Unani',
        img: 'https://medicaldialogues.in/h-upload/2022/03/26/172945-unani-medicine.webp', 
        description: 'Unani medicine is a traditional system of medicine that originated in Greece around 2,500 years ago, and is also known as Arabian or Islamic medicine. It\'s based on the idea that the body\'s balance of four elements (fire, water, earth, and air) and three temperaments (sanguinous, phlegmatic, bilious, and melancholic) leads to health, while imbalance leads to illness.'
    },
    {
        name: 'Siddha',
        img: 'https://img1.exportersindia.com/product_images/bc-full/2021/7/9042440/siddha-medicine-1625737088-5889279.jpg', 
        description: 'Siddha medicine is a traditional healing system from South India that combines ancient medicinal practices, spiritual disciplines, alchemy, and mysticism. The word "Siddha" comes from Tamil and means "perfected" or "holy immortal". The system is believed to have been founded by Agastyar, and is considered the mother medicine of the ancient Tamils and Dravidians.'
    },
    {
        name: 'Homeopathy',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOQg2vrCoLFu0e6gMphlEOLfJqwnkJmer9w&s', 
        description: 'Homeopathic medicine, also known as homeopathy, is an alternative medical system that uses highly diluted substances to treat disease and stimulate the body\'s healing response. Homeopathic medicines are made from plants, animals, and minerals, and are prepared according to international pharmacopoeia guidelines.'
    },
    {
        name: 'Yoga',
        img: 'https://cdn.policyx.com/cms-media/beginner-yoga-asanas-for-everyday-main-banner297-1721192874.webp', 
        description: 'The word \'Yoga\' comes from the Sanskrit word \'yuj\' which means \'to unite or integrate\'. Yoga is about the union of a person\'s own consciousness and the universal consciousness. Naturopathy is a cost effective drugless, non-invasive therapy involving the use of natural materials for health care and healthy living.'
    }
];


function initializeSlider() {
    const sliderContainer = document.querySelector('#methodology-slider .slider');
    sliderContainer.innerHTML = '';

    methodologies.forEach(method => {
        const slide = document.createElement('div');
        slide.classList.add('slider-slide');
        slide.innerHTML = `
            <img src="${method.img}" alt="${method.name}">
            <div>
                <h3>${method.name}</h3>
                <p>${method.description}</p>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });

    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); 
}


function searchPlants() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = '';

    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(input) ||
        plant.botanicalName.toLowerCase().includes(input) ||
        plant.commonNames.some(name => name.toLowerCase().includes(input))
    );

    filteredPlants.forEach(plant => {
        const plantItem = document.createElement('div');
        plantItem.classList.add('plant-item');
        plantItem.innerHTML = `
            <img src="${plant.img}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p><strong>Botanical Name:</strong> ${plant.botanicalName}</p>
            <p><strong>Common Names:</strong> ${plant.commonNames.join(', ')}</p>
            <p><strong>Uses:</strong> ${plant.uses.join(', ')}</p>
        `;
        plantList.appendChild(plantItem);
    });
}


function startTour(tourType) {
    const tourContent = document.getElementById('tour-content');
    let content;

    switch (tourType) {
        case 'digestive':
            content = '<p>-</p>';
            break;
        case 'immunity':
            content = '<p>-</p>';
            break;
        case 'skincare':
            content = '<p>-</p>';
            break;
        default:
            content = '<p>-</p>';
    }

    tourContent.innerHTML = content;
}


document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();

    const chatWidget = document.getElementById('chat-widget');
    const chatHeader = document.getElementById('chat-header');
    const closeChat = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    const toggleChatButton = document.getElementById('toggle-chat-button');

    const getAssistantResponse = (message) => {
        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "hi": "Hi there! How can I assist you today?",
            "plants": "We have a variety of plants you can explore. What are you interested in?",
            "tour": "We offer tours on Digestive Health, Immunity Boosting, and Skin Care. Which one would you like to start?",
            "digestive": "Digestive Health Tour focuses on plants that aid in digestion.",
            "immunity": "Immunity Boosting Tour covers plants that help strengthen your immune system.",
            "skincare": "Skin Care Tour features plants beneficial for your skin.",
            "default": "I'm not sure how to respond to that. Can you please ask something else?"
        };

        const lowerCaseMessage = message.toLowerCase();
        for (const key in responses) {
            if (lowerCaseMessage.includes(key)) {
                return responses[key];
            }
        }
        return responses["default"];
    };

    const toggleChatWidget = () => {
        chatWidget.style.display = chatWidget.style.display === 'none' ? 'block' : 'none';
    };

    toggleChatButton.addEventListener('click', toggleChatWidget);
    closeChat.addEventListener('click', () => {
        chatWidget.style.display = 'none';
    });

    sendMessageButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.textContent = `You: ${message}`;
            chatMessages.appendChild(userMessage);

            const assistantResponse = getAssistantResponse(message);
            const assistantMessage = document.createElement('div');
            assistantMessage.textContent = `Assistant: ${assistantResponse}`;
            chatMessages.appendChild(assistantMessage);

            userInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessageButton.click();
        }
    });

    
    searchPlants();
});
