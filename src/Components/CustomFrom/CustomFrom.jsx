// import useFromHook from "../Hooks/useFromHook";

import useFromHook from "../Hooks/useFromHook";

const CustomFrom = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(nameState.value);
    console.log(emailState.value);
    console.log(passwordState.value);
  };

  //   const [name, handelChange] = useFromHook()

  const nameState = useFromHook("name");
  const emailState = useFromHook("@email.com");
  const passwordState = useFromHook();

  return (
    <div>
      <form onSubmit={handelSubmit} className="space-y-4">
        <input {...nameState} type="name" name="name" /> <br />
        <input {...emailState} type="email" name="email" /> <br />
        <input type="text" name="password" /> <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default CustomFrom;
