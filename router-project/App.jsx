import Header from "./src/components/Header"
import Nav from "./src/components/Nav"
import Footer from "./src/components/Footer"
import Home from "./src/components/Home"
import About from "./src/components/About"
import Newpost from "./src/components/Newpost"
import Postpage from "./src/components/Postpage"
import Missing from "./src/components/Missing"
import { Route, Routes } from "react-router-dom"
import React from "react"



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

    return(
        <div className="app">
            <Header title="React JS-blog" />
            <Nav search={search} setSearch={setSearch}/> 
            <Routes>  
                <Route path="/" element={<Home posts={posts}/>} />
                <Route path="/post" element={<Newpost />} />
                <Route path="/post/:id" element={<Postpage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes> 
            <Footer />
        </div>
    )
}
