import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface EnquiryPayload {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service?: string;
  message: string;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c] as string));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY not configured');

    const body = (await req.json()) as EnquiryPayload;
    const { name, company, phone, email, service, message } = body;

    if (!name || !phone || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Field too long' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const FROM = 'Assetls International <onboarding@resend.dev>';
    const TO_ADMIN = 'contact@assetlsinternational.com';

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#0F172A;color:#fff;border-radius:12px">
        <h2 style="color:#C7F000;margin:0 0 16px">New Enquiry Received</h2>
        <p style="color:#cbd5e1">A new enquiry has been submitted via the Assetls International website.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;color:#e2e8f0">
          <tr><td style="padding:8px;border-bottom:1px solid #1e293b"><b>Name</b></td><td style="padding:8px;border-bottom:1px solid #1e293b">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #1e293b"><b>Company</b></td><td style="padding:8px;border-bottom:1px solid #1e293b">${escapeHtml(company || '-')}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #1e293b"><b>Email</b></td><td style="padding:8px;border-bottom:1px solid #1e293b">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #1e293b"><b>Phone</b></td><td style="padding:8px;border-bottom:1px solid #1e293b">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #1e293b"><b>Service</b></td><td style="padding:8px;border-bottom:1px solid #1e293b">${escapeHtml(service || '-')}</td></tr>
        </table>
        <h3 style="color:#C7F000;margin-top:24px">Message</h3>
        <p style="background:#1e293b;padding:16px;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>`;

    const userHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px;background:#ffffff;color:#0F172A">
        <div style="background:#0F172A;padding:24px;border-radius:12px;text-align:center">
          <h1 style="color:#C7F000;margin:0">Thank You, ${escapeHtml(name)}!</h1>
        </div>
        <div style="padding:24px 8px">
          <p>Thank you for reaching out to <b>Assetls International</b>. We've received your enquiry and our team will get back to you within 24 hours.</p>
          <p><b>Here's a summary of what you sent:</b></p>
          <ul>
            <li><b>Service:</b> ${escapeHtml(service || '-')}</li>
            <li><b>Message:</b> ${escapeHtml(message)}</li>
          </ul>
          <p>If your matter is urgent, you can also reach us directly at <a href="tel:+919289975316">+91 92899 75316</a>.</p>
          <p style="margin-top:32px">Warm regards,<br/><b>Team Assetls International</b><br/><span style="color:#64748b">Leading Real Estate, BPO & IT Solutions in India — Functioning Globally</span></p>
        </div>
      </div>`;

    const send = (to: string, subject: string, html: string) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({ from: FROM, to: [to], subject, html, reply_to: email }),
      });

    const [adminRes, userRes] = await Promise.all([
      send(TO_ADMIN, `New Enquiry from ${name}${service ? ' — ' + service : ''}`, adminHtml),
      send(email, 'Thank you for contacting Assetls International', userHtml),
    ]);

    if (!adminRes.ok) {
      const t = await adminRes.text();
      console.error('Admin email failed:', adminRes.status, t);
    }
    if (!userRes.ok) {
      const t = await userRes.text();
      console.error('User email failed:', userRes.status, t);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-enquiry error:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
