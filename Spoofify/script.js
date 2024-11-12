const addThreeMoreReleaseButton = document.getElementById('add');
const removeFirstThreeReleasesButton = document.getElementById('remove');
const releasesGrid = document.getElementById('releases-grid');
const randomImgURL = "https://loremflickr.com/480/480/cd,album,cover?random=";
let currentImgIndex = releasesGrid.children.length;
const tracklistUL = document.querySelector("#tracklist + ul");

const tracks = [ /*In Array eine weitere arrayList mit Tracks*/ 
        ["Smells Like Teen Spirit", "Come as You Are", "Lithium"], // Nirvana - Nevermind (1991)
        ["Billie Jean", "Beat It", "Thriller"], // Michael Jackson - Thriller (1982)
        ["With or Without You", "I Still Haven't Found What I'm Looking For"], // U2 - The Joshua Tree (1987)
        ["One", "The Unforgiven", "Nothing Else Matters"], // Metallica - Metallica (1991)
        ["Wonderwall", "Don't Look Back in Anger", "Champagne Supernova", "Some Might Say", "Cast No Shadow"], // Oasis - (What's the Story) Morning Glory? (1995)
        ["Bohemian Rhapsody", "Love of My Life", "You're My Best Friend", "Death on Two Legs", "Lazing on a Sunday Afternoon"], // Queen - A Night at the Opera (1975)
        ["Lose Yourself", "8 Mile", "Love Me", "Rabbit Run", "Adrenaline Rush", "Places to Go"], // Eminem - 8 Mile Soundtrack (2002)
        ["Yesterday", "Help!", "Ticket to Ride", "You've Got to Hide Your Love Away", "Act Naturally", "It's Only Love", "Dizzy Miss Lizzy"], // The Beatles - Help! (1965)
        ["Stairway to Heaven", "Black Dog", "Rock and Roll", "Going to California", "When the Levee Breaks"], // Led Zeppelin - Led Zeppelin IV (1971)
        ["Hallelujah", "Grace", "Lover, You Should've Come Over", "Last Goodbye", "So Real", "Dream Brother", "Mojo Pin", "Eternal Life"], // Jeff Buckley - Grace (1994)
      ];
    
function addThreeReleases() {
    for(let i = 0; i<3; i++){
        const newReleaseLi = document.createElement('li');
        const newReleaseImg = document.createElement('img');
        newReleaseImg.src = randomImgURL+currentImgIndex;
        newReleaseImg.onclick = showTrackList;
        newReleaseLi.append(newReleaseImg);
        releasesGrid.append(newReleaseLi);
        currentImgIndex++;
    }
}

function removeThreeReleases() {
    for(let i = 0;i<3; i++) {
        if(releasesGrid.children.length > 0){
            releasesGrid.children[0].remove();
        }
    }
}

function showTrackList() {
    const randomNumber = Math.floor(Math.random() * tracks.length);
    const tracksToShow = tracks [randomNumber];

    tracklistUL.replaceChildren([]);

    for(let trackName of tracksToShow){
        let liElement = document.createElement('li');
        liElement.innerText = trackName;
        liElement.onclick = () => {
            showTitle(trackName);
        };
        tracklistUL.append(liElement);
    }
}

    function showTitle(title){
        alert(title);
    }
    addThreeMoreReleaseButton.onclick = addThreeReleases;
    removeFirstThreeReleasesButton.onclick = removeThreeReleases;
    const allReleases = document.querySelectorAll('#releases-grid li img');
    Array.from(allReleases).forEach((release) => {
        release.onclick = showTrackList;
});