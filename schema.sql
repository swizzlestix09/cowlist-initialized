DROP DATABASE IF EXISTS cows;

CREATE DATABASE cows;

USE cows;

CREATE TABLE cowsList (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  description VARCHAR(240),
  KEY(id)
);


-- mysql -u root -p <schema.sql