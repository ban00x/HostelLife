const { Pool, Connection } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hostel_life",
  password: "idkfaiddqd",
  port: 5432,
});

const api = () => {
  const postNewEvent = async (request, response) => {
    const newEvent = request.body;
    console.log(newEvent);
    const result = await pool.query(
      `INSERT INTO events (title, description, startTime, location ) VALUES ($1, $2, $3, $4) RETURNING id`,
      [
        newEvent.title,
        newEvent.description,
        newEvent.startTime,
        newEvent.location,
      ]
    );
    const responseBody = { eventId: result.rows[0].id };
    return response.status(201).json(responseBody);
  };

  //Add a GET endpoint
  const getNewEvent = async (request, response) => {
    try {
      const newEvent = request.params.body;
      console.log("Helloo");
      const result = await Connection.query(
        `select * from events where id=$1`,
        [newEvent]
      );
      response.status(200).send(result.rows);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    postNewEvent,
    getNewEvent,
  };
};

module.exports = api;
