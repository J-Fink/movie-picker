import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import useForm from "../lib/useForm";
import DisplayError from "./DisplayError";
import Movie from "./Movie";
import Form from "./styles/Form";

const SINGLE_MOVIE_QUERY =gql`
   query SINGLE_MOVIE_QUERY($id: ID!) {
        Movie(where: { id: $id }) {
            name
            rating
            description
            id
            seen
        }
}
`;

const UPDATE_MOVIE_MUTATION = gql`
    mutation UPDATE_MOVIE_MUTATION(
        $id: ID!
        $name: String
        $rating: String
        $description: String
        $seen: Boolean!
    ) {
        updateMovie(
            id: $id
            data: { name: $name, rating: $rating, description: $description, seen: $seen }
        ) {
            name
            rating
            description
            id
            seen
        }
    }
`;
export default function UpdateMovie({ id }) {
    //1. We need to get the existing product
    const { data, error, loading } = useQuery(SINGLE_MOVIE_QUERY, {
        variables: { id },
    });
    // alert('update');
    


    
    console.log(data);
    const [isChecked, setIsChecked] = useState(data?.Movie.seen);
    //using useEffect updates isChecked when we go to update a movie
    //data was returning undefined, the below checks if it is undefined and sets the value to
    useEffect(() => {
        isChecked === undefined ? setIsChecked(data?.Movie.seen) :
        setIsChecked(isChecked);
    }
    )
    console.log(isChecked);
    // console.log(data);
    // console.log(isChecked);
    //2. We need to get the mutation to update the product
    const [updateMovie, { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_MOVIE_MUTATION)
    //2.5 create state for form inputs
    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Movie);
    // const [check, setCheck] = useState(inputs.seen);
    // useEffect(() => {
        //     console.log(check);
        // });
    console.log(inputs);
    console.log(typeof isChecked, typeof inputs.seen);
    const handleOnClick = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    };
        //3. We need the form to handle the updates
        // (!!inputs.seen == false) ? setCheck(check) : setCheck(!check);
        
        if (loading) return <p>Loading...</p>
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
                seen: isChecked,
            },
                })
            console.log(res);
            }
        }>
            <DisplayError error={error || updateError} />
            <fieldset disable={updateLoading.toString()} aria-busy={updateLoading}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name || ""}
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
                    />
                </label>
                <label htmlFor="rating">
                    Rating
                    <select
                        id="rating"
                        name="rating"
                        placeholder="Rating"
                        // defaultValue={'Pick A Rating'}
                        value={inputs.rating || ""}
                        onChange={handleChange}
                    >
                        <option value="Pick A Rating">Pick A Rating</option>
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
                    {/* {
                        inputs.seen ?
                        <><input
                        type="checkbox"
                        id="seen"
                        name="seen"
                        onChange={handleChange}
                        value={inputs.seen}
                        checked= {true}/>
                        <div>true</div></>
                        :
                        <><input
                        type="checkbox"
                        id="seen"
                        name="seen"
                        onChange={handleChange}
                        value={inputs.seen}
                        checked= {false} />
                        <div>false</div></>

                    } */}
                </label>
                <button type="submit">Update Movie</button>
            </fieldset>
        </Form>
    ) 
}