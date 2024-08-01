/*Create the database for songs*/
/*var cover = Image();*/

// Songs database
var songs = [
    { album: "After Hours",title: "Blinding Lights", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours",title: "Save Your Tears", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours",title: "Alone Again", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Too Late", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Hardest to Love", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Scared to Live", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Snowchild", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Escape from LA", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Heartless", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Faith", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "In Your Eyes", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Repeat After Me (Interlude)", year: 2019 ,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "After Hours", year: 2019,cover:"img/afterhours_theweeknd.jpg" },
    { album: "After Hours", title: "Until I Bleed Out", year: 2020,cover:"img/afterhours_theweeknd.jpg" },
    { album: "Starboy",title: "Starboy", year:2016, cover: "img/The_Weeknd_-_Starboy.png"},
    { album: "Starboy",title: "Party Monster",year: 2016,cover:"img/The_Weeknd_-_Starboy.png"},
    { album: "Starboy",title:"False Alarm",year: 2016,cover:"img/The_Weeknd_-_Starboy.png"},
    { album: "Starboy",title:"Reminder",year:2016,cover:"img/The_Weeknd_-_Starboy.png"},
     {album:"Dawn FM", title: "Dawn FM",year: 2022,cover:"img/weeknd.jpeg.jpeg"}
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
         if(selectedSong.year > 2020 && selectedSong.year > 2020){
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