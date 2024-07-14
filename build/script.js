import Ache_Felip_lyrics from "./assets/lyrics/Ache_Felip.js";


//class declaration
const song = new Ache_Felip_lyrics();

const songTitleDisplay = document.querySelector(".songTitle");
const playBtn = document.querySelector(".playButton");

songTitleDisplay.textContent = song.songTitle;

function Main(){
    function DisplayLyrics(songSection, millisecondsBeforeStart, millisecondsBeforeEnd){
        setTimeout(function() {
            DisplayLyricsOfSongSection(songSection);
            console.log("runs here");
        }, millisecondsBeforeStart);
        RemoveTextAfterFinishedDisplaying(songSection, millisecondsBeforeEnd);
    }

    function RemoveTextAfterFinishedDisplaying(songSection, millisecondsBeforeEnd){
        setTimeout(function(){
            const containerToDelete = document.getElementById(`container-${songSection}`);
            console.log(containerToDelete);
            containerToDelete.remove();
        }, millisecondsBeforeEnd);
        
    }

    playBtn.addEventListener("click", function(){
        StartTimer();
        PlayMusic();
        DisplayLyrics("chorusOne", song.chorusOneStartDelay, song.verseStartDelay);
        DisplayLyrics("verse", song.verseStartDelay, song.preChorusStartDelay);
        DisplayLyrics("preChorus", song.preChorusStartDelay, song.chorusTwoStartDelay);
        DisplayLyrics("chorusTwo", song.chorusTwoStartDelay, 99999);
    });
}

function DisplayLyricsOfSongSection(songSection){
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let currentSongPart = songSection;

    //parent container
    const parentContainer = document.querySelector(".parent-container");

    //create a div container to contain the lines of lyrics (the p tags)
    const container = document.createElement("div");
    container.id = `container-${currentSongPart}`;
    parentContainer.appendChild(container);

    function DisplayLyricLineAndCharacters(){
        let lyricsArray = InitializeSongSectionLyrics(currentSongPart);
        let delayArray = InitializeSongSectionLineDelays(currentSongPart);
    
        if (currentStringIndex < lyricsArray.length) {
            if (currentCharIndex === 0) {
                const p = document.createElement('p');
                p.id = `line-${currentStringIndex}-${currentSongPart}`;
                container.appendChild(p);
            }
    
            const currentString = lyricsArray[currentStringIndex];
            const currentLineDelay = delayArray[currentStringIndex];
            const currentP = document.getElementById(`line-${currentStringIndex}-${currentSongPart}`);
    
            function addCharacterWithDelay() {
                setTimeout(function() {
                    currentP.textContent += currentString[currentCharIndex];
                    currentCharIndex++;
    
                    if (currentCharIndex < currentString.length) {
                        addCharacterWithDelay();
                    } 
                    else {
                        setTimeout(function() {
                            currentCharIndex = 0;
                            currentStringIndex++;
                            DisplayLyricLineAndCharacters(); 
                        }, currentLineDelay); // delay for each line
                    }
                }, CharacterDelay(currentSongPart, currentStringIndex, currentCharIndex)); // delay for each character/letter
            }
            addCharacterWithDelay();
        }
    }

    function InitializeSongSectionLyrics(songPart){
        let lyricsArr;
        switch (songPart){
            case "chorusOne":
                lyricsArr = song.chorusOne;
                break;
            case "verse":
                lyricsArr = song.verse;
                break;
            case "preChorus":
                lyricsArr = song.preChorus;
                break;
            case "chorusTwo":
                lyricsArr = song.chorusTwo;
                break;
        }
        return lyricsArr;
    }

    function InitializeSongSectionLineDelays(songPart){
        let durationArr;
        switch (songPart){
            case "chorusOne":
                durationArr = song.chorusOneLineDelays;
                break;
            case "verse":
                durationArr = song.verseLineDelays;
                break;
            case "preChorus":
                durationArr = song.preChorusLineDelays;
                break;
            case "chorusTwo":
                durationArr = song.chorusTwoLineDelays;
                break;
        }
        return durationArr;
    }

    function CharacterDelay(songSection, lineIndex, charIndex){
        switch (songSection){
            case "chorusOne":
                return song.ChorusOneUniqueCharacterDelays(lineIndex, charIndex);
            case "verse":
                return song.VerseUniqueCharacterDelays(lineIndex, charIndex);
            case "preChorus":
                return song.PreChorusUniqueCharacterDelays(lineIndex, charIndex);
            case "chorusTwo":
                return song.ChorusTwoUniqueCharacterDelays(lineIndex, charIndex);
        }
    }

    DisplayLyricLineAndCharacters();
}

function StartTimer(){
    let startTime;

    function StartCountingTimer() {
        startTime = Date.now();
        setInterval(UpdateTimer, 10); // update every 10 milliseconds
      }
  
      function UpdateTimer() {
        const elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = elapsedTime % 1000;
  
        document.querySelector(".timer").textContent = 
          `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
      }

    StartCountingTimer();
}

function PlayMusic(){
    var audio = document.querySelector("audio");
    audio.play();
}
    
Main();