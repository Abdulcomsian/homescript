import { useEffect, useState } from "react";
import Error from "../common/Alerts/Error";
import Button from "../common/Button/Button";
import Step from "../common/steps/Step";
import FirstStepForm from "./FirstStepForm";

import styles from "./NewListing.module.css";

const inputData = [
  {
    label: "Zillow Id",
    placeholder: "24523453453454",
    id: "Id",
    inputClassName: "newListingInput",
  },
  {
    label: "Home type",
    placeholder: "Single Family",
    id: "homeType",
  },
  {
    label: "Name",
    placeholder: "Indy 3b Bungalow",
    id: "name",
  },
  {
    label: "Address",
    placeholder: "123 Main St",
    id: "address",
  },
  {
    label: "City",
    placeholder: "Indianapolis",
    id: "city",
  },
  {
    label: "State",
    placeholder: "IN",
    id: "state",
  },
  {
    label: "Bathrooms",
    placeholder: "5",
    id: "bathrooms",
  },
  {
    label: "Bedrooms",
    placeholder: "6",
    id: "bedrooms",
  },
  {
    label: "Sq Ft",
    placeholder: "3,453",
    id: "",
  },
  {
    label: "Stories",
    placeholder: "3",
    id: "stories",
  },
  {
    label: "Basement",
    placeholder: "Yes - Finished",
    id: "basment",
  },
  {
    label: "Waterfront",
    placeholder: " Yes - Pond",
    id: "waterfront",
  },
  {
    label: "Views",
    placeholder: "False",
    id: "views",
  },
  {
    label: "Character Count",
    placeholder: "900",
    id: "characterCount",
  },
  {
    label: "Focus Keywords",
    placeholder: "schools, low traffic, low taxes, friendly",
    id: "focusKeyword",
    wrapperClassName: "span-all",
    inputClassName: "",
  },
  {
    label: "Lot Size",
    placeholder: "3",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Lot Size Measure",
    placeholder: "Acres",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Fireplace",
    placeholder: "Wood Burning",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Flooring",
    placeholder: "IN",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Parking",
    placeholder: "5",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Parking Spaces",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Year Built",
    placeholder: "5",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "No. Units",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
  {
    label: "Form Summary",
    placeholder: "6",
    id: "focusKeyword",
    wrapperClassName: "",
    inputClassName: "",
  },
];

function NewListing() {
  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState([]);

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
                <Button className="btn btn-back">Back</Button>
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
