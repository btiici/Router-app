import { useParams, Link } from "react-router-dom"
import { useContext } from "react";
import DataContext from "./context/DataContext";

export default function Postpage (){

    const { posts, handleDelete } = useContext(DataContext);
    const { id } = useParams()
    const post = posts.find(post => post.id == id)
    return (
        <main className="PostPage">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                        <button onClick={() => handleDelete(post.id)} className="deleteButton">
                            Delete Post
                        </button>
                    </>
                }
                {!post && 
                    <>
                        <h2>Page not found</h2>
                        <p>Well, thats disappointing</p>
                        <p>
                            <Link to="/">Visit our Homepage</Link>
                        </p>
                    </>
                }               
            </article>
        </main>
    )
}