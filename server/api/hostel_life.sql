drop table if exists events;

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(220),
  startTime   VARCHAR(120),
  location      VARCHAR(30)
)

INSERT INTO events (title, description, startTime, location) VALUES ('Sagrada famililia','Vary beautiful','10:00am','somewhere');
INSERT INTO events (title, description, startTime, location) VALUES ('Casabatallo','Vary beautiful','12:00pm','somewhere');
INSERT INTO events (title, description, startTime, location) VALUES ('La Rambla','Vary beautiful','3:00pm','somewhere');
INSERT INTO events (title, description, startTime, location) VALUES ('Barcelonita','Vary beautiful','6:00pm','somewhere');

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(220),
  startTime   VARCHAR(120),
  location      VARCHAR(30),
  category 		VARCHAR(30) NOT NULL
)


INSERT INTO events (title, description, startTime, location, category) VALUES ('Sagrada famililia','Vary beautiful','10:00am','somewhere', 'Monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Casabatallo','Vary beautiful','12:00pm','somewhere', 'Monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('La Rambla','Vary beautiful','3:00pm','somewhere', 'Visit-places');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Barcelonita','Vary beautiful','6:00pm','somewhere', 'Beach');
