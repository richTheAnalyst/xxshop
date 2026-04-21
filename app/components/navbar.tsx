'use client';
import Link from "next/link";


export default  function Navbar() {


    

    return (
        <div>
        
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

      </div>
    </nav>
    </div>
    )
}