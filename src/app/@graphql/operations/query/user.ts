import gql from 'graphql-tag';
import { USER_FRANGMENT } from '../fragment/user';

export const LOGIN_QUERY = gql `
    query getLogin($email:String!, $password:String!){
        login(email: $email, password: $password){
            status
            message
            token
        }
    }
`;

export const USER_LIST_QUERY = gql`
    query userList ($include: Boolean!){
        users{
            status
            message
            users{
                ...UserObject
            }
        }
    }
    ${USER_FRANGMENT}
`;

export const ME_DATA_QUERY = gql `
    query meData($include: Boolean!){
        me{
            status
            message
            users{
               ...UserObject
            }
        }
    }
    ${USER_FRANGMENT}
`;
