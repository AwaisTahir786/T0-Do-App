import TodoWrapper from '@/components/todoWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-14 bg-gradient-to-r from-[#8758ffd2] to-[#643cc9] min-h-screen flex  flex-col items-center justify-center ">
      
      <h1 className='text-white font-extrabold text-6xl mb-7'>To-Do App</h1>

      <div className='bg-[#1A1A40] px-4 py-12 rounded-r-md '>
      <TodoWrapper/>

      </div>
      
    </main>
  )
}
