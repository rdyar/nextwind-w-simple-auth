import Link from 'next/link'
import * as Config from '../_siteConfig'

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="bg-neutral-800 p-4 text-center text-sm text-neutral-400">
        &copy; Copyright {Config.dctermsrightsHolder} {new Date().getFullYear()}
      </div>
    </footer>
  )
}
