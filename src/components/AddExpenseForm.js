import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      name:name,
      cost: parseInt(cost),
      date: date,
      category:category,
      
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Expense
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div class="row">
              <div class="col-sm col-lg-3">
                <label htmlFor="name">Name</label>
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div class="col-sm col-lg-3">
                <label htmlFor="cost">Cost</label>
                <input
                  required="required"
                  type="number"
                  class="form-control"
                  id="cost"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              </div>
              <div class="col-sm col-lg-3">
                <label htmlFor="date">Date</label>
                <input
                  required="required"
                  type="date"
                  class="form-control"
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div class="col-sm col-lg-3">
                <label for="category">Category</label>
                <select
                  id="category"
                  class="form-control"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="Fuel">Fuel</option>
                  <option value="Food">Food</option>
                  <option value="Transportation">Transporation</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddExpenseForm;
