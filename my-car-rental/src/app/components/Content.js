import { Route, Routes } from 'react-router-dom';
import App from '../../App';

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/rent-car" element={"Rent a car"}/>
            <Route path="/lend-car" element={"Lend a car"}/>
        </Routes>
    );
}