import { gql} from '@apollo/client'

const GET_USERS = gql`
    query getUsers {
        users {
  	            firstName
                lastName
                email
                id
	        }
    }
`

export { GET_USERS}