import UpdateMovie from "../components/UpdateMovie";

export default function UpdatePage({ query }) {
    return (
        <div>
            <UpdateMovie id={query.id}/>
        </div>
    )
  }
  