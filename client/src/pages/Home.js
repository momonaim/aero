import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
import LandingPage from './landing/LandingPageTRASH';
import BookingDetails from './reservation/BookingDetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing2 from './landing/Landing';
import HM from './HM';
import Hero from './hero/Hero';

const Home = () => {
    const navigate = useNavigate();

    const handleFlightSelect = (flight) => {
        navigate(`/flight/${flight.id}`, { state: { flight } });
    };
    return (
        <>
            <Login />
            <NavBar />
            <Routes>
                {/* <Route path="/" element={<LandingPage onFlightSelect={handleFlightSelect} />} /> */}
                <Route path="flight/:id" element={<BookingDetails />} />
                <Route path="/" element={<Landing2 onFlightSelect={handleFlightSelect} />} />
                <Route path="home" element={<HM />} />
                <Route path="hero" element={<Hero onFlightSelect={handleFlightSelect} />} />
            </Routes>
        </>
    );
};

export default Home;
