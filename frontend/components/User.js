import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
    query {
        authenticatedItem {
            ... on User {
                id
                email
                name
            }
        }
    }
`;
export function  useUser() {
    const { data } = useQuery(CURRENT_USER_QUERY);
    console.log(data);
    return (
        data?.authenticatedItem
    )
}