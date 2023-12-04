import { gql } from '@apollo/client'


const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
        addUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password){
            id,
            firstName
            lastName
            email
        }
    }
`

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export { ADD_USER, LOGIN_USER}