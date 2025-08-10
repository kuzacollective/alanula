/**
 * Fetches pro data from Make.com webhook, which in turn fetches Airtable data.
 *
 * IMPORTANT:
 * - Set your Make.com webhook URL below.
 * - Make.com scenarios should collect and format Airtable data into the same array of objects as before.
 * - No API secret should be stored in this frontend code: Make.com secures your Airtable key.
 */

const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL || ""; // Use environment variable

export async function fetchAirtablePros() {
  // If no webhook URL is configured, return empty array (will fallback to mock data)
  if (!MAKE_WEBHOOK_URL || MAKE_WEBHOOK_URL.trim() === "") {
    console.warn("Make.com webhook URL is not configured. Using mock data instead.");
    return [];
  }

  try {
    const resp = await fetch(MAKE_WEBHOOK_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const data = await resp.json();

    // Map data from Make.com to the Pro shape (must match your frontend's needs)
    // NOTE: Adjust keys as needed to match your Make.com scenario output!
    const pros = Array.isArray(data) 
      ? data.map((rec: any) => ({
          id: rec.id || rec.recordId || Math.random().toString(36),
          name: rec.name || rec.Name || "",
          location: rec.location || rec.Location || "",
          category: rec.category || rec.Category || "",
          price: Number(rec.price || rec.Price || 0),
          summary: rec.summary || rec.Summary || "",
          whatsapp: rec.whatsapp || rec.WhatsApp || rec.phone || "",
          photo: rec.photo || rec.Photo || rec.image || "",
          verified: Boolean(rec.verified || rec.Verified || false),
          featured: Boolean(rec.featured || rec.Featured || false),
          isNew: Boolean(rec.isNew || rec.IsNew || false),
          needsReview: Boolean(rec.needsReview || rec.NeedsReview || false),
          referredBy: rec.referredBy || rec.ReferredBy || "",
          referralCode: rec.referralCode || rec.ReferralCode || "",
        }))
      : data.records 
        ? data.records.map((rec: any) => ({
            id: rec.id || rec.fields?.id || Math.random().toString(36),
            name: rec.fields?.name || rec.fields?.Name || "",
            location: rec.fields?.location || rec.fields?.Location || "",
            category: rec.fields?.category || rec.fields?.Category || "",
            price: Number(rec.fields?.price || rec.fields?.Price || 0),
            summary: rec.fields?.summary || rec.fields?.Summary || "",
            whatsapp: rec.fields?.whatsapp || rec.fields?.WhatsApp || rec.fields?.phone || "",
            photo: rec.fields?.photo || rec.fields?.Photo || rec.fields?.image || "",
            verified: Boolean(rec.fields?.verified || rec.fields?.Verified || false),
            featured: Boolean(rec.fields?.featured || rec.fields?.Featured || false),
            isNew: Boolean(rec.fields?.isNew || rec.fields?.IsNew || false),
            needsReview: Boolean(rec.fields?.needsReview || rec.fields?.NeedsReview || false),
            referredBy: rec.fields?.referredBy || rec.fields?.ReferredBy || "",
            referralCode: rec.fields?.referralCode || rec.fields?.ReferralCode || "",
          }))
        : [];

    return pros;
  } catch (error) {
    console.error("Error fetching from Make.com webhook:", error);
    throw new Error(`Failed to fetch pros: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function updateAirtablePro(proId: string, updatedFields: Partial<any>) {
  const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL || "";

  if (!MAKE_WEBHOOK_URL || MAKE_WEBHOOK_URL.trim() === "") {
    throw new Error("Make.com webhook URL is not configured");
  }

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'update',
        proId,
        updatedFields
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error updating pro:", error);
    throw new Error(`Failed to update pro: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
export async function fetchAirtableProById(proId: string) {
  try {
    // For now, fetch all pros and filter by ID
    // In the future, you could modify your Make.com webhook to support fetching by ID
    const allPros = await fetchAirtablePros();
    const pro = allPros.find(p => p.id === proId);
    
    if (!pro) {
      return null;
    }
    
    return pro;
  } catch (error) {
    console.error("Error fetching pro by ID:", error);
    throw error;
  }
}