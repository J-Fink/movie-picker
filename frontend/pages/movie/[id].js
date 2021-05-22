import SingleMovie from "../../components/SingleMovie";

export default function SingleMoviePage({ query }) {
    
    return (
        <SingleMovie id={query.id} />
    )
}