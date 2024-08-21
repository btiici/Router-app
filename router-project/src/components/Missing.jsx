import { Link } from "react-router-dom"

export default function Missing (){
    return (
        <main className="Missing">
            <h2>Page not found</h2>
            <p>Well, thats disappointing</p>
            <p>
                <Link to="/">Visit our Homepage</Link>
            </p>
        </main>
    )
}