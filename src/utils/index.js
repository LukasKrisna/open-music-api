const mapDBToModelSong = ({
    id, 
    title, 
    year, 
    performer, 
    genre, 
    duration, 
    album_id,
}) => ({
    id, 
    title, 
    year, 
    performer, 
    genre, 
    duration, 
    albumId : album_id,
});

const mapDBToModelAlbum = ({
    id, 
    name, 
    year, 
}, song) => ({
    id, 
    name, 
    year, 
    songs: song,
});

module.exports = {mapDBToModelAlbum, mapDBToModelSong};