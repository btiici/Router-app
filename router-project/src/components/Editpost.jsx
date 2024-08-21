import React from "react"
import { useParams, Link } from "react-router-dom"

export default function Editpost ({posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody}){

    const { id } = useParams()
    const post = posts.find(post => post.id.toString() === id);

    React.useEffect(() => {
        if (post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
    return(
        <main className="NewPost">
            {editTitle && 
                <>
                    <h2>Edit post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            required
                            type="text"
                            id="postTitle"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea 
                            required
                            id="postBody"
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>
                            Post
                        </button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Page not found</h2>
                    <p>Well, thats disappointing</p>
                    <p>
                    <Link to="/">Visit our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}