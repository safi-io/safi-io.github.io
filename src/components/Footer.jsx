import React from 'react';

export default function Footer() {
  return (
    <section className='flex items-center justify-center text-white text-2xl gap-1 fixed bottom-0 w-full bg-black z-10'>
      <span className='text-sm'>
        &copy;2024 Safi | Made with 
      </span>
      <span className='text-red-500'>&hearts;</span>
    </section>
  );
}
