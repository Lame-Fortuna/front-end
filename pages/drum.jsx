import {React, useState, useEffect} from "react";
import '../public/drum.css'

const Drum = () =>{
    // Tab title
    useEffect(() => {
        document.title = "Drums";
    }, []);

    const [display, update] = useState('')
    const [volume, setVolume] = useState(1);

    // Click
    function play(e){
        const key = e.currentTarget.innerText
        const audio = document.getElementById(key);
        update(e.currentTarget.id)
        audio.currentTime = 0 // Shit helps
        audio.play();
    }

    // Key Strokes
    useEffect(() => {
        function handleKeyDown(e) {
            const key = e.key.toUpperCase();
            const audio = document.getElementById(key);
        
            if (audio) {
                audio.currentTime = 0;
                audio.play();
        
                update(audio.parentElement.id); // This sets display from keyboard press too
        
                const pad = audio.parentElement;
                pad.classList.add('active');
                setTimeout(() => pad.classList.remove('active'), 100);
            }
        }
        
    
        // Global keydown listener
        document.addEventListener('keydown', handleKeyDown);
    
        // Cleanup: remove the listener when the component unmounts
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Volume
    function handleVolumeChange(e) {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    
        // Update volumes
        const audios = document.getElementsByClassName('clip');
        for (let audio of audios) {
            audio.volume = newVolume;
        }
    }
    
    return(
    <div id="drum-machine">
        <div className="keys">
            <button className="drum-pad" id="Heater 1" onClick={play}>
                <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
                Q
            </button>
            
            <button className="drum-pad" id="Heater 2" onClick={play}>
                <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
                W
            </button>
            <button className="drum-pad" id="Heater 3" onClick={play}>
                <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
                E
            </button>
            <button className="drum-pad" id="Heater 4" onClick={play}>
                <audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
                A
            </button>
            <button className="drum-pad" id="Clap" onClick={play}>
                <audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
                S
            </button>
            <button className="drum-pad" id="Open-HH" onClick={play}>
                <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
                D
            </button>
            <button className="drum-pad" id="Kick-n'-Hat" onClick={play}>
                <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
                Z
            </button>
            <button className="drum-pad" id="Kick" onClick={play}>
                <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
                X
            </button>
            <button className="drum-pad" id="Closed-HH" onClick={play}>
                <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
                C
            </button>
        </div>
        <p id="display">{display}</p>

        <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange}/>
        <label for="volumeControl">Volume Control</label>
    </div>
    )
}

export default Drum