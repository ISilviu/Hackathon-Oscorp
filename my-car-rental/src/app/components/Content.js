import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import Users from '../../components/users/User';
import RentCarPage from '../pages/rent-car-page/RentCarPage';
import ReviewsPage from '../pages/reviews-page/ReviewsPage';

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/rent-car" element={<RentCarPage />} />
            <Route path="/lend-car" element={"Lend a car"} />
            <Route path="/users" element={<Users />} />
            <Route path="/reviews" element={<ReviewsPage/>}/>
        </Routes>
    );
}