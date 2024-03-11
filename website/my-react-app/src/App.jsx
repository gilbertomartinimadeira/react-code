import List from "./List";

function App() {

  const fruits = [
    {id:1,name:'apple', calories:95}, 
    {id:2,name:'banana',calories:105}, 
    {id:3,name:'orange',calories:45}, 
    {id:4,name:'coconut',calories:159}, 
    {id:5,name:'pineapple',calories:37}
];

const vegetables = [
  {id:6,name:'potato', calories:110}, 
  {id:7,name:'celery',calories:14}, 
  {id:8,name:'carrot',calories:25}, 
  {id:9,name:'corn',calories:63}, 
  {id:10,name:'broccoli',calories:50}
];
  return(
    <>   
      {/* <Student name="Gilberto" age={40} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/> */}

      {/* <UserGreeting isLoggedIn={false} username="Gilberto"/>
      <UserGreeting isLoggedIn={true}/> */}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
    </>
  );
}

export default App
