import { useState } from "react";
import Lemon from "../assets/image.webp";
import Logo from "../assets/Logo.svg"
import InputField from "./ui/InputField";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../api/authService";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";

    if (!isLogin && !form.name) newErrors.name = "Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    try {
      setLoading(true);

      if (isLogin) {
        const data = await loginUser({
          email: form.email,
          password: form.password,
        });

        // Save tokens
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        navigate("/"); // go home
      } else {
        await signupUser({
          name: form.name,
          email: form.email,
          password: form.password,
        });

        alert("Signup successful! Please verify your email.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#495E57] px-4">

      {/* 🍋 BACKGROUND LEMONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="
            absolute
            -right-2 top-2
            md:right-72 md:top-1/2 md:-translate-y-1/2
            w-55 md:w-105
            -rotate-6
            opacity-9
            pointer-events-none select-none
          "
        />
  
        {/* Right side lemon (desktop) – random-ish on mobile */}
        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="
            absolute
            -right-10 top-[65%]
            md:right-2 md:top-29
            w-35 md:w-55
            rotate-12
            opacity-[0.08]
            pointer-events-none select-none
          "
        />
  
        {/* Bottom-left lemon (desktop) – random-ish on mobile */}
        <img
          src={Lemon}
          alt=""
          aria-hidden="true"
          className="
            absolute
            -left-8 top-156
            md:-left-10 md:-bottom-35 md:top-auto
            w-60 md:w-95
            rotate-22
            opacity-[0.06]
            pointer-events-none select-none
          "
        />
      </div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:opacity-80 transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl animate-in fade-in zoom-in-95">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Little Lemon" className="w-28 object-contain" />
        </div>

        <h2 className="text-2xl font-semibold text-[#495E57] text-center mb-6">
          {isLogin ? "Welcome back" : "Create account"}
        </h2>

        <div className="space-y-4">
          {!isLogin && (
            <InputField
              label="Full Name"
              icon={<User size={18} />}
              value={form.name}
              onChange={(val) => setForm({ ...form, name: val })}
              error={errors.name}
            />
          )}

          <InputField
            label="Email"
            icon={<Mail size={18} />}
            value={form.email}
            onChange={(val) => setForm({ ...form, email: val })}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            icon={<Lock size={18} />}
            value={form.password}
            onChange={(val) => setForm({ ...form, password: val })}
            error={errors.password}
          />
        </div>

        <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-xl bg-[#F4CE14] py-3 font-semibold"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "No account?" : "Already have one?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 font-semibold underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}