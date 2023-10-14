import './TrackingView.css';
import PackageCard from './PackageCard/PackageCard';
import OrderCard from './OrderCard/OrderCard';
import { trackingData } from '../../utils/data/trackingData';
import { useState } from 'react';

const TrackingView = (): React.ReactElement => {
    const [selectedPackage, setSelectedPackage] = useState<string | undefined>(
        undefined
    );

    const onChangeSelectedPackage = (orderId: string): void => {
        setSelectedPackage(selectedPackage === orderId ? undefined : orderId);
    };

    return (
        <div className="tracking-view-container">
            <div className="packages-container">
                <p className="tracking-title">Delivery Tracking</p>
                <ul className="packages-list">
                    {trackingData.map(
                        ({
                            city,
                            isReceived,
                            orderId,
                            packageDetails,
                            deliveryDetails,
                        }) => (
                            <PackageCard
                                key={orderId}
                                city={city}
                                isReceived={isReceived}
                                orderId={orderId}
                                packageDetails={packageDetails}
                                deliveryDetails={deliveryDetails}
                                onClick={(): void =>
                                    onChangeSelectedPackage(orderId)
                                }
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
