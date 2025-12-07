import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                {/* Replace /logo.png with your real logo in /public */}
                <Image src="/logo.png" alt="Keystone Tool & Fabrication" fill style={{objectFit:'contain'}} />
              </div>
              <div>
                <div className="font-semibold text-lg">Keystone Tool & Fabrication</div>
                <div className="text-sm text-slate-500">Precision Machining & Fabrication</div>
              </div>
            </a>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/capabilities"><a className="hidden md:inline-block">Capabilities</a></Link>
          <Link href="/gallery"><a className="hidden md:inline-block">Gallery</a></Link>
          <Link href="/about"><a className="hidden md:inline-block">About</a></Link>
          <Link href="/quote"><a className="ml-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Request a Quote</a></Link>
          <a href="tel:9189336100" className="ml-4 hidden md:inline-block text-sm">Call: (918) 933-6100</a>
        </nav>
      </div>
    </header>
  )
}
