"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LicenseRecoveryFormProps {
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function LicenseRecoveryForm({
  placeholder,
  buttonLabel,
  successMessage,
  errorMessage,
}: LicenseRecoveryFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function recover(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/license/recover", {
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
    <form onSubmit={recover} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="email"
      />
      <Button type="submit" disabled={status === "loading"} className="shrink-0">
        {buttonLabel}
      </Button>
      {status === "error" && (
        <p role="alert" className="pt-1 text-sm text-[oklch(0.58_0.18_25)]">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
