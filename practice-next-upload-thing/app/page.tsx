import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-gradient-to-l to-neutral-500 from-neutral-600 flex flex-col gap-5 items-center justify-center w-full min-h-[100vh] '>
      <section className='text-3xl font-bold text-neutral-700'>
        <h1>Upload thing 'Test' Project </h1>
      </section>
      <section className='flex gap-5'>
      <Link href={'/upload-button'} className='bg-yellow-600 px-4 py-2 rounded-md text-gray-300 duration-200 hover:bg-gray-300 hover:text-yellow-600 font-semibold' >Upload button</Link>
      <Link href={'/upload-dnd'} className='bg-yellow-600 px-4 py-2 rounded-md text-gray-300 duration-200 hover:bg-gray-300 hover:text-yellow-600 font-semibold'>Upload DnD</Link>
      </section>
    </div>
  )
}
