export default function Signup() {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold m-3">Sign Up</h1>
      <form className="">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="mx-2 rounded-sm text-black" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" className="mx-2 rounded-sm text-black" />
        <label htmlFor="username">Password</label>
        <input
          id="password"
          type="password"
          className="mx-2 rounded-sm text-black"
        />
        <button className="p-2 bg-gray-500 rounded-sm" type="submit">Sumbit</button>
      </form>
    </main>
  );
}
