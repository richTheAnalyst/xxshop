'use client';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default  function Navbar() {

const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className="mb-4">
        
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link href="/" className="flex items-center space-x-3">
         { /* <img 
            src="https://imgs.search.brave.com/tz3e3jJbsLm_eCdDhAgeZVjoltsu_DjfRArI_evOAbE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8x/MS90aW1iZXJsYW5k/LWxvZ29fYnJhbmRs/b2dvcy5uZXRfc2dj/bngtNTEyeDUxMi5w/bmc"
            className="h-20 w-20 rounded-full"
            alt="Logo"
          /> */ }
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            XX SHOP
          </span>
        </Link>

        <div className="flex items-center md:order-2">
          <input
            type="text"
            className="hidden md:block border rounded px-2 py-1"
            placeholder="Search"
          />
        </div>

        <div className="hidden md:flex md:w-auto">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>


        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
             {
          isOpen ?
           <X className="h-6 w-6" /> :
            <Menu className="h-6 w-6" />
            }
         
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-50 rounded-b-lg border-t border-default p-4">
            <ul className="flex flex-col items-center space-y-4 mt-6 text-lg font-boldrounded-lg p-4">
              <li>
                <Link href="/" className="text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
    </div>
    )
}