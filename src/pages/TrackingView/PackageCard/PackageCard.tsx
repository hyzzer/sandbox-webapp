import React from 'react';
import { Package } from '../../../utils/Package';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './PackageCard.css';
import CardInfo from '../CardInfo/CardInfo';
import ProfileButton from '../../Navbar/ProfileButton/ProfileButton';

const PackageCard = ({
    city,
    isReceived,
    orderId,
    details,
}: Package): React.ReactElement => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    const onShowDetails = (): void => {
        setIsExpanded((previousIsExpanded) => !previousIsExpanded);
    };

    return (
        <li>
            <button
                className={`package-container ${isExpanded ? 'expanded' : ''}`}
                onClick={onShowDetails}
            >
                <div className="package-top-container">
                    <p className="package-title">Package from {city}</p>
                    <ReceptionStatus isReceived={isReceived} />
                </div>
                <p className="package-order">{`Order ID #${orderId}`}</p>
                {isExpanded && (
                    <>
                        <div className="package-card-info-container">
                            <CardInfo
                                title="Customer"
                                content={details.customer}
                            />
                            <CardInfo
                                title="Weight"
                                content={`${details.weight} kg`}
                            />
                            <CardInfo
                                title="Price"
                                content={`$ ${details.price}`}
                            />
                            <CardInfo
                                title="Departure"
                                content={`${details.departureDay} ${details.departureMonth}`}
                            />
                        </div>
                        <hr className="separator" />
                        <div className="package-bottom-container">
                            <ProfileButton
                                imageUrl={'src/assets/smallRaoulDuke.jpeg'}
                            />
                        </div>
                    </>
                )}
            </button>
        </li>
    );
};

export default PackageCard;
