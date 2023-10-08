import CardInfo from '../CardInfo/CardInfo';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './OrderCard.css';

const OrderCard = (): React.ReactElement => {
    return (
        <div className="order-card-main-container">
            <div className="order-card-top-container">
                <span className="order-card-title">Order ID #14398-91751</span>
                <ReceptionStatus />{' '}
            </div>
            <div className="order-card-bottom-container">
                <CardInfo title="From" content="Warsaw, PL" />
                <CardInfo title="To" content="Berlin, De" />
                <CardInfo title="Current Location" content="Dresden, De" />
                <CardInfo title="Kms Left" content="620" />
                <CardInfo title="Last Stop" content="3 hours" />
            </div>
        </div>
    );
};

export default OrderCard;
