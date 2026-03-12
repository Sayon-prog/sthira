// Exercise data
const exercises = {
    breathing: {
        title: 'Box Breathing',
        duration: 120,
        instructions: `
            <p><strong>Box Breathing Technique:</strong></p>
            <p>1. <strong>Inhale</strong> slowly for 4 counts</p>
            <p>2. <strong>Hold</strong> your breath for 4 counts</p>
            <p>3. <strong>Exhale</strong> slowly for 4 counts</p>
            <p>4. <strong>Hold</strong> for 4 counts</p>
            <p>Repeat this cycle continuously for 2 minutes. This technique helps calm your nervous system and reduce stress.</p>
        `
    },
    meditation: {
        title: 'Mindful Meditation',
        duration: 120,
        instructions: `
            <p><strong>Guided Mindfulness Meditation:</strong></p>
            <p>1. Find a comfortable seated position</p>
            <p>2. Close your eyes and focus on your natural breathing</p>
            <p>3. Notice any thoughts that arise, then gently let them pass</p>
            <p>4. Return your focus to your breath</p>
            <p>Spend these 2 minutes observing your breath without judgment. This practice enhances awareness and promotes inner peace.</p>
        `
    },
    stretch: {
        title: 'Gentle Stretching',
        duration: 120,
        instructions: `
            <p><strong>Gentle Full-Body Stretch:</strong></p>
            <p>1. <strong>Neck rolls:</strong> Slowly rotate your head 5 times each direction (20 seconds)</p>
            <p>2. <strong>Shoulder shrugs:</strong> Lift shoulders to ears and release 10 times (15 seconds)</p>
            <p>3. <strong>Forward fold:</strong> Gentle forward bend, let arms hang loose (30 seconds)</p>
            <p>4. <strong>Side stretches:</strong> Reach each arm overhead and lean gently (30 seconds)</p>
            <p>5. <strong>Wrist and ankle rolls:</strong> Slow circular motions (25 seconds)</p>
            <p>Move gently and never push into pain. This sequence helps release tension and improve flexibility.</p>
        `
    },
    gratitude: {
        title: 'Gratitude Reflection',
        duration: 120,
        instructions: `
            <p><strong>Gratitude Reflection Practice:</strong></p>
            <p>1. Think of <strong>3 things</strong> you're grateful for today (30 seconds)</p>
            <p>2. Reflect on <strong>one person</strong> who positively impacted your life (30 seconds)</p>
            <p>3. Consider <strong>one small moment</strong> that brought you joy (30 seconds)</p>
            <p>4. Sit with these feelings and let them fill your heart (30 seconds)</p>
            <p>Gratitude shifts our focus toward abundance and positivity, improving overall wellbeing.</p>
        `
    }
};

// State management
let currentExercise = null;
let timeRemaining = 0;
let totalTime = 0;
let isRunning = false;
let timerInterval = null;

// DOM Elements
const exercisesSection = document.querySelector('.exercises-section');
const exerciseDisplay = document.getElementById('exerciseDisplay');
const exerciseCards = document.querySelectorAll('.exercise-card');
const backButton = document.getElementById('backButton');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');
const progressFill = document.getElementById('progressFill');
const exerciseTitle = document.getElementById('exerciseTitle');
const exerciseInstructions = document.getElementById('exerciseInstructions');

// Initialize event listeners
exerciseCards.forEach(card => {
    card.addEventListener('click', () => {
        selectExercise(card.dataset.exercise);
    });
});

backButton.addEventListener('click', goBack);
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Select exercise
function selectExercise(exerciseName) {
    currentExercise = exerciseName;
    const exercise = exercises[exerciseName];
    
    exerciseTitle.textContent = exercise.title;
    exerciseInstructions.innerHTML = exercise.instructions;
    totalTime = exercise.duration;
    timeRemaining = totalTime;
    
    updateTimerDisplay();
    updateProgressBar();
    
    exercisesSection.style.display = 'none';
    exerciseDisplay.style.display = 'block';
    
    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

// Go back to exercise selection
function goBack() {
    stopTimer();
    exercisesSection.style.display = 'block';
    exerciseDisplay.style.display = 'none';
    currentExercise = null;
}

// Start timer
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        updateProgressBar();
        
        if (timeRemaining <= 0) {
            completeExercise();
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

// Reset timer
function resetTimer() {
    stopTimer();
    timeRemaining = exercises[currentExercise].duration;
    totalTime = timeRemaining;
    updateTimerDisplay();
    updateProgressBar();
    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

// Stop timer
function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update progress bar
function updateProgressBar() {
    const progress = ((totalTime - timeRemaining) / totalTime) * 100;
    progressFill.style.width = `${progress}%`;
}

// Complete exercise
function completeExercise() {
    stopTimer();
    startButton.disabled = true;
    pauseButton.style.display = 'none';
    startButton.style.display = 'none';
    
    const completionMessage = document.createElement('div');
    completionMessage.className = 'completion-message';
    completionMessage.innerHTML = `
        <h3>Great job! 🎉</h3>
        <p>You've completed your 2 Minute Reset.</p>
        <p>Take this moment to reflect on how you feel.</p>
    `;
    completionMessage.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 12px;
        text-align: center;
        margin-top: 20px;
        animation: slideIn 0.5s ease;
    `;
    
    const exerciseContent = document.querySelector('.exercise-content');
    exerciseContent.appendChild(completionMessage);
    
    setTimeout(() => {
        resetButton.click();
        exerciseContent.removeChild(completionMessage);
        startButton.disabled = false;
        startButton.style.display = 'inline-block';
    }, 3000);
}

// Initialize
updateTimerDisplay();
