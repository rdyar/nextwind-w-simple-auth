import Nav from './Nav'
import Footer from './Footer'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const router = useRouter()
  const { data: session, status, loading } = useSession()
  useEffect(() => {
    if (!loading) {
      if (status === 'unauthenticated') {
        router.push('/api/auth/signin/')
      }
    }
  }, [session])
  return (
    <>
      <Nav />
      <main className="container mx-auto mt-10 grow px-6 2xl:max-w-[1280px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
