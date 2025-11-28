/**
 * Webflow Cookie Consent with Deep Scanner
 * Version: 1.0.0
 * Author: Kevin Baum
 * Repository: https://github.com/kevin-baum/webflow-cookie
 * License: MIT
 * 
 * Verwendung in Webflow:
 * Füge dieses Script in Project Settings → Custom Code → Footer Code ein:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@latest/webflow-cookie.bundle.js" type="module"></script>
 */

(async function() {
    'use strict';

    // ===================================
    // CSS INJECTION
    // ===================================
    const injectCSS = () => {
        if (document.getElementById('webflow-cookie-css')) return;
        
        const link = document.createElement('link');
        link.id = 'webflow-cookie-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css';
        document.head.appendChild(link);

        const style = document.createElement('style');
        style.id = 'webflow-cookie-custom-css';
        style.textContent = `
            #cookie-settings-btn{position:fixed;bottom:20px;left:20px;background:#2d3748;color:#fff;border:none;border-radius:8px;padding:12px 20px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:2147483647!important;transition:all .3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;gap:8px}
            #cookie-settings-btn:hover{background:#1a202c;transform:translateY(-2px);box-shadow:0 6px 12px rgba(0,0,0,.15)}
            @media (max-width:768px){#cookie-settings-btn{bottom:10px;left:10px;padding:10px 16px;font-size:13px}}
            .pm__badge{background:#48bb78;color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;margin-left:8px}
            .cookie-details{background:#f7fafc;border-radius:6px;padding:12px;margin:10px 0;font-size:13px;max-height:400px;overflow-y:auto}
            .cookie-item{display:flex;justify-content:space-between;align-items:flex-start;padding:10px 12px;margin:6px 0;background:#fff;border-radius:4px;border-left:3px solid #4299e1}
            .cookie-name{font-weight:600;color:#2d3748;font-size:13px;word-break:break-word}
            .cookie-info{color:#718096;font-size:11px;margin-top:3px}
            .cookie-purpose{display:inline-block;background:#e6fffa;color:#234e52;padding:2px 6px;border-radius:3px;font-size:10px;margin-top:4px}
            .cookie-source{display:inline-block;background:#fef5e7;color:#856404;padding:2px 6px;border-radius:3px;font-size:10px;margin-top:4px;margin-left:4px}
            .cookie-count{background:#4299e1;color:#fff;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600}
            .scan-status{background:#d4edda;border:1px solid #c3e6cb;color:#155724;padding:8px 12px;border-radius:4px;margin:10px 0;font-size:12px;font-weight:500}
        `;
        document.head.appendChild(style);
    };

    // ===================================
    // CONFIGURATION
    // ===================================
    const CONFIG = window.WEBFLOW_COOKIE_CONFIG || {
        privacyPolicyUrl: '/datenschutz',
        termsUrl: '/impressum',
        deepScanInterval: 2000,
        googleAnalyticsId: '',
        facebookPixelId: '',
    };

    // ===================================
    // LOAD COOKIECONSENT LIBRARY
    // ===================================
    const loadCookieConsent = () => {
        return new Promise((resolve, reject) => {
            if (window.CookieConsent) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.type = 'module';
            script.onload = resolve;
            script.onerror = reject;
            script.textContent = `import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';`;
            document.head.appendChild(script);
        });
    };

    // ===================================
    // DEEP SCANNER CLASS
    // ===================================
    class DeepCookieScanner {
        constructor() {
            this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
            this.detectedTools = new Set();
            this.detectedScripts = new Set();
            
            // Umfangreiche Cookie-Datenbank
            this.cookieDatabase = {
                'wf_': { purpose: 'Webflow Session', duration: 'Session', category: 'necessary', tool: 'Webflow' },
                'webflow': { purpose: 'Webflow Tracking', duration: '1 Jahr', category: 'necessary', tool: 'Webflow' },
                '_ga': { purpose: 'Google Analytics ID', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics' },
                '_gid': { purpose: 'Google Analytics Session', duration: '24 Stunden', category: 'analytics', tool: 'Google Analytics' },
                '_gat': { purpose: 'Google Analytics Throttle', duration: '1 Minute', category: 'analytics', tool: 'Google Analytics' },
                '__utma': { purpose: 'Google Analytics', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics' },
                '__utmb': { purpose: 'Google Analytics', duration: '30 Min', category: 'analytics', tool: 'Google Analytics' },
                '__utmc': { purpose: 'Google Analytics', duration: 'Session', category: 'analytics', tool: 'Google Analytics' },
                '__utmz': { purpose: 'Google Analytics', duration: '6 Monate', category: 'analytics', tool: 'Google Analytics' },
                '__gads': { purpose: 'Google Ads', duration: '1 Jahr', category: 'marketing', tool: 'Google Ads' },
                '_gcl_au': { purpose: 'Google Ads', duration: '90 Tage', category: 'marketing', tool: 'Google Ads' },
                'IDE': { purpose: 'Google DoubleClick', duration: '1 Jahr', category: 'marketing', tool: 'Google DoubleClick' },
                '_fbp': { purpose: 'Facebook Pixel', duration: '90 Tage', category: 'marketing', tool: 'Facebook Pixel' },
                '_fbc': { purpose: 'Facebook Click ID', duration: '90 Tage', category: 'marketing', tool: 'Facebook Pixel' },
                'fr': { purpose: 'Facebook Ads', duration: '90 Tage', category: 'marketing', tool: 'Facebook' },
                '_hjid': { purpose: 'Hotjar User ID', duration: '1 Jahr', category: 'analytics', tool: 'Hotjar' },
                'ajs_': { purpose: 'Segment Analytics', duration: '1 Jahr', category: 'analytics', tool: 'Segment' },
                'amplitude_': { purpose: 'Amplitude Analytics', duration: '1 Jahr', category: 'analytics', tool: 'Amplitude' },
                'mp_': { purpose: 'Mixpanel Analytics', duration: '1 Jahr', category: 'analytics', tool: 'Mixpanel' },
                'cc_cookie': { purpose: 'Cookie Consent', duration: '6 Monate', category: 'necessary', tool: 'CookieConsent' },
                'PHPSESSID': { purpose: 'PHP Session', duration: 'Session', category: 'necessary', tool: 'PHP' },
            };
            
            this.scriptDomains = {
                'googletagmanager.com': 'Google Tag Manager',
                'google-analytics.com': 'Google Analytics',
                'facebook.net': 'Facebook',
                'hotjar.com': 'Hotjar',
                'segment.com': 'Segment',
                'webflow.com': 'Webflow',
                'webflow.io': 'Webflow',
            };
        }

        async performDeepScan() {
            this.scanBrowserCookies();
            this.scanStorage();
            await this.scanScripts();
            this.scanIframes();
            return this.scannedCookies;
        }

        scanBrowserCookies() {
            const cookies = document.cookie.split(';');
            const found = new Set();
            cookies.forEach(cookie => {
                const [name] = cookie.trim().split('=');
                if (name && !found.has(name)) {
                    found.add(name);
                    const data = this.analyzeCookie(name, 'cookie');
                    this.scannedCookies[data.category].push(data);
                    if (data.tool) this.detectedTools.add(data.tool);
                }
            });
        }

        scanStorage() {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const data = this.analyzeCookie(key, 'localStorage');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                const data = this.analyzeCookie(key, 'sessionStorage');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
        }

        async scanScripts() {
            document.querySelectorAll('script[src]').forEach(script => {
                const src = script.src;
                for (const [domain, tool] of Object.entries(this.scriptDomains)) {
                    if (src.includes(domain)) {
                        this.detectedTools.add(tool);
                        const category = this.getToolCategory(tool);
                        this.scannedCookies[category].push({
                            name: `📜 ${tool} Script`,
                            purpose: `Externes Script`,
                            duration: 'Runtime',
                            category,
                            type: 'script',
                            tool
                        });
                    }
                }
            });
        }

        scanIframes() {
            document.querySelectorAll('iframe[src]').forEach(iframe => {
                for (const [domain, tool] of Object.entries(this.scriptDomains)) {
                    if (iframe.src.includes(domain)) {
                        this.detectedTools.add(tool);
                    }
                }
            });
        }

        analyzeCookie(name, type = 'cookie') {
            for (const [pattern, data] of Object.entries(this.cookieDatabase)) {
                if (name.toLowerCase().includes(pattern.toLowerCase())) {
                    return { name, ...data, type };
                }
            }
            return {
                name,
                purpose: this.guessPurpose(name),
                duration: type === 'sessionStorage' ? 'Session' : '1 Jahr',
                category: this.guessCategory(name),
                type,
                tool: this.guessTool(name)
            };
        }

        guessCategory(name) {
            const n = name.toLowerCase();
            if (n.includes('ga') || n.includes('analytics') || n.includes('_hj') || n.includes('utm')) return 'analytics';
            if (n.includes('fb') || n.includes('ad') || n.includes('marketing')) return 'marketing';
            if (n.includes('lang') || n.includes('locale') || n.includes('preference')) return 'functionality';
            if (n.includes('session') || n.includes('csrf') || n.includes('wf_')) return 'necessary';
            return 'functionality';
        }

        guessPurpose(name) {
            const n = name.toLowerCase();
            if (n.includes('ga')) return 'Google Analytics';
            if (n.includes('fb')) return 'Facebook';
            if (n.includes('wf')) return 'Webflow';
            return 'Website-Funktion';
        }

        guessTool(name) {
            const n = name.toLowerCase();
            if (n.includes('ga') || n.includes('_gid')) return 'Google Analytics';
            if (n.includes('fb')) return 'Facebook';
            if (n.includes('wf')) return 'Webflow';
            return null;
        }

        getToolCategory(tool) {
            const marketing = ['Google Ads', 'Google DoubleClick', 'Facebook', 'Facebook Pixel'];
            const analytics = ['Google Analytics', 'Hotjar', 'Segment', 'Amplitude', 'Mixpanel'];
            const necessary = ['Webflow', 'PHP'];
            if (marketing.includes(tool)) return 'marketing';
            if (analytics.includes(tool)) return 'analytics';
            if (necessary.includes(tool)) return 'necessary';
            return 'functionality';
        }

        generateCookieListHTML(category) {
            const cookies = this.scannedCookies[category];
            if (cookies.length === 0) {
                return '<p style="color:#718096;font-size:13px;text-align:center;padding:20px">Keine Cookies gefunden</p>';
            }
            let html = `<div class="cookie-details"><div style="margin-bottom:10px;color:#4a5568;font-weight:600">Gefundene Cookies: <span class="cookie-count">${cookies.length}</span></div>`;
            cookies.forEach(c => {
                html += `<div class="cookie-item"><div style="flex:1"><div class="cookie-name">${c.name}</div><div class="cookie-info">${c.duration} • ${c.type}</div><div class="cookie-purpose">${c.purpose}</div>${c.tool ? `<div class="cookie-source">🔧 ${c.tool}</div>` : ''}</div></div>`;
            });
            return html + '</div>';
        }

        getCategoryDescription(category) {
            const count = this.scannedCookies[category].length;
            const desc = {
                necessary: 'Essentiell für die Funktion der Website',
                functionality: 'Erweiterte Funktionen',
                analytics: 'Website-Analyse',
                marketing: 'Werbung und Marketing'
            };
            return `${desc[category]}. <strong>${count} Element(e) erkannt.</strong>`;
        }

        getToolsSummary() {
            if (this.detectedTools.size === 0) return '<div class="scan-status">✅ Keine externen Tools</div>';
            const tools = Array.from(this.detectedTools).sort();
            let html = '<div class="scan-status">🔍 Erkannte Tools:<br><br>';
            tools.forEach(t => html += `<span style="background:#fff;padding:4px 8px;margin:2px;display:inline-block;border-radius:4px;font-size:11px">🛠️ ${t}</span> `);
            return html + '</div>';
        }
    }

    // ===================================
    // INITIALIZE
    // ===================================
    const init = async () => {
        // Inject CSS
        injectCSS();

        // Load CookieConsent
        await loadCookieConsent();

        // Initialize Scanner
        const scanner = new DeepCookieScanner();
        
        // Initial scan
        setTimeout(() => scanner.performDeepScan(), 1500);

        // Periodic scan
        if (CONFIG.deepScanInterval > 0) {
            setInterval(() => {
                scanner.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
                scanner.performDeepScan();
            }, CONFIG.deepScanInterval);
        }

        // Configure CookieConsent
        window.CookieConsent.run({
            guiOptions: {
                consentModal: { layout: "box", position: "bottom left", equalWeightButtons: true, flipButtons: false },
                preferencesModal: { layout: "box", position: "right", equalWeightButtons: true, flipButtons: true }
            },
            categories: {
                necessary: { readOnly: true, enabled: true },
                functionality: {},
                analytics: { autoClear: { cookies: [{ name: /^(_ga|_gid|_gat|__utm|_hj|ajs_)/ }] } },
                marketing: { autoClear: { cookies: [{ name: /^(fr|_fbp|_fbc|IDE|__gads)/ }] } }
            },
            language: {
                default: "de",
                autoDetect: "browser",
                translations: {
                    de: {
                        consentModal: {
                            title: "🍪 Cookie-Einstellungen",
                            description: "Automatischer Deep Scanner erkennt alle Tools",
                            acceptAllBtn: "Alle akzeptieren",
                            acceptNecessaryBtn: "Nur notwendige",
                            showPreferencesBtn: "Details",
                            footer: `<a href="${CONFIG.privacyPolicyUrl}">Datenschutz</a>\n<a href="${CONFIG.termsUrl}">Impressum</a>`
                        },
                        preferencesModal: {
                            title: "🔍 Cookie-Einstellungen",
                            acceptAllBtn: "Alle akzeptieren",
                            acceptNecessaryBtn: "Nur notwendige",
                            savePreferencesBtn: "Speichern",
                            closeIconLabel: "Schließen",
                            serviceCounterLabel: "Dienste",
                            sections: [
                                { title: "Automatische Erkennung", description: scanner.getToolsSummary() },
                                { title: "✅ Notwendig <span class='pm__badge'>Immer aktiv</span>", description: scanner.getCategoryDescription('necessary') + '<br><br>' + scanner.generateCookieListHTML('necessary'), linkedCategory: "necessary" },
                                { title: "⚙️ Funktional", description: scanner.getCategoryDescription('functionality') + '<br><br>' + scanner.generateCookieListHTML('functionality'), linkedCategory: "functionality" },
                                { title: "📊 Analyse", description: scanner.getCategoryDescription('analytics') + '<br><br>' + scanner.generateCookieListHTML('analytics'), linkedCategory: "analytics" },
                                { title: "🎯 Marketing", description: scanner.getCategoryDescription('marketing') + '<br><br>' + scanner.generateCookieListHTML('marketing'), linkedCategory: "marketing" },
                                { title: "ℹ️ Info", description: `<a class="cc__link" href="${CONFIG.privacyPolicyUrl}">Datenschutz</a>` }
                            ]
                        }
                    }
                }
            },
            onConsent: () => setTimeout(() => scanner.performDeepScan(), 2000)
        });

        // Create button
        const createButton = () => {
            if (document.getElementById('cookie-settings-btn')) return;
            const btn = document.createElement('button');
            btn.id = 'cookie-settings-btn';
            btn.innerHTML = '🍪 Cookie-Einstellungen';
            btn.setAttribute('aria-label', 'Cookie-Einstellungen');
            btn.setAttribute('type', 'button');
            btn.addEventListener('click', async () => {
                await scanner.performDeepScan();
                window.CookieConsent.showPreferences();
            });
            document.body.appendChild(btn);
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createButton);
        } else {
            createButton();
        }

        window.addEventListener('cc:onConsent', createButton);

        // Dev tools
        window.deepScanCookies = () => scanner.performDeepScan().then(() => ({
            cookies: scanner.scannedCookies,
            tools: Array.from(scanner.detectedTools)
        }));
        window.resetCookieConsent = () => { window.CookieConsent.reset(true); location.reload(); };

        console.log('🍪 Webflow Cookie Consent mit Deep Scanner geladen!');
    };

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
