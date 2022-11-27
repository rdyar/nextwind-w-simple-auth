import Head from 'next/head'
import * as Config from '../_siteConfig'

export default function PageHead({
  meta = { title: Config.siteTitle, description: Config.siteDescription },
}) {
  const { title, description } = meta
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content={Config.author} />
      <meta name="dcterms.rightsHolder" content={Config.dctermsrightsHolder} />
      {Config.fbapp_id && (
        <meta property="fb:app_id" content={Config.fbapp_id} />
      )}
      <meta property="og:type" content="business.business" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={Config.siteURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Config.ogImage} />
      <meta
        property="business:contact_data:street_address"
        content={Config.streetAddress}
      />
      <meta property="business:contact_data:locality" content={Config.city} />
      <meta property="business:contact_data:postal_code" content={Config.zip} />
      <meta
        property="business:contact_data:country_name"
        content={Config.country}
      />
      <meta property="place:location:latitude" content={Config.latitude} />
      <meta property="place:location:longitude" content={Config.longitude} />
      <link rel="icon" href={Config.favicon}></link>
    </Head>
  )
}
