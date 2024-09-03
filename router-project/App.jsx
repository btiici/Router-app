import Header from "./src/components/Header"
import Nav from "./src/components/Nav"
import Footer from "./src/components/Footer"
import Home from "./src/components/Home"
import About from "./src/components/About"
import Newpost from "./src/components/Newpost"
import Postpage from "./src/components/Postpage"
import Editpost from "./src/components/Editpost"
import Missing from "./src/components/Missing"
import { Route, Routes} from "react-router-dom"
import { DataProvider } from "./src/components/context/DataContext"


export default function App () {

    return(
        <div className="app">
            <DataProvider>
                <Header title="React JS-blog" />
                <Nav /> 
                <Routes>  
                    <Route path="/" element={<Home />} />
                    <Route path="/post" element={<Newpost />} />
                    <Route path="/edit/:id" element={<Editpost />} />
                    <Route path="/post/:id" element={<Postpage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Missing />} />
                </Routes> 
                <Footer />
            </DataProvider>
        </div>
    )
}
