const { Pool } = require("pg");
const secrets = require('./secrets.json');
const pool = new Pool(secrets);


const api = () => {
  const postNewEvent = async (request, response) => {
    const newEvent = request.body;
    console.log(newEvent);
    const result = await pool.query(
      `INSERT INTO events (title, description, startTime, location, category) 
        VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [
        newEvent.title,
        newEvent.description,
        newEvent.startTime,
        newEvent.location,
        newEvent.category

      ]
    );
    const responseBody = { eventId: result.rows[0].id };
    return response
    .status(201)
    .json({
      status : "Event Successfully created.",
      NewEventId : responseBody.eventId
    });
  };

  //Add a GET endpoint
  


  // const getNewEvent = async (request, response) => {
  //   try {
  //     console.log("Helloo");
  //     const result = await pool.query(`select * from events`);
  //     response.status(200).send(result.rows);
  //   } catch (err) {
  //     console.log(err);
  //     response.sendStatus(500);
  //   }
  // };

    // GET Specific Event endpoint
    const getSpecificEvent = async (request, response) => {
      const category =  request.query.category;
      try {
        if(!category){
          const result = await pool.query(`select * FROM events`);
          response.status(200).send(result.rows);
        }else{

          const result = await pool.query(`SELECT * FROM events WHERE category="sports"`);
          console.log(result);
          response.status(200).send(result.rows);
        }
      } catch (err) {
        console.log(err);
        response.sendStatus(500);
      }
    };
  
  return {
    postNewEvent,
    getSpecificEvent
  };
};

module.exports = api;
