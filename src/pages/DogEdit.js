import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const DogEdit = ({ dogs, updateDog }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentDog = dogs.find((dog) => dog.id === +id);

  const [editDog, setEditDog] = useState({
    name: currentDog.name,
    age: currentDog.age,
    enjoys: currentDog.enjoys,
    image: currentDog.image,
  });


  const handleChange = (e) => {
    setEditDog({ ...editDog, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateDog(editDog);
    navigate("/dogindex");
  };

  return (
    <>
    <div className="dog-edit-container">
      <h2>Edit Dog</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              name="name"
              type="text"
              defaultValue={editDog.name}
              onChange={handleChange}
              />
          </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            name="age"
            type="number"
            defaultValue={editDog.age}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            name="enjoys"
            type="text"
            defaultValue={editDog.enjoys}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Add Image</Label>
          <Input
            name="image"
            type="url"
            defaultValue={editDog.image}
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="Submit">
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default DogEdit;
