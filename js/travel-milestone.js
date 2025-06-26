// js/travel-milestone.js

const milestoneInterval = 10;
let lastAchievedMilestone = 0;

const milestoneModal = document.getElementById('milestone-modal');
const closeMilestoneModalBtn = document.getElementById('close-milestone-modal');
const milestoneTitle = document.getElementById('milestone-title');
const milestoneMessage = document.getElementById('milestone-message');
const confettiEffect = document.getElementById('confetti-effect');

function initializeMilestoneSystem(initialScore) {
    lastAchievedMilestone = Math.floor(initialScore / milestoneInterval) * milestoneInterval;
    
    closeMilestoneModalBtn.addEventListener('click', closeMilestoneModal);
    window.addEventListener('click', (event) => {
        if (event.target == milestoneModal) {
            closeMilestoneModal();
        }
    });
}

function checkMilestone(newScore, oldScore) {
    // Only check if score increased
    if (newScore > oldScore) {
        const currentMilestone = Math.floor(newScore / milestoneInterval) * milestoneInterval;
        if (currentMilestone > lastAchievedMilestone && currentMilestone > 0) {
            lastAchievedMilestone = currentMilestone;
            showMilestoneModal(currentMilestone);
        }
    }
}

function showMilestoneModal(milestone) {
    milestoneTitle.textContent = `Chúc mừng bạn đã đạt chuỗi ${milestone}!`;
    milestoneMessage.textContent = "Bạn thật tuyệt vời! Hãy tiếp tục khám phá nhé!";
    milestoneModal.style.display = 'flex';
    // triggerConfettiEffect(); // You can add confetti logic here if you have it
}

function closeMilestoneModal() {
    milestoneModal.style.display = 'none';
    // clearConfettiEffect();
}