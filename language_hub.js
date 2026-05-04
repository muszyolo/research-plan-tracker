let currentLanguage = 'english';
let progress = JSON.parse(localStorage.getItem('langProgress')) || {
    english: [], korean: [], chinese: [], philippine: []
};

// Notes storage per language
let languageNotes = JSON.parse(localStorage.getItem('langNotes')) || {
    english: "", korean: "", chinese: "", philippine: ""
};

// Default Thesis Deadline (6 months from now)
const THESIS_DEADLINE = "2026-11-30";

function init() {
    renderLanguage(currentLanguage);
    setupEventListeners();
    updateCountdown();
    
    // Auto-save notes
    const notesArea = document.getElementById('daily-notes');
    notesArea.addEventListener('input', (e) => {
        languageNotes[currentLanguage] = e.target.value;
        localStorage.setItem('langNotes', JSON.stringify(languageNotes));
    });

    // YouTube Search logic
    const searchInput = document.getElementById('youtube-search');
    const searchBtn = document.getElementById('search-btn');

    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            const langName = languageData[currentLanguage].name;
            const fullQuery = `${langName} language learning ${query}`;
            const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(fullQuery)}`;
            window.open(url, '_blank');
        }
    };

    searchBtn.onclick = performSearch;
    searchInput.onkeypress = (e) => { if (e.key === 'Enter') performSearch(); };
}

function updateCountdown() {
    const deadline = new Date(THESIS_DEADLINE);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-count').innerText = diffDays > 0 ? diffDays : 0;
}

function renderLanguage(langKey) {
    const data = languageData[langKey];
    currentLanguage = langKey;
    
    // Update active button
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === langKey);
    });

    // Update Header
    document.getElementById('lang-title').innerHTML = `<img src="${data.flag}" style="width: 48px; border-radius: 4px; border: 1px solid var(--border);"> ${data.name} Mastery`;
    document.documentElement.style.setProperty('--accent', data.color);

    // Update Notes
    document.getElementById('daily-notes').value = languageNotes[langKey] || "";

    // Render Roadmap
    const grid = document.getElementById('roadmap-grid');
    grid.innerHTML = '';
    
    data.roadmap.forEach(week => {
        const isCompleted = progress[langKey].includes(week.week);
        const card = document.createElement('div');
        card.className = `week-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="week-num">Week ${week.week}</div>
            <div class="topic-name">${week.topic}</div>
            <div class="concepts">${week.concepts}</div>
        `;
        card.onclick = () => toggleWeek(langKey, week.week);
        grid.appendChild(card);
    });

    // Render Resources
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = '';
    data.resources.forEach(res => {
        const link = document.createElement('a');
        link.href = res.url;
        link.className = 'resource-link';
        link.target = '_blank';
        link.innerText = res.name;
        resourceList.appendChild(link);
    });

    updateProgressBar(langKey);
}

function toggleWeek(langKey, weekNum) {
    const index = progress[langKey].indexOf(weekNum);
    if (index > -1) {
        progress[langKey].splice(index, 1);
    } else {
        progress[langKey].push(weekNum);
    }
    
    localStorage.setItem('langProgress', JSON.stringify(progress));
    renderLanguage(langKey);
}

function updateProgressBar(langKey) {
    const completed = progress[langKey].length;
    const total = 12;
    const percentage = (completed / total) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
}

function setupEventListeners() {
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.onclick = () => renderLanguage(btn.dataset.lang);
    });
}

document.addEventListener('DOMContentLoaded', init);
