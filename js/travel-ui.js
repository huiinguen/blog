// js/travel-ui.js

function renderProvinces(provincesGrid, onPlaceToggle, onCardExpand) {
    provincesGrid.innerHTML = '';
    for (const provinceId in provincesData) {
        const province = provincesData[provinceId];
        const card = createProvinceCard(provinceId, province, onPlaceToggle, onCardExpand);
        provincesGrid.appendChild(card);
    }
    applyFadeInEffect();
}

function createProvinceCard(provinceId, province, onPlaceToggle, onCardExpand) {
    const provinceCard = document.createElement('div');
    provinceCard.classList.add('glass-card', 'province-card', 'fade-in-on-scroll');
    provinceCard.dataset.province = provinceId;

    // Initial render of the card content
    updateProvinceCardContent(provinceCard, provinceId, province);

    // Attach a single event listener to the provinceCard for all clicks within it
    // Use event delegation to handle clicks on individual places and card expansion
    provinceCard.addEventListener('click', (event) => {
        // Handle click on a place item (e.g., to toggle completion)
        const listItem = event.target.closest('.places-list-container li');
        if (listItem) {
            const placeId = listItem.dataset.placeId;
            onPlaceToggle(provinceId, placeId);
            return; // Exit if a place was clicked, to prevent card expansion
        }

        // Handle click on the card itself to expand/collapse, but not if clicking a reward section
        if (!event.target.closest('.province-reward')) {
            onCardExpand(provinceCard);
        }
    });

    return provinceCard;
}

function updateProvinceCardContent(provinceCard, provinceId, province) {
    const completedPlaces = province.places.filter(place => place.completed).length;
    const totalPlaces = province.places.length;
    const progressPercentage = totalPlaces > 0 ? (completedPlaces / totalPlaces) * 100 : 0;
    const isExpanded = provinceCard.classList.contains('expanded'); // Preserve expanded state

    provinceCard.innerHTML = `
        <h3>${province.name}</h3>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${progressPercentage}%;">
                <span class="progress-percentage">${Math.round(progressPercentage)}%</span>
            </div>
        </div>
        <div class="places-list-container">
            <ul class="places-list">
                ${province.places.map(place => `
                    <li class="${place.completed ? 'completed' : ''}" data-place-id="${place.id}">
                        <span>${place.name}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Re-apply expanded class if it was expanded before updating content
    if (isExpanded) {
        provinceCard.classList.add('expanded');
    }
}

function updateStatsUI(completedProvinces, totalProvinces, score, rank) {
    document.getElementById('completed-provinces').textContent = completedProvinces;
    document.getElementById('total-provinces').textContent = totalProvinces;
    document.getElementById('total-score').textContent = score;
    document.getElementById('current-rank').textContent = rank;
}

function openRankModal(userScore) {
    const rankModal = document.getElementById('rank-modal');
    const rankListElement = document.getElementById('rank-list');
    rankListElement.innerHTML = '';

    const ranks = getRankList(); // Lấy danh sách rank từ travel-ranks.js
    ranks.forEach(rank => {
        const listItem = document.createElement('li');
        // Xác định xem đây có phải là rank hiện tại để làm nổi bật
        const isCurrentRank = userScore >= rank.score && 
                              (ranks.indexOf(rank) === ranks.length - 1 || userScore < ranks[ranks.indexOf(rank) + 1].score);

        listItem.classList.toggle('current-rank-highlight', isCurrentRank);
        listItem.innerHTML = `
            <span class="rank-name">${rank.name}</span>
            <span class="rank-score-req">
                ${rank.score}<i class="fas fa-fire rank-icon"></i> </span>
        `;
        rankListElement.appendChild(listItem);
    });

    rankModal.style.display = 'flex';
}
function closeRankModal() {
    const rankModal = document.getElementById('rank-modal');
    rankModal.style.display = 'none';
}

// Global utility to apply fade-in effect (assuming it's defined elsewhere, e.g., effects.js)
function applyFadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Function to filter provinces based on search term
function filterProvinces(searchTerm) {
    const provincesGrid = document.getElementById('provinces-grid');
    const cards = provincesGrid.getElementsByClassName('province-card');
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    for (const card of cards) {
        const provinceName = card.querySelector('h3').textContent.toLowerCase();
        if (provinceName.includes(normalizedSearchTerm)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    }
}