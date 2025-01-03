import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
import LandingPage from './landing/LandingPageTRASH';
import BookingDetails from './reservation/BookingDetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing2 from './landing/Landing';
import HM from './HM';
import Hero from './hero/Hero';
import FlightResults from './flights/FlightResults';
import Booking from './flights/booking';
import Validation from './flights/Validation';
import Payment from './flights/Payment';

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
                <Route path="booking/:id" element={<Booking />} />
                <Route path="/validation" element={<Validation />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/confirmation" element={<h1>Réservation confirmée !</h1>} />
                <Route path="/" element={<Landing2 onFlightSelect={handleFlightSelect} />} />
                <Route path="/flights" element={<FlightResults />} />
                <Route path="home" element={<HM />} />
                <Route path="hero" element={<Hero onFlightSelect={handleFlightSelect} />} />
            </Routes>
        </>
    );
};

export default Home;
