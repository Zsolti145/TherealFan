/*Create the database for songs*/
/*let cover = Image();*/

// Songs database
let songs = [
    //AFTER HOURS
    { album: "After Hours", title: "Blinding Lights", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Save Your Tears", year: 2020,cover:"img/afterhours_theweeknd.jpg"},
    { album: "After Hours", title: "Alone Again", year: 2019,cover:"img/afterhours_theweeknd.jpg"},
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
    //STARBOY
    { album: "Starboy", title: "Starboy", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "Party Monster", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "False Alarm", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "Reminder", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "Secrets", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "Die for You", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    { album: "Starboy", title: "I Feel It Coming", year: 2016, cover: "img/The_Weeknd_-_Starboy.png" },
    // Dawn FM album
    { album: "Dawn FM", title: "Dawn FM", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Gasoline", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Sacrifice", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Out of Time", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Take My Breath", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Is There Someone Else?", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Here We Go… Again", year: 2022, cover: "img/dawnfm.jpg" },
    { album: "Dawn FM", title: "Less Than Zero", year: 2022, cover: "img/dawnfm.jpg" },
    
    // Beauty Behind the Madness album
    { album: "Beauty Behind the Madness", title: "Can't Feel My Face", year: 2015, cover: "/img/theweeknd_beautybehindthemadne_adtr.jpg " },
    { album: "Beauty Behind the Madness", title: "The Hills", year: 2015, cover: "/img/theweeknd_beautybehindthemadne_adtr.jpg " },
    { album: "Beauty Behind the Madness", title: "Earned It", year: 2015, cover: "/img/theweeknd_beautybehindthemadne_adtr.jpg " },
    { album: "Beauty Behind the Madness", title: "In the Night", year: 2015, cover: " /img/theweeknd_beautybehindthemadne_adtr.jpg" },
    { album: "Beauty Behind the Madness", title: "Shameless", year: 2015, cover: "/img/theweeknd_beautybehindthemadne_adtr.jpg" },
    
    // House of Balloons album
    { album: "House of Balloons", title: "High for This", year: 2011, cover: "/img/theweeknd_houseofballoons_328l.jpg" },
    { album: "House of Balloons", title: "What You Need", year: 2011, cover: "/img/theweeknd_houseofballoons_328l.jpg" },
    { album: "House of Balloons", title: "Wicked Games", year: 2011, cover: "/img/theweeknd_houseofballoons_328l.jpg" },
    { album: "House of Balloons", title: "The Morning", year: 2011, cover: "/img/theweeknd_houseofballoons_328l.jpg" },
    
    // Kiss Land album
    { album: "Kiss Land", title: "Professional", year: 2013, cover: "/img/theweeknd_kissland_c3br.jpg" },
    { album: "Kiss Land", title: "The Town", year: 2013, cover: "/img/theweeknd_kissland_c3br.jpg" },
    { album: "Kiss Land", title: "Adaptation", year: 2013, cover: "/img/theweeknd_kissland_c3br.jpg" },
    { album: "Kiss Land", title: "Kiss Land", year: 2013, cover: "/img/theweeknd_kissland_c3br.jpg" },
    { album: "Kiss Land", title: "Pretty", year: 2013, cover: "/img/theweeknd_kissland_c3br.jpg" }
];

songs.sort((a, b) => {
    if (b.year < a.year) return -1;
    if (b.year > a.year) return 1;
    return 0;
});

// Populate the song selector dropdown
function populateSongSelector() {
    let selector = document.getElementById("songSelector");
    songs.forEach(function(song) {
        let option = document.createElement("option");
        option.text = `${song.title} (${song.year})`;
        option.value = song.title;
        selector.add(option);
        
    });
}

// Function to handle the selection of a song
function handleSongSelection() {
    
    let selector = document.getElementById("songSelector");
    let selectedSongTitle = selector.value;
    let selectedSong = songs.find(function(song) {
        return song.title === selectedSongTitle;
    });


    if (selectedSong) {
        let songDetail = document.getElementById("songDetail");
        songDetail.innerHTML = `Selected song:${selectedSong.title} (${selectedSong.year})`;
    
        let coverImage = document.getElementById("coverImage");
        coverImage.src = selectedSong.cover;

        let realFan = document.getElementById("realFan")
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