import { createContext } from "react";
import { useNavigate } from "react-router-dom"
import React from "react"
import { format } from 'date-fns';
import api from "../api/posts"
import UseWindowSize from "../hooks/UseWindowSize"
import UseAxiosFetch from "../hooks/UseAxiosFetch"


const DataContext = createContext({});

export function DataProvider ({ children }){
    const [posts, setPosts] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [searchResult, setSearchResult] = React.useState('')
    const [postTitle, setPostTitle] =React.useState('')
    const [postBody, setPostBody] =React.useState('')
    const [editTitle, setEditTitle] =React.useState('')
    const [editBody, setEditBody] =React.useState('')
    const { width } = UseWindowSize();
    const { data, fetchError, isLoading } = UseAxiosFetch('https://jsonplaceholder.typicode.com/posts');
    const navigate = useNavigate()


    React.useEffect(() => {
        setPosts(data)
    }, [data]) 

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
        <DataContext.Provider value={{
            width, search, setSearch,
            searchResult, fetchError, isLoading,
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
            posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody,
            handleDelete 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;