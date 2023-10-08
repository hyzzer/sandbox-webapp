import './CardInfo.css';

type OrderCardInfoProps = {
    title: string;
    content: string;
};

const CardInfo = ({
    title,
    content,
}: OrderCardInfoProps): React.ReactElement => {
    return (
        <div className="card-info">
            <span className="card-info-title">{title}</span>
            <span className="card-info-content">{content}</span>
        </div>
    );
};

export default CardInfo;
