import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>   
      {/* <Student name="Gilberto" age={40} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/> */}

      <UserGreeting isLoggedIn={false} username="Gilberto"/>
      <UserGreeting isLoggedIn={true}/>

    </>
  );
}

export default App
