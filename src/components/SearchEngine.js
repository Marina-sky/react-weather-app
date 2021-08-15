import React from "react";

import "../styles/SearchEngine.css";

export default function SearchEngine() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            aria-label="Enter a city"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-secondary"
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            <i className="fas fa-map-pin"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
