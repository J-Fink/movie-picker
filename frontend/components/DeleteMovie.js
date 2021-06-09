import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_MOVIE_MUTATION = gql`
    mutation DELETE_MOVIE_MUTATION($id: ID!) {
        deleteMovie(id: $id) {
            id
            name
        }
    }
`;
function update(cache, payload) {
    // console.log(payload);
    //below line rips the item out of the cache, which it is then re-rendered because it changes
    cache.evict(cache.identify(payload.data.deleteMovie));
}
export default function DeleteMovie({ id, children }) {
    const [deleteMovie, { loading }] = useMutation(DELETE_MOVIE_MUTATION, {
        variables: { id },
        update: update,
    })
    return(
        <button type="button" disabled={loading} onClick={() => {
            if(confirm('Are you sure?')) {
                //then delete it
                deleteMovie().catch(err => alert(err.message));
            }
        }}>{children}</button>
    )
}