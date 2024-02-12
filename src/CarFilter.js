import React, { useState } from "react";
import "./carFilter.css";
import carData from "./carData";

const CarFilter = () => {
  const [locationFilter, setLocationFilter] = useState("All");
  const [bodyTypeFilter, setBodyTypeFilter] = useState("");
  const [brandFilters, setBrandFilters] = useState([]);
  const [ownerFilter, setOwnerFilter] = useState("");

  const uniqueOwnerValues = [
    ...new Set(carData.map((car) => car.numberOfOwners)),
  ];

  const sortedOwnerValues = uniqueOwnerValues.sort((a, b) => a - b);

  const filteredCars = carData.filter((car) => {
    if (locationFilter !== "All" && car.location !== locationFilter) {
      return false;
    }

    if (
      bodyTypeFilter !== "" &&
      !car.externalFitments.toLowerCase().includes(bodyTypeFilter.toLowerCase())
    ) {
      return false;
    }

    if (
      brandFilters.length > 0 &&
      !brandFilters.includes(car.brand.toLowerCase())
    ) {
      return false;
    }

    if (
      ownerFilter !== "" &&
      car.numberOfOwners !== parseInt(ownerFilter, 10)
    ) {
      return false;
    }

    return true;
  });

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleBodyTypeChange = (e) => {
    setBodyTypeFilter(e.target.value);
  };

  const handleBrandChange = (brand) => {
    const updatedFilters = [...brandFilters];
    const index = updatedFilters.indexOf(brand.toLowerCase());

    if (index === -1) {
      updatedFilters.push(brand.toLowerCase());
    } else {
      updatedFilters.splice(index, 1);
    }

    setBrandFilters(updatedFilters);
  };
  const handleOwnerChange = (e) => {
    setOwnerFilter(e.target.value);
  };

  return (
    <div className="carFilter">
      <div className="filter-column">
        <div className="filter-heading">
          <h1>Filter</h1>
        </div>
        <div className="location-filter">
          <div className="title">Location:</div>
          <div>
            <select id="cars" onChange={handleLocationChange}>
              <option value="All">All</option>

              {[...new Set(carData.map((car) => car.location))].map(
                (location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="bodytype-search-filter">
          <div className="title">bodytype</div>
          <div className="bodytype-search">
            <input type="text" onChange={handleBodyTypeChange} />
          </div>
        </div>
        <div className="brand-filter">
          <div className="title">Brand</div>
          <div className="brand">
            {["tata", "benz", "toyota", "kia", "maruti"].map((brand, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={brand}
                  checked={brandFilters.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="owners-filter">
          <div className="title">Owners</div>
          <div className="owners">
            {sortedOwnerValues.map((ownerValue, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`owner${ownerValue}`}
                  name="ownerFilter"
                  value={ownerValue.toString()}
                  checked={ownerFilter === ownerValue.toString()}
                  onChange={handleOwnerChange}
                />
                <label htmlFor={`owner${ownerValue}`}>{`${ownerValue} owner${
                  ownerValue > 1 ? "s" : ""
                }`}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="budget-filter">
          <div className="title">Budget</div>
          <div className="budget">
            <button>Less than 2 lakh</button>
            <button>2L-4L</button>

            <button>4L-6L</button>
            <button>More than 6L</button>
          </div>
        </div>
        <div className="fueltype-filter">
          <div className="title">Fuel Type </div>
          <div className="fueltype">
            <div>
              <input type="radio"></input>
              <label>Petrol</label>
            </div>
            <div>
              <input type="radio"></input>
              <label>Diesel</label>
            </div>
            <div>
              <input type="radio"></input>
              <label>CNG</label>
            </div>
          </div>
        </div>
        <div className="transmission-filter">
          <div className="title">Fuel Type </div>
          <div className="transmission">
            <div>
              <input type="radio"></input>
              <label>Automatic</label>
            </div>
            <div>
              <input type="radio"></input>
              <label>Manual</label>
            </div>
          </div>
        </div>
      </div>
      <div className="car-result">
        <h1>Car Result</h1>
        <div className="car-card">
          {filteredCars.map((car, index) => (
            <div key={index}>
              <p>Brand: {car.brand}</p>
              <p>Model: {car.model}</p>

              <img
                src={car.photo}
                alt={`${car.brand} ${car.model}`}
                style={{ maxWidth: "200px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarFilter;
