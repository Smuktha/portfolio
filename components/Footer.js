export default function Footer() {
  return (
    <footer className="w-full py-10 text-center text-sm bg-black text-gray-400 border-t border-neutral-800 font-body">
      <p className="mb-1">
        Designed & Built with{" "}
        <span className="text-white">♥</span> by{" "}
        <span className="text-white font-semibold font-heading tracking-wide">
          Muktha
        </span>
      </p>
      <p className="text-xs mt-1 text-gray-500">
        © {new Date().getFullYear()} Muktha Suvarna. All rights reserved.
      </p>
    </footer>
  );
}
