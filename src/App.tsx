import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/home"
import Explorer from "./pages/explorer/explorer"
import BlogUpload from "./pages/blog-upload/blog-upload"
import { BlogProvider } from "./context/BlogContext"

let About = () => <h1>About</h1>

function App() {
  return<>
<BlogProvider>
  <Navbar /><div className="" style={{height:'84px'}}></div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explorer />} />
    <Route path="/upload-blog" element={<BlogUpload />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BlogProvider>
  </>
}

export default App
