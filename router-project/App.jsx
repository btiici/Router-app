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

const formattedDate = format(new Date(), 'yyyy-MM-dd');
console.log(formattedDate); // Outputs the current date in 'yyyy-MM-dd' format




export default function App () {

        const [posts, setPosts] = React.useState([
            {
              id: 1,
              title: "My First Post",
              datetime: "July 01, 2021 11:17:36 AM",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
            },
            {
              id: 2,
              title: "My 2nd Post",
              datetime: "July 01, 2021 11:17:36 AM",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
            },
            {
              id: 3,
              title: "My 3rd Post",
              datetime: "July 01, 2021 11:17:36 AM",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
            },
            {
              id: 4,
              title: "My Fourth Post",
              datetime: "July 01, 2021 11:17:36 AM",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
}
])

    const [search, setSearch] = React.useState('')
    const [postTitle, setPostTitle] =React.useState('')
    const [postBody, setPostBody] =React.useState('')

    const navigate = useNavigate()

    function handleDelete(id){
        const postListing = posts.filter(post => post.id !== id)
        setPosts(postListing)
        navigate('/')
    }

    function handleSubmit(e){
        e.preventDefault()
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        const date = format(new Date(), 'MMMM dd, yyyy pp')
        const myNewPost = {id, Title: postTitle, date, body:postBody}
        const allPosts = [...posts, myNewPost]
        setPosts(allPosts)
        navigate('/')
        setPostTitle('')
        setPostBody('')
    }

    return(
        <div className="app">
            <Header title="React JS-blog" />
            <Nav search={search} setSearch={setSearch}/> 
            <Routes>  
                <Route path="/" element={<Home posts={posts}/>} />
            <Route path="/post" element={<Newpost postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}/>} />
                <Route path="/post/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes> 
            <Footer />
        </div>
    )
}
