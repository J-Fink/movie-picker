import Form from './styles/Form'
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY, useUser } from './User';
import DisplayError from './DisplayError';
import Router from 'next/router';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
        ... on UserAuthenticationWithPasswordSuccess {
            item {
                id
                email
                name
            }
        }
        ... on UserAuthenticationWithPasswordFailure {
            code
            message
        }
    }
}

`;

export default function SignIn() {
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
    })
const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    //refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
});


async function handleSubmit(e) {
    e.preventDefault(); //stop the form from submitting
    await signin();
    resetForm();
    Router.push({
        pathname: '/',
    });
    // await return(
    //     <Movies />
    // )
    //send email and password to graphQLAPI
    
}
const error = data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure' ? data?.authenticateUserWithPassword : undefined;
    
const me = useUser();
if (!me) return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Sign Into Your Account</h2>
            <DisplayError error={error} />
            <fieldset>
                <label htmlFor="email">
                    Email
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    autoComplete="password"
                    value={inputs.password}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign In!</button>
            </fieldset>
        </Form>
)
return null;

}