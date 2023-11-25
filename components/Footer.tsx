'use client';

export default function Footer() {
  return (
    <footer className='text-quaternary pointer-events-none border-t-2 border-gray-200 mt-24 pb-24 mx-auto max-w-2xl text-sm dark:border-gray-700 dark:text-gray-600'>
      <span>© {new Date().getFullYear()} - miikka k</span>
    </footer>
  );
}
