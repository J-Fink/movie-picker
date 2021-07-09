import SingleMovie from "../../components/SingleMovie";

export default function SingleMoviePage({ query }) {
    console.log(query);
    return (
        <SingleMovie id={query.id} />
    )
}