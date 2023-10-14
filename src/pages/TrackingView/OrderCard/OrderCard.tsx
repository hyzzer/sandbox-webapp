import { DeliveryDetails } from '../../../utils/Package';
import CardInfo from '../CardInfo/CardInfo';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './OrderCard.css';

const OrderCard = ({
    departureCity,
    arrivalCity,
    currentLocation,
    kmsLeft,
    lastStop,
}: DeliveryDetails): React.ReactElement => {
    return (
        <div className="order-card-main-container">
            <div className="order-card-top-container">
                <span className="order-card-title">Order ID #14398-91751</span>
                <ReceptionStatus />{' '}
            </div>
            <div className="order-card-bottom-container">
                <CardInfo title="From" content={departureCity} />
                <CardInfo title="To" content={arrivalCity} />
                <CardInfo title="Current Location" content={currentLocation} />
                <CardInfo title="Kms Left" content={kmsLeft} />
                <CardInfo title="Last Stop" content={lastStop} />
            </div>
        </div>
    );
};

export default OrderCard;
