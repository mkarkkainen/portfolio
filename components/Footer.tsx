'use client';

export default function Footer() {
  return (
    <footer className='pointer-events-none border-t-2  mt-24 pb-24 mx-auto max-w-2xl text-sm border-gray-700 text-gray-600'>
      <span>© {new Date().getFullYear()} - miikka k</span>
    </footer>
  );
}
