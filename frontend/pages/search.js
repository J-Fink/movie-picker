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




export default function SearchPage() {
    
    const { inputs, handleChange } = useForm({
        movieName: '',
    });
    // console.log(useForm({
    //     movieName: '',
    // }));
    console.log(inputs);
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    
    
    // let submitMovieName = '';
    // const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_URL}?s=${submitMovieName}&apikey=${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_KEY}`, fetcher);
    // console.log(myMovieAPI);
    const [submitted, setSubmitted] = useState(false);

    // can capture these variables and the conditional inside the hook is allowed, so you don't have different hook calls.
    //useState is connected to the submit button
    const {data, error} = useSWR(() => {
        if(submitted) {
            return(
                `${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_URL}?s=${inputs.movieName}&apikey=${process.env.NEXT_PUBLIC_OPEN_MOVIE_API_KEY}`
            )
        }
    }, fetcher);
    console.log(data);
    // console.log(data?.Error);
    // console.log(data);
    // console.log(myApi.data);
    // console.log(data.Search);
    // if(error) return <div>{error}</div>
    // if(!data) return <div>loading...</div>
    // console.log(inputs);
    // useEffect() {
    //     // inputs.movieName =
    // }
    
    return (
        <>
        {/* <PleaseSignIn> */}
            <Form onSubmit={async (e) => {
                e.preventDefault();
                setSubmitted(true);
                // console.log(submitMovieName);
                // const res = await movieAPI();
                // console.log(res);
                // submitted = true;//Submit the input fields to the api, use that function
                // publicMovieAPI();
                // const res = publicMovieAPI();
                
                // alert('submitted');
            }}>
                <fieldset>
                    <input
                      onChange={handleChange} type="search" placeholder="Search for a Movie" value={inputs.movieName || ""}
                      name="movieName" id="movieName"
                     />
                    <button type="submit" >SEE MOVIES</button>
                </fieldset>
            {inputs.movieName}
            </Form>
            {
                submitted ? console.log('submitted') : console.log('not submitted')
            }
                        
                 {/* <ul> 
                 {data?.Search?.map((movie) => (
                     <li key={movie.imdbID}>{movie.Title} {movie.Year}</li>
                 ))} 
                 </ul>

            }  */}
            {/* </PleaseSignIn> */}
        
        </>
    )
  }
  