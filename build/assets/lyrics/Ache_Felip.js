class Ache_Felip_lyrics {
    //NOTE: all delays are with respect to the webpage timer

    constructor() {
        this.songTitle = "Ache - Felip"
        this.introDuration = 10000; //50 seconds
        // 9 lines
        this.chorusOne = [
            "Always dream high", //line 0
            "If I fall then that's fine", //line 1
            "Stand up, my head high",
            "I refuse to die",
            "'Cause I know in time",
            "All my efforts won't lie",
            "Everything will be alright",
            "All my wounds will find light",
            "Always dream high"
        ];
        //delay before the lyrics start being displayed
        this.chorusOneStartDelay = 11000;
        //delay between each line
        this.chorusOneLineDelays = [1000, 1000, 1000, 1590, 1000, 1000, 1000, 1000, 1000];
        //6 lines
        this.verse = [
            "Oh, light, oh, light guide me in the dark", //UD 11 
            "The blue sky, calm me like the blue sky", //UD 14
            "Their words not enough, I don't die",
            "It ain't sharp enough like the knife",
            "Nobody can take my light", //UD 19
            "I pray that you won't leave my side"
        ];
        this.verseStartDelay = 36900;
        this.verseLineDelays = [1000, 700, 1000, 1000, 1000, 1000];
        //4 lines
        this.preChorus = [
            "No words could explain how much I ached, no more",
            "Everything I own they take, no more",
            "I pain, I bleed, I suffocate, no more",
            "But that became the fuel, break no more"
        ];
        this.preChorusStartDelay = 58900;
        this.preChorusLineDelays = [1000, 1000, 750, 700];
        //8 lines
        this.chorusTwo = [
            "Always dream high",
            "If I fall then that's fine",
            "Stand up, my head high",
            "I refuse to die",
            "'Cause I know in time",
            "All my efforts won't lie",
            "Everything will be alright",
            "All my wounds will find light",
        ];
        this.chorusTwoStartDelay = 71500;
        this.chorusTwoLineDelays = [1000, 1000, 1000, 1590, 1000, 1000, 1000, 1000];

    }

    ChorusOneUniqueCharacterDelays(lineIndex, charIndex){
        let defaultDelay = 75;
        let uniqueDelay;
        if (lineIndex === 3 && charIndex === 12){
            uniqueDelay = 750;
            console.log("char delay: " + uniqueDelay);
            return uniqueDelay;
        }
        console.log("char delay: " + defaultDelay);
        return defaultDelay;
    }
    VerseUniqueCharacterDelays(lineIndex, charIndex){
        let defaultDelay = 50;
        let uniqueDelay;
        if (lineIndex === 0 && charIndex === 11){
            uniqueDelay = 2000;
            console.log("char delay: " + uniqueDelay);
            return uniqueDelay;
        }
        if(lineIndex === 1 && charIndex === 14){
            uniqueDelay = 1700;
            console.log("char delay: " + uniqueDelay);
            return uniqueDelay;
        }
        if (lineIndex === 4 && charIndex === 19){
            uniqueDelay = 100;
        }
        console.log("char delay: " + defaultDelay);
        return defaultDelay;
    }
    PreChorusUniqueCharacterDelays(lineIndex, charIndex){
        let defaultDelay = 50;
        if (defaultDelay == "This code is just to prevent line index and char index to have an error")
            console.log(lineIndex + " " + charIndex);
        console.log("char delay: " + defaultDelay);
        return defaultDelay;
    }
    ChorusTwoUniqueCharacterDelays(lineIndex, charIndex){
        let defaultDelay = 75;
        let uniqueDelay;
        if (lineIndex === 3 && charIndex === 12){
            uniqueDelay = 750;
            console.log("char delay: " + uniqueDelay);
            return uniqueDelay;
        }
        console.log("char delay: " + defaultDelay);
        return defaultDelay;
    }
}

export default Ache_Felip_lyrics;