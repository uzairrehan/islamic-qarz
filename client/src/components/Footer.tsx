import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t-2 bg-[#000c1b] text-white py-8 mt-28">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between gap-8  ">
          {/* Contact Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a className="text-sm mb-2" href='mailto:uzairrehann@gmail.com' >Email: uzairrehann@gmail.com</a>
            <br />
            <a className="text-sm" href='tel:+93158153581'>Phone: +93158153581</a>
          </div>

          {/* Social Media Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/uzairrehan" target='_blank' className="text-xl hover:text-gray-400">
                <BsGithub />
              </Link>
              <Link href="https://linkedin.com/in/uzairrehan" target='_blank' className="text-xl hover:text-gray-400">
                <FaLinkedin />
              </Link>
              <Link href="https://instagram.com/uzairrehann" target='_blank' className="text-xl hover:text-gray-400">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Uzair Rehan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
