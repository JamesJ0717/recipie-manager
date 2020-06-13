import gql from "graphql-tag";

export const SUBMIT_RECIPIE = gql`
  mutation SubmitRecipie($date: Date, $name: String, $recipie: String) {
    recipiesSave(date: $date, name: $name, recipie: $recipie) {
      id
    }
  }
`;

export const UPDATE_RECIPIE = gql`
  mutation UpdateRecipie($id: Int, $date: Date, $name: String, $recipie: String) {
    recipiesUpdate(id: $id, date: $date, name: $name, recipie: $recipie) {
      id
    }
  }
`;

export const GET_RECIPIE = gql`
  query GetRecipie($id: Int) {
    recipiesGet(id: $id) {
      id
      date
      name
      recipie
    }
  }
`;

export const GET_RECIPIES = gql`
  query GetRecipies {
    recipies {
      id
      date
      name
      recipie
    }
  }
`;
