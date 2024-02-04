import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Header/NavBar';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;