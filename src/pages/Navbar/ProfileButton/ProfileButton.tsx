import './ProfileButton.css';

type ProfileButtonProps = {
    imageUrl: string;
    onClick?: () => void;
    altText?: string;
    className?: string;
};

const ProfileButton = ({
    imageUrl,
    onClick,
    altText,
    className,
}: ProfileButtonProps): React.ReactElement => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ): void => {
        onClick?.();
        event.stopPropagation();
    };
    return (
        <button className={`profile-button ${className}`} onClick={handleClick}>
            <img className="profile-image" src={imageUrl} alt={altText} />
        </button>
    );
};

export default ProfileButton;
