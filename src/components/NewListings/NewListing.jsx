import { useEffect, useState } from "react";
import Error from "../common/Alerts/Error";
import Button from "../common/Button/Button";
import Step from "../common/steps/Step";
import FirstStepForm from "./FirstStepForm";

import { useFormik } from "formik";

import styles from "./NewListing.module.css";

const inputData = [
  {
    label: "Zillow Id",
    placeholder: "24523453453454",
    id: "Id",
    inputClassName: "newListingInput",
    name: "id",
  },
  {
    label: "Home type",
    placeholder: "Single Family",
    id: "homeType",
    name: "home_type",
  },
  {
    label: "Name",
    placeholder: "Indy 3b Bungalow",
    id: "name",
    name: "name",
  },
  {
    label: "Address",
    placeholder: "123 Main St",
    id: "address",
    name: "address",
  },
  {
    label: "City",
    placeholder: "Indianapolis",
    id: "city",
    name: "city",
  },
  {
    label: "State",
    placeholder: "IN",
    id: "state",
    name: "state",
  },
  {
    label: "Bathrooms",
    placeholder: "5",
    id: "bathrooms",
    name: "bathrooms",
  },
  {
    label: "Bedrooms",
    placeholder: "6",
    id: "bedrooms",
    name: "bedrooms",
  },
  {
    label: "Sq Ft",
    placeholder: "3,453",
    id: "",
    name: "area",
  },
  {
    label: "Stories",
    placeholder: "3",
    id: "stories",
    name: "stories",
  },
  {
    label: "Basement",
    placeholder: "Yes - Finished",
    id: "basment",
    name: "basment",
  },
  {
    label: "Waterfront",
    placeholder: " Yes - Pond",
    id: "waterfront",
    name: "waterfront",
  },
  {
    label: "Views",
    placeholder: "False",
    id: "views",
    name: "views",
  },
  {
    label: "Character Count",
    placeholder: "900",
    id: "characterCount",
    name: "character_counts",
  },
  {
    label: "Focus Keywords",
    placeholder: "schools, low traffic, low taxes, friendly",
    id: "focusKeyword",
    wrapperClassName: "span-all",
    inputClassName: "",
    name: "keyword",
  },
  {
    label: "Lot Size",
    placeholder: "3",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "lot_size",
  },
  {
    label: "Lot Size Measure",
    placeholder: "Acres",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "lot_size_measure",
  },
  {
    label: "Fireplace",
    placeholder: "Wood Burning",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "fire_place",
  },
  {
    label: "Flooring",
    placeholder: "IN",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "flooring",
  },
  {
    label: "Parking",
    placeholder: "5",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "parking",
  },
  {
    label: "Parking Spaces",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "parking_space",
  },
  {
    label: "Year Built",
    placeholder: "5",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "year_built",
  },
  {
    label: "No. Units",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "units",
  },
  {
    label: "Form Summary",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
    name: "summary",
  },
];

const initialValues = {};
inputData
  .map((data) => data.name)
  .filter((name) => name)
  .forEach((name) => (initialValues[name] = ""));

function NewListing() {
  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState([]);

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("Formik", values);

  const handleChangeStep = function (event) {
    event.preventDefault();
    if (activeStep <= 3) setActiveStep((step) => step + 1);
  };

  useEffect(
    function () {
      if (activeStep === 1) setData(inputData.slice(0, 15));
      if (activeStep === 2) setData(inputData.slice(15, -1));
      if (activeStep === 3) setData([]);
    },
    [activeStep]
  );

  return (
    <>
      <Error>
        <p className="mb-0">Some error</p>
      </Error>

      <section className={styles.newListingSection}>
        <header className={styles.newListingHeader}>
          <h2 className={styles.newListingTitle}>Create New Listing</h2>
        </header>
        <div className="p-4">
          <Step
            description={[
              "Home Detail",
              "Optional Information",
              "Creation Review",
            ]}
            stepNum={3}
            activeStep={activeStep}
          />
          <div className={styles.newListingForm}>
            <form action="" className="grid grid__col-2">
              <FirstStepForm dataInputs={data} />
              <div className="btns-container span-all">
                {activeStep > 1 && (
                  <Button
                    className="btn btn-back"
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeStep > 0) setActiveStep((step) => step - 1);
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  className="btn btn-primary btnNext "
                  onClick={handleChangeStep}
                >
                  {activeStep < 3 ? "Next" : "Place Order"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewListing;
