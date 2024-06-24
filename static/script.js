document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById('slide');
    const playButton = document.getElementById('playButton');
    let slidePosition = 0;
    const maxPosition = 250;  // Adjusted to match the height of the trombone minus the height of the slide
    let isDragging = false;

    // Touch event listeners
    slide.addEventListener('touchstart', startDrag);
    slide.addEventListener('touchmove', drag);
    slide.addEventListener('touchend', endDrag);

    // Mouse event listeners
    slide.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    function startDrag(event) {
        isDragging = true;
        event.preventDefault();
    }

    function drag(event) {
        if (!isDragging) return;

        let clientY;
        if (event.touches) {
            clientY = event.touches[0].clientY;
        } else {
            clientY = event.clientY;
        }

        const newTop = clientY - slide.offsetHeight / 2 - slide.parentElement.getBoundingClientRect().top;

        if (newTop >= 0 && newTop <= maxPosition) {
            slide.style.right = newTop + 'px';
            slidePosition = newTop / maxPosition;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    playButton.addEventListener('click', () => {
        playTrumpetSound(slidePosition);
    });
});

function playTrumpetSound(position) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const vibrato = audioContext.createOscillator();
    const vibratoGain = audioContext.createGain();

    // Primary oscillator setup
    oscillator1.type = 'sawtooth'; // Sawtooth wave for a brassy sound
    oscillator1.frequency.setValueAtTime(440 + (position * 880), audioContext.currentTime); // Base frequency range: 440Hz to 1320Hz

    // Slightly detuned second oscillator to enrich the sound
    oscillator2.type = 'sawtooth';
    oscillator2.frequency.setValueAtTime((440 + (position * 880)) * 1.01, audioContext.currentTime); // Detuned by 1%

    // Vibrato effect setup
    vibrato.type = 'sine';
    vibrato.frequency.setValueAtTime(5, audioContext.currentTime); // 5 Hz vibrato speed
    vibratoGain.gain.setValueAtTime(10, audioContext.currentTime); // Vibrato depth in Hz

    vibrato.connect(vibratoGain);
    vibratoGain.connect(oscillator1.frequency);
    vibratoGain.connect(oscillator2.frequency);

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

    oscillator1.start();
    oscillator2.start();
    vibrato.start();
    oscillator1.stop(audioContext.currentTime + 1); // Play sound for 1 second
    oscillator2.stop(audioContext.currentTime + 1);
    vibrato.stop(audioContext.currentTime + 1);
}