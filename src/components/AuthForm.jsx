import { useState } from "react";
import InputField from "./ui/InputField";
import { Mail, Lock, User } from "lucide-react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#495E57] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

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
            />
          )}

          <InputField
            label="Email"
            icon={<Mail size={18} />}
            value={form.email}
            onChange={(val) => setForm({ ...form, email: val })}
          />

          <InputField
            label="Password"
            type="password"
            icon={<Lock size={18} />}
            value={form.password}
            onChange={(val) => setForm({ ...form, password: val })}
          />
        </div>

        <button className="mt-6 w-full rounded-xl bg-[#F4CE14] py-3 font-semibold">
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