"use client"

export default function Login() {
  
  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold m-3">Login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="mx-2 rounded-sm text-black" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="mx-2 rounded-sm text-black"
        />
        <button className="p-2 bg-gray-500 rounded-sm">Login</button>
      </form>
    </main>
  );
}
