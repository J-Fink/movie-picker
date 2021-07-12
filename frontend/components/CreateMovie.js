import DisplayError from './DisplayError';
import { useMutation } from '@apollo/client'; 
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import gql from 'graphql-tag';
import { ALL_MOVIES_QUERY } from './Movies';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const CREATE_MOVIE_MUTATION = gql`
    mutation CREATE_MOVIE_MUTATION(
        # which variables will be passed in? and their types
        $name: String!
        $description: String!
        $rating: String!
        $seen: Boolean!
    ) {
    createMovie(
        data:{
            name: $name
            description: $description
            rating: $rating
            seen: $seen
            }
        ) {
        id
        description
        rating
        seen
  }
}
`;

export default function CreateMovie() {
    const [isChecked, setIsChecked] = useState(false);
    const { inputs, handleChange, clearForm, resetForm } = useForm({
           //have to add below any extra fields to the Add A Movie page
        name: '',
        description: '',
        rating: '',
        seen: isChecked,
    });
    console.log(inputs);
    const [createMovie, { loading, error, data }] = useMutation(
        CREATE_MOVIE_MUTATION,
        {
            variables: inputs,
            refetchQueries: [{ query: ALL_MOVIES_QUERY }],
    })
    console.log(data);
    useEffect(() => {
        setIsChecked(isChecked);
    });
    console.log(isChecked);
    const handleOnClick = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    };
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            //Submit the input fields to the backend
            const res = await createMovie();
            clearForm();
            // Got to the movie's page
            Router.push({
                pathname: `/movie/${res.data.createMovie.id}`, //need to make a movie folder instead of product folder
            })
        }}>
            <DisplayError error={error} />
            <fieldset disable={loading} aria-busy={loading}>
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
                        value={inputs.description || ""}
                        onChange={handleChange}
                    >{console.log(inputs.description, typeof(inputs.description))}</textarea>
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
                <label htmlFor="seen">
                    Seen It?
                    <input 
                    type="checkbox"
                    id="seen"
                    name="seen"
                    value={isChecked}
                    checked={isChecked}
                    onChange={handleChange}
                    onClick={handleOnClick}
                    />
                </label>
            {/* {console.log(inputs.seen)} */}
                <button type="submit">+ Add Movie</button>
            </fieldset>
        </Form>
    )
}