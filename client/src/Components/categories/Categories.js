import React from "react";
import { SearchBar } from "../SeachBar";
import "./mystyle.css"

export function Categories() {
    return (
        <>
            <div className="container">
                <SearchBar />
                <h5 className="hsh">welcome to daily activities</h5>
                <div className="">
                    <a href="">
                        <button className="hsbtn">
                            <h6></h6>{"Visiting places"}
                        </button>
                    </a>
                    <a href="">
                        <button className="hsbtn">
                            <h6></h6>{"hiking"}
                        </button>
                    </a>
                    <a href="">
                        <button className="hsbtn">
                            <h6></h6>{"biking"}
                        </button>
                    </a>
                    <a href="">
                        <button className="hsbtn">
                            <h6></h6>{"party"}
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

