/* ============================================================
   MTN MoMo Zambia – Instant Loans
   ============================================================ */

:root {
  --mtn-dark: #004f71;
  --mtn-light: #009fe3;
  --mtn-gold: #ffcb05;
  --mtn-blue: #1e63c6;
  --mtn-red: #e60000;
  --text-dark: #1C2340;
  --text-mid: #444;
  --text-light: #888;
  --border: #ddd;
  --radius: 12px;
  --radius-sm: 8px;
  --page-bg: #f4f7f6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--page-bg);
  color: var(--text-dark);
  min-height: 100vh;
}

/* ─── Loader ─── */
#loader {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.loader-spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid var(--mtn-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.loader-text {
  margin-top: 16px;
  font-weight: 600;
  color: var(--mtn-dark);
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Pages ─── */
.page {
  display: none;
  min-height: 100vh;
  animation: fadeIn 0.3s ease;
}
.page.active { display: flex; flex-direction: column; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Navbar ─── */
.navbar {
  background: var(--mtn-dark);
  color: #fff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
}
.logo-icon {
  width: 44px; height: 44px;
  background: var(--mtn-gold);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 24px; color: var(--mtn-dark);
}
.logo-text { font-size: 20px; font-weight: 800; }
.logo-text span { color: var(--mtn-gold); }
.logo-sub { font-size: 12px; opacity: 0.8; }
.nav-actions { display: flex; align-items: center; gap: 16px; }
.status { display: flex; align-items: center; gap: 6px; font-size: 14px; }
.dot { width: 10px; height: 10px; background: #00d26a; border-radius: 50%; }
.hamburger { display: flex; flex-direction: column; gap: 4px; cursor: pointer; }
.hamburger span { width: 24px; height: 3px; background: #fff; border-radius: 2px; }

/* ─── Hero ─── */
.hero {
  background: linear-gradient(135deg, var(--mtn-dark), var(--mtn-light));
  color: #fff;
  padding: 60px 24px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content { max-width: 500px; }
.badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 14px;
  margin-bottom: 20px;
}
.hero h1 { font-size: 44px; line-height: 1.2; margin-bottom: 16px; }
.hero h1 .highlight { color: var(--mtn-gold); }
.hero p { font-size: 16px; opacity: 0.9; margin-bottom: 30px; }
.hero-cta {
  display: inline-block;
  background: var(--mtn-gold);
  color: var(--mtn-dark);
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.2s;
}
.hero-cta:hover { transform: scale(1.05); }
.countdown-section { margin-top: 40px; }
.countdown-number { font-size: 48px; font-weight: 900; }
.countdown-label { font-size: 14px; opacity: 0.8; display: block; margin-bottom: 10px; }
.countdown-bar { background: rgba(255,255,255,0.2); border-radius: 8px; height: 6px; overflow: hidden; }
.countdown-bar .fill { background: var(--mtn-gold); height: 100%; width: 0; transition: width 0.1s linear; }

/* ─── Features ─── */
.features {
  background: #fff;
  padding: 40px 24px;
  text-align: center;
}
.section-title { font-size: 24px; font-weight: 700; margin-bottom: 30px; }
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.feature-card {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
}
.feature-card .icon { font-size: 36px; margin-bottom: 10px; }
.feature-card h4 { font-size: 16px; margin-bottom: 6px; }
.feature-card p { font-size: 13px; color: var(--text-light); }

/* ─── Footer ─── */
.footer {
  background: #1a1a1a;
  color: #999;
  text-align: center;
  padding: 20px;
  font-size: 13px;
}
.footer .brand { color: var(--mtn-gold); }

/* ─── Generic Landing (calculator page) ─── */
.land-nav {
  background: #fff;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.mtn-logo { display: flex; flex-direction: column; align-items: center; }
.mtn-logo-icon { width: 44px; height: 44px; background: var(--mtn-gold); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 24px; color: var(--mtn-dark); }
.mtn-logo-text { font-weight: 800; font-size: 20px; }
.mtn-logo-sub { font-size: 12px; color: #666; }

.land-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
}
.land-card {
  width: 100%;
  max-width: 520px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  padding: 36px 32px;
}
.land-card h1 { font-size: 32px; text-align: center; margin-bottom: 6px; }
.land-card h1 .highlight { color: var(--mtn-blue); }
.land-tagline { text-align: center; color: var(--text-light); margin-bottom: 24px; }
.land-footer { background: var(--mtn-dark); color: #fff; text-align: center; padding: 16px; font-size: 14px; }

/* ─── Buttons ─── */
.btn-grad {
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(to right, var(--mtn-dark), var(--mtn-light));
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;
}
.btn-grad:hover { opacity: 0.9; }
.btn-gray {
  background: #e0e0e0;
  color: #666;
  border: none;
  border-radius: 8px;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  font-family: inherit;
}
.step-btns { display: flex; gap: 12px; margin-top: 8px; }

/* ─── Forms ─── */
.field { margin-bottom: 18px; }
.field label { display: block; font-size: 14px; font-weight: 500; color: var(--text-mid); margin-bottom: 6px; }
.field input, .field select, .field textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: var(--text-dark);
  background: #fff;
  outline: none;
}
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--mtn-blue); }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.sel-wrap { position: relative; }
.sel-wrap::after { content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--text-light); pointer-events: none; }
.phone-row { display: flex; }
.ph-pre {
  padding: 11px 12px;
  background: #f5f5f5;
  border: 1.5px solid var(--border);
  border-right: none;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  color: #555;
  display: flex;
  align-items: center;
}
.phone-row input { border-radius: 0 var(--radius-sm) var(--radius-sm) 0 !important; flex: 1; }
.field-hint { font-size: 12px; color: var(--text-light); margin-top: 4px; }

/* ─── Progress Bar ─── */
.prog-row { display: flex; gap: 8px; margin: 10px 0 24px; }
.prog-seg { flex: 1; height: 4px; border-radius: 2px; background: #e0e0e0; }
.prog-seg.done, .prog-seg.now { background: var(--mtn-gold); }
.prog-seg.now { animation: pulse-progress 1.5s ease infinite; }
@keyframes pulse-progress { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

/* ─── Step Cards ─── */
.step-center { flex: 1; display: flex; align-items: flex-start; justify-content: center; padding: 28px 16px; }
.step-card {
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 28px;
}
.step-card h2 { font-size: 24px; text-align: center; margin-bottom: 4px; }
.step-sub { text-align: center; font-size: 14px; color: var(--text-light); margin-bottom: 16px; }

/* ─── Calculator ─── */
.calc-box { background: #fafafa; border: 1px solid #eee; border-radius: var(--radius-sm); padding: 20px; margin-bottom: 22px; }
.calc-box h2 { font-size: 16px; margin-bottom: 16px; }
.calc-row2 { display: flex; justify-content: space-between; font-size: 14px; color: var(--text-mid); margin-bottom: 6px; }
.cv { color: var(--mtn-blue); font-weight: 600; }
input[type=range] { width: 100%; -webkit-appearance: none; height: 5px; border-radius: 3px; background: #ddd; outline: none; margin: 8px 0 4px; }
input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; background: var(--mtn-blue); border-radius: 50%; border: 3px solid #fff; cursor: pointer; }
.range-ends { display: flex; justify-content: space-between; font-size: 12px; color: var(--text-light); }
.monthly-box { background: #fff; border: 1px solid #eee; border-radius: var(--radius-sm); padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; }
.monthly-box .ml { font-size: 14px; color: var(--text-light); }
.monthly-box .ma { font-size: 24px; font-weight: 700; color: var(--mtn-blue); }

/* ─── Messages ─── */
.msg-box { border-radius: var(--radius-sm); padding: 12px 16px; font-size: 14px; margin-bottom: 16px; display: none; align-items: center; gap: 10px; }
.msg-box.show { display: flex; }
.msg-box.error { background: #fef2f2; border: 1.5px solid #fecaca; color: #991b1b; }
.msg-icon { font-weight: 700; }

/* ─── Summary Box ─── */
.sum-box { border: 1px solid #e0e0e0; border-left: 4px solid var(--mtn-blue); border-radius: var(--radius-sm); padding: 16px; margin: 16px 0; background: #fafffe; }
.sum-box h3 { font-size: 16px; margin-bottom: 12px; }
.sum-row { display: flex; justify-content: space-between; font-size: 14px; padding: 7px 0; border-bottom: 1px solid #f0f0f0; }
.sum-row:last-child { border-bottom: none; }
.sum-row .sk { color: var(--text-light); }
.sum-row .sv { font-weight: 500; }

/* ─── Processing / Waiting ─── */
.proc-wrap, .wait-wrap { text-align: center; padding: 40px 24px; max-width: 420px; }
.proc-icon, .wait-icon { width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 24px; animation: pulse 2s ease infinite; }
.proc-wrap h2, .wait-wrap h2 { color: #fff; font-size: 24px; margin-bottom: 12px; }
.proc-wrap p, .wait-wrap p { color: rgba(255,255,255,0.75); font-size: 14px; line-height: 1.7; margin-bottom: 24px; }
@keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,203,5,0.3); } 50% { box-shadow: 0 0 0 16px rgba(255,203,5,0); } }

/* ─── PIN / OTP ─── */
.pin-label { font-size: 14px; color: var(--text-light); text-align: center; margin-bottom: 12px; }
.pin-row { display: flex; gap: 10px; justify-content: center; margin-bottom: 12px; align-items: center; }
.pin-box { width: 52px; height: 52px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); text-align: center; font-size: 24px; font-weight: 700; color: var(--mtn-blue); outline: none; }
.pin-box:focus { border-color: var(--mtn-blue); }
.pin-eye, .pin-delete
