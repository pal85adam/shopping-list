import React, { useState } from "react";

const STATUS = {
  IDEL: "idel",
  SUBMITTED: "submitted",
  SUBMITTING: "submitting",
  COMPLETED: "completed",
};

export default function FormComponent({ dispatch }) {
  const [viewSubmitForm, setViewSubmitForm] = useState(false);

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const [formStatus, setFormStatus] = useState(STATUS.IDEL);
  const [touched, setTouched] = useState({});

  const getErrors = () => {
    const errors = {};
    if (!itemName) errors.itemName = "Item name is required!";
    if (!itemPrice) errors.itemPrice = "Item price is required!";
    if (itemName && parseInt(itemName))
      errors.itemName = "Please enter a valid name!";
    if (itemPrice && !parseInt(itemPrice))
      errors.itemPrice = "Please enter a valid price!";

    return errors;
  };

  const formErrors = getErrors();
  const isValid = Object.keys(formErrors).length === 0;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setFormStatus(STATUS.SUBMITTING);
    if (isValid) {
      dispatch({ type: "addNewItem", itemName, itemPrice });
      setViewSubmitForm(false);
      setFormStatus(STATUS.COMPLETED);
      resetForm();
    } else {
      setFormStatus(STATUS.SUBMITTED);
    }
  };

  const setTouchedHandler = (e) => {
    setTouched((touched) => {
      return { ...touched, [e.target.id]: true };
    });
  };

  const viewSubmitFormHandler = () => {
    setViewSubmitForm(true);
  };

  const resetForm = () => {
    setItemName("");
    setItemPrice("");
    setFormStatus(STATUS.IDEL);
  };
  return (
    <section className="controll-section light-seperator">
      {!viewSubmitForm && (
        <button className="button" onClick={viewSubmitFormHandler}>
          Add New
        </button>
      )}
      {viewSubmitForm && (
        <>

          <form onSubmit={(e) => formSubmitHandler(e)}>
          <span
            className="button button-cancel"
            onClick={() => {
              resetForm();
              setViewSubmitForm(false);
            }}
          ></span>
            <div>
              <input
                id="itemName"
                placeholder="Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                onBlur={(e) => setTouchedHandler(e)}
                type="text"
              />
              <p className="error">
                {!isValid &&
                  (formStatus === STATUS.SUBMITTED || touched.itemName) &&
                  formErrors.itemName}
              </p>
            </div>
            <div>
              <input
                id="itemPrice"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                onBlur={(e) => setTouchedHandler(e)}
                type="text"
              />
              <p className="error">
                {!isValid &&
                  (formStatus === STATUS.SUBMITTED || touched.itemPrice) &&
                  formErrors.itemPrice}
              </p>
            </div>
            <input
              className="button"
              type="submit"
              value="submit"
              disabled={formStatus === STATUS.SUBMITTING}
            />
          </form>
        </>
      )}
    </section>
  );
}
