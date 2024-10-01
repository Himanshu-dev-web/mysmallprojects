"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <div className="justify-between gap-5 flex flex-row mt-5 max-md:flex-wrap">
        <div className="text-zinc-800 text-lg font-bold leading-8 grow shrink basis-auto">
          <p className="indent-[7em]">Portfolio</p>
        </div>
        <div className="items-stretch flex justify-between gap-5 px-5 max-sm:m-auto">
          <Link
            href="/"
            onClick={() => handleLinkClick('about')}
            className={`text-zinc-800 text-lg font-medium leading-7 cursor-pointer ${
              selectedLink === 'about' ? 'underline text-sm' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => handleLinkClick('projects')}
            className={`text-zinc-800 text-lg font-medium leading-7 cursor-pointer ${
              selectedLink === 'projects' ? 'underline text-sm' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => handleLinkClick('contacts')}
            className={`text-zinc-800 text-lg font-medium leading-7 cursor-pointer ${
              selectedLink === 'contacts' ? 'underline text-sm' : ''
            }`}
          >
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
