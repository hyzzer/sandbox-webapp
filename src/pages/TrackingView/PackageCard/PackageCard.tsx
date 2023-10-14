import React from 'react';
import { Package } from '../../../utils/Package';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './PackageCard.css';
import CardInfo from '../CardInfo/CardInfo';
import ProfileButton from '../../Navbar/ProfileButton/ProfileButton';
import MessagesIcon from '../../../components/svg/MessagesIcon/MessagesIcon';
import PhoneIcon from '../../../components/svg/PhoneIcon/PhoneIcon';

type PackageCardProps = Package & {
    onClick: () => void;
    isSelected: boolean;
};

const PackageCard = ({
    city,
    isReceived,
    orderId,
    packageDetails,
    onClick,
    isSelected,
}: PackageCardProps): React.ReactElement => {
    const onShowDetails = (): void => {
        onClick();
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
                className={`package-container ${isSelected ? 'expanded' : ''}`}
                onClick={onShowDetails}
            >
                <div className="package-top-container">
                    <span className="package-title">Package from {city}</span>
                    <ReceptionStatus isReceived={isReceived} />
                </div>
                <p className="package-order">{`Order ID #${orderId}`}</p>
                {isSelected && (
                    <>
                        <div className="package-progress-container">
                            {`${packageDetails.deliveryProgressPercentage}%`}
                            <div className="package-progress-bar-container">
                                <span
                                    className="package-progress-bar"
                                    style={{
                                        width: `${packageDetails.deliveryProgressPercentage}%`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="package-card-info-container">
                            <CardInfo
                                title="Customer"
                                content={
                                    packageDetails.customer !== ''
                                        ? packageDetails.customer
                                        : 'Unnamed'
                                }
                            />
                            <CardInfo
                                title="Weight"
                                content={`${packageDetails.weight} kg`}
                            />
                            <CardInfo
                                title="Price"
                                content={`$ ${packageDetails.price}`}
                            />
                            <CardInfo
                                title="Departure"
                                content={`${packageDetails.departureDay} ${packageDetails.departureMonth}`}
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
                                        {packageDetails.driver !== ''
                                            ? packageDetails.driver
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
