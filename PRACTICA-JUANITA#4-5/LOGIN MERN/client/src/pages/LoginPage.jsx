import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmited = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="max-w-md p-10 rounded-md bg-purple-300">
      <form onSubmit={onSubmited}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
          className="w-full bg-purple-200 text-black px-4 py-4 rounded-md my-2"
        />

        {errors.email && <p className="text-red-500">Email is required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
          className="w-full bg-purple-200 text-black px-4 py-4 rounded-md my-2"
        />

        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-800  text-white font-bold py-2 px-4 rounded"
        >
          login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
