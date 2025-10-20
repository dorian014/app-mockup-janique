const screens = document.querySelectorAll('.screen');
const navItems = document.querySelectorAll('.nav-item');

function switchTab(tabId, element) {
    // Get all tab buttons and contents within the quests screen
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Update active tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // Update active tab content
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function switchScreen(screenId, element) {
    const currentScreen = document.querySelector('.screen.active');
    const newScreen = document.getElementById(screenId);

    if (currentScreen === newScreen) return;

    // Animate out current screen
    currentScreen.classList.add('slide-out-left');

    setTimeout(() => {
        currentScreen.classList.remove('active', 'slide-out-left');

        // Animate in new screen
        newScreen.classList.add('active', 'slide-in-right');

        setTimeout(() => {
            newScreen.classList.remove('slide-in-right');
        }, 300);
    }, 300);

    // Update nav
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Trip data
const tripData = {
    paris: {
        city: 'Paris',
        dates: 'Mar 15-22, 2024',
        flag: '🇫🇷',
        budget: '£1,250',
        xp: '+2,500',
        totalXp: '2,500 XP',
        dailyBudget: '£178',
        heroGradient: 'linear-gradient(to bottom right, #ec4899, #9333ea)',
        timeline: [
            { color: '#ef4444', title: 'Day 1-2: Eiffel Tower & Seine', desc: 'Visited iconic landmarks, river cruise' },
            { color: '#3b82f6', title: 'Day 3-4: Louvre & Museums', desc: 'Art galleries, cultural experiences' },
            { color: '#10b981', title: 'Day 5-7: Versailles & Montmartre', desc: 'Palace tour, artistic quarter' }
        ],
        badges: [
            { icon: '🥐', name: 'Foodie Explorer', desc: '10+ restaurants', gradient: 'from-yellow-500 to-orange-500' },
            { icon: '🎨', name: 'Art Enthusiast', desc: '5+ museums', gradient: 'from-purple-500 to-pink-500' },
            { icon: '🗼', name: 'Landmark Hunter', desc: 'All top sites', gradient: 'from-blue-500 to-cyan-500' }
        ],
        xpBreakdown: [
            { category: '🍴 Dining', amount: '800 XP' },
            { category: '🎭 Culture', amount: '900 XP' },
            { category: '🚇 Transport', amount: '300 XP' },
            { category: '🎯 Challenges', amount: '500 XP' }
        ],
        budgetBreakdown: [
            { category: '🏨 Accommodation', amount: '£420', percentage: 34 },
            { category: '🍽️ Dining', amount: '£380', percentage: 30 },
            { category: '🎫 Activities', amount: '£280', percentage: 22 },
            { category: '🚊 Transport', amount: '£170', percentage: 14 }
        ]
    },
    tokyo: {
        city: 'Tokyo',
        dates: 'Jan 5-14, 2024',
        flag: '🇯🇵',
        budget: '¥180,000',
        xp: '+3,200',
        totalXp: '3,200 XP',
        dailyBudget: '¥20,000',
        heroGradient: 'linear-gradient(to bottom right, #ef4444, #db2777)',
        timeline: [
            { color: '#ef4444', title: 'Day 1-3: Shibuya & Shinjuku', desc: 'City exploration, neon lights' },
            { color: '#3b82f6', title: 'Day 4-6: Asakusa & Culture', desc: 'Temples, traditional experiences' },
            { color: '#10b981', title: 'Day 7-9: Mt. Fuji & Hakone', desc: 'Day trips, hot springs' }
        ],
        badges: [
            { icon: '🍱', name: 'Sushi Master', desc: '15+ Japanese meals', gradient: 'from-red-500 to-orange-500' },
            { icon: '🏮', name: 'Temple Explorer', desc: '8 temples visited', gradient: 'from-purple-500 to-pink-500' },
            { icon: '🗾', name: 'Island Hopper', desc: 'Multiple districts', gradient: 'from-blue-500 to-cyan-500' },
            { icon: '🎌', name: 'Culture Immersion', desc: 'Traditional activities', gradient: 'from-green-500 to-teal-500' }
        ],
        xpBreakdown: [
            { category: '🍱 Dining', amount: '1,200 XP' },
            { category: '⛩️ Culture', amount: '1,000 XP' },
            { category: '🚃 Transport', amount: '500 XP' },
            { category: '🎯 Challenges', amount: '500 XP' }
        ],
        budgetBreakdown: [
            { category: '🏨 Accommodation', amount: '¥65,000', percentage: 36 },
            { category: '🍽️ Dining', amount: '¥55,000', percentage: 31 },
            { category: '🎫 Activities', amount: '¥35,000', percentage: 19 },
            { category: '🚊 Transport', amount: '¥25,000', percentage: 14 }
        ]
    },
    newyork: {
        city: 'New York',
        dates: 'Nov 20-26, 2023',
        flag: '🇺🇸',
        budget: '$1,875',
        xp: '+1,800',
        totalXp: '1,800 XP',
        dailyBudget: '$312',
        heroGradient: 'linear-gradient(to bottom right, #3b82f6, #4f46e5)',
        timeline: [
            { color: '#ef4444', title: 'Day 1-2: Manhattan', desc: 'Times Square, Central Park' },
            { color: '#3b82f6', title: 'Day 3-4: Brooklyn & Queens', desc: 'Diverse neighborhoods' },
            { color: '#10b981', title: 'Day 5-6: Museums & Broadway', desc: 'Culture and entertainment' }
        ],
        badges: [
            { icon: '🗽', name: 'Liberty Seeker', desc: 'All major landmarks', gradient: 'from-blue-500 to-green-500' },
            { icon: '🏙️', name: 'Urban Explorer', desc: '5 boroughs visited', gradient: 'from-gray-600 to-gray-800' },
            { icon: '🎭', name: 'Broadway Fan', desc: '3 shows watched', gradient: 'from-purple-500 to-pink-500' }
        ],
        xpBreakdown: [
            { category: '🍕 Dining', amount: '600 XP' },
            { category: '🎨 Culture', amount: '700 XP' },
            { category: '🚇 Transport', amount: '200 XP' },
            { category: '🎯 Challenges', amount: '300 XP' }
        ],
        budgetBreakdown: [
            { category: '🏨 Accommodation', amount: '$750', percentage: 40 },
            { category: '🍽️ Dining', amount: '$525', percentage: 28 },
            { category: '🎫 Activities', amount: '$375', percentage: 20 },
            { category: '🚊 Transport', amount: '$225', percentage: 12 }
        ]
    },
    barcelona: {
        city: 'Barcelona',
        dates: 'Sep 8-13, 2023',
        flag: '🇪🇸',
        budget: '€980',
        xp: '+1,500',
        totalXp: '1,500 XP',
        dailyBudget: '€196',
        heroGradient: 'linear-gradient(to bottom right, #eab308, #ea580c)',
        timeline: [
            { color: '#ef4444', title: 'Day 1-2: Gaudí Tour', desc: 'Sagrada Familia, Park Güell' },
            { color: '#3b82f6', title: 'Day 3-4: Beach & Gothic Quarter', desc: 'Sun, sea, and history' },
            { color: '#10b981', title: 'Day 5: Montjuïc', desc: 'Views and culture' }
        ],
        badges: [
            { icon: '🏖️', name: 'Beach Lover', desc: 'Daily beach visits', gradient: 'from-blue-400 to-cyan-500' },
            { icon: '⛪', name: 'Architecture Fan', desc: 'Gaudí masterpieces', gradient: 'from-purple-500 to-pink-500' },
            { icon: '🥘', name: 'Tapas Expert', desc: '20+ tapas tried', gradient: 'from-red-500 to-orange-500' }
        ],
        xpBreakdown: [
            { category: '🥘 Dining', amount: '500 XP' },
            { category: '🏛️ Culture', amount: '600 XP' },
            { category: '🚇 Transport', amount: '150 XP' },
            { category: '🎯 Challenges', amount: '250 XP' }
        ],
        budgetBreakdown: [
            { category: '🏨 Accommodation', amount: '€350', percentage: 36 },
            { category: '🍽️ Dining', amount: '€280', percentage: 29 },
            { category: '🎫 Activities', amount: '€220', percentage: 22 },
            { category: '🚊 Transport', amount: '€130', percentage: 13 }
        ]
    }
};

// Show trip details
function showTripDetails(tripId) {
    try {
        console.log('Opening trip details for:', tripId);
        const trip = tripData[tripId];
        if (!trip) {
            console.error('Trip not found:', tripId);
            return;
        }

        // Update trip header
        document.getElementById('trip-city').textContent = trip.city;
        document.getElementById('trip-dates').textContent = trip.dates;
        document.getElementById('trip-flag').textContent = trip.flag;
        document.getElementById('trip-budget').textContent = trip.budget;
        document.getElementById('trip-xp').textContent = trip.xp;
        document.getElementById('trip-total-xp').textContent = trip.totalXp;
        document.getElementById('budget-total').textContent = trip.budget;
        document.getElementById('budget-daily').textContent = trip.dailyBudget;

        // Update hero gradient with inline style
        const heroElement = document.getElementById('trip-hero');
        heroElement.className = 'h-40 rounded-2xl mb-6 relative overflow-hidden';
        heroElement.style.background = trip.heroGradient;

        // Update timeline with inline styles for colors
        const timelineHTML = trip.timeline.map(item => `
            <div class="flex gap-3">
                <div class="w-2 h-2 rounded-full mt-2" style="background-color: ${item.color}"></div>
                <div class="flex-1">
                    <p class="font-semibold text-white">${item.title}</p>
                    <p class="text-xs text-gray-400">${item.desc}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('trip-timeline').innerHTML = timelineHTML;

    // Update badges
    const badgesHTML = trip.badges.map(badge => `
        <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br ${badge.gradient} rounded-full flex items-center justify-center text-2xl mb-2">
                ${badge.icon}
            </div>
            <p class="text-xs font-semibold text-white">${badge.name}</p>
            <p class="text-[10px] text-gray-400">${badge.desc}</p>
        </div>
    `).join('');
    document.getElementById('trip-badges').innerHTML = badgesHTML;

    // Update XP breakdown
    const xpHTML = trip.xpBreakdown.map(item => `
        <div class="flex justify-between text-sm">
            <span class="text-gray-400">${item.category}</span>
            <span class="text-white font-semibold">${item.amount}</span>
        </div>
    `).join('');
    document.getElementById('xp-breakdown').innerHTML = xpHTML;

        // Update budget breakdown with inline styles
        const budgetColors = ['#3b82f6', '#10b981', '#9333ea', '#f97316'];
        const budgetHTML = trip.budgetBreakdown.map((item, index) => {
            const color = budgetColors[index] || '#6b7280';
            return `
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-sm text-gray-400">${item.category}</span>
                        <span class="text-sm font-semibold text-white">${item.amount}</span>
                    </div>
                    <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div class="h-full rounded-full" style="width: ${item.percentage}%; background: linear-gradient(to right, ${color}, ${color}dd)"></div>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('budget-categories').innerHTML = budgetHTML;

        // Navigate to trip details screen
        const currentScreen = document.querySelector('.screen.active');
        const tripScreen = document.getElementById('trip-details');

        if (!tripScreen) {
            console.error('Trip details screen not found');
            return;
        }

        currentScreen.classList.add('slide-out-left');
        setTimeout(() => {
            currentScreen.classList.remove('active', 'slide-out-left');
            tripScreen.classList.add('active', 'slide-in-right');

            setTimeout(() => {
                tripScreen.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        console.log('Trip details opened successfully');
    } catch (error) {
        console.error('Error opening trip details:', error);
        alert('Sorry, there was an error opening the trip details. Please try again.');
    }
}

// Back to My Trips
function backToMyTrips() {
    const currentScreen = document.querySelector('.screen.active');
    const myTripsScreen = document.getElementById('rewards');

    currentScreen.classList.add('slide-out-left');
    setTimeout(() => {
        currentScreen.classList.remove('active', 'slide-out-left');
        myTripsScreen.classList.add('active', 'slide-in-right');

        setTimeout(() => {
            myTripsScreen.classList.remove('slide-in-right');
        }, 300);
    }, 300);
}