import React, { useState, useEffect, useRef } from 'react';
import { Settings, Cog, ArrowRight, Phone, MapPin, Menu, X, ChevronDown, Zap, Shield, Award, Clock, Wrench, Gauge } from 'lucide-react';

export default function KeystoneMaxed() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let rotation = 0;

    const drawBlueprintGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.font = '10px monospace';
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      for (let i = 0; i < 10; i++) {
        ctx.fillText(`${i * 100}`, 10, i * 80 + 20);
      }

      const drawGear = (x, y, r, teeth, rot) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < teeth; i++) {
          const a = (i / teeth) * Math.PI * 2;
          const na = ((i + 0.5) / teeth) * Math.PI * 2;
          const or = r + 8;
          ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
          ctx.lineTo(Math.cos(a) * or, Math.sin(a) * or);
          ctx.lineTo(Math.cos(na) * or, Math.sin(na) * or);
          ctx.lineTo(Math.cos(na) * r, Math.sin(na) * r);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(10, 0);
        ctx.moveTo(0, -10);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.restore();
      };

      const drawTechnicalCircle = (x, y, r) => {
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(x - r - 10, y);
        ctx.lineTo(x + r + 10, y);
        ctx.moveTo(x, y - r - 10);
        ctx.lineTo(x, y + r + 10);
        ctx.stroke();
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.fillText(`Ø${(r * 0.1).toFixed(2)}"`, x + r + 15, y);
      };

      drawGear(canvas.width * 0.15, canvas.height * 0.3, 60, 16, rotation);
      drawGear(canvas.width * 0.85, canvas.height * 0.25, 80, 20, -rotation * 0.8);
      drawGear(canvas.width * 0.75, canvas.height * 0.7, 50, 12, rotation * 1.2);
      drawTechnicalCircle(canvas.width * 0.2, canvas.height * 0.65, 40);
      drawTechnicalCircle(canvas.width * 0.9, canvas.height * 0.8, 35);

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.15, canvas.height * 0.3);
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.25);
      ctx.stroke();
      ctx.setLineDash([]);

      rotation += 0.005;
      requestAnimationFrame(drawBlueprintGrid);
    };

    drawBlueprintGrid();
  }, []);

  const capabilities = [
    { icon: Settings, title: "Multi-Axis CNC", description: "5-axis simultaneous machining with tolerances to ±0.0001\"", specs: ["Haas VF-9/40", "50 taper CAT40", "15,000 RPM"] },
    { icon: Cog, title: "Swiss Turning", description: "High-precision turning for complex cylindrical components", specs: ["Live tooling", "Sub-spindle", "Bar feed"] },
    { icon: Zap, title: "Wire EDM", description: "Ultra-precision electrical discharge machining", specs: ["±0.00005\" accuracy", "RC 65 hardness", "Intricate profiles"] },
    { icon: Shield, title: "TIG/MIG Welding", description: "Certified welding for aerospace applications", specs: ["ASME certified", "6G positions", "X-ray tested"] }
  ];

  const stats = [
    { value: "28+", label: "Years Machining" },
    { value: "99.9%", label: "On-Time Ship" },
    { value: "±.0001\"", label: "Tolerance" },
    { value: "24/7", label: "Rush Service" }
  ];

  return (
    <div className="bg-[#0a1628] text-white font-sans relative overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />
      <div className="fixed inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6, 182, 212, 0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6, 182, 212, 0.3) 40px)`
      }}></div>

      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-[#0a1628]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-lg animate-pulse"></div>
                <div className="absolute inset-0.5 bg-[#0a1628] rounded-lg flex items-center justify-center">
                  <Settings className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-wider text-cyan-400">KEYSTONE</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Tool & Fabrication</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Capabilities', 'Portfolio', 'Precision', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm tracking-wide group">
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
              <a href="#quote" className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2 font-semibold tracking-wide">
                  <span>RFQ</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="tel:9189336100" className="flex items-center space-x-2 text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-sm hover:bg-cyan-400/10 transition-all">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-mono">(918) 933-6100</span>
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 px-6 py-3 border border-cyan-500/30 bg-cyan-500/5">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-sm tracking-widest text-cyan-400 font-mono">AS9100 REV D CERTIFIED</span>
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-none">
              <div className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">PRECISION</span>
                <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl -z-10"></div>
              </div>
              <br />
              <span className="text-white font-light tracking-tight">ENGINEERING</span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl text-gray-300 tracking-wide">
                Multi-axis CNC machining • Wire EDM • Swiss turning • Certified welding
              </p>
              <p className="text-lg text-cyan-400/80 font-mono">
                ± 0.0001" tolerance | Aerospace • Defense • Medical • Oil & Gas
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a href="#quote" className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600">
                <span className="relative z-10 flex items-center space-x-3 text-lg font-semibold tracking-wide text-white">
                  <span>REQUEST QUOTE</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
              <a href="tel:9189336100" className="px-12 py-5 border-2 border-cyan-400 bg-[#0a1628] hover:bg-cyan-400/20 transition-all flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-lg font-mono text-cyan-400">(918) 933-6100</span>
              </a>
            </div>

            <div className="pt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative p-6 border border-cyan-500/20 bg-cyan-500/5">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50"></div>
                  <div className="text-4xl lg:text-5xl font-bold text-cyan-400 font-mono mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
            <span className="text-xs text-cyan-400 tracking-widest">SCROLL</span>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span className="text-sm tracking-widest text-cyan-400 font-mono">CORE SERVICES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">MANUFACTURING CAPABILITIES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">State-of-the-art machining centers for demanding specifications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} onMouseEnter={() => setActiveCapability(idx)}
                className={`group relative p-10 border-2 transition-all duration-300 cursor-pointer ${activeCapability === idx ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-xl shadow-cyan-500/20' : 'border-cyan-500/20 hover:border-cyan-500/40'}`}>
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50"></div>
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 border-2 flex items-center justify-center transition-all ${activeCapability === idx ? 'border-cyan-400 bg-cyan-400/20' : 'border-cyan-500/30'}`}>
                    <cap.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{cap.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{cap.description}</p>
                    <div className="space-y-3">
                      {cap.specs.map((spec, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-1 h-1 bg-cyan-400"></div>
                          <span className="text-sm text-gray-400 font-mono">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 relative p-12 border-2 border-cyan-400/30 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-400"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400">24-HOUR TURNAROUND</h4>
                  <p className="text-sm text-gray-400">Emergency machining services for critical deadlines</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400">CMM INSPECTION</h4>
                  <p className="text-sm text-gray-400">Full first article inspection with reports and certifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Gauge className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400">DFM ANALYSIS</h4>
                  <p className="text-sm text-gray-400">Engineering support for design optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-gradient-to-b from-transparent to-cyan-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm tracking-widest text-cyan-400 font-mono">PROJECT GALLERY</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PRECISION DELIVERED</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {['Aerospace Components', 'Medical Implants', 'Defense Systems', 'Oil & Gas Equipment', 'Automotive Racing', 'Industrial Tooling'].map((cat, idx) => (
              <div key={idx} className="group relative aspect-square border-2 border-cyan-500/20 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center">
                  <Settings className="w-24 h-24 text-cyan-400/20 animate-spin" style={{ animationDuration: '12s' }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 border-2 border-cyan-400/50 m-4"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{cat}</h3>
                  <p className="text-sm text-gray-400 font-mono">VIEW PROJECT →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="border-4 border-cyan-400/30 p-16 relative">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cyan-400"></div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">READY TO START?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Upload technical drawings or contact our engineering team</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Settings className="w-32 h-32 text-white animate-spin" style={{ animationDuration: '20s' }} />
                </div>
                <span className="relative z-10 flex items-center space-x-3 text-lg font-semibold tracking-wide text-white">
                  <span>UPLOAD DRAWINGS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <a href="tel:9189336100" className="relative px-12 py-5 border-2 border-cyan-400 bg-[#0a1628] hover:bg-cyan-400/20 transition-all flex items-center space-x-3 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <Settings className="w-32 h-32 text-cyan-400 animate-spin" style={{ animationDuration: '15s' }} />
                </div>
                <Phone className="w-5 h-5 text-cyan-400 relative z-10" />
                <span className="text-lg font-mono text-cyan-400 relative z-10">(918) 933-6100</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-cyan-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 border-2 border-cyan-400">
                  <Settings className="absolute inset-0 m-auto w-6 h-6 text-cyan-400" />
                </div>
                <div className="font-bold text-xl tracking-wider text-cyan-400">KEYSTONE</div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Precision machining for aerospace, defense, medical, and industrial applications.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400 tracking-wide">SERVICES</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {['CNC Milling', 'Swiss Turning', 'Wire EDM', 'Fabrication'].map(s => <div key={s} className="hover:text-cyan-400 cursor-pointer transition-colors">{s}</div>)}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400 tracking-wide">INDUSTRIES</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {['Aerospace', 'Defense', 'Medical', 'Oil & Gas'].map(i => <div key={i}>{i}</div>)}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400 tracking-wide">CONTACT</h4>
              <div className="space-y-3">
                <a href="tel:9189336100" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">(918) 933-6100</span>
                </a>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Tulsa, Oklahoma</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8 text-center text-sm text-gray-400 font-mono">
            © 2025 KEYSTONE TOOL & FABRICATION — ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
