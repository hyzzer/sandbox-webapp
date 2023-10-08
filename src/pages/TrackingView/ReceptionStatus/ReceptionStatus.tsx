import './ReceptionStatus.css';

type ReceptionStatusProps = {
    isReceived?: boolean;
};

const ReceptionStatus = ({
    isReceived,
}: ReceptionStatusProps): React.ReactElement => {
    return (
        <div
            className={`status ${
                !isReceived === true ? 'status-not-received' : ''
            }`}
        >
            {isReceived === true ? 'RECEIVED' : 'ON THE WAY'}
        </div>
    );
};

export default ReceptionStatus;
