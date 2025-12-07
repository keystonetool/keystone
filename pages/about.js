import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <>
      <Head><title>About — Keystone Tool & Fabrication</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">About Keystone Tool & Fabrication</h1>
        <p className="text-slate-600 mt-4">Family-owned precision machining company offering machining, fabrication and assembly services to energy and aerospace customers.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate-600 mt-2">Deliver reliable, high-quality parts with fast turnarounds and engineering support.</p>
        </section>

      </main>
      <Footer />
    </>
  )
}
