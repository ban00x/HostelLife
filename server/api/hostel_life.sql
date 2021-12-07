drop table if exists events;

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(220),
  startTime   VARCHAR(120),
  location      VARCHAR(30)
)

INSERT INTO events (title, description, startTime, location) VALUES ('Sagrada family','Vary beautiful','10:00am','somewhere');
