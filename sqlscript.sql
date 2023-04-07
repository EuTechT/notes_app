CREATE DATABASE notes_app

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	_user VARCHAR UNIQUE NOT NULL,
	password VARCHAR NOT NULL
)

CREATE TABLE notes(
	id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	title VARCHAR NOT NULL,
	note TEXT NOT NULL,
	creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id)
)

INSERT INTO users(name, _user, password) VALUES
	('Irineu da Silva', 'irineu123', '12345')

SELECT * FROM users

INSERT INTO notes(user_id, title, note) VALUES
	(1, 'Estudo', 'Estudar TypeScript'),
	(1, 'Lista de jogos que quero comprar', 'Divinity, Dark Souls')
	
SELECT * FROM notes