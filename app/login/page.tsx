"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
type Form = {
  email: string;
  password: string;
};
type Error={
  error:string

}
export default function Login() {
  const router = useRouter()
  const [loading, setLoading]=useState(false)
  const [error, setError] = useState<Error>({error:''})
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post("/api/users/login", formData, {
        withCredentials: true,
      });
      if (response.data) {
        console.log("Login Success",response.data);        
      }
      router.push('/dashboard')
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data)
    }
  };
  useEffect(() => {
    handleSubmit;
  }, []);
  return (
    <main className="text-center place-items-center">
      <h1 className="text-3xl font-bold m-3">Login</h1>
      <h1>{loading?"Processing":" "}</h1>
      {error.error &&<h1 className="text-red-700">{error.error}</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mx-2 rounded-sm text-black"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          className="mx-2 rounded-sm text-black"
          required
        />
        <button className="p-2 bg-gray-500 rounded-sm">Login</button>
      </form>
    </main>
  );
}
