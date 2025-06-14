
/**
 * Fetches hustler data from Airtable using Airtable API.
 * IMPORTANT: Replace AIRTABLE_API_KEY and AIRTABLE_BASE_ID with your publishable API key and base ID.
 * For improved security, integrate Supabase or use serverless functions for secret management.
 */

// Example usage, see useAirtableHustlers.ts

const AIRTABLE_API_KEY = "YOUR_AIRTABLE_API_KEY"; // <-- Replace with publishable key or env/secret handling
const AIRTABLE_BASE_ID = "YOUR_AIRTABLE_BASE_ID"; // <-- Replace with your base ID
const AIRTABLE_TABLE = "tblvPshNwP8VjhYwr"; // Example table ID, adjust as needed.

export async function fetchAirtableHustlers() {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`;
  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  if (!resp.ok) {
    throw new Error("Failed to fetch from Airtable");
  }

  const data = await resp.json();

  // Map Airtable records to the Hustler shape
  const hustlers = data.records.map((rec: any) => ({
    id: rec.id,
    name: rec.fields.Name || "",
    location: rec.fields.Location || "",
    category: rec.fields.Category || "",
    price: Number(rec.fields.Price || 0),
    summary: rec.fields.Summary || "",
    whatsapp: rec.fields.Whatsapp || "",
    photo: rec.fields.Photo && rec.fields.Photo[0] ? rec.fields.Photo[0].url : "",
    verified: !!rec.fields.Verified,
    featured: !!rec.fields.Featured,
    isNew: !!rec.fields['New'],
    needsReview: !!rec.fields['NeedsReview'],
    referredBy: rec.fields['ReferredBy'] || "",
    referralCode: rec.fields['ReferralCode'] || "",
  }));

  return hustlers;
}
