// ═══════════════════════════════════════════════════════════════════
// LEGALCRAFT AI — eCourts India API Integration
// Base URL: https://webapi.ecourtsindia.com
// Auth: Bearer Token (set ECOURTS_API_KEY in Vercel env)
// ═══════════════════════════════════════════════════════════════════

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ECOURTS_KEY = process.env.ECOURTS_API_KEY;
  const BASE_URL    = 'https://webapi.ecourtsindia.com';

  if (!ECOURTS_KEY) {
    return res.status(500).json({ error: 'eCourts API key not configured. Add ECOURTS_API_KEY in Vercel environment variables.' });
  }

  try {
    const { action, cnr, caseType, caseNumber, year, courtCode, state, district } = req.body;

    // Common headers for all eCourts requests
    const headers = {
      'Authorization': `Bearer ${ECOURTS_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    let data = null;
    let endpoint = '';

    // ── ACTION: Get case by CNR number ─────────────────────────────
    if (action === 'case_by_cnr') {
      if (!cnr) return res.status(400).json({ error: 'CNR number required' });
      // CNR format: DLHC010001232024 (State+Court+CaseNo+Year)
      const cleanCNR = cnr.replace(/\s+/g, '').toUpperCase();
      endpoint = `${BASE_URL}/api/partner/case/${cleanCNR}`;

      const r = await fetch(endpoint, { headers });
      if (!r.ok) {
        const e = await r.text();
        // Try to give helpful error
        if (r.status === 404) return res.status(404).json({ error: `Case not found for CNR: ${cleanCNR}. Please verify the CNR number.` });
        if (r.status === 401) return res.status(401).json({ error: 'API key invalid or expired. Please check ECOURTS_API_KEY.' });
        return res.status(r.status).json({ error: `eCourts API error: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── ACTION: Search case by number ──────────────────────────────
    else if (action === 'search_case') {
      if (!caseType || !caseNumber || !year) {
        return res.status(400).json({ error: 'caseType, caseNumber, and year are required' });
      }
      endpoint = `${BASE_URL}/api/partner/case/search`;
      const r = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ caseType, caseNumber, year, courtCode, state, district })
      });
      if (!r.ok) {
        const e = await r.text();
        return res.status(r.status).json({ error: `Search failed: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── ACTION: Get hearing history ────────────────────────────────
    else if (action === 'hearings') {
      if (!cnr) return res.status(400).json({ error: 'CNR number required' });
      const cleanCNR = cnr.replace(/\s+/g, '').toUpperCase();
      endpoint = `${BASE_URL}/api/partner/case/${cleanCNR}/hearings`;
      const r = await fetch(endpoint, { headers });
      if (!r.ok) {
        const e = await r.text();
        return res.status(r.status).json({ error: `Failed to fetch hearings: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── ACTION: Get orders/judgments ───────────────────────────────
    else if (action === 'orders') {
      if (!cnr) return res.status(400).json({ error: 'CNR number required' });
      const cleanCNR = cnr.replace(/\s+/g, '').toUpperCase();
      endpoint = `${BASE_URL}/api/partner/case/${cleanCNR}/orders`;
      const r = await fetch(endpoint, { headers });
      if (!r.ok) {
        const e = await r.text();
        return res.status(r.status).json({ error: `Failed to fetch orders: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── ACTION: Get court list (districts/states) ──────────────────
    else if (action === 'courts') {
      endpoint = `${BASE_URL}/api/partner/courts`;
      const params = new URLSearchParams();
      if (state) params.set('state', state);
      if (district) params.set('district', district);
      const r = await fetch(`${endpoint}?${params}`, { headers });
      if (!r.ok) {
        const e = await r.text();
        return res.status(r.status).json({ error: `Failed to fetch courts: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── ACTION: Get cause list (upcoming hearings) ─────────────────
    else if (action === 'cause_list') {
      endpoint = `${BASE_URL}/api/partner/causelist`;
      const r = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ courtCode, date: req.body.date || new Date().toISOString().split('T')[0] })
      });
      if (!r.ok) {
        const e = await r.text();
        return res.status(r.status).json({ error: `Failed to fetch cause list: ${e.slice(0, 200)}` });
      }
      data = await r.json();
    }

    // ── Unknown action ─────────────────────────────────────────────
    else {
      return res.status(400).json({
        error: 'Unknown action',
        valid_actions: ['case_by_cnr', 'search_case', 'hearings', 'orders', 'courts', 'cause_list']
      });
    }

    return res.status(200).json({ success: true, action, data });

  } catch (err) {
    console.error('eCourts API error:', err.message);
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
