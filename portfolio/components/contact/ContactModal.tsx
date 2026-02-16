"use client";

import { useEffect, useRef, useCallback, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactModal({ open, onClose }: ContactModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    previousActiveRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      previousActiveRef.current?.focus?.();
    };
  }, [open, handleEscape]);

  if (typeof document === "undefined" || !open) return null;

  return createPortal(
    <ContactModalContent panelRef={panelRef} onClose={onClose} />,
    document.body
  );
}

function ContactModalContent({
  panelRef,
  onClose,
}: {
  panelRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const successCloseRef = useRef<HTMLButtonElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      firstInputRef.current?.focus();
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    if (submitState === "success") {
      successCloseRef.current?.focus();
    }
  }, [submitState]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(siteConfig.cta.formspreeEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Submission failed (${res.status})`);
      }
      setSubmitState("success");
      form.reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        className="relative w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-xl focus:outline-none sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-black">
              {siteConfig.cta.label}
            </p>
            <h2
              id="contact-modal-title"
              className="mt-1 text-2xl font-bold tracking-tight text-black sm:text-3xl"
            >
              {siteConfig.cta.heading}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {submitState === "success" ? (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-black">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
            <button
              ref={successCloseRef}
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--hero-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                ref={firstInputRef}
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={submitState === "submitting"}
                className="mt-1.5 w-full rounded-lg border-2 border-input bg-white px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-[var(--hero-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--hero-accent)]/20 disabled:opacity-60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={submitState === "submitting"}
                className="mt-1.5 w-full rounded-lg border-2 border-input bg-white px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-[var(--hero-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--hero-accent)]/20 disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                disabled={submitState === "submitting"}
                className="mt-1.5 w-full resize-y rounded-lg border-2 border-input bg-white px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-[var(--hero-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--hero-accent)]/20 disabled:opacity-60"
                placeholder="How can I help?"
              />
            </div>

            {submitState === "error" && (
              <p className="text-sm text-destructive" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="order-2 rounded-full border-2 border-foreground bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="order-1 inline-flex items-center justify-center rounded-full bg-[var(--hero-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-60 sm:order-2"
              >
                {submitState === "submitting" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
