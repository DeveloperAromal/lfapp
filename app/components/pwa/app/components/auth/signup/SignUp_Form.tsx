"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import eyeOpen from "../../../public/icons/eye_open.png";
import eyeClosed from "../../../public/icons/eye_closed.png";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [div, setDiv] = useState("");
  const [className, setClassName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [date_of_birth, setDate_Of_Birth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        throw signUpError;
      }

      const { user } = data;

      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            name,
            email,
            className,
            div,
            date_of_birth,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      if (user) {
        localStorage.setItem("email", email);
        toast.success("Account created successfully");
        router.push("/auth/login");
      } else {
        toast.error("An error occurred while creating your account");
      }
    } catch (error) {
      toast.error((error as Error).message || "An error occurred while creating your account");
    }
  };

  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(value)) {
      setDate_Of_Birth(rearrangeDateFormat(value));
    } else {
      setDate_Of_Birth(value);
    }
  };

  const rearrangeDateFormat = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    const rearrangedDate = `${year}/${month}/${day}`;
    return rearrangedDate;
  };

  return (
    <section>
      <div>
        <div>
          <div className="w-full h-full box-shad bg-black border border-teal-500 rounded-md flex justify-center px-4">
            <div>
              <div>
                <h1 className="text-center font-bold text-3xl py-10">
                  Sign Up
                </h1>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-4">
                <div className="pb-2">
                  <label htmlFor="Full Name" className="py-1">
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
                <div className="pb-2">
                  <label htmlFor="Class" className="py-1">
                    Class
                  </label>
                  <br />
                  <select
                    id="class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <option value="">Select your class</option>
                    <option value="Lkg">LKG</option>
                    <option value="Ukg">UKG</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-4">
                <div className="pb-2">
                  <label htmlFor="Class" className="py-1">
                    Class
                  </label>
                  <br />
                  <select
                    id="class"
                    value={div}
                    onChange={(e) => setDiv(e.target.value)}
                    className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <option value="Div">Div</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
                <div className="pb-2">
                  <label htmlFor="email" className="py-1">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center flex-wrap gap-4">
                  <div className="pb-2">
                    <label htmlFor="password" className="py-1">
                      Password
                    </label>
                    <br />
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        required
                        maxLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                      <Image
                        src={showPassword ? eyeOpen : eyeClosed}
                        alt="Toggle Password Visibility"
                        className="absolute right-2 top-2 cursor-pointer"
                        width={20}
                        height={20}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                  <div className="pb-2">
                    <label htmlFor="password" className="py-1">
                      Confirm password
                    </label>
                    <br />
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="confirm-password"
                        required
                        maxLength={8}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                      <Image
                        src={showPassword ? eyeOpen : eyeClosed}
                        alt="Toggle Password Visibility"
                        className="absolute right-2 top-2 cursor-pointer"
                        width={20}
                        height={20}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                  <div className="pb-2">
                    <label htmlFor="dob" className="py-1">
                      Date of Birth
                    </label>
                    <br />
                    <input
                      type="date"
                      id="dob"
                      value={date_of_birth}
                      onChange={handleDateOfBirthChange}
                      placeholder="YYYY-MM-DD"
                      className="text-white px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-10">
                <button
                  className="py-2 px-24 rounded-xl text-black bg-white font-bold hover:bg-slate-300"
                  onClick={handleSignUp}
                >
                  SignUp
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <p>
                  Already have an account?{" "}
                  <Link href="/auth/login">
                    <span className="text-blue-500">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
