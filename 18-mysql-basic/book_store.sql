-- Show Database
SHOW DATABASES;

-- Create Database
CREATE DATABASE bookstore;

-- Using Database
USE bookstore;

-- Show Tables
SHOW Tables;

-- Create Table
CREATE TABLE books
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell CHAR(3),
    stock INT DEFAULT(0),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add New Column
ALTER TABLE books
ADD price INT DEFAULT(0),
    status ENUM('available', 'out of stock', 'limited');

-- Delete Column
ALTER TABLE books DROP COLUMN place_sell;

-- Insert Data
INSERT INTO books (author1, author2, author3, title, description, stock, price, status) VALUES 
    (
        'Siti Nurhansyah', 'Umiyati', 'Yayu Putri Senjani', 'Audit Syariah', 'Mekanisme Pengauditan Syariah',
        23, 123900, 'limited'
    ), 
    (
        'Sandra Aulia', 'Rahmi Setiawati', 'Andika Ajie Sastra', 'Pedoman Petani Kopi', 'Branding dan Pemasaran Kopi',
        49, 104900, 'limited'
    ),
    (
        'Nur Fadilah', 'Radityo Kusumo', 'Cris Kuntadi', 'Audit Internal Sektor Publik', 'Tugas Audit di Sektor Publik',
        82, 82900, 'limited'
    );

-- Select All Books
SELECT * FROM books;

-- Select Alias on Table Books
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- Select with Where
SELECT * FROM books WHERE id = 1;

-- Select with Where Combined AND
SELECT * FROM books WHERE stock < 20 AND price < 100000;

-- Select with Where Combined OR
SELECT * FROM books WHERE id = 1 OR id = 2;

-- Select with Where Combined NOT
SELECT * FROM books WHERE NOT id = 1;

-- Select ASC
SELECT * FROM books ORDER BY id ASC;

-- Select LIMIT 2
SELECT * FROM books LIMIT 2;

-- Select Update
UPDATE books SET author1 = 'Andhika Gabah' price = 20000 WHERE id = 2;

-- Delete Row
DELETE FROM books WHERE id = 3;








