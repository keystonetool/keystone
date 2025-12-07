import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import GalleryGrid from '../components/GalleryGrid'
import Link from 'next/link'

export default function Home(){
  const images = ['/gallery1.jpg','/gallery2.jpg','/gallery3.jpg','/gallery4.jpg','/gallery5.jpg','/gallery6.jpg']
  return (
    <>
      <Head>
        <title>Keystone Tool & Fabrication — Precision Machining & Fabrication</title>
        <meta name="description" content="Precision CNC machining, fabrication, welding, EDM, and assembly. Request a quote or upload drawings." />
      </Head>
      <Header />
      <main>
        <Hero title="Precision Machining & Fabrication — Aerospace • Oil & Gas • Industrial"
              subtitle="Multi-axis CNC, EDM, welding and assembly. Rapid turnarounds. Engineering support from prototype to production." />
        <section className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Capabilities</h3>
              <ul className="mt-4 text-slate-600 space-y-2">
                <li>Multi-axis CNC Milling</li>
                <li>CNC Turning</li>
                <li>EDM Wire & Sinker</li>
                <li>Fabrication & Welding</li>
                <li>Assembly & Testing</li>
              </ul>
              <Link href="/capabilities"><a className="inline-block mt-4 text-indigo-600">See all capabilities →</a></Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Quick RFQ</h3>
              <p className="mt-3 text-slate-600">Upload your drawing and get a response. We handle prototypes to production runs.</p>
              <Link href="/quote"><a className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Upload Drawing →</a></Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Why choose us</h3>
              <ul className="mt-4 text-slate-600 space-y-2">
                <li>On-time delivery & rush capability</li>
                <li>AS-ready quality control</li>
                <li>Engineering support for manufacturability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container py-6">
          <h3 className="text-2xl font-semibold mb-4">Recent Work</h3>
          <GalleryGrid images={images} />
        </section>

        <section className="container py-12 text-center">
          <h3 className="text-xl font-semibold">Ready to get started?</h3>
          <p className="text-slate-600 mt-3">Upload your drawing or call us to discuss your project.</p>
          <div className="mt-4">
            <Link href="/quote"><a className="bg-yellow-500 text-slate-900 px-5 py-3 rounded font-semibold mr-3">Request a Quote</a></Link>
            <a href="tel:9189336100" className="underline">Call (918) 933-6100</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
