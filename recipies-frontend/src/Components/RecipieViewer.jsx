import React from "react";
import { Query } from "react-apollo";
import { Card, CardDeck, CardFooter, CardBody, CardHeader, Col } from "reactstrap";

import { GET_RECIPIES } from "../Queries";

const RecipieViewer = ({ canEdit, onEdit }) => (
  <Query query={GET_RECIPIES}>
    {({ loading, data }) =>
      !loading && (
        <CardDeck>
          {data.recipies.map((recipie) => {
            console.log(recipie);
            return (
              <Col key={recipie.id} md="6" lg="4" style={{ padding: 10 }}>
                <Card onClick={() => canEdit(recipie) && onEdit(recipie)} style={{ backgroundColor: "lightgray" }}>
                  <CardHeader>{recipie.name}</CardHeader>
                  <CardBody>{recipie.recipie}</CardBody>
                  <CardFooter className="small">Posted: {new Date(recipie.date).toLocaleDateString()}</CardFooter>
                </Card>
              </Col>
            );
          })}
        </CardDeck>
      )
    }
  </Query>
);

RecipieViewer.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
};

export default RecipieViewer;
