import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
  Link as RemixLink
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { HeroUIProvider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='antialiased dark'>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar>
          <NavbarBrand>
            <p className='font-bold'>FireCast 🔥</p>
          </NavbarBrand>
          <NavbarContent justify='center'>
            <NavbarItem>
              <Link className='font-bold' as={RemixLink} to='/simulator'>Modelo logístico</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <HeroUIProvider navigate={useNavigate} useHref={useHref}>
      <Outlet />
    </HeroUIProvider>
  );
}
