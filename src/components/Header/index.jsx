import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto mt-10 grid grid-cols-3'>
        <div className='flex items-center'>
            <button className='flex w-12 h-12 justify-center items-center bg-white rounded-xl'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#C3CAD9"/>
                </svg>
            </button >
            <h1 className='ml-8 font-bold text-lg text-gray'>DASH</h1>
        </div>
        <ul className='flex items-center '>
            <li><a href="/" className='font-bold text-sm text-gray hover:text-purple transition-all'>Dashboard</a></li>
            <li className='mx-8 ' ><a href="/" className='font-bold text-sm text-gray hover:text-purple transition-all'>Pages</a></li>
            <li><a href="/" className='font-bold text-sm text-gray hover:text-purple transition-all'>Posts</a></li>
        </ul>
        <div className='flex justify-end items-center '>
            <a href="/" className='mr-6 flex w-12 h-12 justify-center items-center bg-purple-light rounded-xl'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5865 24.5C15.6865 24.5 16.5865 23.6 16.5865 22.5H12.5865C12.5865 23.6 13.4765 24.5 14.5865 24.5ZM20.5865 18.5V13.5C20.5865 10.43 18.9465 7.86 16.0865 7.18V6.5C16.0865 5.67 15.4165 5 14.5865 5C13.7565 5 13.0865 5.67 13.0865 6.5V7.18C10.2165 7.86 8.58648 10.42 8.58648 13.5V18.5L7.29648 19.79C6.66648 20.42 7.10648 21.5 7.99648 21.5H21.1665C22.0565 21.5 22.5065 20.42 21.8765 19.79L20.5865 18.5Z" fill="#8833FF"/>
                </svg>
            </a>
            <a href="/">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 14C20.66 14 21.99 12.66 21.99 11C21.99 9.34 20.66 8 19 8C17.34 8 16 9.34 16 11C16 12.66 17.34 14 19 14ZM11 14C12.66 14 13.99 12.66 13.99 11C13.99 9.34 12.66 8 11 8C9.34 8 8 9.34 8 11C8 12.66 9.34 14 11 14ZM11 16C8.67 16 4 17.17 4 19.5V21C4 21.55 4.45 22 5 22H17C17.55 22 18 21.55 18 21V19.5C18 17.17 13.33 16 11 16ZM19 16C18.71 16 18.38 16.02 18.03 16.05C18.05 16.06 18.06 16.08 18.07 16.09C19.21 16.92 20 18.03 20 19.5V21C20 21.35 19.93 21.69 19.82 22H25C25.55 22 26 21.55 26 21V19.5C26 17.17 21.33 16 19 16Z" fill="#C3CAD9"/>
                </svg>
            </a>
        </div>
    </header>
  )
}

export default Header;
