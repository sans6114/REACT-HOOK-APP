
"use client";

import {
  DarkThemeToggle,
  Navbar,
} from 'flowbite-react';

export const NavBar = () => {
  return (
    <Navbar fluid className='border border-b-2'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">React HooksApp</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    
    </Navbar>
  );
}
