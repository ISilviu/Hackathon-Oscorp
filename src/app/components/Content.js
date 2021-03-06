import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import Users from '../../components/users/User';
import RentCarPage from '../pages/rent-car-page/RentCarPage';
import ReviewsPage from '../pages/reviews-page/ReviewsPage';
import AccountPage from "../pages/account-page/AccountPage";
import AddCarPage from "../pages/AddCarPage/AddCarPage";
import TransactionsPage from "../pages/transactions-page/TransactionsPage";

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/rent-car" element={<RentCarPage />} />
            <Route path="/lend-car" element={<AddCarPage/>} />
            <Route path="/users" element={<Users />} />
            <Route path="/reviews" element={<ReviewsPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/transactions" element={<TransactionsPage/>}/>
        </Routes>
    );
}
