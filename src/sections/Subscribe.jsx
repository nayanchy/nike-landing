import Button from "../components/Button";

const Subscribe = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-container" id="contact-us">
      <h3 className="text-4xl font-palanquin text-center font-bold leading-[68px] mb-10 max-sm:mb-4">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <form
        className="flex lg:max-w-[40%] lg:m-auto w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          placeholder="subscriber@nike.com"
          className="input"
        />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth={true} />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
