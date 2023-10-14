import './TrackingView.css';
import PackageCard from './PackageCard/PackageCard';
import OrderCard from './OrderCard/OrderCard';
import { trackingData } from '../../utils/data/trackingData';
import { useState } from 'react';
import { Package } from '../../utils/Package';

const TrackingView = (): React.ReactElement => {
    const [selectedPackage, setSelectedPackage] = useState<Package | undefined>(
        undefined
    );

    const onChangeSelectedPackage = (packageElt: Package): void => {
        setSelectedPackage(
            selectedPackage?.orderId === packageElt.orderId
                ? undefined
                : packageElt
        );
    };

    return (
        <div className="tracking-view-container">
            <div className="packages-container">
                <p className="tracking-title">Delivery Tracking</p>
                <ul className="packages-list">
                    {trackingData.map((packageElt) => (
                        <PackageCard
                            key={packageElt.orderId}
                            city={packageElt.city}
                            isReceived={packageElt.isReceived}
                            orderId={packageElt.orderId}
                            packageDetails={packageElt.packageDetails}
                            deliveryDetails={packageElt.deliveryDetails}
                            onClick={(): void =>
                                onChangeSelectedPackage(packageElt)
                            }
                            isSelected={
                                selectedPackage?.orderId === packageElt.orderId
                            }
                        />
                    ))}
                </ul>
            </div>
            <div className="order-container">
                {selectedPackage !== undefined && (
                    <OrderCard
                        departureCity={
                            selectedPackage.deliveryDetails.departureCity
                        }
                        arrivalCity={
                            selectedPackage.deliveryDetails.arrivalCity
                        }
                        currentLocation={
                            selectedPackage.deliveryDetails.currentLocation
                        }
                        kmsLeft={selectedPackage.deliveryDetails.kmsLeft}
                        lastStop={selectedPackage.deliveryDetails.lastStop}
                    />
                )}
            </div>
        </div>
    );
};

export default TrackingView;
