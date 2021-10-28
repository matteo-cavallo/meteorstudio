export default function Navbar() {
  return (
    <nav className="bg-darkPurple">
      <div
        className={
          "p-4 text-white container mx-auto flex justify-between items-center"
        }
      >
        <a href="/" className={"text-2xl font-bold"}>
          meteorstudio.
        </a>
        <div className={"font-semibold"}>
          <a href="/about-me">whoami</a>
        </div>
      </div>
    </nav>
  );
}
