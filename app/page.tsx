export default function Home() {
  return (
    <main className="text-center">
      <a href="/login">
        <button className="bg-gray-400 rounded-sm p-3 m-3 text-black">
          Login
        </button>
      </a>
      <a href="/signup">
        <button className="bg-gray-400 rounded-sm p-3 m-3 text-black">
          Sign Up
        </button>
      </a>
    </main>
  );
}
