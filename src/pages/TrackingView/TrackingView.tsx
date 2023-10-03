import './TrackingView.css';
import ReceptionStatus from './ReceptionStatus/ReceptionStatus';
import PackageStatusCard from './PackageStatusCard/PackageStatusCard';
import { Package } from '../../utils/Package';

const trackingData: Package[] = [
    {
        city: 'London',
        isReceived: false,
        orderId: '14398-97751',
    },
    {
        city: 'Warsaw',
        isReceived: false,
        orderId: '14398-51687',
    },
    {
        city: 'Marseilles',
        isReceived: true,
        orderId: '14398-74269',
    },
    {
        city: 'Antwerpen',
        isReceived: true,
        orderId: '14398-74136',
    },
    {
        city: 'Rio',
        isReceived: true,
        orderId: '14398-85597',
    },
    {
        city: 'Saint-Louis',
        isReceived: true,
        orderId: '14398-12468',
    },
];

const TrackingView = (): React.ReactElement => {
    return (
        <div className="tracking-view-container">
            <div className="packages-container">
                <p className="tracking-title">Delivery Tracking</p>
                <ul className="packages-list">
                    {trackingData.map(({ city, isReceived, orderId }) => (
                        <PackageStatusCard
                            key={orderId}
                            city={city}
                            isReceived={isReceived}
                            orderId={orderId}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <p>ORDER ID #14398-91751</p>
                <ReceptionStatus />
            </div>
        </div>
    );
};

export default TrackingView;
