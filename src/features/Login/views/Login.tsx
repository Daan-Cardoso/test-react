import { useRouter } from "@tanstack/react-router";
import { useState } from "react";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (email == "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true");

      router.navigate({
        to: "/users",
      });
    } else {
      window.alert("Incorrect username or password");
    }
  };

  return (
    <div className="container md:mx-auto md:p-4 bg-gray-300 md:bg-transparent h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 mx-auto bg-gray-300 p-4 md:rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo
              focus:z-10 sm:text-sm bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo
              focus:z-10 sm:text-sm bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg mt-4 w-full md:w-[30%] mx-auto"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
