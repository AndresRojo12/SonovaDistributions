import { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaXTwitter,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    payload: {
      name: "",
      lastName: "",
      email: "",
      category: "",
      artistName: "",
      sealNAME: "",
      linkMusic: [],
      socialsLink: [],
      jobOffer: "",
    },
  });

  const musicPlatforms = [
    {
      name: "Spotify",
      icon: <FaSpotify className="text-green-500 text-2xl" />,
    },
    {
      name: "SoundCloud",
      icon: <FaSoundcloud className="text-orange-500 text-2xl" />,
    },
    {
      name: "YouTube Music",
      icon: <FaYoutube className="text-red-600 text-2xl" />,
    },
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-2xl" />,
    },
    { name: "TikTok", icon: <FaTiktok className="text-black text-2xl" /> },
    { name: "YouTube", icon: <FaYoutube className="text-red-600 text-2xl" /> },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-2xl" />,
    },
    { name: "X", icon: <FaXTwitter className="text-black text-2xl" /> },
  ];

  // Agregar plataforma musical
  const addMusic = () => {
    setForm({
      ...form,
      payload: {
        ...form.payload,
        linkMusic: [...form.payload.linkMusic, { platform: "", url: "" }],
      },
    });
  };

  // Actualizar campo
  const updateMusic = (index, field, value) => {
    const updated = [...form.payload.linkMusic];
    updated[index][field] = value;

    setForm({
      ...form,
      payload: { ...form.payload, linkMusic: updated },
    });
  };

  // Eliminar
  const removeMusic = (index) => {
    const updated = form.payload.linkMusic.filter((_, i) => i !== index);
    setForm({
      ...form,
      payload: { ...form.payload, linkMusic: updated },
    });
  };

  const addSocial = () => {
    setForm({
      ...form,
      payload: {
        ...form.payload,
        socialsLink: [...form.payload.socialsLink, { platform: "", url: "" }],
      },
    });
  };

  const updateSocial = (index, field, value) => {
    const updated = [...form.payload.socialsLink];
    updated[index][field] = value;

    setForm({
      ...form,
      payload: { ...form.payload, socialsLink: updated },
    });
  };

  const removeSocial = (index) => {
    const updated = form.payload.socialsLink.filter((_, i) => i !== index);
    setForm({
      ...form,
      payload: { ...form.payload, socialsLink: updated },
    });
  };

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      payload: {
        ...prevForm.payload,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const socialsFormatted = form.payload.socialsLink
      .map((s) => `<p><strong>${s.platform}:</strong> ${s.url}</p>`)
      .join("");

    const musicFormatted = form.payload.linkMusic
      .map((m) => `<p><strong>${m.platform}:</strong> ${m.url}</p>`)
      .join("");  

    const data = {
      ...form.payload,
      socialsLink: socialsFormatted,
      linkMusic: musicFormatted,
    };

    if (!data.name || !data.email || !data.jobOffer) {
      setStatus("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("Mensaje enviado correctamente 🎉");

      setForm({
        payload: {
          name: "",
          lastName: "",
          email: "",
          category: "",
          artistName: "",
          sealNAME: "",
          linkMusic: [],
          socialsLink: [],
          jobOffer: "",
        },
      });
    } catch (error) {
      setStatus("Error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-6">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-10">
          Estamos listos para ayudarte. Responderemos tu mensaje lo antes
          posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block mb-2 font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.payload.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tu nombre"
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="block mb-2 font-medium">Apellido</label>
            <input
              type="text"
              name="lastName"
              value={form.payload.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tu apellido"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.payload.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="email@ejemplo.com"
            />
          </div>

          {/* Categoría (texto por ahora) */}
          <div>
            <label className="block mb-2 font-medium">Categoría</label>
            <select
              name="category"
              value={form.payload.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Artista">Artista</option>
              <option value="Sello">Sello</option>
            </select>
          </div>

          {/*Dinamismo en categoria*/}

          {form.payload.category === "Artista" && (
            <div>
              <label className="block mb-2 font-medium">
                Nombre del artista
              </label>
              <input
                type="text"
                name="artistName"
                value={form.payload.artistName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Ingresa el nombre del Artista"
              />
            </div>
          )}

          {form.payload.category === "Sello" && (
            <div>
              <label className="block mb-2 font-medium">Nombre del sello</label>
              <input
                type="text"
                name="sealNAME"
                value={form.payload.sealNAME}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Ingresa el nombre del Sello"
              />
            </div>
          )}

          {/* Nombre del sello */}
          {/* <div>
            <label className="block mb-2 font-medium">Nombre del sello</label>
            <input
              type="text"
              name="sealNAME"
              value={form.payload.sealNAME}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Ej: Modura Records"
            />
          </div> */}

          {/* Plataformas musicales */}
          <div className="mt-8">
            <label className="block mb-2 font-medium">
              Plataformas musicales
            </label>

            <div className="space-y-4">
              {form.payload.linkMusic.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg"
                >
                  {/* Selector de plataforma */}
                  <select
                    value={item.platform}
                    onChange={(e) =>
                      updateMusic(index, "platform", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  >
                    <option value="">Selecciona plataforma</option>
                    {musicPlatforms.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>

                  {/* Input URL */}
                  <input
                    type="url"
                    placeholder="https://..."
                    className="flex-1 border p-2 rounded-lg"
                    value={item.url}
                    onChange={(e) => updateMusic(index, "url", e.target.value)}
                  />

                  {/* Botón eliminar */}
                  <button
                    onClick={() => removeMusic(index)}
                    type="button"
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Botón agregar */}
            <button
              type="button"
              onClick={addMusic}
              className="mt-3 bg-black text-white px-3 py-2 rounded-lg"
            >
              + Agregar plataforma
            </button>
          </div>

          {/* Vista previa íconos */}
          <div className="flex gap-4 mt-4">
            {form.payload.linkMusic.map((s, index) => {
              const platform = musicPlatforms.find(
                (p) => p.name === s.platform
              );

              if (!platform || !s.url) return null;

              return (
                <a
                  key={index}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.icon}
                </a>
              );
            })}
          </div>

          {/* Redes Sociales */}
          <div>
            <label className="block mb-2 font-medium">Tus redes</label>

            {/* Lista de redes agregadas */}
            <div className="space-y-4">
              {form.payload.socialsLink.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg"
                >
                  {/* Selector de plataforma */}
                  <select
                    value={item.platform}
                    onChange={(e) =>
                      updateSocial(index, "platform", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  >
                    <option value="">Selecciona red</option>
                    {socialPlatforms.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>

                  {/* Input URL */}
                  <input
                    type="url"
                    placeholder="https://..."
                    className="flex-1 border p-2 rounded-lg"
                    value={item.url}
                    onChange={(e) => updateSocial(index, "url", e.target.value)}
                  />

                  {/* Botón eliminar */}
                  <button
                    onClick={() => removeSocial(index)}
                    type="button"
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Botón para agregar red */}
            <button
              type="button"
              onClick={addSocial}
              className="mt-3 bg-black text-white px-3 py-2 rounded-lg"
            >
              + Agregar red
            </button>
          </div>

          {/* Vista previa íconos */}
          <div className="flex gap-4 mt-4">
            {form.payload.socialsLink.map((s, index) => {
              const platform = socialPlatforms.find(
                (p) => p.name === s.platform
              );

              if (!platform || !s.url) return null;

              return (
                <a
                  key={index}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.icon}
                </a>
              );
            })}
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-2 font-medium">Mensaje</label>
            <textarea
              name="jobOffer"
              value={form.payload.jobOffer}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Cuéntanos en qué podemos ayudarte..."
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Enviar mensaje
          </button>
        </form>

        {status && (
          <p className="text-center mt-6 text-green-600 font-medium">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
