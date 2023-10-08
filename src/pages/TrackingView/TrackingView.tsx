import './TrackingView.css';
import PackageCard from './PackageCard/PackageCard';
import { Package } from '../../utils/Package';
import OrderCard from './OrderCard/OrderCard';

const trackingData: Package[] = [
    {
        city: 'London',
        isReceived: false,
        orderId: '14398-97751',
        details: {
            customer: 'Decathlon',
            weight: 0,
            price: 0,
            departureDay: 0,
            departureMonth: '',
            driver: '',
            deliveryProgressPercentage: 10,
        },
    },
    {
        city: 'Warsaw',
        isReceived: false,
        orderId: '14398-51687',
        details: {
            customer: 'Castorama',
            weight: 2.8,
            price: 430,
            departureDay: 22,
            departureMonth: 'July',
            driver: 'Adam Brady',
            deliveryProgressPercentage: 81,
        },
    },
    {
        city: 'Marseilles',
        isReceived: true,
        orderId: '14398-74269',
        details: {
            customer: '',
            weight: 0,
            price: 0,
            departureDay: 0,
            departureMonth: '',
            driver: '',
            deliveryProgressPercentage: 10,
        },
    },
    {
        city: 'Antwerpen',
        isReceived: true,
        orderId: '14398-74136',
        details: {
            customer: '',
            weight: 0,
            price: 0,
            departureDay: 0,
            departureMonth: '',
            driver: '',
            deliveryProgressPercentage: 10,
        },
    },
    {
        city: 'Rio',
        isReceived: true,
        orderId: '14398-85597',
        details: {
            customer: '',
            weight: 0,
            price: 0,
            departureDay: 0,
            departureMonth: '',
            driver: '',
            deliveryProgressPercentage: 10,
        },
    },
    {
        city: 'Saint-Louis',
        isReceived: true,
        orderId: '14398-12468',
        details: {
            customer: '',
            weight: 0,
            price: 0,
            departureDay: 0,
            departureMonth: '',
            driver: '',
            deliveryProgressPercentage: 10,
        },
    },
];

const TrackingView = (): React.ReactElement => {
    return (
        <div className="tracking-view-container">
            <div className="packages-container">
                <p className="tracking-title">Delivery Tracking</p>
                <ul className="packages-list">
                    {trackingData.map(
                        ({ city, isReceived, orderId, details }) => (
                            <PackageCard
                                key={orderId}
                                city={city}
                                isReceived={isReceived}
                                orderId={orderId}
                                details={details}
                            />
                        )
                    )}
                </ul>
            </div>
            <div className="order-container">
                <OrderCard />
            </div>
        </div>
    );
};

export default TrackingView;
