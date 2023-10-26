import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const {signin, errors: signinErrors}= useAuth();
  const onSubmited = handleSubmit(async (data) => {
  signin(data);
  });

  return (
    <div className="flex h-[calc (100vh-100px)] items-center justify-center">
      <div className="max-w-md p-10 rounded-md bg-purple-300">
      {signinErrors.map((error, i) => (
          <div className="bg-red-500 text-white p-2  my-2" key={i}>
            {error}
          </div>
        ))}
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
            className="bg-purple-500 hover:bg-purple-800  text-white font-bold py-2 px-4 
            rounded">login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
