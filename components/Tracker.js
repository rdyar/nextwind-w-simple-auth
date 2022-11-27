import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Plausible from 'plausible-tracker'
import { plausibleProperty } from '../_siteConfig'

export default () => {
  //const location = useLocation();
  const appRoute = useRouter()
  const property = plausibleProperty

  const { trackPageview } = Plausible({
    domain: { property },
  })

  useEffect(() => {
    trackPage()
  }, [appRoute])

  const trackPage = () => {
    //plausible wants full url not just the relative path
    trackPageview({
      url: `${window.location.href} __ ${property}`,
    })
  }
  return null
}
