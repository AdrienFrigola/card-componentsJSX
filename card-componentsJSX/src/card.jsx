// Importing the profile picture from the 'assets' folder
import ProfilePic from './assets/profile.jpg';

// Define a functional component called Card
function Card() {
    return (
        // Return JSX code representing the Card component
        <div className="card">
            {/* Display the profile picture using the imported image */}
            <img className="card-image" src={ProfilePic} alt="profile picture" />
            {/* Display the name */}
            <h2 className="card-title">Adrien Frigola</h2>
            {/* Display the description */}
            <p className="card-text">I coach Bulgaria Rugby League and I play guitar</p>
        </div>
    );
}

// Export the Card component as the default export
export default Card;
