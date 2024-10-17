import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center px-4 sm:px-20 w-full bg-gray-950">
      <div className="container flex justify-between items-center py-8">
        <div>
          <p className="text-2xl font-bold">
            <span className="text-red-700">Poke</span>dex
          </p>
        </div>
        <ul className="flex">
          <li>
            <Link href="/" className="py-4">Home</Link>
          </li>
          <li className="ml-4">
            <Link href="/about" className="py-4">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
