"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useReducedMotion, motion } from "framer-motion"

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  reason: z.string().optional(),
  message: z.string().min(10, "Message is too short").max(1000, "Message is too long"),
  honeypot: z.string().optional(),
})

type ContactForm = z.infer<typeof ContactSchema>

export default function ContactMiniForm() {
  const reduce = useReducedMotion()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) })

  function onSubmit(data: ContactForm) {
    // spam prevention: if honeypot filled, ignore
    if (data.honeypot) return

    console.log("Contact form payload:", data)
    // show success state (no network yet)
    setTimeout(() => {
      reset()
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-live="polite" className="space-y-4">
      <input type="text" {...register("honeypot")} className="hidden" aria-hidden />

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          {...register("name")}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-bg"
          required
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-bg"
          required
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Reason (optional)</label>
        <select {...register("reason")} className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-bg">
          <option value="">Select reason</option>
          <option value="collaboration">Collaboration</option>
          <option value="mentorship">Mentorship</option>
          <option value="speaking">Speaking</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 bg-bg"
          required
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-2xl disabled:opacity-60"
        >
          {isSubmitSuccessful ? (
            reduce ? (
              "Success"
            ) : (
              <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                Success
              </motion.span>
            )
          ) : (
            "Send Message"
          )}
        </button>

        <p className="text-xs text-fg/60">Email sending arrives in Phase 5 (SMTP). <a href="/legal" className="text-accent hover:underline">Privacy</a></p>
      </div>
    </form>
  )
}
