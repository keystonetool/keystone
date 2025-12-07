import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Capabilities(){
  return (
    <>
      <Head><title>Capabilities — Keystone Tool & Fabrication</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Capabilities</h1>
        <p className="mt-3 text-slate-600">We provide a wide range of machining and fabrication services.</p>

        <section className="mt-8 grid md:grid-cols-2 gap-8">
          <article>
            <h3 className="font-semibold text-xl">CNC Milling</h3>
            <p className="text-slate-600 mt-2">Multi-axis milling for complex geometries. Typical materials: stainless steel, aluminum, titanium. Tolerances: down to 0.001" where required.</p>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>5-axis machining</li>
              <li>Large part capacity</li>
              <li>Inspection & QA</li>
            </ul>
          </article>

          <article>
            <h3 className="font-semibold text-xl">CNC Turning</h3>
            <p className="text-slate-600 mt-2">Precision turning for shafts, fittings, and housings.</p>
          </article>

          <article>
            <h3 className="font-semibold text-xl">EDM</h3>
            <p className="text-slate-600 mt-2">EDM wire and sinker for tight profiles and hard-to-machine materials.</p>
          </article>

          <article>
            <h3 className="font-semibold text-xl">Fabrication & Welding</h3>
            <p className="text-slate-600 mt-2">Certified welders, jigging, and assembly for production and prototype work.</p>
          </article>
        </section>

      </main>
      <Footer />
    </>
  )
}
