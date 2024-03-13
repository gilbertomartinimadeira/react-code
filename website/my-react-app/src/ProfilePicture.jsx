function ProfilePicture() {

    const imageUrl = './src/assets/gilberto.jpeg';

    const handleClick = (e) => {
        console.log(e);
        e.target.style.display ='none';
    };
    return (
        <>
            <img onClick={(e) => handleClick(e)} src={imageUrl} width="150px"></img>
        </>
    );
}

export default ProfilePicture;