// scripts.js
let likeCounts = {
    1: 0
    // Adicione mais designs conforme necessário
};

function likeDesign(id) {
    likeCounts[id]++;
    document.getElementById(`like-count-${id}`).innerText = likeCounts[id] + ' curtidas';
}

function shareDesign(imageUrl) {
    const shareData = {
        title: 'Confira este design!',
        text: 'Veja este design incrível que encontrei!',
        url: window.location.href
    }
    try {
        navigator.share(shareData);
    } catch (err) {
        alert('Compartilhamento não suportado neste navegador.');
    }
}

function submitFeedback(id) {
    const feedbackText = document.getElementById(`feedback-${id}`).value;
    const feedbackList = document.getElementById(`feedback-list-${id}`);
    const feedbackItem = document.createElement('div');
    feedbackItem.innerText = feedbackText;
    feedbackList.appendChild(feedbackItem);
    document.getElementById(`feedback-${id}`).value = '';
}

function toggleCommentSection(id) {
    const commentSection = document.getElementById(`comments-section-${id}`);
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}