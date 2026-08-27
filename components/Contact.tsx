"use client";

import { useState, type FormEvent } from "react";

/**
 * Static contact form: no backend wired yet. On submit it just confirms
 * receipt locally. Point the `action`/onSubmit at a real endpoint (an API
 * route, Formspree, etc.) once you have one, and swap the placeholder
 * email/phone below for your real contact details.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-content gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-olive-600">
            Get in touch
          </p>
          <h2 className="text-4xl text-espresso-900 sm:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-espresso-700">
            Brands, prospective talent, and press are all welcome to reach
            out. We read every inquiry personally.
          </p>

          <dl className="mt-10 space-y-4 font-body text-sm">
            <div>
              <dt className="uppercase tracking-[0.12em] text-espresso-700">
                Email
              </dt>
              <dd className="mt-1 text-lg text-espresso-900">
                partnerships@jadecollectiveagency.com
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.12em] text-espresso-700">
                Location
              </dt>
              <dd className="mt-1 text-lg text-espresso-900">
                San Diego, CA
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-stone-300/50 bg-cream-100/50 p-8 sm:p-10"
        >
          {submitted ? (
            <div role="status" className="py-10 text-center">
              <p className="font-display text-2xl text-espresso-900">
                Thank you.
              </p>
              <p className="mt-2 text-sm text-espresso-700">
                We&apos;ve received your message and will be in touch soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-body text-sm text-espresso-800"
                  >
                    Name <span className="text-terracotta-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 bg-cream-50 px-4 py-3 text-espresso-900 outline-none transition-colors duration-200 focus:border-olive-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-body text-sm text-espresso-800"
                  >
                    Email <span className="text-terracotta-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-stone-300 bg-cream-50 px-4 py-3 text-espresso-900 outline-none transition-colors duration-200 focus:border-olive-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry"
                  className="mb-1.5 block font-body text-sm text-espresso-800"
                >
                  I&apos;m reaching out about
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  className="w-full rounded-lg border border-stone-300 bg-cream-50 px-4 py-3 text-espresso-900 outline-none transition-colors duration-200 focus:border-olive-500"
                  defaultValue="brand"
                >
                  <option value="brand">Brand partnership</option>
                  <option value="talent">Joining the roster</option>
                  <option value="press">Press &amp; media</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-body text-sm text-espresso-800"
                >
                  Message <span className="text-terracotta-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-stone-300 bg-cream-50 px-4 py-3 text-espresso-900 outline-none transition-colors duration-200 focus:border-olive-500"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer justify-self-start rounded-full bg-olive-600 px-8 py-3.5 font-body text-sm font-medium text-cream-50 transition-colors duration-200 hover:bg-olive-700"
              >
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
