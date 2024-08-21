import Header from "./src/components/Header"
import Nav from "./src/components/Nav"
import Footer from "./src/components/Footer"
import Home from "./src/components/Home"
import About from "./src/components/About"
import Newpost from "./src/components/Newpost"
import Postpage from "./src/components/Postpage"
import Missing from "./src/components/Missing"
import { Route, Routes, useNavigate} from "react-router-dom"
import React from "react"
import { format } from 'date-fns';
import api from "./src/components/api/posts"
import Editpost from "./src/components/Editpost"


export default function App () {

    const [posts, setPosts] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [searchResult, setSearchResult] = React.useState('')
    const [postTitle, setPostTitle] =React.useState('')
    const [postBody, setPostBody] =React.useState('')
    const [editTitle, setEditTitle] =React.useState('')
    const [editBody, setEditBody] =React.useState('')

    const navigate = useNavigate()

    React.useEffect(() => {
            api.get('/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    React.useEffect(() => {
        const filteredResult = posts.filter(post => ((post.body).toLowerCase()).includes((search).toLowerCase())
        || ((post.title).toLowerCase()).includes((search).toLowerCase())
        )
        setSearchResult(filteredResult.reverse())
    }, [posts, search])

    function handleDelete(id){
        const postListing = posts.filter(post => post.id !== id)
        setPosts(postListing)
        navigate('/')
    }

    function handleSubmit(e){
        e.preventDefault()
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const myNewPost = {id, title: postTitle, datetime, body:postBody}
        const allPosts = [...posts, myNewPost]
        setPosts(allPosts)
        navigate('/')
        setPostTitle('')
        setPostBody('')
    }


    function handleEdit (id){
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatePost = {id, title: editTitle, datetime, body: editBody}
        api.put(`/posts/${id}`, updatePost)
        setPosts(posts.map(post => post.id === id ? {...updatePost} : post))
        setEditTitle('')
        setEditBody('')
        navigate('/')
    }


    return(
        <div className="app">
            <Header title="React JS-blog" />
            <Nav search={search} setSearch={setSearch}/> 
            <Routes>  
                <Route path="/" element={<Home posts={searchResult}/>} />
                <Route path="/post" element={<Newpost postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}/>} />
                <Route path="/edit/:id" element={<Editpost posts={posts} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handleEdit={handleEdit}/>} />
                <Route path="/post/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes> 
            <Footer />
        </div>
    )
}
