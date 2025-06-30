import{Route,Browser as Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdmissionPage from "./pages/Admission";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
const App = () => {
  return(
    <>
    <Router>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/home" element={<HomePage/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/Admission" element={<AdmissionPage/>}/>
       <Route path="/contact" element={<ContactPage/>}/>
       <Route path="/courses" element={<CoursesPage/>}/>
       <Route path="/notfound" element={<NotFoundPage/>}/>
       </Routes>
    </Router>
    </>
  )
}
export default App;