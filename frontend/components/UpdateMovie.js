import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import DisplayError from "./DisplayError";
import Form from "./styles/Form";

const SINGLE_MOVIE_QUERY =gql`
   query SINGLE_MOVIE_QUERY($id: ID!) {
        Movie(where: { id: $id }) {
            name
            rating
            description
            id
        }
}
`;

const UPDATE_MOVIE_MUTATION = gql`
    mutation UPDATE_MOVIE_MUTATION(
        $id: ID!
        $name: String
        $rating: String
        $description: String
    ) {
        updateMovie(
            id: $id
            data: { name: $name, rating: $rating, description: $description }
        ) {
            name
            rating
            description
            id
        }
    }
`;
export default function UpdateMovie({ id }) {
    //1. We need to get the existing product
    const { data, error, loading } = useQuery(SINGLE_MOVIE_QUERY, {
        variables: { id },
    });
    //2. We need to get the mutation to update the product
    const [updateMovie, { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_MOVIE_MUTATION)
    //2.5 create state for form inputs
    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Movie);
    if (loading) return <p>Loading...</p>
    //3. We need the form to handle the updates
    
    return (
        <Form onSubmit={async (e) => {
            // TODO: handle submit
            e.preventDefault();
            const res = await updateMovie({
                variables: {
                id,
                name: inputs.name,
                description: inputs.description,
                rating: inputs.rating,
            },
                })
            }
        }>
            <DisplayError error={error || updateError} />
            <fieldset disable={updateLoading} aria-busy={updateLoading}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="rating">
                    Rating
                    <select
                        id="rating"
                        name="rating"
                        placeholder="Rating"
                        value={inputs.rating}
                        onChange={handleChange}
                    >
                        <option selected value="Pick A Rating">Pick A Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                </label>
                <button type="submit">Update Movie</button>
            </fieldset>
        </Form>
    )
}