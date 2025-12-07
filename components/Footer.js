export default function Footer(){ 
  return (
    <footer className="bg-slate-50 border-t mt-16">
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Keystone Tool & Fabrication</h4>
          <p className="text-sm text-slate-600">Precision machining, fabrication & assembly. Tulsa, OK</p>
        </div>
        <div>
          <h5 className="font-medium">Quick Links</h5>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li><a href="/capabilities">Capabilities</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/quote">Request a Quote</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contact</h5>
          <p className="text-sm text-slate-600 mt-2">Phone: <a href="tel:9189336100">(918) 933-6100</a></p>
          <p className="text-sm text-slate-600">Address: 1234 Main St, Tulsa, OK 74104</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Keystone Tool & Fabrication — All rights reserved.</div>
    </footer>
  )
}
