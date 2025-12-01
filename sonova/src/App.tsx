import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./contact/Contact.tsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <>
                {/* HEADER */}
                <header className="w-full px-10 py-6 fixed top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
                  <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* LOGO */}
                    <h1 className="text-2xl font-bold">MODURA</h1>

                    {/* MENU */}
                    <nav className="flex space-x-8 text-[15px] font-medium text-gray-900">
                      <a href="#servicio" className="hover:text-black">
                        Servicio
                      </a>
                      <a href="#costos" className="hover:text-black">
                        Costos
                      </a>
                      <a href="#beneficios" className="hover:text-black">
                        Beneficios
                      </a>
                      <a href="#socios" className="hover:text-black">
                        Socios
                      </a>
                    </nav>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="line-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold transition"
                    >
                      Aplicar
                    </Link>
                  </div>
                </header>

                {/* HERO */}
                <section className="w-full pt-[160px] pb-32 text-center bg-gradient-to-br from-gray-50 to-green-50">
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      Distribución moderna para sellos y artistas independientes
                    </h1>

                    <p className="text-gray-600 text-lg mt-6 max-w-xl mx-auto">
                      Impulsa tu música con una solución de distribución digital
                      profesional, transparente y diseñada para crecer contigo.
                      En Modura Distribution simplificamos cada etapa del
                      proceso, ofreciéndote control total, eficiencia y un
                      soporte confiable para que puedas enfocarte únicamente en
                      crear.
                    </p>

                    <Link
                      to="/contact"
                      className="mt-10 inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition"
                    >
                      Comenzar
                    </Link>
                  </div>
                </section>

                {/* SERVICIO */}
                <section id="servicio" className="max-w-4xl mx-auto px-6 py-20">
                  <h2 className="text-3xl font-semibold mb-4">¿Qué hacemos?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Distribuimos tu música en más de 100 tiendas y plataformas
                    digitales en todo el mundo. Nuestro sistema está optimizado
                    para sellos y artistas que buscan una experiencia ágil, sin
                    complicaciones y con herramientas reales para gestionar su
                    catálogo.
                  </p>
                </section>

                {/* COSTOS */}
                <section id="costos" className="max-w-4xl mx-auto px-6 py-20">
                  <h2 className="text-3xl font-semibold mb-4">
                    Comisión y costos
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <b>Comisión estándar: 30% sobre regalías netas.</b>
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {" "}
                    No hay tarifas ocultas, pagos iniciales, ni suscripciones.
                    En Modura solo ganamos cuando tú ganas.
                  </p>
                </section>

                {/* BENEFICIOS */}
                <section
                  id="beneficios"
                  className="max-w-6xl mx-auto px-6 py-20"
                >
                  <h2 className="text-3xl font-semibold">
                    Beneficios principales
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {/* CARD */}
                    {[
                      ["Distribución global", "En más de 100 tiendas y DSPS."],
                      [
                        "Sistema inteligente de splits",
                        "Ideal para sellos y colaboraciones entre artistas.",
                      ],
                      ["Gestor de promos y demos", "Integrado."],
                      [
                        "Soporte técnico y atención personalizada",
                        "Según las necesidades de tu sello o proyecto.",
                      ],
                      [
                        "Códigos UPC/ISRC gratuitos",
                        "Usa los tuyos si lo prefieres",
                      ],
                    ].map(([title, text], i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 p-6 rounded-lg"
                      >
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-gray-600 mt-2">{text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ANALISIS Y REPORTES */}
                <section
                  id="beneficios"
                  className="max-w-6xl mx-auto px-6 py-20"
                >
                  <h2 className="text-3xl font-semibold">
                    Análisis y reportes
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Supervisa el rendimiento de todos tus lanzamientos en tiempo
                    real. El panel te permite acceder a:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {/* CARD */}
                    {[
                      ["Estadísticas diarias de streams y ventas."],
                      [
                        "Reportes completos",
                        " Apple Music, Spotify, Beatport, iTunes y más.",
                      ],
                      [
                        "Historial de ingresos",
                        "Fechas, país, plataforma y lanzamiento",
                      ],
                    ].map(([title, text], i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 p-6 rounded-lg"
                      >
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-gray-600 mt-2">{text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PAGOS Y REGALIAS */}
                <section
                  id="beneficios"
                  className="max-w-6xl mx-auto px-6 py-20"
                >
                  <h2 className="text-3xl font-semibold">Pagos y regalías</h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {/* CARD */}
                    {[
                      [
                        "Reportes de regalías",
                        "Emitimos reportes de regalías mensualmente, durante la primera semana de cada mes.",
                      ],
                      ["Pagos", " Los pagos se realizan vía PayPal."],
                      [
                        "Solicitud de pago",
                        "Puedes solicitar pago a partir de un mínimo de $50 USD.",
                      ],
                    ].map(([title, text], i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 p-6 rounded-lg"
                      >
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-gray-600 mt-2">{text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="servicio" className="max-w-4xl mx-auto px-6 py-20">
                  <h2 className="text-3xl font-semibold mb-4">Aplicaciones</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    MODURA está abierta a sellos y artistas independientes que
                    busquen una distribución seria, transparente y alineada con
                    estándares profesionales. Cada solicitud es evaluada
                    cuidadosamente para garantizar la calidad del catálogo
                    general de <b>MODURA.</b>
                  </p>
                </section>

                {/* SOCIOS */}
                <section id="socios" className="max-w-6xl mx-auto px-6 py-20">
                  <h2 className="text-3xl font-semibold">
                    Tiendas y plataformas asociadas
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 text-gray-700 text-sm">
                    {[
                      "7Digital",
                      "Aarmy",
                      "Amanotes",
                      "Amazon",
                      "AMI",
                      "Anghami",
                      "Apple Music",
                      "Apple Music 1",
                      "Audalize",
                      "Audible Magic",
                      "Audiomack",
                      "AWA",
                      "Beatport",
                      "Beatsource",
                      "BMAT",
                      "Boomplay",
                      "Canva",
                      "ClaroMusica",
                      "CLMBR",
                      "Clone Digital",
                      "Coda",
                      "Deezer",
                      "Echelon",
                      "eMusic",
                      "Flo",
                      "Global",
                      "GTL",
                      "iHeartRadio",
                      "Instagram",
                      "iTunes",
                      "JPAY",
                      "Juno Download",
                      "KKBOX",
                      "Lime Blue",
                      "LINE Music",
                      "Melon",
                      "Meta",
                      "Mixcloud",
                      "Mood Media",
                      "Music Reports",
                      "Napster",
                      "Netease",
                      "Pandora",
                      "Peloton",
                      "Pretzel",
                      "Resident Advisor",
                      "Rockbot",
                      "ROXi",
                      "Saavn",
                      "Shazam",
                      "Singa",
                      "Snapchat",
                      "SoundCloud",
                      "SoundExchange",
                      "Soundtrack Your Brand",
                      "Spotify",
                      "Tencent",
                      "Tidal",
                      "TikTok",
                      "TouchTunes",
                      "Traxsource",
                      "Trebel",
                      "United Media Agency",
                      "Yandex",
                      "YouTube Content Monetization",
                      "YouTube Premium",
                    ].map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center py-14 bg-black text-white mt-20">
                  © {new Date().getFullYear()} Modura Distribution — Todos los
                  derechos reservados.
                </footer>
              </>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
