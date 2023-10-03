import './ReceptionStatus.css';

type ReceptionStatusProps = {
    isReceived?: boolean;
};

const ReceptionStatus = ({
    isReceived,
}: ReceptionStatusProps): React.ReactElement => {
    const statusClass = isReceived ? 'status' : ' status status-not-received';

    return (
        <div className={statusClass}>
            {isReceived === true ? 'RECEIVED' : 'ON THE WAY'}
        </div>
    );
};

export default ReceptionStatus;
