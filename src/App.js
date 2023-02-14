import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Body/HomeBody/Home";
import Events from "./components/Body/EventsBody/Events";
import Profile from "./components/Body/ProfileBody/Profile"
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Entertainment from "./components/Body/EventsBody/Entertainment/Entertainment";
import Creation from "./components/Body/EventsBody/Creation/Creation";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-body'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/Entertainment' element={<Entertainment/>}/>
                        <Route path='/Creation' element={<Creation/>}/>
                        <Route path='/Science' element={<Events/>}/>
                        <Route path='/Sport' element={<Events/>}/>
                        <Route path='/Events' element={<Events/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
