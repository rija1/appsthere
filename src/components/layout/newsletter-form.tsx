"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({
  placeholder,
  buttonLabel,
  successMessage,
  errorMessage,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-brand">{successMessage}</p>;
  }

  return (
    <form onSubmit={subscribe} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="email"
      />
      <Button type="submit" variant="secondary" disabled={status === "loading"}>
        {buttonLabel}
      </Button>
      {status === "error" && (
        <p role="alert" className="sr-only">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
