import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
import LandingPage from './landing/LandingPage';
import BookingDetails from './reservation/BookingDetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing2 from './landing/Landing2';

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
                <Route path="/" element={<LandingPage onFlightSelect={handleFlightSelect} />} />
                <Route path="flight/:id" element={<BookingDetails />} />
                <Route path="l" element={<Landing2 onFlightSelect={handleFlightSelect} />} />
            </Routes>
        </>
    );
};

export default Home;
