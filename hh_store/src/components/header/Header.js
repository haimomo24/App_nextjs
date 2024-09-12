import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <>
   <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="data:image/png;base64,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"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        HH STORE
      </span>
    </Link>
    <div className="flex md:order-2 space-x-5 md:space-x-5 rtl:space-x-reverse">

       <Link className='text-[#FF8912]' href="/login"><i class="fa-solid fa-user"></i></Link>
       <Link className='text-[#FF8912]' href=""><i class="fa-solid fa-cart-shopping"></i></Link>
      
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Trang chủ 
          </Link>
        </li>
        <li>
          <Link
            href="/product"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Sản Phẩm 
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Trang Blog
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Liên Hệ 
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}

export default Header