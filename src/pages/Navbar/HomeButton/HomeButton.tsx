import BoltIcon from '../../../components/svg/BoltIcon/BoltIcon';
import './HomeButton.css';

const HomeButton = (): React.ReactElement => {
    return (
        <button className="home-button">
            <BoltIcon />
        </button>
    );
};

export default HomeButton;
