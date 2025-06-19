"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading
    setError(""); // Clear previous errors

    // Add client-side validation
    if (!email || !password) {
      setError("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await login({ email, password, redirect: false });

      if (result?.error) {
        console.error("Login error:", result.error);
        setError("Invalid credentials. Please try again.");
      } else {

        toast.success("Login successfully!");

        router.push("/pages/home");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading regardless of outcome
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Toaster position="top-right" />
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-700">
          Sign In
        </h2>
        {error && (
          <div className="text-red-500 text-center p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent 
              text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
