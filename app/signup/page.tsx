"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type Form = {
  username: string;
  email:string;
  password:string;
}
type Error={
  error:string

}
export default function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState<Form>({
    username: "",
    email:"",
    password:"",
  });
  const [error, setError] = useState<Error>({error:''})
  const [loading, setLoading] = useState(false)
  const handleSubmitForm = async(e:any)=>{
    setLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post("/api/users/signup", formData, {
        withCredentials: true,
      });
      if (response.data) {
        console.log("Signup Success",response.data);        
      }
      router.push('/')
    } catch (error: any) {
      const errorMsg = error.response.data
      setError(errorMsg)
      console.log(errorMsg);
    }
  }

  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold m-3">Sign Up</h1>
      <h1>{loading?"Processing":" "}</h1>
      <h1>{error.error}</h1>
      <form className="" onSubmit={handleSubmitForm}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="mx-2 rounded-sm text-black"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="mx-2 rounded-sm text-black"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label htmlFor="username">Password</label>
        <input
          id="password"
          type="password"
          className="mx-2 rounded-sm text-black"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button className="p-2 bg-gray-500 rounded-sm" type="submit">
          Sumbit
        </button>
      </form>
      
    </main>
  );
}
