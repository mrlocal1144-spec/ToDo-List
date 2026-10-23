import pro from "../profile.webp";

const Header = ({ title }) => {
    return (
        <div className="header">
            <img src={pro} alt="Profile" height="80px" width="80px" />
            <h1>{title.toUpperCase()}</h1>
        </div>
    );
};

export default Header;