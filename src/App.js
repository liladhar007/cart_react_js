import User from "./components/user";
import Login from"./components/login";

function App() {

  // const click = (val) => {
  //   alert(val);
  // }
  return (
    <div>
      <User></User>
      <Login></Login>
      {/* <button onClick={(e) => click("Hii..  user..")}>Click me now </button> */}
    </div>
  )
}

export default App;
