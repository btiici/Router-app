

export default function Newpost ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}){
    return (
        <main className="NewPost">
            <h2>New post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                    required
                    type="text"
                    id="postTitle"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea 
                    required
                    id="postBody"
                    value={postBody}
                    onChange={setPostBody}
                />
                <button type="submit">
                    Post
                </button>
            </form>

        </main>
    )
}