import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../AuthProvider/AuthContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthProvider);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    const loginData = {
      email,
      password,
    };
    fetch("https://backend-task-server.vercel.app/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setUser(data.user);
        if (data.message === "Login successful") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login successful!!!",
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
          navigate("/");
        } else if (data.message === "Invalid password") {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Login unsuccessful. Invalid password.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data.message === "User not found") {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Login unsuccessful. User not found.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Login unsuccessful. Please try again.",
          text: error.error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost bg-gray-300 hover:bg-gray-400">
                Login
              </button>
              <h3 className="mt-3 text-gray-600">
                Do not Have an account?{" "}
                <Link to="/register" className="underline text-black">
                  Registration
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
