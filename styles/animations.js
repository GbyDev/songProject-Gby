const playBtn = document.querySelector(".playButton");

function PlayBtnIsClicked(){
    TransitionAnimations();
    //ConstantAnimations();

    function TransitionAnimations(){
        FormatSongTitle();
        MakePlayButtonAndHeaderTextDisappear();
        playBtn.removeEventListener("click", PlayBtnIsClicked);
        ChangeBodyBackground();
        ShowParentContainer();
    }
}

function FormatSongTitle(){
    const songTitle = document.querySelector(".songTitle");
    songTitle.classList.toggle("shrink");
}

function MakePlayButtonAndHeaderTextDisappear(){
    const h1Text = document.querySelector("h1");
    h1Text.classList.toggle("hidden");
    playBtn.classList.toggle("hidden");
}

function ChangeBodyBackground(){
    document.body.style.backgroundImage = 'url("./assets/images/webpageBG.jpg")';
}

function ShowParentContainer(){
    const parentContainer = document.querySelector(".parent-container");
    parentContainer.style.display = "flex";
    parentContainer.style.alignItems = "center"; 
    parentContainer.style.justifyContent = "center";
}
playBtn.addEventListener("click", PlayBtnIsClicked);