import React, { useState } from "react";
import "./Logo.css";
import BrandLogo from "./BrandLogo";

const CarLogo = () => {
  const [model, setModel] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
    location: "",
    yearOfManufacture: "",
    transmission: "",
    insuranceValidUpto: "",
    externalFitments: "",
    kms: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const clic = (clickedModel) => {
    setModel(true);
    setFormData((prevData) => ({ ...prevData, brand: clickedModel }));
  };
  console.log("1", formData);
  const formInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("2", formData);
  const submit = (e) => {
    e.preventDefault();
    if (formData.brand == "") {
      alert("click brand");
      return;
    }
    if (
      formData.model == "" ||
      formData.color == "" ||
      formData.location == "" ||
      formData.externalFitments == "" ||
      formData.insuranceValidUpto == ""
    ) {
      alert("ENTER ALL DETAILSs");
      return;
    }

    setSubmittedData((prevData) => [...prevData, formData]);

    setFormData({
      brand: "",
      model: "",
      color: "",
      location: "",
      yearOfManufacture: "",
      transmission: "",
      insuranceValidUpto: "",
      externalFitments: "",
      kms: "",
    });

    console.log("Submitted for model:", formData.model);
  };

  return (
    <div>
      <div className="logos">
        {BrandLogo.map((logo, id) => (
          <div onClick={() => clic(logo.name)} className="logo" key={id}>
            <img src={logo.url} />
          </div>
        ))}
      </div>

      {model && (
        <div className="form-container">
          <form onSubmit={submit}>
            <div>
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={formInput}
              />
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={formInput}
              />
            </div>
            <div>
              <label>Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={formInput}
              />
            </div>
            <div>
              <label>No of Owners</label>
              <input
                type="text"
                name="noOfOwners"
                value={formData.noOfOwners}
                onChange={formInput}
              />
            </div>

            <div>
              <label>Year of manufacture</label>
              <input
                type="text"
                name="yearOfManufacture"
                value={formData.yearOfManufacture}
                onChange={formInput}
              />
            </div>

            <div>
              <label>Tranmission</label>
              <input
                type="text"
                name="transmission"
                value={formData.transmission}
                onChange={formInput}
              />
            </div>

            <div>
              <label>Insurance valid upto</label>
              <input
                type="text"
                name="insuranceValidUpto"
                value={formData.insuranceValidUpto}
                onChange={formInput}
              />
            </div>

            <div>
              <label>External fitments</label>
              <input
                type="text"
                name="externalFitments"
                value={formData.externalFitments}
                onChange={formInput}
              />
            </div>
            <div>
              <label>kms</label>
              <input
                type="text"
                name="kms"
                value={formData.kms}
                onChange={formInput}
              />
            </div>
            <div style={{ display: "flex" }}>
              <label>Photo</label>
              <input
                type="file"
                name="photo"
                value={formData.photo}
                onChange={formInput}
              />
            </div>

            <button type="submit">Submit</button>

            <input
              type="text"
              name="model"
              value={formData.brand}
              onChange={formInput}
              style={{ display: "none" }}
            />
          </form>
        </div>
      )}

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>{JSON.stringify(data)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarLogo;
