/**
 * Consentimiento de cookies + Google Consent Mode v2.
 *
 * - Por defecto todo lo no esencial está denegado (publicidad personalizada y analítica).
 * - La elección se guarda en localStorage y se reaplica en cada visita antes de cargar AdSense.
 * - Si NEXT_PUBLIC_USE_GOOGLE_CMP="true", se usa la CMP certificada de Google (configurada en
 *   AdSense > Privacidad y mensajes) y este aviso propio no se muestra.
 */

export const CONSENT_KEY = "ip-consent-v1";
export const OPEN_SETTINGS_EVENT = "ip:open-cookie-settings";
export const googleCmpEnabled = process.env.NEXT_PUBLIC_USE_GOOGLE_CMP === "true";

export type Consent = { ads: boolean; analytics: boolean; date: string };

type Gtag = (...args: unknown[]) => void;
type ConsentWindow = Window & {
  gtag?: Gtag;
  adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number };
  googlefc?: { showRevocationMessage?: () => void; callbackQueue?: unknown[] };
};

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function saveConsent(ads: boolean, analytics: boolean): Consent {
  const consent: Consent = { ads, analytics, date: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    /* almacenamiento bloqueado: la elección vale solo para esta página */
  }
  applyConsent(consent);
  return consent;
}

export function applyConsent(c: Pick<Consent, "ads" | "analytics">) {
  const w = window as ConsentWindow;
  const ads = c.ads ? "granted" : "denied";
  w.gtag?.("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: c.analytics ? "granted" : "denied",
  });
  w.adsbygoogle = w.adsbygoogle || [];
  w.adsbygoogle.requestNonPersonalizedAds = c.ads ? 0 : 1;
}

/** Abre el panel de configuración (el propio o el de la CMP de Google). */
export function openCookieSettings() {
  const w = window as ConsentWindow;
  if (googleCmpEnabled) {
    w.googlefc = w.googlefc || {};
    w.googlefc.callbackQueue = w.googlefc.callbackQueue || [];
    w.googlefc.callbackQueue.push(() => w.googlefc?.showRevocationMessage?.());
    return;
  }
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/** Script en línea que fija los valores por defecto antes de que cargue cualquier etiqueta de Google. */
export const consentDefaultsScript = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
var c=null;try{c=JSON.parse(localStorage.getItem('${CONSENT_KEY}')||'null');}catch(e){}
if(c){var a=c.ads?'granted':'denied';gtag('consent','update',{ad_storage:a,ad_user_data:a,ad_personalization:a,analytics_storage:c.analytics?'granted':'denied'});}
window.adsbygoogle=window.adsbygoogle||[];window.adsbygoogle.requestNonPersonalizedAds=(c&&c.ads)?0:1;
`;
