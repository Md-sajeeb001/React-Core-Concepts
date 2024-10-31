const ReuseAbleForm = ({ formTitel, children , handelSubmit ,submitBtnText = "Submit" }) => {


  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handelSubmit(data)
  };


  return (
    <div>
        {children}
      <h2 className="text-3xl font-semibold">{formTitel}</h2>
      <form onSubmit={handelLocalSubmit} className="space-y-4">
        <input type="name" name="name" /> <br />
        <input type="email" name="email" /> <br />
        <input type="password" name="password" /> <br />
        <input type="submit" value={submitBtnText} className="btn" />
      </form>
    </div>
  );
};

export default ReuseAbleForm;
