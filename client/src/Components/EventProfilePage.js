import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function EventProfilePage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Sagrada Familia</h5>
                <img
                  className="img-thumbnail event-img"
                  src="https://s03.s3c.es/imag/_v0/770x420/0/f/2/sagrada-familia-dreamstim.jpg"
                  mb-2
                  alt="sageada-familia"
                />
                <h6 className="my-3 border bg-success text-center">
                  23/12/2021
                </h6>
                <p className="card-text border text-center">
                  Explore Antoni Gaudi's unfinished masterpiece, the Sagrada
                  Familia. Gaudi's iconic work - its impressive facades and
                  interior - is one of Spain's most visited monuments...
                </p>

                <div className="d-flex flex-row justify-content-center">
                  <a href="" className="btn btn-outline-success btn-sm mx-1">
                    <h6>Read More</h6>
                  </a>
                  <a href="" className="btn btn-outline-success btn-sm mx-1">
                    <h6>Join Now</h6>
                  </a>
                  <a href="" className="btn btn-outline-danger btn-sm mx-3">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </div>

                <img
                  className="google-map-img my-3"
                  src="https://comunicandolonuevo.files.wordpress.com/2015/01/google-maps-new-interface1.jpg"
                  mb-2
                  alt="map"
                />

                <div>
                  <a href="">
                    <button className="btn btn-outline-primary chat-btn">
                      <h6>Chat / Make Friends</h6>{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
