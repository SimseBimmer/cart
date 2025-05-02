import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/app/Navbar';
import { Analytics } from '../components/app/Analytics';

export const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Analytics />
        </div>
    );
};