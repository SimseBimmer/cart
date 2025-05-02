import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const Analytics = () => {
    useEffect(() => {
        ReactGA.initialize('6-asjdkflsdfh'); 
    }, []);

    return (
        <div>
            <p>Analytics content goes here.</p>
        </div>
    );
};