import './OrderCardInfo.css';

type OrderCardInfoProps = {
    title: string;
    content: string;
};

const OrderCardInfo = ({
    title,
    content,
}: OrderCardInfoProps): React.ReactElement => {
    return (
        <div className="order-card-info">
            <span className="order-card-info-title">{title}</span>
            <span>{content}</span>
        </div>
    );
};

export default OrderCardInfo;
