import React from "react";
import { Button, Form, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form as FinalForm, Field } from "react-final-form";

import client from "../apollo";
import { GET_RECIPIES, SUBMIT_RECIPIE, UPDATE_RECIPIE } from "../Queries";

export default function RecipieEditor({ recipieE, onClose }) {
  console.log(recipieE);
  let id = recipieE.id;
  return (
    <FinalForm
      onSubmit={async ({ name, recipie }) => {
        let date = new Date();
        console.log(recipieE, id, name);
        if (Object.keys(recipieE).length !== 0) {
          await client
            .mutate({
              variables: { id, name, recipie },
              mutation: UPDATE_RECIPIE,
              refetchQueries: () => [{ query: GET_RECIPIES }],
            })
            .then((res) => console.log(res.data));
        } else {
          await client
            .mutate({
              variables: { date, name, recipie },
              mutation: SUBMIT_RECIPIE,
              refetchQueries: () => [{ query: GET_RECIPIES }],
            })
            .then((res) => console.log(res.data.recipiesSave.id));
        }

        onClose();
      }}
      initialValues={{ name: recipieE.name, recipie: recipieE.recipie }}
      render={({ handleSubmit, pristine, invalid }) => (
        <Modal isOpen toggle={onClose}>
          <Form onSubmit={handleSubmit}>
            <ModalHeader toggle={onClose}>
              {Object.keys(recipieE).length !== 0 ? "Edit Recipie" : "New Recipie"}
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Name</Label>
                <Field required name="name" className="form-control" component="input" />
              </FormGroup>
              <FormGroup>
                <Label>Recipie</Label>
                <Field required name="recipie" className="form-control" component="input" />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" disabled={pristine} color="primary">
                Save
              </Button>
              <Button color="secondary" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    />
  );
}
