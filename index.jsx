import { useState, useEffect } from "react";

// ─── CONFIG PAYDUNYA ──────────────────────────────────────────────────────────
const PAYDUNYA_MASTER_KEY = "mozINBFM-DlSk-Ud6A-sOZu-oTyxNQr8hd88";
const PAYDUNYA_PUBLIC_KEY = "live_public_3UXQP2O3IuIlMaVCXylTS87OBTJ";
const PAYDUNYA_PRIVATE_KEY = "live_private_b7SqfKpLosWQKb0uDXHaoPOM29o";
const PAYDUNYA_TOKEN = "UJ4amDbPnTZ8ePM21TG1";
const PRIX_FCFA = 3280; // ~5€

const VALID_CODES = [
  "JHSP-ZFNG-U716-5Z8E-I8KU",
  "WAOW-OAAE-PFVF-X5IK-NVCK",
  "EUFU-SZHM-R6LY-RSVB-Y7LW",
  "7K7B-H9BD-R4FM-TRAX-WWQR",
  "VQPJ-STDK-NGV9-WYIH-OYSX",
];

const PLATFORMS = ["TikTok", "Instagram Reels", "Facebook"];
const TONES = ["Émotionnel", "Humoristique", "Urgent", "Inspirant", "Éducatif"];

function parseScript(text) {
  const s = {};
  const p = {
    hook:    /HOOK\s*:\s*([\s\S]*?)(?=B-ROLL|VOIX OFF|CTA|PROMPT|$)/i,
    broll:   /B-ROLL\s*:\s*([\s\S]*?)(?=VOIX OFF|CTA|PROMPT|$)/i,
    voixoff: /VOIX OFF\s*:\s*([\s\S]*?)(?=CTA|PROMPT|$)/i,
    cta:     /CTA\s*:\s*([\s\S]*?)(?=PROMPT|$)/i,
    prompt:  /PROMPT[^:]*:\s*([\s\S]*?)$/i,
  };
  for (const [k, re] of Object.entries(p)) {
    const m = text.match(re);
    if (m) s[k] = m[1].trim().replace(/^\*+|\*+$/g, "").trim();
  }
  if (!Object.keys(s).length) s.raw = text.trim();
  return s;
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0A0A0F; color: #F0EEF8; font-family: 'Inter', sans-serif; min-height: 100vh; }

  .nav { display:flex; justify-content:space-between; align-items:center; padding:20px 40px; border-bottom:1px solid #1E1C2E; }
  .logo { font-family:'Syne',sans-serif; font-size:18px; font-weight:800; color:#F0EEF8; letter-spacing:-0.02em; }
  .logo span { color:#8B5CF6; }
  .nav-btn { background:none; border:1px solid #1E1C2E; border-radius:8px; padding:8px 18px; color:#7B7893; font-size:13px; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; }
  .nav-btn:hover { border-color:#8B5CF6; color:#C4B5FD; }

  .hero { display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 24px 48px; }
  .hero-badge { display:inline-flex; align-items:center; gap:8px; font-family:'Syne',sans-serif; font-size:11px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:#8B5CF6; border:1px solid #8B5CF630; padding:6px 14px; border-radius:20px; margin-bottom:28px; background:#8B5CF610; }
  .pulse { width:7px; height:7px; border-radius:50%; background:#8B5CF6; animation:pulse 2s ease-in-out infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }
  .hero h1 { font-family:'Syne',sans-serif; font-size:clamp(36px,6vw,70px); font-weight:800; line-height:1.0; letter-spacing:-.03em; margin-bottom:22px; max-width:800px; }
  .hero h1 .grad { background:linear-gradient(135deg,#8B5CF6,#EC4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .hero-sub { font-size:17px; color:#7B7893; line-height:1.65; max-width:500px; margin-bottom:44px; }

  .pricing-card { background:#12111A; border:1px solid #2A2840; border-radius:24px; padding:40px; max-width:420px; width:100%; margin-bottom:36px; position:relative; overflow:hidden; }
  .pricing-card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,#8B5CF6,#EC4899); }
  .price-row { display:flex; align-items:flex-end; gap:4px; margin-bottom:6px; justify-content:center; }
  .price-amount { font-family:'Syne',sans-serif; font-size:56px; font-weight:800; color:#F0EEF8; line-height:1; letter-spacing:-.03em; }
  .price-currency { font-family:'Syne',sans-serif; font-size:24px; font-weight:700; color:#8B5CF6; margin-bottom:10px; }
  .price-period { font-size:14px; color:#5C5A72; margin-bottom:28px; text-align:center; }
  .feat-list { list-style:none; margin-bottom:28px; display:flex; flex-direction:column; gap:12px; text-align:left; }
  .feat-list li { display:flex; align-items:center; gap:10px; font-size:14px; color:#D4D0E8; }
  .check { width:20px; height:20px; border-radius:50%; background:#8B5CF620; border:1px solid #8B5CF640; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:11px; color:#A78BFA; }

  .pay-btn { width:100%; padding:18px; background:linear-gradient(135deg,#8B5CF6,#7C3AED); border:none; border-radius:14px; font-family:'Syne',sans-serif; font-size:16px; font-weight:700; color:white; cursor:pointer; transition:opacity .2s,transform .1s; display:flex; align-items:center; justify-content:center; gap:10px; }
  .pay-btn:hover:not(:disabled) { opacity:.9; transform:translateY(-1px); }
  .pay-btn:disabled { opacity:.5; cursor:not-allowed; }
  .pay-note { display:flex; align-items:center; justify-content:center; gap:6px; margin-top:12px; font-size:12px; color:#3A3852; }

  .pay-modal-overlay { position:fixed; inset:0; background:#00000090; display:flex; align-items:center; justify-content:center; z-index:1000; padding:24px; }
  .pay-modal { background:#12111A; border:1px solid #2A2840; border-radius:20px; padding:36px; max-width:400px; width:100%; position:relative; }
  .pay-modal-title { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; color:#F0EEF8; margin-bottom:6px; }
  .pay-modal-sub { font-size:13px; color:#7B7893; margin-bottom:24px; line-height:1.5; }
  .pay-form-group { display:flex; flex-direction:column; gap:8px; margin-bottom:16px; }
  .pay-label { font-family:'Syne',sans-serif; font-size:11px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#5C5A72; }
  .pay-input { background:#0A0A0F; border:1px solid #1E1C2E; border-radius:10px; padding:12px 16px; font-size:14px; color:#F0EEF8; font-family:'Inter',sans-serif; outline:none; transition:border-color .2s; width:100%; }
  .pay-input:focus { border-color:#8B5CF6; }
  .pay-input::placeholder { color:#3A3852; }
  .pay-methods { display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; }
  .pay-method { flex:1; padding:10px; border:1px solid #1E1C2E; border-radius:10px; background:#0A0A0F; color:#7B7893; font-size:13px; font-family:'Inter',sans-serif; cursor:pointer; text-align:center; transition:all .15s; min-width:80px; }
  .pay-method.active { border-color:#8B5CF6; color:#C4B5FD; background:#8B5CF615; }
  .pay-confirm-btn { width:100%; padding:15px; background:linear-gradient(135deg,#8B5CF6,#7C3AED); border:none; border-radius:12px; font-family:'Syne',sans-serif; font-size:15px; font-weight:700; color:white; cursor:pointer; margin-top:4px; }
  .pay-confirm-btn:disabled { opacity:.5; cursor:not-allowed; }
  .pay-close { position:absolute; top:16px; right:20px; background:none; border:none; color:#5C5A72; font-size:20px; cursor:pointer; }
  .pay-error { background:#1A0A0A; border:1px solid #3A1515; border-radius:8px; padding:10px 14px; color:#F87171; font-size:13px; margin-bottom:14px; }
  .pay-success { text-align:center; padding:20px 0; }
  .pay-success-icon { font-size:48px; margin-bottom:16px; }
  .pay-success-title { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; color:#4ADE80; margin-bottom:8px; }
  .pay-success-sub { font-size:14px; color:#7B7893; line-height:1.6; }

  .proofs { display:flex; align-items:center; gap:18px; flex-wrap:wrap; justify-content:center; }
  .proof { font-size:13px; color:#5C5A72; display:flex; align-items:center; gap:6px; }

  .feats { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:860px; width:100%; margin:0 auto 60px; padding:0 24px; }
  .feat-card { background:#12111A; border:1px solid #1E1C2E; border-radius:16px; padding:24px; }
  .feat-icon { font-size:24px; margin-bottom:12px; }
  .feat-title { font-family:'Syne',sans-serif; font-size:15px; font-weight:700; color:#F0EEF8; margin-bottom:8px; }
  .feat-desc { font-size:13px; color:#7B7893; line-height:1.6; }

  .gate { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; }
  .gate-card { background:#12111A; border:1px solid #1E1C2E; border-radius:20px; padding:48px 40px; max-width:440px; width:100%; text-align:center; }
  .gate-icon { font-size:36px; margin-bottom:16px; }
  .gate-title { font-family:'Syne',sans-serif; font-size:22px; font-weight:800; color:#F0EEF8; margin-bottom:10px; }
  .gate-sub { font-size:14px; color:#7B7893; line-height:1.6; margin-bottom:24px; }
  .gate-error { background:#1A0A0A; border:1px solid #3A1515; border-radius:10px; padding:12px 16px; color:#F87171; font-size:13px; margin-bottom:16px; }
  .gate-input-row { display:flex; gap:10px; margin-bottom:20px; }
  .gate-input { flex:1; background:#0A0A0F; border:1px solid #1E1C2E; border-radius:10px; padding:13px 16px; font-size:14px; color:#F0EEF8; font-family:'Inter',sans-serif; outline:none; transition:border-color .2s; letter-spacing:.06em; text-transform:uppercase; }
  .gate-input:focus { border-color:#8B5CF6; }
  .gate-input.err { border-color:#EF4444; }
  .gate-submit { padding:13px 20px; background:linear-gradient(135deg,#8B5CF6,#7C3AED); border:none; border-radius:10px; font-family:'Syne',sans-serif; font-size:14px; font-weight:700; color:white; cursor:pointer; white-space:nowrap; }
  .gate-back { background:none; border:none; color:#5C5A72; font-size:13px; font-family:'Inter',sans-serif; cursor:pointer; }
  .gate-back:hover { color:#C4B5FD; }

  .app { max-width:860px; margin:0 auto; padding:40px 24px 80px; }
  .app-nav { display:flex; justify-content:space-between; align-items:center; margin-bottom:48px; }
  .app-logo { font-family:'Syne',sans-serif; font-size:18px; font-weight:800; color:#F0EEF8; }
  .app-logo span { color:#8B5CF6; }
  .logout-btn { background:none; border:1px solid #1E1C2E; border-radius:8px; padding:7px 16px; color:#5C5A72; font-size:12px; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; }
  .logout-btn:hover { border-color:#EF4444; color:#F87171; }
  .header { margin-bottom:40px; }
  .badge { display:inline-block; font-family:'Syne',sans-serif; font-size:11px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:#8B5CF6; border:1px solid #8B5CF630; padding:5px 12px; border-radius:20px; margin-bottom:18px; background:#8B5CF610; }
  .header h1 { font-family:'Syne',sans-serif; font-size:clamp(30px,5vw,48px); font-weight:800; line-height:1.05; letter-spacing:-.02em; margin-bottom:12px; }
  .header h1 span { background:linear-gradient(135deg,#8B5CF6,#EC4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .subtitle { font-size:15px; color:#7B7893; line-height:1.6; max-width:480px; }

  .form-card { background:#12111A; border:1px solid #1E1C2E; border-radius:16px; padding:32px; margin-bottom:28px; }
  .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; }
  .form-group { display:flex; flex-direction:column; gap:8px; }
  .form-group.full { grid-column:1/-1; }
  label { font-family:'Syne',sans-serif; font-size:11px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#5C5A72; }
  input,select,textarea { background:#0A0A0F; border:1px solid #1E1C2E; border-radius:10px; padding:12px 16px; font-size:14px; color:#F0EEF8; font-family:'Inter',sans-serif; transition:border-color .2s; outline:none; width:100%; }
  input:focus,select:focus,textarea:focus { border-color:#8B5CF6; }
  input::placeholder,textarea::placeholder { color:#3A3852; }
  select option { background:#12111A; }
  textarea { resize:vertical; min-height:80px; }
  .toggle-group { display:flex; gap:8px; flex-wrap:wrap; }
  .toggle { padding:8px 16px; border-radius:8px; border:1px solid #1E1C2E; background:#0A0A0F; color:#7B7893; font-size:13px; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; }
  .toggle.active { background:#8B5CF620; border-color:#8B5CF6; color:#C4B5FD; }
  .generate-btn { width:100%; padding:16px; background:linear-gradient(135deg,#8B5CF6,#7C3AED); border:none; border-radius:12px; font-family:'Syne',sans-serif; font-size:15px; font-weight:700; color:white; cursor:pointer; transition:opacity .2s,transform .1s; margin-top:8px; }
  .generate-btn:hover:not(:disabled) { opacity:.9; transform:translateY(-1px); }
  .generate-btn:disabled { opacity:.45; cursor:not-allowed; }

  .loading { display:flex; align-items:center; gap:12px; justify-content:center; padding:48px; color:#7B7893; font-size:14px; }
  .spinner { width:20px; height:20px; border:2px solid #1E1C2E; border-top-color:#8B5CF6; border-radius:50%; animation:spin .8s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg); } }
  .app-error { background:#1A0A0A; border:1px solid #3A1515; border-radius:12px; padding:14px 18px; color:#F87171; font-size:13px; }

  .results { display:flex; flex-direction:column; gap:16px; }
  .results-header { display:flex; justify-content:space-between; align-items:center; }
  .results-title { font-family:'Syne',sans-serif; font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#5C5A72; }
  .new-btn { background:none; border:1px solid #1E1C2E; border-radius:8px; padding:6px 14px; color:#7B7893; font-size:12px; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; }
  .new-btn:hover { border-color:#8B5CF6; color:#C4B5FD; }

  .script-card { background:#12111A; border:1px solid #1E1C2E; border-radius:16px; overflow:hidden; }
  .tab-bar { display:flex; border-bottom:1px solid #1E1C2E; padding:0 24px; gap:4px; }
  .tab { padding:14px 16px; font-size:13px; font-family:'Syne',sans-serif; font-weight:600; color:#5C5A72; cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-1px; transition:all .15s; letter-spacing:.04em; background:none; border-left:none; border-right:none; border-top:none; }
  .tab.active { color:#C4B5FD; border-bottom-color:#8B5CF6; }
  .script-body { padding:28px; }
  .var-label { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-family:'Syne',sans-serif; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#8B5CF6; background:#8B5CF615; border-radius:6px; padding:4px 10px; margin-bottom:20px; }
  .dot { width:6px; height:6px; border-radius:50%; background:currentColor; }
  .s-section { margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #1A1828; }
  .s-section:last-of-type { border-bottom:none; margin-bottom:0; padding-bottom:0; }
  .s-label { font-size:10px; font-family:'Syne',sans-serif; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#3A3852; margin-bottom:8px; }
  .s-hook { font-size:16px; font-weight:500; color:#F0EEF8; line-height:1.55; }
  .s-text { font-size:14px; color:#D4D0E8; line-height:1.7; }
  .s-cta { font-size:14px; font-weight:500; color:#A78BFA; line-height:1.5; }
  .runway-box { background:#0D0C18; border:1px solid #1E1C2E; border-radius:10px; padding:14px; margin-top:8px; }
  .runway-label { font-size:10px; font-family:'Syne',sans-serif; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#4ADE8060; margin-bottom:6px; }
  .runway-text { font-size:12px; color:#4ADE80; line-height:1.65; }
  .copy-row { display:flex; justify-content:flex-end; margin-top:18px; }
  .copy-btn { background:none; border:1px solid #1E1C2E; border-radius:8px; padding:7px 16px; color:#5C5A72; font-size:12px; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; }
  .copy-btn:hover { border-color:#8B5CF6; color:#C4B5FD; }
  .copy-btn.done { color:#4ADE80; border-color:#4ADE8040; }

  @media (max-width:640px) {
    .feats { grid-template-columns:1fr; }
    .form-grid { grid-template-columns:1fr; }
    .nav { padding:16px 20px; }
    .gate-card { padding:36px 24px; }
    .gate-input-row { flex-direction:column; }
    .pay-modal { padding:28px 20px; }
  }
`;

// ─── PAYDUNYA PAYMENT MODAL ───────────────────────────────────────────────────
function PayModal({ onClose, onSuccess }) {
  const [step, setStep] = useState("form"); // form | loading | success
  const [method, setMethod] = useState("flooz");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const pay = async () => {
    if (!phone || !email || !name) { setErr("Remplis tous les champs."); return; }
    setErr(""); setStep("loading");

    try {
      const payload = {
        invoice: {
          items: {
            item_0: {
              name: "UGC Studio — Abonnement mensuel",
              quantity: 1,
              unit_price: PRIX_FCFA,
              total_price: PRIX_FCFA,
              description: "Accès illimité au générateur de scripts UGC",
            }
          },
          total_amount: PRIX_FCFA,
          description: "UGC Studio 5€/mois",
        },
        store: {
          name: "UGC Studio",
          tagline: "Générateur de scripts vidéo IA",
        },
        actions: {
          cancel_url: window.location.href,
          return_url: window.location.href,
          callback_url: window.location.href,
        },
        customer: {
          name,
          email,
          phone,
        },
        payment_method: method,
      };

      const res = await fetch("https://app.paydunya.com/api/v1/checkout-invoice/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "PAYDUNYA-MASTER-KEY": PAYDUNYA_MASTER_KEY,
          "PAYDUNYA-PUBLIC-KEY": PAYDUNYA_PUBLIC_KEY,
          "PAYDUNYA-PRIVATE-KEY": PAYDUNYA_PRIVATE_KEY,
          "PAYDUNYA-TOKEN": PAYDUNYA_TOKEN,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.response_code === "00" && data.hosted_invoice_url) {
        window.open(data.hosted_invoice_url, "_blank");
        setStep("success");
      } else {
        setErr(data.response_text || "Erreur de paiement. Réessaie.");
        setStep("form");
      }
    } catch (e) {
      setErr("Connexion impossible. Vérifie ta connexion internet.");
      setStep("form");
    }
  };

  return (
    <div className="pay-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pay-modal">
        <button className="pay-close" onClick={onClose}>×</button>

        {step === "success" ? (
          <div className="pay-success">
            <div className="pay-success-icon">✅</div>
            <div className="pay-success-title">Paiement initié !</div>
            <p className="pay-success-sub">
              Une page de paiement s'est ouverte. Complète le paiement là-bas.<br /><br />
              Après confirmation, tu recevras ton code d'accès par email. Entre-le sur la page suivante.
            </p>
            <button className="pay-confirm-btn" style={{marginTop:24}} onClick={() => { onClose(); onSuccess(); }}>
              J'ai mon code → Accéder
            </button>
          </div>
        ) : (
          <>
            <div className="pay-modal-title">Abonnement UGC Studio</div>
            <div className="pay-modal-sub">3 280 FCFA/mois (~5€) · Sans engagement · Mobile Money ou carte</div>

            {err && <div className="pay-error">{err}</div>}

            <div className="pay-form-group">
              <div className="pay-label">Méthode de paiement</div>
              <div className="pay-methods">
                {[
                  {id:"flooz", label:"Flooz (Togo)"},
                  {id:"tmoney", label:"T-Money"},
                  {id:"card", label:"Carte CB"},
                ].map(m => (
                  <button key={m.id} className={`pay-method${method===m.id?" active":""}`} onClick={() => setMethod(m.id)}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pay-form-group">
              <div className="pay-label">Nom complet</div>
              <input className="pay-input" value={name} onChange={e=>setName(e.target.value)} placeholder="Ton nom" />
            </div>
            <div className="pay-form-group">
              <div className="pay-label">Email</div>
              <input className="pay-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="ton@email.com" />
            </div>
            <div className="pay-form-group">
              <div className="pay-label">Numéro de téléphone</div>
              <input className="pay-input" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+228 90 00 00 00" />
            </div>

            <button className="pay-confirm-btn" onClick={pay} disabled={step==="loading"}>
              {step === "loading" ? "Connexion à PayDunya…" : `Payer ${PRIX_FCFA} FCFA →`}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── SCRIPT CARD ─────────────────────────────────────────────────────────────
function ScriptCard({ scripts }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const s = scripts[active];
  const copy = () => {
    const txt = s.raw || [
      s.hook    && `HOOK :\n${s.hook}`,
      s.broll   && `B-ROLL :\n${s.broll}`,
      s.voixoff && `VOIX OFF :\n${s.voixoff}`,
      s.cta     && `CTA :\n${s.cta}`,
      s.prompt  && `PROMPT :\n${s.prompt}`,
    ].filter(Boolean).join("\n\n");
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="script-card">
      {scripts.length > 1 && (
        <div className="tab-bar">
          {scripts.map((_,i) => <button key={i} className={`tab${active===i?" active":""}`} onClick={()=>setActive(i)}>Variante {i+1}</button>)}
        </div>
      )}
      <div className="script-body">
        <div className="var-label"><span className="dot"/>Script {active+1}/{scripts.length}</div>
        {s.raw ? <div className="s-text" style={{whiteSpace:"pre-wrap"}}>{s.raw}</div> : (
          <>
            {s.hook    && <div className="s-section"><div className="s-label">Hook</div><div className="s-hook">{s.hook}</div></div>}
            {s.broll   && <div className="s-section"><div className="s-label">B-Roll</div><div className="s-text">{s.broll}</div></div>}
            {s.voixoff && <div className="s-section"><div className="s-label">Voix Off</div><div className="s-text">{s.voixoff}</div></div>}
            {s.cta     && <div className="s-section"><div className="s-label">CTA</div><div className="s-cta">{s.cta}</div></div>}
            {s.prompt  && <div className="s-section"><div className="s-label">Prompt IA Vidéo</div><div className="runway-box"><div className="runway-label">Runway ML / Kling AI</div><div className="runway-text">{s.prompt}</div></div></div>}
          </>
        )}
        <div className="copy-row">
          <button className={`copy-btn${copied?" done":""}`} onClick={copy}>{copied?"✓ Copié":"Copier le script"}</button>
        </div>
      </div>
    </div>
  );
}

// ─── LANDING ─────────────────────────────────────────────────────────────────
function Landing({ onCode }) {
  const [showPay, setShowPay] = useState(false);
  return (
    <div>
      {showPay && <PayModal onClose={() => setShowPay(false)} onSuccess={() => { setShowPay(false); onCode(); }} />}
      <nav className="nav">
        <div className="logo">UGC<span>Studio</span></div>
        <button className="nav-btn" onClick={onCode}>J'ai un code →</button>
      </nav>
      <div className="hero">
        <div className="hero-badge"><span className="pulse"/>Propulsé par IA</div>
        <h1>Scripts UGC pro<br/>en <span className="grad">30 secondes</span></h1>
        <p className="hero-sub">Remplis le brief de ta marque, l'IA génère 2 scripts A/B complets — hook, B-roll, voix off, CTA et prompt Runway ML.</p>
        <div className="pricing-card">
          <div className="price-row">
            <div className="price-currency">€</div>
            <div className="price-amount">5</div>
          </div>
          <div className="price-period">par mois · sans engagement · résiliable à tout moment</div>
          <ul className="feat-list">
            <li><span className="check">✓</span>Scripts illimités (TikTok, Reels, Facebook)</li>
            <li><span className="check">✓</span>2 variantes A/B par génération</li>
            <li><span className="check">✓</span>Prompts Runway ML &amp; Kling AI inclus</li>
            <li><span className="check">✓</span>Voix off prête pour ElevenLabs</li>
            <li><span className="check">✓</span>Accès immédiat après paiement</li>
          </ul>
          <button className="pay-btn" onClick={() => setShowPay(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            S'abonner — 3 280 FCFA/mois
          </button>
          <div className="pay-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Paiement sécurisé PayDunya · Flooz · T-Money · Carte CB
          </div>
        </div>
        <div className="proofs">
          <div className="proof">📱 Mobile Money accepté</div>
          <div className="proof">⚡ Accès en 2 min</div>
          <div className="proof">🔒 Sans engagement</div>
        </div>
      </div>
      <div className="feats">
        <div className="feat-card"><div className="feat-icon">🎣</div><div className="feat-title">Hook percutant</div><div className="feat-desc">Les 3 premières secondes optimisées pour stopper le scroll.</div></div>
        <div className="feat-card"><div className="feat-icon">🎬</div><div className="feat-title">B-Roll + Voix off</div><div className="feat-desc">Plans à filmer et texte prêt pour ElevenLabs.</div></div>
        <div className="feat-card"><div className="feat-icon">🤖</div><div className="feat-title">Prompt IA vidéo</div><div className="feat-desc">Prompt cinématique prêt pour Runway ML ou Kling AI.</div></div>
      </div>
    </div>
  );
}

// ─── ACCESS GATE ─────────────────────────────────────────────────────────────
function AccessGate({ onUnlock, onBack }) {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const submit = () => {
    const v = code.trim().toUpperCase();
    if (VALID_CODES.includes(v)) {
      try { localStorage.setItem("ugc_code", v); } catch(e) {}
      onUnlock();
    } else {
      setErr("Code invalide. Vérifie l'email reçu après ton paiement.");
    }
  };
  return (
    <div className="gate">
      <div className="gate-card">
        <div className="gate-icon">🔑</div>
        <div className="gate-title">Entre ton code d'accès</div>
        <p className="gate-sub">Tu as reçu ton code par email après ton paiement PayDunya.</p>
        {err && <div className="gate-error">{err}</div>}
        <div className="gate-input-row">
          <input className={`gate-input${err?" err":""}`} value={code} onChange={e=>{setCode(e.target.value);setErr("");}} placeholder="XXXX-XXXX-XXXX" onKeyDown={e=>e.key==="Enter"&&submit()} />
          <button className="gate-submit" onClick={submit}>Accéder →</button>
        </div>
        <button className="gate-back" onClick={onBack}>← Retour à l'accueil</button>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
function UGCApp({ onLogout }) {
  const [form, setForm] = useState({ produit:"", secteur:"", audience:"", plateforme:"TikTok", ton:"Émotionnel", duration:"30", info:"" });
  const [loading, setLoading] = useState(false);
  const [scripts, setScripts] = useState(null);
  const [error, setError] = useState(null);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const tog = (k,v) => setForm(f=>({...f,[k]:v}));

  const generate = async () => {
    if (!form.produit) return;
    setLoading(true); setScripts(null); setError(null);
    const prompt = `Tu es un expert UGC creator et copywriter spécialisé en vidéo courte pour les réseaux sociaux.
Génère 2 scripts UGC variantes (A/B) pour :
- Produit/marque : ${form.produit}
- Secteur : ${form.secteur || "non précisé"}
- Audience cible : ${form.audience || "grand public"}
- Plateforme : ${form.plateforme}
- Ton : ${form.ton}
- Durée cible : ${form.duration} secondes
- Informations complémentaires : ${form.info || "aucune"}

Pour CHAQUE variante, structure exactement comme ceci (en français) :

--- VARIANTE 1 ---
HOOK :
[Accroche percutante, les 3 premières secondes]
B-ROLL :
[Description des plans vidéo à filmer, 3-5 plans]
VOIX OFF :
[Texte naturel et conversationnel]
CTA :
[Appel à l'action final, court et direct]
PROMPT RUNWAY/KLING :
[Prompt en anglais pour Runway ML ou Kling AI]

--- VARIANTE 2 ---
[même structure]`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-6", max_tokens:1000, messages:[{role:"user",content:prompt}] }),
      });
      const data = await res.json();
      const text = data.content?.map(b=>b.text||"").join("\n")||"";
      const parts = text.split(/---\s*VARIANTE\s*\d+\s*---/i).filter(p=>p.trim());
      setScripts(parts.length>=2 ? parts.slice(0,2).map(parseScript) : [parseScript(text)]);
    } catch(e) {
      setError("Erreur lors de la génération. Réessaie.");
    } finally { setLoading(false); }
  };

  return (
    <div className="app">
      <div className="app-nav">
        <div className="app-logo">UGC<span>Studio</span></div>
        <button className="logout-btn" onClick={onLogout}>Déconnexion</button>
      </div>
      <div className="header">
        <div className="badge">UGC Studio</div>
        <h1>Génère ton<br/><span>script vidéo</span></h1>
        <p className="subtitle">Remplis le brief, l'IA crée 2 scripts A/B avec hook, B-roll, voix off, CTA et prompt Runway ML.</p>
      </div>
      <div className="form-card">
        <div className="form-grid">
          <div className="form-group full"><label>Produit / Marque *</label><input value={form.produit} onChange={set("produit")} placeholder="ex: Parfum Rose Noir, Restaurant Chez Momo…"/></div>
          <div className="form-group"><label>Secteur</label><select value={form.secteur} onChange={set("secteur")}><option value="">Choisir…</option><option>Restaurant / Food</option><option>Mode / Vêtements</option><option>Parfum / Beauté</option><option>Tech / App</option><option>Sport / Fitness</option><option>Lifestyle</option><option>Autre</option></select></div>
          <div className="form-group"><label>Audience cible</label><input value={form.audience} onChange={set("audience")} placeholder="ex: femmes 25-35, étudiants…"/></div>
          <div className="form-group"><label>Plateforme</label><div className="toggle-group">{PLATFORMS.map(p=><button key={p} className={`toggle${form.plateforme===p?" active":""}`} onClick={()=>tog("plateforme",p)}>{p}</button>)}</div></div>
          <div className="form-group"><label>Durée (secondes)</label><div className="toggle-group">{["15","30","60"].map(d=><button key={d} className={`toggle${form.duration===d?" active":""}`} onClick={()=>tog("duration",d)}>{d}s</button>)}</div></div>
          <div className="form-group full"><label>Ton</label><div className="toggle-group">{TONES.map(t=><button key={t} className={`toggle${form.ton===t?" active":""}`} onClick={()=>tog("ton",t)}>{t}</button>)}</div></div>
          <div className="form-group full"><label>Infos complémentaires (optionnel)</label><textarea value={form.info} onChange={set("info")} placeholder="Promo en cours, USP du produit…"/></div>
        </div>
        <button className="generate-btn" onClick={generate} disabled={loading||!form.produit}>{loading?"Génération en cours…":"Générer 2 scripts A/B →"}</button>
      </div>
      {loading && <div className="loading"><div className="spinner"/>Création de tes scripts…</div>}
      {error && <div className="app-error">{error}</div>}
      {scripts && (
        <div className="results">
          <div className="results-header"><div className="results-title">Scripts générés</div><button className="new-btn" onClick={()=>setScripts(null)}>Nouveau brief</button></div>
          <ScriptCard scripts={scripts}/>
        </div>
      )}
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function Root() {
  const [view, setView] = useState("landing");
  useEffect(() => {
    try { const s = localStorage.getItem("ugc_code"); if(s && VALID_CODES.includes(s)) setView("app"); } catch(e){}
  }, []);
  const logout = () => { try{localStorage.removeItem("ugc_code");}catch(e){} setView("landing"); };
  return (
    <>
      <style>{CSS}</style>
      {view==="landing" && <Landing onCode={()=>setView("gate")}/>}
      {view==="gate"    && <AccessGate onUnlock={()=>setView("app")} onBack={()=>setView("landing")}/>}
      {view==="app"     && <UGCApp onLogout={logout}/>}
    </>
  );
}
