import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = (
        <h2 className="usergreeting--message">
            Welcome {props.username}
        </h2>);
    const loginPrompt = (
        <h2 className="login-prompt">
            Please Log In to Continue
        </h2>);

    // if(props.isLoggedIn){
    //     return (
    //         <>
    //             <h2>Welcome {props.username}</h2>
    //         </>
    //     );
    // }else{
    //     return (<h2>Please Log in to continue</h2>);

    // }

    // return (props.isLoggedIn ? <h2 className="usergreeting--message">Welcome {props.username}</h2>:
    //                            <h2 className="login-prompt">Please Log In to Continue</h2>);

    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;
