import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { bookForm } from "../content/bookForm";

interface ServiceOption {
  id: string;
  name: string;
}

interface Props {
  services: ServiceOption[];
  confirmHeading: string;
  confirmText: string;
  phoneDisplay: string;
  phoneTel: string;
  privacyNote: string;
}

type Status = "idle" | "submitting" | "success";

const f = bookForm.fields;

/**
 * Booking request form. Client side checks give instant feedback; the server
 * endpoint revalidates everything. A hidden company field (honeypot) and a
 * started at timestamp travel with the submission for spam protection.
 */
export default function BookingForm({
  services,
  confirmHeading,
  confirmText,
  phoneDisplay,
  phoneTel,
  privacyNote,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const startedAt = useMemo(() => Date.now(), []);
  const liveRef = useRef<HTMLDivElement>(null);

  const validate = (form: FormData): Record<string, string> => {
    const next: Record<string, string> = {};
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const preferred = String(form.get("preferred") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();

    if (name.length < 2) next.name = f.name.error;
    if (phone.length < 7 || !/^[0-9()+\-. ]+$/.test(phone)) next.phone = f.phone.error;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = f.email.error;
    if (!preferred) next.preferred = f.preferred.error;
    if (!service) next.service = f.service.error;
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    setServerError(null);
    if (Object.keys(nextErrors).length > 0) {
      liveRef.current?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? "").trim(),
          phone: String(form.get("phone") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          preferred: String(form.get("preferred") ?? "").trim(),
          service: String(form.get("service") ?? "").trim(),
          newPatient: form.get("newPatient") === "no" ? "no" : "yes",
          insurance: String(form.get("insurance") ?? "").trim(),
          message: String(form.get("message") ?? "").trim(),
          company: String(form.get("company") ?? ""),
          startedAt,
        }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setStatus("idle");
      if (response.status === 429) {
        setServerError(bookForm.errorRate);
      } else if (body?.error === "too_fast") {
        setServerError(bookForm.errorTooFast);
      } else {
        setServerError(bookForm.errorGeneric);
      }
    } catch {
      setStatus("idle");
      setServerError(bookForm.errorGeneric);
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-lg bg-white p-6 md:rounded-xl md:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M4.5 12.5l4.6 4.6L19.5 6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="font-display mt-5 text-2xl font-bold tracking-tight md:text-3xl">
          {confirmHeading}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70 md:text-base">
          {confirmText}
        </p>
        <a
          href={`tel:${phoneTel}`}
          className="font-display mt-6 inline-flex min-h-11 items-center text-xl font-bold md:text-2xl"
        >
          {phoneDisplay}
        </a>
      </div>
    );
  }

  const inputClass = (key: string) =>
    `mt-1.5 w-full rounded-lg border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-cobalt ${
      errors[key] ? "border-navy" : "border-ink/25"
    }`;

  const errorText = (key: string) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-xs font-semibold">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg bg-white p-5 md:rounded-xl md:p-8"
      aria-describedby="form-note"
    >
      <div ref={liveRef} tabIndex={-1} aria-live="assertive" className="outline-none">
        {(Object.keys(errors).length > 0 || serverError) && (
          <p className="mb-4 rounded-lg bg-mist px-4 py-3 text-sm font-semibold">
            {serverError ?? "Please check the highlighted fields below."}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">
            {f.name.label}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={f.name.placeholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass("name")}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            {f.phone.label}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder={f.phone.placeholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass("phone")}
          />
          {errorText("phone")}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            {f.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={f.email.placeholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass("email")}
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor="preferred" className="text-sm font-semibold">
            {f.preferred.label}
          </label>
          <input
            id="preferred"
            name="preferred"
            type="text"
            required
            placeholder={f.preferred.placeholder}
            aria-invalid={Boolean(errors.preferred)}
            aria-describedby={errors.preferred ? "preferred-error" : undefined}
            className={inputClass("preferred")}
          />
          {errorText("preferred")}
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-semibold">
            {f.service.label}
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass("service")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value={bookForm.notSure}>{bookForm.notSure}</option>
          </select>
          {errorText("service")}
        </div>

        <fieldset>
          <legend className="text-sm font-semibold">{f.newPatient.label}</legend>
          <div className="mt-1.5 grid grid-cols-1 gap-2">
            <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-ink/25 px-4 py-2.5 text-sm has-[:checked]:border-cobalt">
              <input type="radio" name="newPatient" value="yes" defaultChecked className="accent-cobalt" />
              {f.newPatient.yes}
            </label>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-ink/25 px-4 py-2.5 text-sm has-[:checked]:border-cobalt">
              <input type="radio" name="newPatient" value="no" className="accent-cobalt" />
              {f.newPatient.no}
            </label>
          </div>
        </fieldset>

        <div className="md:col-span-2">
          <label htmlFor="insurance" className="text-sm font-semibold">
            {f.insurance.label}
          </label>
          <input
            id="insurance"
            name="insurance"
            type="text"
            placeholder={f.insurance.placeholder}
            className={inputClass("insurance")}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold">
            {f.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={f.message.placeholder}
            className={inputClass("message")}
          />
        </div>
      </div>

      <div className="absolute left-[-9999px] top-auto" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cobalt px-8 py-4 text-base font-bold text-white transition-colors hover:bg-cobalt-deep disabled:opacity-60 motion-safe:hover:scale-[1.02] motion-safe:transition-[transform,background-color] md:w-auto"
      >
        {status === "submitting" ? bookForm.submitting : bookForm.submit}
      </button>

      <p id="form-note" className="mt-4 text-xs leading-relaxed text-ink/65">
        {privacyNote}
      </p>
    </form>
  );
}
