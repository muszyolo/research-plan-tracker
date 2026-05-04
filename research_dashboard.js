// Chart Configuration for Research Journey (April 2026 - April 2027)
const ctx = document.getElementById('researchChart').getContext('2d');

const months = [
    'Apr 26', 'May 26', 'Jun 26', 'Jul 26', 'Aug 26', 'Sep 26', 
    'Oct 26', 'Nov 26', 'Dec 26', 'Jan 27', 'Feb 27', 'Mar 27', 'Apr 27'
];

// Projected Completion Percentage
const projectedProgress = [0, 8, 15, 25, 35, 45, 55, 65, 75, 85, 92, 98, 100];

new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Completion Progress (%)',
            data: projectedProgress,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 4,
            fill: true,
            tension: 0.3,
            pointRadius: 6,
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#020617',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#f59e0b',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#0f172a',
                titleColor: '#10b981',
                bodyColor: '#f8fafc',
                padding: 12,
                cornerRadius: 12,
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.03)'
                },
                ticks: {
                    color: '#94a3b8',
                    callback: function(value) { return value + '%'; }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94a3b8',
                    font: {
                        size: 11
                    }
                }
            }
        }
    }
});

// --- Habit Tracking Logic (Day-by-Day) ---
let currentViewDate = new Date();

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function displayDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    document.getElementById('habit-date').innerText = date.toLocaleDateString('en-US', options);
}

function changeDate(days) {
    currentViewDate.setDate(currentViewDate.getDate() + days);
    updateUIForDate();
}

function toggleCheck(element, index) {
    element.classList.toggle('checked');
    saveProgressForDate();
    calculateStreak();
}

function saveProgressForDate() {
    const dateKey = formatDate(currentViewDate);
    const checks = [];
    document.querySelectorAll('#habit-list .checklist-item').forEach((item) => {
        checks.push(item.classList.contains('checked'));
    });
    
    let history = JSON.parse(localStorage.getItem('researchHistory') || '{}');
    history[dateKey] = checks;
    localStorage.setItem('researchHistory', JSON.stringify(history));
}

function updateUIForDate() {
    const dateKey = formatDate(currentViewDate);
    displayDate(currentViewDate);
    
    let history = JSON.parse(localStorage.getItem('researchHistory') || '{}');
    const checks = history[dateKey] || [false, false, false, false, false];
    
    document.querySelectorAll('#habit-list .checklist-item').forEach((item, index) => {
        if (checks[index]) {
            item.classList.add('checked');
        } else {
            item.classList.remove('checked');
        }
    });
}

function calculateStreak() {
    let history = JSON.parse(localStorage.getItem('researchHistory') || '{}');
    let streak = 0;
    let checkDate = new Date(); // Start from today
    
    while (true) {
        const dateKey = formatDate(checkDate);
        const dayData = history[dateKey];
        
        // If all 5 habits were completed
        if (dayData && dayData.every(c => c === true)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    document.getElementById('streak-count').innerText = streak;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUIForDate();
    calculateStreak();
});
