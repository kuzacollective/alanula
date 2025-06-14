
import { Hustler } from "@/components/directory/HustlerCard";

export function isProfileComplete(h: Hustler & { [key: string]: any }) {
  return !!h.summary && !!h.whatsapp && !!h.photo;
}
