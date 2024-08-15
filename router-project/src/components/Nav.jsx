import { Link } from "react-router-dom"

export default function Nav ({search, setSearch}){
    return(
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Post</label>
                <input 
                    placeholder="Search"
                    id="search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Posts</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}