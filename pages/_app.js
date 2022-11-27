import '../styles/globals.css'
import Layout from '../components/Layout'
import Tracker from '../components/Tracker'
import { plausibleProperty } from '../_siteConfig'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from 'next-auth/react'

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <div className="flex h-screen flex-col">
          {plausibleProperty && <Tracker />}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
