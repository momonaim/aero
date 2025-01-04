import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
import BookingDetails from './reservation/BookingDetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HM from './HM';
import Hero from './hero/Hero';
import FlightResults from './flights/FlightResults';
import Booking from './flights/booking';
import Validation from './flights/Validation';
import Payment from './flights/Payment';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import Contact from './Contact';
import About from './About';
import MyFlights from './MyFlights';
import TEST from './test';
import Destinations from './Destinations';

const Home = () => {
    const navigate = useNavigate();

    const handleFlightSelect = (flight) => {
        navigate(`/flight/${flight.id}`, { state: { flight } });
    };
    // const MyFlights = () => <Typography variant="h4">MyFlights Page</Typography>;
    // const Destinations = () => <Typography variant="h4">Destinations Page</Typography>;
    // const About = () => <Typography variant="h4">About Us Page</Typography>;
    // const Contact = () => <Typography variant="h4">Contact Us Page</Typography>;

    return (
        <>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <Login />
                <NavBar />
                <Routes>
                    {/* <Route path="/" element={<LandingPage onFlightSelect={handleFlightSelect} />} /> */}
                    <Route path="flight/:id" element={<BookingDetails />} />
                    <Route path="booking/:id" element={<Booking />} />
                    <Route path="/validation" element={<Validation />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<h1>Réservation confirmée !</h1>} />
                    <Route path="/" element={<Hero onFlightSelect={handleFlightSelect} />} />
                    <Route path="/flights" element={<FlightResults />} />
                    <Route path="home" element={<HM />} />
                    <Route path="hero" element={<Hero onFlightSelect={handleFlightSelect} />} />
                    <Route path="/myflights" element={<MyFlights />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/t" element={<TEST />} />
                </Routes>
                {/* <Box sx={{ flexGrow: 1 }} /> */}
                <Footer />
            </Box>
        </>
    );
};

export default Home;
