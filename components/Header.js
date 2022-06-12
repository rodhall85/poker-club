import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="text-text-primary w-full flex bg-gradient-to-r from-primary to-secondary" >
      <nav className="flex mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-6/12 items-center flex-wrap p-3">
        <Link href="/">
          <a className="flex">
            <Image
                src="/images/logo.svg"
                alt="Ivy Leaf Poker Club"
                width={64}
                height={64}
            />
            <h1 className='text-2xl sm:text-3xl font-bold p-4'>
              Ivy Leaf<br />Poker&nbsp;Club
            </h1>
          </a>
        </Link>
        {/* <div className="ml-auto flow-root flex-1">
          <Link href="/signup"><a className="float-right">Sign Up</a></Link> 
          <div className="float-right mx-2">or</div>
          <Link href="/login"><a className="float-right">Login</a></Link> 
        </div> */}
        <button
          className=' inline-flex p-3 hover:bg-primary rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
          aria-label='Menu'
        >
          <svg
            className='w-10 h-10'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a onClick={() => setActive(false)} className='lg:inline-flex lg:w-auto lg:text-xl w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary'>
                Home
              </a>
            </Link>
            <Link href='/structures'>
              <a onClick={() => setActive(false)} className='lg:inline-flex lg:w-auto lg:text-xl w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary'>
                Structures
              </a>
            </Link>
            <Link href='/rules'>
              <a onClick={() => setActive(false)} className='lg:inline-flex lg:w-auto lg:text-xl w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-primary'>
                Rules
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}