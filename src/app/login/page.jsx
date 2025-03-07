"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex rounded-lg overflow-hidden shadow-2xl">
        {/* Left Panel */}
        <div className="hidden md:flex md:w-1/4 bg-[#2D336B] py-12 px-6 items-center flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">PORTQUANTA</h1>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3 bg-white p-8 md:p-12">
          <div>
            <h2 className="text-2xl font-bold ml-11 text-black mb-8">Login</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {/* Username */}
              <div className="ml-12">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Masukkan username"
                  className="mt-1 px-3 w-[90%] py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="ml-12">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-black"
                >
                  Password
                </label>
                <div className="mt-1 relative w-[90%]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Input password"
                    className="px-3 py-2 w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5 text-black" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-black" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center ml-12">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
              <div className="ml-32 hover:underline font-medium text-black ">
                <a href="">Forgot Password</a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => router.push("/user")}
              type="button"
              className="w-[85%] flex justify-center ml-10 py-2 px-4 cursor-pointer transition-all border border-zinc-800 rounded-full shadow-sm text-sm font-bold text-black  bg-transparent hover:bg-blue-950 hover:text-white focus:outline-none hover:border-0 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="ml-40 hover:underline mt-2 font-medium text-blue-600 ">
            <a href="/register">I don't have an account?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
