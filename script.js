console.log("Podcast Welcomes You");

// initializing variables
let podcastIndex = 0;
let audioElement = new Audio('podcast/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterPodcastName');
let podcastItems = Array.from(document.getElementsByClassName('podcastItem'));


let podcasts = [
    { podcastName: "2 Ways to Create Healthy Boundaries", filepath: "podcast/1.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "Paris Hilton ON: How to stop shame from controlling your life", filepath: "podcast/2.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "6 Ways to Transfrom a Negative Mindset", filepath: "podcast/3.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "Ed Mylett ON: How to Break Down Your Goals Into Achievable Steps", filepath: "podcast/4.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "2 Ways to Deepen Your Connection With Your Partner", filepath: "podcast/5.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "Bob Parsons On: How to Be Present & Not Fear the Future", filepath: "podcast/6.mp3", coverPath: "covers/1.jpg" },
    { podcastName: "5 Different Types of People We Fall in Love With", filepath: "podcast/7.mp3", coverPath: "covers/1.jpg" }
]

podcastItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = podcasts[i].coverPath;
    element.getElementsByClassName("podcastName")[0].innerText = podcasts[i].podcastName;
})

// audioElement.play();
//handle Play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
myProgressBar.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('podcastItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('podcastItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `podcasts/${podcastIndex + 1}.mp3`;
        masterPodcastName.innerText = podcasts[podcastIndex].podcastName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (podcastIndex >= 6) {
        podcastIndex = 0
    }
    else {
        podcastIndex += 1;
    }
    audioElement.src = `podcasts/${podcastIndex + 1}.mp3`;
    masterPodcastName.innerText = podcasts[podcastIndex].podcastName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (podcastIndex <= 0) {
        podcastIndex = 0
    }
    else {
        podcastIndex -= 1;
    }
    audioElement.src = `podcasts/${podcastIndex + 1}.mp3`;
    masterPodcastName.innerText = podcasts[podcastIndex].podcastName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})