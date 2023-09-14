import { useParams } from "react-router-dom"

export function Admin() {
    const { id } = useParams();
    return <h1>Welcome { id }</h1>
}