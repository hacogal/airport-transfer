"use client";
import React from "react";

export default function LandingPage() {
  const phoneNumber1: string = "+14169372441"; 
  const phoneNumber2: string = "+14378756148";
  const whatsappNumber: string = "14169372441"; 
  const email: string = "ziatoronto@hotmail.com";

  const go = (url: string) => (window.location.href = url);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Diplomat Transfer Services
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          VIP airport transfers in Toronto & GTA. Punctual, comfortable and professional.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => go(`https://wa.me/${whatsappNumber}?text=Hi,%20I%20need%20an%20airport%20transfer`)}
            className="bg-white text-black px-6 py-3 text-lg rounded-2xl shadow"
          >
            WhatsApp
          </button>
          <button
            onClick={() => go(`tel:${phoneNumber1}`)}
            className="border border-white px-6 py-3 text-lg rounded-2xl"
          >
            Call
          </button>
          <button
            onClick={() => go(`mailto:${email}?subject=Airport%20Transfer%20Request`)}
            className="border border-white px-6 py-3 text-lg rounded-2xl"
          >
            Email
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2">Luxury Vehicles</h3>
          <p className="text-sm opacity-70">Clean, comfortable and premium cars.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2">On-Time Guarantee</h3>
          <p className="text-sm opacity-70">We arrive early and track your flight.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg mb-2">Professional Service</h3>
          <p className="text-sm opacity-70">Safe, discreet and experienced driver.</p>
        </div>
      </section>

      {/* CONTACT (CLEAN) */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="space-y-2 text-lg">
          <p>📞 {phoneNumber1} / {phoneNumber2} </p>
          <p>📧 {email}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center mt-10">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Diplomat Transfer Services
        </p>
      </footer>
    </div>
  );
}
