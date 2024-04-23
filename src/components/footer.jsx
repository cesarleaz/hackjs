import JavascriptLogoSVG from "~/icons/javascript.svg?react";

const links = [
  {
    name: "Github",
    href: "https://www.github.com/celelab/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/celelab/",
  },
  {
    name: "Enviar sugerencias",
    href: "https://www.github.com/celelab/hackjs/issues/new",
  },
];

function FooterLink({ name, href }) {
  return (
    <li>
      <a href={href} class="hover:underline me-4 md:me-6"
                  target="_blank"
            rel="noopener noreferrer"
            >
        {name}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="rounded-lg m-4 bg-black/90">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <a
            href="https://github.com/celelab/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creado con 💛 por César Leañez.
          </a>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          {links.map(({ name, href }) => (
            <FooterLink key={name} name={name} href={href} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
