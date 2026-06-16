  
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UGC Studio — Générateur de scripts vidéo IA</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0A0A0F;color:#F0EEF8;font-family:'Inter',sans-serif;min-height:100vh}
.nav{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid #1E1C2E}
.logo{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#F0EEF8}
.logo span{color:#8B5CF6}
.nav-btn{background:none;border:1px solid #1E1C2E;border-radius:8px;padding:8px 18px;color:#7B7893;font-size:13px;cursor:pointer;transition:all .15s}
.nav-btn:hover{border-color:#8B5CF6;color:#C4B5FD}
.hero{display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 24px 48px}
.badge{display:inline-flex;align-items:center;gap:8px;font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8B5CF6;border:1px solid #8B5CF630;padding:6px 14px;border-radius:20px;margin-bottom:28px;background:#8B5CF610}
.pulse{width:7px;height:7px;border-radius:50%;background:#8B5CF6;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
h1{font-family:'Syne',sans-serif;font-size:clamp(36px,6vw,70px);font-weight:800;line-height:1.0;letter-spacing:-.03em;margin-bottom:22px;max-width:800px}
.grad{background:linear-gradient(135deg,#8B5CF6,#EC4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:17px;color:#7B7893;line-height:1.65;max-width:500px;margin-bottom:44px}
.pricing-card{background:#12111A;border:1px solid #2A2840;border-radius:24px;padding:40px;max-width:420px;width:100%;margin-bottom:36px;position:relative;overflow:hidden}
.pricing-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#8B5CF6,#EC4899)}
.price-row{display:flex;align-items:flex-end;gap:4px;margin-bottom:6px;justify-content:center}
.price-amount{font-family:'Syne',sans-serif;font-size:56px;font-weight:800;color:#F0EEF8;line-height:1;letter-spacing:-.03em}
.price-currency{font-family:'Syne',sans-serif;font-size:24px;font-weight:700;color:#8B5CF6;margin-bottom:10px}
.price-period{font-size:14px;color:#5C5A72;margin-bottom:28px;text-align:center}
.feat-list{list-style:none;margin-bottom:28px;display:flex;flex-direction:column;gap:12px;text-align:left}
.feat-list li{display:flex;align-items:center;gap:10px;font-size:14px;color:#D4D0E8}
.check{width:20px;height:20px;border-radius:50%;background:#8B5CF620;border:1px solid #8B5CF640;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;color:#A78BFA}
.pay-btn{width:100%;padding:18px;background:linear-gradient(135deg,#8B5CF6,#7C3AED);border:none;border-radius:14px;font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:white;cursor:pointer;transition:opacity .2s,transform .1s;display:flex;align-items:center;justify-content:center;gap:10px}
.pay-btn:hover{opacity:.9;transform:translateY(-1px)}
.pay-note{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;font-size:12px;color:#3A3852}
.proofs{display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center;margin-bottom:60px}
.proof{font-size:13px;color:#5C5A72;display:flex;align-items:center;gap:6px}
.feats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin:0 auto 60px;padding:0 24px}
.feat-card{background:#12111A;border:1px solid #1E1C2E;border-radius:16px;padding:24px}
.feat-icon{font-size:24px;margin-bottom:12px}
.feat-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;color:#F0EEF8;margin-bottom:8px}
.feat-desc{font-size:13px;color:#7B7893;line-height:1.6}
.overlay{position:fixed;inset:0;background:#00000090;display:flex;align-items:center;justify-content:center;z-index:1000;padding:24px}
.modal{background:#12111A;border:1px solid #2A2840;border-radius:20px;padding:36px;max-width:420px;width:100%;position:relative}
.modal-title{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#F0EEF8;margin-bottom:6px}
.modal-sub{font-size:13px;color:#7B7893;margin-bottom:24px;line-height:1.5}
.form-group{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
.lbl{font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#5C5A72}
.inp{background:#0A0A0F;border:1px solid #1E1C2E;border-radius:10px;padding:12px 16px;font-size:14px;color:#F0EEF8;font-family:'Inter',sans-serif;outline:none;transition:border-color .2s;width:100%}
.inp:focus{border-color:#8B5CF6}
.methods{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.method{flex:1;padding:10px;border:1px solid #1E1C2E;border-radius:10px;background:#0A0A0F;color:#7B7893;font-size:13px;cursor:pointer;text-align:center;transition:all .15s;min-width:80px}
.method.active{border-color:#8B5CF6;color:#C4B5FD;background:#8B5CF615}
.confirm-btn{width:100%;padding:15px;background:linear-gradient(135deg,#8B5CF6,#7C3AED);border:none;border-radius:12px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;color:white;cursor:pointer;margin-top:4px}
.confirm-btn:disabled{opacity:.5;cursor:not-allowed}
.close-btn{position:absolute;top:16px;right:20px;background:none;border:none;color:#5C5A72;font-size:20px;cursor:pointer}
.err-box{background:#1A0A0A;border:1px solid #3A1515;border-radius:8px;padding:10px 14px;color:#F87171;font-size:13px;margin-bottom:14px}
.success-box{text-align:center;padding:20px 0}
.success-icon{font-size:48px;margin-bottom:16px}
.success-title{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#4ADE80;margin-bottom:8px}
.success-sub{font-size:14px;color:#7B7893;line-height:1.6}
.gate{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
.gate-card{background:#12111A;border:1px solid #1E1C2E;border-radius:20px;padding:48px 40px;max-width:440px;width:100%;text-align:center}
.gate-icon{font-size:36px;margin-bottom:16px}
.gate-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#F0EEF8;margin-bottom:10px}
.gate-sub{font-size:14px;color:#7B7893;line-height:1.6;margin-bottom:24px}
.gate-row{display:flex;gap:10px;margin-bottom:20px}
.gate-inp{flex:1;background:#0A0A0F;border:1px solid #1E1C2E;border-radius:10px;padding:13px 16px;font-size:14px;color:#F0EEF8;font-family:'Inter',sans-serif;outline:none;letter-spacing:.06em;text-transform:uppercase}
.gate-inp:focus{border-color:#8B5CF6}
.gate-btn{padding:13px 20px;background:linear-gradient(135deg,#8B5CF6,#7C3AED);border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:white;cursor:pointer;white-space:nowrap}
.back-btn{background:none;border:none;color:#5C5A72;font-size:13px;cursor:pointer}
.app-wrap{max-width:860px;margin:0 auto;padding:40px 24px 80px}
.app-nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:48px}
.app-logo{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:#F0EEF8}
.app-logo span{color:#8B5CF6}
.logout{background:none;border:1px solid #1E1C2E;border-radius:8px;padding:7px 16px;color:#5C5A72;font-size:12px;cursor:pointer;transition:all .15s}
.logout:hover{border-color:#EF4444;color:#F87171}
.app-badge{display:inline-block;font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8B5CF6;border:1px solid #8B5CF630;padding:5px 12px;border-radius:20px;margin-bottom:18px;background:#8B5CF610}
.app-title{font-family:'Syne',sans-serif;font-size:clamp(30px,5vw,48px);font-weight:800;line-height:1.05;letter-spacing:-.02em;margin-bottom:12px}
.app-title span{background:linear-gradient(135deg,#8B5CF6,#EC4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.app-sub{font-size:15px;color:#7B7893;line-height:1.6;max-width:480px;margin-bottom:32px}
.form-card{background:#12111A;border:1px solid #1E1C2E;border-radius:16px;padding:32px;margin-bottom:28px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
.full{grid-column:1/-1}
.fg{display:flex;flex-direction:column;gap:8px}
.fg label{font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#5C5A72}
.fg input,.fg select,.fg textarea{background:#0A0A0F;border:1px solid #1E1C2E;border-radius:10px;padding:12px 16px;font-size:14px;color:#F0EEF8;font-family:'Inter',sans-serif;outline:none;width:100%;transition:border-color .2s}
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:#8B5CF6}
.fg input::placeholder,.fg textarea::placeholder{color:#3A3852}
.fg select option{background:#12111A}
.fg textarea{resize:vertical;min-height:80px}
.tog-group{display:flex;gap:8px;flex-wrap:wrap}
.tog{padding:8px 16px;border-radius:8px;border:1px solid #1E1C2E;background:#0A0A0F;color:#7B7893;font-size:13px;cursor:pointer;transition:all .15s}
.tog.on{background:#8B5CF620;border-color:#8B5CF6;color:#C4B5FD}
.gen-btn{width:100%;padding:16px;background:linear-gradient(135deg,#8B5CF6,#7C3AED);border:none;border-radius:12px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;color:white;cursor:pointer;transition:opacity .2s,transform .1s;margin-top:8px}
.gen-btn:hover:not(:disabled){opacity:.9;transform:translateY(-1px)}
.gen-btn:disabled{opacity:.45;cursor:not-allowed}
.loading{display:flex;align-items:center;gap:12px;justify-content:center;padding:48px;color:#7B7893;font-size:14px}
.spinner{width:20px;height:20px;border:2px solid #1E1C2E;border-top-color:#8B5CF6;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.res-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.res-title{font-family:'Syne',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#5C5A72}
.new-btn{background:none;border:1px solid #1E1C2E;border-radius:8px;padding:6px 14px;color:#7B7893;font-size:12px;cursor:pointer;transition:all .15s}
.new-btn:hover{border-color:#8B5CF6;color:#C4B5FD}
.script-card{background:#12111A;border:1px solid #1E1C2E;border-radius:16px;overflow:hidden}
.tab-bar{display:flex;border-bottom:1px solid #1E1C2E;padding:0 24px;gap:4px}
.tab{padding:14px 16px;font-size:13px;font-family:'Syne',sans-serif;font-weight:600;color:#5C5A72;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;transition:all .15s;background:none;border-left:none;border-right:none;border-top:none}
.tab.on{color:#C4B5FD;border-bottom-color:#8B5CF6}
.script-body{padding:28px}
.var-lbl{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-family:'Syne',sans-serif;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#8B5CF6;background:#8B5CF615;border-radius:6px;padding:4px 10px;margin-bottom:20px}
.dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.sec{margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #1A1828}
.sec:last-of-type{border-bottom:none;margin-bottom:0;padding-bottom:0}
.sec-lbl{font-size:10px;font-family:'Syne',sans-serif;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3A3852;margin-bottom:8px}
.hook-txt{font-size:16px;font-weight:500;color:#F0EEF8;line-height:1.55}
.body-txt{font-size:14px;color:#D4D0E8;line-height:1.7;white-space:pre-wrap}
.cta-txt{font-size:14px;font-weight:500;color:#A78BFA;line-height:1.5}
.runway-box{background:#0D0C18;border:1px solid #1E1C2E;border-radius:10px;padding:14px;margin-top:8px}
.runway-lbl{font-size:10px;font-family:'Syne',sans-serif;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#4ADE8060;margin-bottom:6px}
.runway-txt{font-size:12px;color:#4ADE80;line-height:1.65}
.copy-row{display:flex;justify-content:flex-end;margin-top:18px}
.copy-btn{background:none;border:1px solid #1E1C2E;border-radius:8px;padding:7px 16px;color:#5C5A72;font-size:12px;cursor:pointer;transition:all .15s}
.copy-btn:hover{border-color:#8B5CF6;color:#C4B5FD}
.copy-btn.done{color:#4ADE80;border-color:#4ADE8040}
.hidden{display:none}
@media(max-width:640px){.feats{grid-template-columns:1fr}.form-grid{grid-template-columns:1fr}.nav{padding:16px 20px}.gate-card{padding:36px 24px}.gate-row{flex-direction:column}}
</style>
</head>
<body>

<!-- LANDING -->
<div id="landing">
  <nav class="nav">
    <div class="logo">UGC<span>Studio</span></div>
    <button class="nav-btn" onclick="show('gate')">J'ai un code →</button>
  </nav>
  <div class="hero">
    <div class="badge"><span class="pulse"></span>Propulsé par IA</div>
    <h1>Scripts UGC pro<br>en <span class="grad">30 secondes</span></h1>
    <p class="hero-sub">Remplis le brief de ta marque, l'IA génère 2 scripts A/B complets — hook, B-roll, voix off, CTA et prompt Runway ML.</p>
    <div class="pricing-card">
      <div class="price-row"><div class="price-currency">€</div><div class="price-amount">5</div></div>
      <div class="price-period">par mois · sans engagement · résiliable à tout moment</div>
      <ul class="feat-list">
        <li><span class="check">✓</span>Scripts illimités (TikTok, Reels, Facebook)</li>
        <li><span class="check">✓</span>2 variantes A/B par génération</li>
        <li><span class="check">✓</span>Prompts Runway ML & Kling AI inclus</li>
        <li><span class="check">✓</span>Voix off prête pour ElevenLabs</li>
        <li><span class="check">✓</span>Accès immédiat après paiement</li>
      </ul>
      <button class="pay-btn" onclick="document.getElementById('pay-modal').classList.remove('hidden')">
        💳 S'abonner — 3 280 FCFA/mois
      </button>
      <div class="pay-note">🔒 Paiement sécurisé PayDunya · Flooz · T-Money · Carte CB</div>
    </div>
    <div class="proofs">
      <div class="proof">📱 Mobile Money accepté</div>
      <div class="proof">⚡ Accès en 2 min</div>
      <div class="proof">🔒 Sans engagement</div>
    </div>
  </div>
  <div class="feats">
    <div class="feat-card"><div class="feat-icon">🎣</div><div class="feat-title">Hook percutant</div><div class="feat-desc">Les 3 premières secondes optimisées pour stopper le scroll.</div></div>
    <div class="feat-card"><div class="feat-icon">🎬</div><div class="feat-title">B-Roll + Voix off</div><div class="feat-desc">Plans à filmer et texte prêt pour ElevenLabs.</div></div>
    <div class="feat-card"><div class="feat-icon">🤖</div><div class="feat-title">Prompt IA vidéo</div><div class="feat-desc">Prompt cinématique prêt pour Runway ML ou Kling AI.</div></div>
  </div>
</div>

<!-- PAY MODAL -->
<div id="pay-modal" class="overlay hidden">
  <div class="modal">
    <button class="close-btn" onclick="document.getElementById('pay-modal').classList.add('hidden')">×</button>
    <div id="pay-form-content">
      <div class="modal-title">Abonnement UGC Studio</div>
      <div class="modal-sub">3 280 FCFA/mois (~5€) · Sans engagement · Mobile Money ou carte</div>
      <div id="pay-err" class="err-box hidden"></div>
      <div class="form-group">
        <div class="lbl">Méthode de paiement</div>
        <div class="methods">
          <button class="method active" onclick="selectMethod(this,'flooz')">Flooz (Togo)</button>
          <button class="method" onclick="selectMethod(this,'tmoney')">T-Money</button>
          <button class="method" onclick="selectMethod(this,'card')">Carte CB</button>
        </div>
      </div>
      <div class="form-group"><div class="lbl">Nom complet</div><input class="inp" id="pay-name" placeholder="Ton nom"></div>
      <div class="form-group"><div class="lbl">Email</div><input class="inp" id="pay-email" type="email" placeholder="ton@email.com"></div>
      <div class="form-group"><div class="lbl">Téléphone</div><input class="inp" id="pay-phone" placeholder="+228 90 00 00 00"></div>
      <button class="confirm-btn" id="pay-submit" onclick="startPayment()">Payer 3 280 FCFA →</button>
    </div>
    <div id="pay-success-content" class="success-box hidden">
      <div class="success-icon">✅</div>
      <div class="success-title">Paiement initié !</div>
      <p class="success-sub">Une page de paiement s'est ouverte.<br><br>Après confirmation, tu recevras ton code d'accès par email.</p>
      <button class="confirm-btn" style="margin-top:24px" onclick="document.getElementById('pay-modal').classList.add('hidden');show('gate')">J'ai mon code → Accéder</button>
    </div>
  </div>
</div>

<!-- ACCESS GATE -->
<div id="gate" class="gate hidden">
  <div class="gate-card">
    <div class="gate-icon">🔑</div>
    <div class="gate-title">Entre ton code d'accès</div>
    <p class="gate-sub">Tu as reçu ton code par email après ton paiement PayDunya.</p>
    <div id="gate-err" class="err-box hidden"></div>
    <div class="gate-row">
      <input class="gate-inp" id="gate-code" placeholder="XXXX-XXXX-XXXX" onkeydown="if(event.key==='Enter')checkCode()">
      <button class="gate-btn" onclick="checkCode()">Accéder →</button>
    </div>
    <button class="back-btn" onclick="show('landing')">← Retour à l'accueil</button>
  </div>
</div>

<!-- APP -->
<div id="app" class="hidden">
  <div class="app-wrap">
    <div class="app-nav">
      <div class="app-logo">UGC<span>Studio</span></div>
      <button class="logout" onclick="logout()">Déconnexion</button>
    </div>
    <div class="app-badge">UGC Studio</div>
    <div class="app-title">Génère ton<br><span>script vidéo</span></div>
    <p class="app-sub">Remplis le brief, l'IA crée 2 scripts A/B avec hook, B-roll, voix off, CTA et prompt Runway ML.</p>
    <div class="form-card">
      <div class="form-grid">
        <div class="fg full"><label>Produit / Marque *</label><input id="f-produit" placeholder="ex: Parfum Rose Noir, Restaurant Chez Momo…"></div>
        <div class="fg"><label>Secteur</label><select id="f-secteur"><option value="">Choisir…</option><option>Restaurant / Food</option><option>Mode / Vêtements</option><option>Parfum / Beauté</option><option>Tech / App</option><option>Sport / Fitness</option><option>Lifestyle</option><option>Autre</option></select></div>
        <div class="fg"><label>Audience cible</label><input id="f-audience" placeholder="ex: femmes 25-35, étudiants…"></div>
        <div class="fg"><label>Plateforme</label><div class="tog-group" id="tg-plateforme"><button class="tog on" onclick="setTog('tg-plateforme',this)">TikTok</button><button class="tog" onclick="setTog('tg-plateforme',this)">Instagram Reels</button><button class="tog" onclick="setTog('tg-plateforme',this)">Facebook</button></div></div>
        <div class="fg"><label>Durée</label><div class="tog-group" id="tg-duration"><button class="tog" onclick="setTog('tg-duration',this)">15s</button><button class="tog on" onclick="setTog('tg-duration',this)">30s</button><button class="tog" onclick="setTog('tg-duration',this)">60s</button></div></div>
        <div class="fg full"><label>Ton</label><div class="tog-group" id="tg-ton"><button class="tog on" onclick="setTog('tg-ton',this)">Émotionnel</button><button class="tog" onclick="setTog('tg-ton',this)">Humoristique</button><button class="tog" onclick="setTog('tg-ton',this)">Urgent</button><button class="tog" onclick="setTog('tg-ton',this)">Inspirant</button><button class="tog" onclick="setTog('tg-ton',this)">Éducatif</button></div></div>
        <div class="fg full"><label>Infos complémentaires (optionnel)</label><textarea id="f-info" placeholder="Promo en cours, USP du produit…"></textarea></div>
      </div>
      <button class="gen-btn" id="gen-btn" onclick="generate()">Générer 2 scripts A/B →</button>
    </div>
    <div id="loading" class="loading hidden"><div class="spinner"></div>Création de tes scripts…</div>
    <div id="results" class="hidden">
      <div class="res-header"><div class="res-title">Scripts générés</div><button class="new-btn" onclick="document.getElementById('results').classList.add('hidden')">Nouveau brief</button></div>
      <div class="script-card">
        <div class="tab-bar">
          <button class="tab on" onclick="switchTab(0)">Variante 1</button>
          <button class="tab" onclick="switchTab(1)">Variante 2</button>
        </div>
        <div class="script-body">
          <div id="tab-0"><div class="var-lbl"><span class="dot"></span>Script 1/2</div><div id="s0"></div></div>
          <div id="tab-1" class="hidden"><div class="var-lbl"><span class="dot"></span>Script 2/2</div><div id="s1"></div></div>
          <div class="copy-row"><button class="copy-btn" id="copy-btn" onclick="copyScript()">Copier le script</button></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const VALID_CODES=["JHSP-ZFNG-U716-5Z8E-I8KU","WAOW-OAAE-PFVF-X5IK-NVCK","EUFU-SZHM-R6LY-RSVB-Y7LW","7K7B-H9BD-R4FM-TRAX-WWQR","VQPJ-STDK-NGV9-WYIH-OYSX"];
const PAYDUNYA_MASTER_KEY="mozINBFM-DlSk-Ud6A-sOZu-oTyxNQr8hd88";
const PAYDUNYA_PUBLIC_KEY="live_public_3UXQP2O3IuIlMaVCXylTS87OBTJ";
const PAYDUNYA_PRIVATE_KEY="live_private_b7SqfKpLosWQKb0uDXHaoPOM29o";
const PAYDUNYA_TOKEN="UJ4amDbPnTZ8ePM21TG1";
let payMethod="flooz";
let scripts=[];
let activeTab=0;

function show(v){
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('gate').classList.add('hidden');
  document.getElementById('app').classList.add('hidden');
  document.getElementById(v).classList.remove('hidden');
}

function selectMethod(btn,m){
  payMethod=m;
  document.querySelectorAll('.method').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function setTog(groupId,btn){
  document.querySelectorAll('#'+groupId+' .tog').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}

async function startPayment(){
  const name=document.getElementById('pay-name').value;
  const email=document.getElementById('pay-email').value;
  const phone=document.getElementById('pay-phone').value;
  const errEl=document.getElementById('pay-err');
  if(!name||!email||!phone){errEl.textContent='Remplis tous les champs.';errEl.classList.remove('hidden');return;}
  errEl.classList.add('hidden');
  const btn=document.getElementById('pay-submit');
  btn.disabled=true;btn.textContent='Connexion à PayDunya…';
  try{
    const res=await fetch('https://app.paydunya.com/api/v1/checkout-invoice/create',{
      method:'POST',
      headers:{'Content-Type':'application/json','PAYDUNYA-MASTER-KEY':PAYDUNYA_MASTER_KEY,'PAYDUNYA-PUBLIC-KEY':PAYDUNYA_PUBLIC_KEY,'PAYDUNYA-PRIVATE-KEY':PAYDUNYA_PRIVATE_KEY,'PAYDUNYA-TOKEN':PAYDUNYA_TOKEN},
      body:JSON.stringify({invoice:{items:{item_0:{name:'UGC Studio — Abonnement mensuel',quantity:1,unit_price:3280,total_price:3280,description:'Accès illimité'}},total_amount:3280,description:'UGC Studio 5€/mois'},store:{name:'UGC Studio'},actions:{cancel_url:window.location.href,return_url:window.location.href,callback_url:window.location.href},customer:{name,email,phone},payment_method:payMethod})
    });
    const data=await res.json();
    if(data.response_code==='00'&&data.hosted_invoice_url){
      window.open(data.hosted_invoice_url,'_blank');
      document.getElementById('pay-form-content').classList.add('hidden');
      document.getElementById('pay-success-content').classList.remove('hidden');
    }else{
      errEl.textContent=data.response_text||'Erreur de paiement. Réessaie.';
      errEl.classList.remove('hidden');
    }
  }catch(e){
    errEl.textContent='Connexion impossible. Vérifie ta connexion.';
    errEl.classList.remove('hidden');
  }
  btn.disabled=false;btn.textContent='Payer 3 280 FCFA →';
}

function checkCode(){
  const v=document.getElementById('gate-code').value.trim().toUpperCase();
  const errEl=document.getElementById('gate-err');
  if(VALID_CODES.includes(v)){
    try{localStorage.setItem('ugc_code',v);}catch(e){}
    show('app');
  }else{
    errEl.textContent='Code invalide. Vérifie l\'email reçu après ton paiement.';
    errEl.classList.remove('hidden');
  }
}

function logout(){
  try{localStorage.removeItem('ugc_code');}catch(e){}
  show('landing');
}

function switchTab(i){
  activeTab=i;
  document.getElementById('tab-0').classList.toggle('hidden',i!==0);
  document.getElementById('tab-1').classList.toggle('hidden',i!==1);
  document.querySelectorAll('.tab').forEach((t,idx)=>t.classList.toggle('on',idx===i));
}

function parseScript(text){
  const s={};
  const patterns={hook:/HOOK\s*:\s*([\s\S]*?)(?=B-ROLL|VOIX OFF|CTA|PROMPT|$)/i,broll:/B-ROLL\s*:\s*([\s\S]*?)(?=VOIX OFF|CTA|PROMPT|$)/i,voixoff:/VOIX OFF\s*:\s*([\s\S]*?)(?=CTA|PROMPT|$)/i,cta:/CTA\s*:\s*([\s\S]*?)(?=PROMPT|$)/i,prompt:/PROMPT[^:]*:\s*([\s\S]*?)$/i};
  for(const[k,re] of Object.entries(patterns)){const m=text.match(re);if(m)s[k]=m[1].trim().replace(/^\*+|\*+$/g,'').trim();}
  if(!Object.keys(s).length)s.raw=text.trim();
  return s;
}

function renderScript(s,elId){
  const el=document.getElementById(elId);
  if(s.raw){el.innerHTML=`<div class="body-txt">${s.raw}</div>`;return;}
  let h='';
  if(s.hook)h+=`<div class="sec"><div class="sec-lbl">Hook</div><div class="hook-txt">${s.hook}</div></div>`;
  if(s.broll)h+=`<div class="sec"><div class="sec-lbl">B-Roll</div><div class="body-txt">${s.broll}</div></div>`;
  if(s.voixoff)h+=`<div class="sec"><div class="sec-lbl">Voix Off</div><div class="body-txt">${s.voixoff}</div></div>`;
  if(s.cta)h+=`<div class="sec"><div class="sec-lbl">CTA</div><div class="cta-txt">${s.cta}</div></div>`;
  if(s.prompt)h+=`<div class="sec"><div class="sec-lbl">Prompt IA Vidéo</div><div class="runway-box"><div class="runway-lbl">Runway ML / Kling AI</div><div class="runway-txt">${s.prompt}</div></div></div>`;
  el.innerHTML=h;
}

function copyScript(){
  const s=scripts[activeTab];
  const txt=s.raw||[s.hook&&'HOOK:\n'+s.hook,s.broll&&'B-ROLL:\n'+s.broll,s.voixoff&&'VOIX OFF:\n'+s.voixoff,s.cta&&'CTA:\n'+s.cta,s.prompt&&'PROMPT:\n'+s.prompt].filter(Boolean).join('\n\n');
  navigator.clipboard.writeText(txt);
  const btn=document.getElementById('copy-btn');
  btn.textContent='✓ Copié';btn.classList.add('done');
  setTimeout(()=>{btn.textContent='Copier le script';btn.classList.remove('done');},2000);
}

async function generate(){
  const produit=document.getElementById('f-produit').value;
  if(!produit)return;
  const secteur=document.getElementById('f-secteur').value;
  const audience=document.getElementById('f-audience').value;
  const plateforme=document.querySelector('#tg-plateforme .on')?.textContent||'TikTok';
  const duration=document.querySelector('#tg-duration .on')?.textContent||'30s';
  const ton=document.querySelector('#tg-ton .on')?.textContent||'Émotionnel';
  const info=document.getElementById('f-info').value;
  const btn=document.getElementById('gen-btn');
  btn.disabled=true;
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('results').classList.add('hidden');
  const prompt=`Tu es un expert UGC creator et copywriter spécialisé en vidéo courte.\nGénère 2 scripts UGC variantes (A/B) pour :\n- Produit/marque : ${produit}\n- Secteur : ${secteur||'non précisé'}\n- Audience : ${audience||'grand public'}\n- Plateforme : ${plateforme}\n- Ton : ${ton}\n- Durée : ${duration}\n- Infos : ${info||'aucune'}\n\nPour CHAQUE variante :\n\n--- VARIANTE 1 ---\nHOOK :\n[accroche]\nB-ROLL :\n[plans]\nVOIX OFF :\n[texte]\nCTA :\n[appel à l'action]\nPROMPT RUNWAY/KLING :\n[prompt en anglais]\n\n--- VARIANTE 2 ---\n[même structure]`;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:1000,messages:[{role:'user',content:prompt}]})});
    const data=await res.json();
    const text=data.content?.map(b=>b.text||'').join('\n')||'';
    const parts=text.split(/---\s*VARIANTE\s*\d+\s*---/i).filter(p=>p.trim());
    scripts=parts.length>=2?parts.slice(0,2).map(parseScript):[parseScript(text),parseScript(text)];
    renderScript(scripts[0],'s0');
    renderScript(scripts[1],'s1');
    switchTab(0);
    document.getElementById('results').classList.remove('hidden');
  }catch(e){alert('Erreur lors de la génération. Réessaie.');}
  document.getElementById('loading').classList.add('hidden');
  btn.disabled=false;
}

// Init
try{const c=localStorage.getItem('ugc_code');if(c&&VALID_CODES.includes(c))show('app');}catch(e){}
</script>
</body>
</html>
