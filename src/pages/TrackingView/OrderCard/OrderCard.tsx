import OrderCardInfo from '../OrderCardInfo/OrderCardInfo';
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
                <OrderCardInfo title="From" content="Warsaw, PL" />
                <OrderCardInfo title="To" content="Berlin, De" />
                <OrderCardInfo title="Current Location" content="Dresden, De" />
                <OrderCardInfo title="Kms Left" content="620" />
                <OrderCardInfo title="Last Stop" content="3 hours" />
            </div>
        </div>
    );
};

export default OrderCard;
