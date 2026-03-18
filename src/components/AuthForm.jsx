import { useState } from "react";
import Lemon from "../assets/image.webp";
import InputField from "./ui/InputField";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

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
                -left-8 top-36
                md:-left-10 md:-bottom-15 md:top-auto
                w-40 md:w-65
                rotate-22
                opacity-[0.06]
                pointer-events-none select-none
              "
              />
              <img
              src={Lemon}
              alt=""
              aria-hidden="true"
              className="
                absolute
                -left-8 top-36
                md:left-55 md:-bottom-5 md:top-auto
                w-40 md:w-85
                rotate-22
                opacity-[0.06]
                pointer-events-none select-none
              "
              />
              </div>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl animate-in fade-in zoom-in-95">

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
            onClick={() => {
                if (validate()) {
                    console.log("submit");
                }
            }}
            className="mt-6 w-full rounded-xl bg-[#F4CE14] py-3 font-semibold"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "No account?" : "Already have one?"}
          <button
            onClick={() => navigate(isLogin ? "/signup" : "/login")}
            className="ml-1 font-semibold underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}