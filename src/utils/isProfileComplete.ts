import { Pro } from "@/components/directory/ProCard";

export function isProfileComplete(p: Pro & { [key: string]: any }) {
  return !!p.summary && !!p.whatsapp && !!p.photo;
}