import gql from 'graphql-tag';


export const USER_FRANGMENT = gql`
    fragment UserObject on User {
    id
    name
    lastName
    registerDate @include(if: $include)
    birthday @include(if: $include)
    password @include(if: $include)
    email
    }
`;
