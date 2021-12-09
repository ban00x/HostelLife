drop table if exists events;

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(220),
  startTime   VARCHAR(120),
  location      VARCHAR(30),
  category 		VARCHAR(30) NOT NULL
);


INSERT INTO events (title, description, startTime, location, category) VALUES ('Sagrada famililia','Vary beautiful','10:00am','somewhere', 'monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Casabatallo','Vary beautiful','12:00pm','somewhere', 'monument');
INSERT INTO events (title, description, startTime, location, category) VALUES ('La Rambla','Vary beautiful','3:00pm','somewhere', 'visit-places');
INSERT INTO events (title, description, startTime, location, category) VALUES ('Barcelonita','Vary beautiful','6:00pm','somewhere', 'beach');
INSERT INTO events (title, description, startTime, location, category) VALUES ('paris','Vary beautiful','6:00pm','somewhere', 'eiffel');
