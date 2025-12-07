import Link from 'next/link'
import Image from 'next/image'

export default function Hero({title, subtitle}) {
  return (
    <section className="relative">
      <div className="h-72 md:h-96 w-full relative">
        {/* Replace /hero.jpg with a high-res shop photo in /public */}
        <Image src="/hero.jpg" alt="Shop" fill style={{objectFit:'cover'}} className="brightness-75" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
            <p className="text-white mt-3 text-lg max-w-2xl drop-shadow">{subtitle}</p>
            <div className="mt-6">
              <Link href="/quote"><a className="bg-yellow-500 text-slate-900 px-4 py-3 rounded font-semibold mr-3">Request a Quote</a></Link>
              <Link href="/contact"><a className="text-white underline">Call (918) 933-6100</a></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
