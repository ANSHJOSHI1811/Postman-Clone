import React from 'react';
import { DiCodeigniter } from "react-icons/di";

export default function Navbar() {
  return (
    <>
    <div className='absolute w-full  border-slate-900 bg-stone-900'>
      <div className='border-b border-slate-900'>
        <div className='flex max-w-7xl mx-auto'>
          <span className='py-5 px-1 text-2xl font-semibold text-white'>
            Apitron
          </span>
          <span className='py-8 px-1 text-1xl font-semibold text-cyan-500'>
            <DiCodeigniter/>
          </span>
        </div>
      </div>
    </div>
    <br/>
    </>
  );
}
