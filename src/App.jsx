import { data } from "autoprefixer";
import "./App.css";
import ReuseAbleForm from "./Components/ReuseAbleForm/ReuseAbleForm";
// import CustomFrom from "./Components/CustomFrom/CustomFrom";
// import CustomHook from "./Components/Hooks/CustomHook";
// import RefForm from "./Components/RefForm/RefForm";
// import StateForm from "./Components/StateForm/StateForm";
// import SimpleForm from "./Components/SimpelForm/SimpleForm";

function App() {
  const handelSingUp = (data) => {
    console.log(data);
  };

  const handelLogIn = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHook></CustomHook> */}
      {/* <CustomFrom></CustomFrom> */}
      <ReuseAbleForm
        formTitel={"sing up"}
        submitBtnText="Sing Up"
        handelSubmit={handelSingUp}
      >
        <div>
          <h2>Sign up Right now</h2>
          <p>you want to sing up</p>
        </div>
      </ReuseAbleForm>
      <br />
      <ReuseAbleForm
        formTitel={"log in"}
        submitBtnText="Log In"
        handelSubmit={handelLogIn}
      >
        <div>
          <h2>Log in right now you expor more thing</h2>
          <p>log in configaration</p>
        </div>
      </ReuseAbleForm>
    </>
  );
}

export default App;
