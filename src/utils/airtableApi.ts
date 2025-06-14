
/**
 * Fetches hustler data from Make.com webhook, which in turn fetches Airtable data.
 *
 * IMPORTANT:
 * - Set your Make.com webhook URL below.
 * - Make.com scenarios should collect and format Airtable data into the same array of objects as before.
 * - No API secret should be stored in this frontend code: Make.com secures your Airtable key.
 */

const MAKE_WEBHOOK_URL = "YOUR_MAKE_WEBHOOK_URL"; // <-- Replace with your actual Make.com webhook URL

export async function fetchAirtableHustlers() {
  if (MAKE_WEBHOOK_URL.startsWith("YOUR_MAKE_WEBHOOK_URL")) {
    throw new Error("Make.com webhook URL is not set. Please set it in src/utils/airtableApi.ts");
  }

  const resp = await fetch(MAKE_WEBHOOK_URL);

  if (!resp.ok) {
    throw new Error("Failed to fetch hustlers from Make.com webhook.");
  }

  const data = await resp.json();

  // Map data from Make.com to the Hustler shape (must match your frontend's needs)
  // NOTE: Adjust keys as needed to match your Make.com scenario output!
  const hustlers = data.records
    ? data.records.map((rec: any) => ({
        id: rec.id,
        name: rec.name || "",
        location: rec.location || "",
        category: rec.category || "",
        price: Number(rec.price || 0),
        summary: rec.summary || "",
        whatsapp: rec.whatsapp || "",
        photo: rec.photo || "",
        verified: !!rec.verified,
        featured: !!rec.featured,
        isNew: !!rec.isNew,
        needsReview: !!rec.needsReview,
        referredBy: rec.referredBy || "",
        referralCode: rec.referralCode || "",
      }))
    : []; // fallback

  return hustlers;
}
