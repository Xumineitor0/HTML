document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');

    let isPlaying = false;

    audio.pause();
    audio.currentTIME = 0;
    
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = '▶️'; // Texto do botão de play
        } else {
            audio.play();
            playButton.textContent = '⏸️'; // Texto do botão de pause
        }
        isPlaying = !isPlaying; // Alterna o estado
    });

    // Adicionar eventos para o botão de mudo
    muteButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            muteButton.textContent = '🔊'; 
        } else {
            audio.muted = true;
            muteButton.textContent = '🔇'; 
        }
    });
    
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
    });
});
