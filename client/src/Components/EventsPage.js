import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { SearchBar } from "./SeachBar";
import {Categories} from "./categories/Categories";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/events?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SearchBar />

            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Visit Beautiful Places</h5>
                <p className="card-text border text-center">
                  Select places to visit and meet new people who are visiting
                  similar places...
                </p>
                {/* <img
                  className="google-map-img my-1"
                  src="https://comunicandolonuevo.files.wordpress.com/2015/01/google-maps-new-interface1.jpg"
                  mb-2
                  alt="map"
                /> */}
                <div>
                  {events.map((event) => {
                    return <Card event={event} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
}
