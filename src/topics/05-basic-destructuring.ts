interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {audioVolume:volume, song, details: {author}} = audioPlayer;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;
console.log(`Personaje: ${p2}`)

//console.log(`Song: ${song}\nAuthor: ${author}\nVolume: ${volume}dc`)