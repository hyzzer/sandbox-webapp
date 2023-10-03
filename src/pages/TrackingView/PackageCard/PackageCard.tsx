import { Package } from '../../../utils/Package';
import ReceptionStatus from '../ReceptionStatus/ReceptionStatus';
import './PackageCard.css';

const PackageCard = ({
    city,
    isReceived,
    orderId,
}: Package): React.ReactElement => {
    return (
        <li className="package-container">
            <div className="package-top-container">
                <p className="package-title">Package from {city}</p>
                <ReceptionStatus isReceived={isReceived} />
            </div>
            <p className="package-order">{`Order ID #${orderId}`}</p>
        </li>
    );
};

export default PackageCard;
