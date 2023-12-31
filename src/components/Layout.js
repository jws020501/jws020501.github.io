import { Routes, Route, useLocation } from 'react-router-dom';

/* css import */
import style from './../styles/Layout.module.css';

/* components import */
import Windowbar from './WindowBar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Tabsbar from './Tabsbar';
import Footer from './Footer';

/* page import */
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Projects from './../pages/Projects';
import Blog from './../pages/Blog';
import CodeExamples from './../pages/CodeExamples';
import Setting from './../pages/Setting';

const Layout = () => {
  const loacation = useLocation();
  const this_pathName = loacation.pathname;


  return (
    <div>
      <Windowbar />
      <div className={style.layout}>
        <Sidebar />
        <Explorer />
        <div className={style.main}>
          <Tabsbar />
          <div className={`${style.content} ${this_pathName === '/code-examples' ? style.code_examples : null}`}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/projects' element={<Projects />}></Route>
              <Route path='/blog' element={<Blog />}></Route>
              <Route path='/code-examples' element={<CodeExamples />}></Route>
              <Route path='/setting' element={<Setting />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;