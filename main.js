/*Create the database for songs*/
/*var cover = Image();*/

// Songs database
var songs = [
    { title: "Blinding Lights", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Save Your Tears", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Alone Again", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Too Late", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Hardest to Love", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Scared to Live", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Snowchild", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Escape from LA", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Heartless", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Faith", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "In Your Eyes", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "Repeat After Me (Interlude)", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { title: "After Hours", year: 2019,cover:"img/afterhours_theweeknd.jpg" },
    { title: "Until I Bleed Out", year: 2020,cover:"img/afterhours_theweeknd.jpg" },
    {title: "Starboy", year:2016, cover: "img/The_Weeknd_-_Starboy.png"},
    {title: "Dawn FM",year: 2022,cover:"img/weeknd.jpeg.jpeg"}
    // Add more songs from the "After Hours" album
];

// Populate the song selector dropdown
function populateSongSelector() {
    var selector = document.getElementById("songSelector");
    songs.forEach(function(song) {
        var option = document.createElement("option");
        option.text = song.title + " (" + song.year + ")";
        option.value = song.title;
        selector.add(option);
    });
}

// Function to handle the selection of a song
function handleSongSelection() {
    
    var selector = document.getElementById("songSelector");
    var selectedSongTitle = selector.value;
    var selectedSong = songs.find(function(song) {
        return song.title === selectedSongTitle;
    });
    if (selectedSong) {
        var songDetail = document.getElementById("songDetail");
        songDetail.innerHTML = "Selected song: " + selectedSong.title + " (" + selectedSong.year + ")";
    
        var coverImage = document.getElementById("coverImage");
        coverImage.src = selectedSong.cover;

        var realFan = document.getElementById("realFan")
         if(selectedSong.year < 2019 && selectedSong.year > 2018){
        realFan.innerHTML = "Your not a real fan :("
    }else{
        realFan.innerHTML ="You are a real fan"
    };
}
}

// Populate the select dropdown when the page loads
document.addEventListener("DOMContentLoaded", function() {
    populateSongSelector();
    // Add event listener to the select dropdown to handle song selection
    document.getElementById("songSelector").addEventListener("change", handleSongSelection);
});
