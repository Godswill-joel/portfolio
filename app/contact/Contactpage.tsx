"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { LoaderPinwheel } from "lucide-react";
import { contactInfo, socials, fields } from "../../data/data";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = Object.fromEntries(
      new FormData(formRef.current!)
    );

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name, email, message },
        "YOUR_PUBLIC_KEY"
      );
      setSuccess(true);
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-6 py-16 md:px-12 lg:ml-[280px] lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-20 text-center">
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold uppercase tracking-wider text-gray-200 md:text-8xl lg:text-9xl">
            Contact
          </h2>
          <div className="relative z-10 inline-block">
            <h3 className="text-3xl font-bold text-slate-800 md:text-5xl">
              Get in Touch
            </h3>
            <div className="mx-auto mt-3 h-1 w-20 bg-cyan-400" />
          </div>
        </div>

        <div className="grid gap-14 lg:grid-cols-[340px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-slate-900">ADDRESS</h3>
            <p className="text-lg leading-10 text-slate-600">
              4th Floor, Plot No.22,
              <br />
              145 Murphy Canyon Rd.
              <br />
              San Diego CA 2028
            </p>

            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-cyan-400" />
                    <span className="text-xl text-slate-700">{item.value}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <h4 className="mb-5 text-2xl font-bold text-slate-900">
                FOLLOW ME
              </h4>
              <div className="flex gap-5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.id}
                      className="rounded-full bg-white p-3 shadow-md transition hover:scale-105"
                    >
                      <Icon className="h-5 w-5 text-slate-600" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              SEND US A NOTE
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {fields.slice(0, 2).map((field) => (
                  <input
                    key={field.id}
                    type="text"
                    name={field.id}
                    placeholder={field.placeholder}
                    required
                    className="h-16 rounded-lg border border-slate-300 bg-white px-5 text-lg text-black outline-none focus:border-cyan-400"
                  />
                ))}
              </div>

              <textarea
                name="message"
                rows={8}
                placeholder={fields[2].placeholder}
                required
                className="w-full resize-none rounded-lg border border-slate-300 bg-white p-5 text-lg text-black outline-none focus:border-cyan-400"
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-cyan-400 px-12 py-5 text-xl font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <LoaderPinwheel className="animate-spin" /> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {success && (
                <p className="text-lg font-medium text-cyan-600">
                  Message sent successfully.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}