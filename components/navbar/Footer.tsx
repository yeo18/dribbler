import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-white text-gray-600 border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex  flex-col lg:flex-row  justify-between items-center mb-8 md: space-y-4'>
          <Link href="/" className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Drille
          </Link>
          <nav className='flex flex-wrap gap-6 max-md:justify-center  '>
            <Link href="#" className="hover:text-shadow-gray-900">Pour les designer</Link>
            <Link href="#" className="hover:text-shadow-gray-900">talent</Link>
            <Link href="#" className="hover:text-shadow-gray-900">inspiration</Link>
            <Link href="#" className="hover:text-shadow-gray-900">avertissement</Link>
            <Link href="#" className="hover:text-shadow-gray-900">blog</Link>
            <Link href="#" className="hover:text-shadow-gray-900">accueil</Link>
            <Link href="#" className="hover:text-shadow-gray-900">carriere</Link>
            <Link href="#" className="hover:text-shadow-gray-900">support</Link>
          </nav>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <Link href={"#"}  className="hover:text-shadow-gray-900">
              <FaTwitter className='w-5 h-5'/>
            </Link>
            <Link href={"#"}  className="hover:text-shadow-gray-900">
              <FaInstagram className='w-5 h-5'/>
            </Link>
            <Link href={"#"}  className="hover:text-shadow-gray-900">
              <FaFacebook className='w-5 h-5'/>
            </Link>
            <Link href={"#"}  className="hover:text-shadow-gray-900">
              <FaLinkedinIn className='w-5 h-5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm'>
          <div className='mb-4 md:mb-0'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam?
                <Link href={"#"} className='ml-4 hover:text-gray-900'>Terms</Link>
                <Link href={"#"} className='ml-4 hover:text-gray-900'>Politique</Link>
                <Link href={"#"} className='ml-4 hover:text-gray-900'>cookies</Link>
              </span>
          </div>
        </div>
        <div className=' flex flex-wrap gap-2'>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>jobs</Link>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>designer</Link>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>freelance</Link>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>tags</Link>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>places</Link>
          <Link href={"#"} className='ml-4 hover:text-gray-900'>Resource</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer