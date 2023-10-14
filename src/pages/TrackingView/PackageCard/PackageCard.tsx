import React from 'react';
import { Package } from '../../../utils/Package';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './PackageCard.css';
import CardInfo from '../CardInfo/CardInfo';
import ProfileButton from '../../Navbar/ProfileButton/ProfileButton';
import MessagesIcon from '../../../components/svg/MessagesIcon/MessagesIcon';
import PhoneIcon from '../../../components/svg/PhoneIcon/PhoneIcon';

type PackageCardProps = Package & { onClick: () => void };

const PackageCard = ({
    city,
    isReceived,
    orderId,
    packageDetails: details,
}: PackageCardProps): React.ReactElement => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    const onShowDetails = (): void => {
        setIsExpanded((previousIsExpanded) => !previousIsExpanded);
    };

    const handleDirectMessage: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ): void => {
        event.stopPropagation();
    };

    const handlePhoneCall: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ): void => {
        event.stopPropagation();
    };

    return (
        <li>
            <button
                className={`package-container ${isExpanded ? 'expanded' : ''}`}
                onClick={onShowDetails}
            >
                <div className="package-top-container">
                    <span className="package-title">Package from {city}</span>
                    <ReceptionStatus isReceived={isReceived} />
                </div>
                <p className="package-order">{`Order ID #${orderId}`}</p>
                {isExpanded && (
                    <>
                        <div className="package-progress-container">
                            {`${details.deliveryProgressPercentage}%`}
                            <div className="package-progress-bar-container">
                                <span
                                    className="package-progress-bar"
                                    style={{
                                        width: `${details.deliveryProgressPercentage}%`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="package-card-info-container">
                            <CardInfo
                                title="Customer"
                                content={
                                    details.customer !== ''
                                        ? details.customer
                                        : 'Unnamed'
                                }
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
                            <div className="package-driver-container">
                                <ProfileButton
                                    imageUrl={'src/assets/smallRaoulDuke.jpeg'}
                                />
                                <div className="package-driver-info-container">
                                    <span className="package-driver-name">
                                        {details.driver !== ''
                                            ? details.driver
                                            : 'Unnamed Driver'}
                                    </span>
                                    <span>Driver</span>
                                </div>
                            </div>
                            <div className="package-icons-container">
                                <button
                                    className="package-icon-container phone-icon-container"
                                    onClick={handleDirectMessage}
                                >
                                    <MessagesIcon />
                                </button>
                                <button
                                    className="package-icon-container"
                                    onClick={handlePhoneCall}
                                >
                                    <PhoneIcon />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </button>
        </li>
    );
};

export default PackageCard;
