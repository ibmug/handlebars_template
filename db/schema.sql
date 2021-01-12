CREATE DATABASE users_db;
USE users_db;

CREATE TABLE users
(
	uID int NOT NULL AUTO_INCREMENT,
	uName varchar(255) NOT NULL,
	uActive BOOLEAN DEFAULT true,
    uSecurity int NOT NULL,
	PRIMARY KEY (uID)
);

