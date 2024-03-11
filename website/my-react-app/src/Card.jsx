import profilePic from './assets/gilberto.jpeg';

function Card() {
    return ( 
    <div className="card">
    <img className="card--image" src={profilePic} alt="profile picture"></img>    
        <h2 className="card--title">Gilberto</h2>
        <p className="card--text">I code and make a lot of pain at the gym 
        </p>
    </div>)
}

export default Card;