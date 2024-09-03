import Feed from "./Feed"
import { useContext } from "react";
import DataContext from "./context/DataContext";

export default function Home (){

    const { searchResult, fetchError, isLoading } = useContext(DataContext);

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? (
                <Feed posts={searchResult} />
            ) : (
                <p style={{marginTop: "2rem"}}>No posts to display</p>
            ))}
        </main>
    )
}