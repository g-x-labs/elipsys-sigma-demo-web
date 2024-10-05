import Link from "next/link";

// TODO: Replace links
const footerLinks = [
  { href: "", label: "Security" },
  { href: "", label: "Terms" },
  { href: "", label: "Privacy" },
  { href: "", label: "Docs" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between px-16 py-8">
      <h1 className="text-gray-600 text-sb2">© 2024 - G[X]LABS</h1>

      <nav className="flex flex-1 justify-end">
        <ul className="flex gap-x-8">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 text-sb2 hover:text-gray-200"
                prefetch={false}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}