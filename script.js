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