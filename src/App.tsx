import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';
import AutoCADDetails from './pages/courses/AutoCADDetails';
import SketchUpDetails from './pages/courses/SketchUpDetails';
import RevitDetails from './pages/courses/RevitDetails';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
{/*             <Route path="Courses.tsx" element={<Courses />} /> */}
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/autocad" element={<AutoCADDetails />} />
            <Route path="/courses/sketchup" element={<SketchUpDetails />} />
            <Route path="/courses/revit" element={<RevitDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
