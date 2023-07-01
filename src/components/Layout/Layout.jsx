import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <br/><br/><br/>
      <main>
        <div className='flex max-w-5xl min-h-screen pt-[100px] mx-auto px-5 bg-slate-800 border border-stone-600 rounded-lg'>
          <div className='mx-auto w-full'>{children}</div>
        </div>
      </main>
      <br/><br/>
      <Footer/>
    </>
  );
}
