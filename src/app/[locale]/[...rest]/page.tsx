import { notFound } from "next/navigation";

/** Renders the localized not-found page for any unmatched route. */
export default function CatchAllNotFound(): never {
  notFound();
}
