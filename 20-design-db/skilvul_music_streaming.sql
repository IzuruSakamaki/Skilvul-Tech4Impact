-- CREATE DATABASE
create DATABASE skilvulmusic;

-- USE DATABASE 
USE skilvulmusic;

-- CREATE TABLE "USER"
CREATE TABLE user
(
    user_id  int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name     varchar(255) NOT NULL ,
    email    varchar(255) NOT NULL ,
    password varchar(255) NOT NULL ,
);

-- CREATE TABLE "SINGER"
CREATE TABLE singer
(
    singer_id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name      varchar(255) NOT NULL ,
);

-- CREATE TABLE "ALBUM"
CREATE TABLE album
(
    album_id  int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name      varchar(255) NOT NULL ,
    singer_id int NOT NULL ,

    CONSTRAINT FK_SINGER_ALBUM 
    FOREIGN KEY (singer_id) 
    REFERENCES singer (singer_id)
);

-- CREATE TABLE "TRACK"
CREATE TABLE track
(
    track_id  int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    title     varchar(255) NOT NULL ,
    singer_id int NOT NULL ,
    album_id  int NOT NULL ,

    CONSTRAINT FK_SINGER_TRACK 
    FOREIGN KEY (singer_id) 
    REFERENCES singer (singer_id),

    CONSTRAINT FK_ALBUM_TRACK
    FOREIGN KEY (album_id) 
    REFERENCES album (album_id)
);

-- CREATE TABLE "PLAYLIST"
CREATE TABLE playlist
(
    playlist_id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    tracks      int NULL ,
    user_id     int NOT NULL ,
    
    CONSTRAINT FK_USER_PLAYLIST
    FOREIGN KEY (user_id) 
    REFERENCES user (user_id)
);

-- CREATE TABLE "PLAYLIST-TRACK CONJUNCTION"
CREATE TABLE playlist_track
(
    id          int NOT NULL  AUTO_INCREMENT PRIMARY KEY ,
    track_id    int NOT NULL ,
    playlist_id int NOT NULL ,

    CONSTRAINT FK_TRACK_CONJ
    FOREIGN KEY (track_id) 
    REFERENCES track (track_id),

    CONSTRAINT FK_PLAYLIST_CONJ
    FOREIGN KEY (playlist_id) 
    REFERENCES playlist (playlist_id)
);