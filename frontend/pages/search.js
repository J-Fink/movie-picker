import PleaseSignIn from "../components/PleaseSignIn";
import fetch from 'isomorphic-fetch';
import useSWR from 'swr';
// import { ALL_MOVIES_QUERY, MoviesListStyles } from "../components/Movies";
// import { useQuery } from "@apollo/client";
// import { perPage } from "../config";
// import Pagination from "../components/Pagination";
import Movie from '../components/Movie';
import Form from "../components/styles/Form";
import useForm from "../lib/useForm";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";

const SearchStyles = styled.div`
    /* margin-top: var(--headerHeight); */
    /* margin-top:var(--headerHeight); */
    li {
        list-style: none;
        a {

        }
        a:hover {
            background-color: grey;
            cursor: pointer;
        }
    }
`;



export default function SearchPage() {
    // console.log(error);
    const { inputs, handleChange } = useForm({
        movieName: '',
    });
    // console.log(useForm({
    //     movieName: '',
    // }));
    console.log(inputs);
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const [submitted, setSubmitted] = useState(false);

    // can capture these variables and the conditional inside the hook is allowed, so you don't have different hook calls.
    //useState is connected to the submit button
    const {data, error} = useSWR(() => {
        if (error) return <p>{error.message}</p>
        if(submitted) {
            return(
                `${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_URL}?s=${inputs.movieName}&apikey=${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_KEY}`
            )
        }
    }, fetcher);
    console.log(data);
    console.log(error);
    
    return (
        <SearchStyles >
        {/* <PleaseSignIn> */}
            
            <Form onSubmit={async (e) => {
                e.preventDefault();
                setSubmitted(true);
            
            }}>
                <fieldset>
                    <input
                      onChange={handleChange} type="search" placeholder="Search for a Movie" value={inputs.movieName || ""}
                      name="movieName" id="movieName"
                     />
                    <button type="submit" >SEE MOVIES</button>
                </fieldset>
            {inputs.movieName}
            <ul> 
           {data?.Search?.map((movie) => (
               <li key={movie.imdbID}><a>{movie.Title} {movie.Year}</a></li>
           ))} 
           </ul>
            </Form>
            {/* {
                submitted ? console.log('submitted') : console.log('not submitted')
            } */}
                        

         
            {/* </PleaseSignIn> */}
        
        </SearchStyles>
    )
  }
  