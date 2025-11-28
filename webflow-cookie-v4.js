/**
 * Webflow Cookie Consent with Deep Scanner v4.0 - FINAL
 * Mit sichtbaren Heroicons und vollständiger Cookie-Liste
 * 
 * INSTALLATION:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-v4.js"></script>
 */

(function() {
    'use strict';

    // ===================================
    // HEROICONS SOLID (Inline SVG)
    // ===================================
    const ICONS = {
        cookie: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-2.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" /></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M10 1l6 2.5v6c0 4-2.5 7-6 9.5-3.5-2.5-6-5.5-6-9.5v-6L10 1zm2.5 7.5l-3 3-1.5-1.5-1 1 2.5 2.5 4-4-1-1z" clip-rule="evenodd" /></svg>',
        cog: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l1.5.865 1.323-.765a1 1 0 011.414.414l1 1.732a1 1 0 01-.414 1.414l-1.323.766v1.732l1.323.765a1 1 0 01.414 1.414l-1 1.732a1 1 0 01-1.414.414L12 13.677V15a1 1 0 01-1 1H9a1 1 0 01-1-1v-1.323l-1.5-.865-1.323.765a1 1 0 01-1.414-.414l-1-1.732a1 1 0 01.414-1.414l1.323-.766V8.52l-1.323-.765a1 1 0 01-.414-1.414l1-1.732a1 1 0 011.414-.414l1.323.765L8 3.323V3a1 1 0 011-1h2zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" clip-rule="evenodd" /></svg>',
        chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>',
        megaphone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>',
        magnifying: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:20px;height:20px;display:inline-block"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>'
    };

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
            .cookie-icon-inline{display:inline-flex!important;align-items:center!important;gap:6px!important;vertical-align:middle}
            .cookie-icon-inline svg{width:18px!important;height:18px!important;flex-shrink:0!important;display:inline-block!important}
            #cookie-settings-btn{position:fixed;bottom:20px;left:20px;background:#2d3748;color:#fff;border:none;border-radius:8px;padding:12px 20px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:2147483647!important;transition:all .3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:inline-flex!important;align-items:center!important;gap:8px!important}
            #cookie-settings-btn svg{width:18px;height:18px;flex-shrink:0}
            #cookie-settings-btn:hover{background:#1a202c;transform:translateY(-2px);box-shadow:0 6px 12px rgba(0,0,0,.15)}
            @media (max-width:768px){#cookie-settings-btn{bottom:10px;left:10px;padding:10px 16px;font-size:13px}}
            .pm__badge{background:#48bb78;color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:600;margin-left:8px;display:inline-block;vertical-align:middle}
            .cookie-details{background:#f7fafc;border-radius:6px;padding:14px;margin:12px 0;font-size:13px;max-height:400px;overflow-y:auto;border:1px solid #e2e8f0}
            .cookie-item{display:block;padding:12px;margin:8px 0;background:#fff;border-radius:6px;border-left:4px solid #4299e1;box-shadow:0 1px 3px rgba(0,0,0,.1)}
            .cookie-name{font-weight:700;color:#2d3748;font-size:14px;margin-bottom:6px;display:block}
            .cookie-meta{display:flex;gap:12px;flex-wrap:wrap;margin:6px 0;font-size:12px}
            .cookie-meta-item{display:inline-flex;align-items:center;gap:4px;color:#718096;background:#f7fafc;padding:4px 8px;border-radius:4px}
            .cookie-meta-item strong{color:#4a5568;font-weight:600}
            .cookie-purpose{display:block;background:#e6fffa;color:#234e52;padding:6px 10px;border-radius:4px;font-size:12px;margin-top:8px;line-height:1.4}
            .cookie-source{display:inline-block;background:#fef5e7;color:#856404;padding:4px 10px;border-radius:4px;font-size:11px;margin-top:6px;font-weight:600}
            .cookie-count{background:#4299e1;color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:700;display:inline-block}
            .scan-status{background:#d4edda;border:1px solid #c3e6cb;color:#155724;padding:12px 16px;border-radius:6px;margin:12px 0;font-size:13px;font-weight:500;display:flex;align-items:center;gap:10px}
            .scan-status svg{width:20px!important;height:20px!important;flex-shrink:0}
            .section-title-icon{display:inline-flex!important;align-items:center!important;gap:8px!important}
            .section-title-icon svg{width:20px!important;height:20px!important;display:inline-block!important}
        `;
        document.head.appendChild(style);
    };

    const waitForDOM = (callback) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    };

    const CONFIG = window.WEBFLOW_COOKIE_CONFIG || {
        privacyPolicyUrl: '/datenschutz',
        termsUrl: '/impressum',
        deepScanInterval: 3000,
        scanDelay: 2000,
    };

    const loadCookieConsent = (callback) => {
        if (window.CookieConsent) {
            callback();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
        script.onload = callback;
        script.onerror = () => console.error('❌ CookieConsent load failed');
        document.head.appendChild(script);
    };

    // ===================================
    // IMPROVED DEEP SCANNER V4
    // ===================================
    function DeepCookieScanner() {
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools = new Set();
        this.scanCount = 0;
        
        this.cookieDatabase = {
            'wf_': { purpose: 'Webflow Session Management', duration: 'Session', category: 'necessary', tool: 'Webflow', desc: 'Notwendig für Webflow-Funktionen' },
            'webflow': { purpose: 'Webflow Platform', duration: '1 Jahr', category: 'necessary', tool: 'Webflow', desc: 'Webflow Plattform Cookie' },
            '_ga': { purpose: 'Google Analytics Tracking', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics', desc: 'Eindeutige Besucher-ID' },
            '_gid': { purpose: 'Google Analytics Session', duration: '24 Stunden', category: 'analytics', tool: 'Google Analytics', desc: 'Session Tracking' },
            '_gat': { purpose: 'Google Analytics Rate Limiting', duration: '1 Minute', category: 'analytics', tool: 'Google Analytics', desc: 'Anfragen-Drosselung' },
            '__utma': { purpose: 'Google Analytics Visitor', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics', desc: 'Besucher-Tracking (Legacy)' },
            '__utmb': { purpose: 'Google Analytics Session', duration: '30 Min', category: 'analytics', tool: 'Google Analytics', desc: 'Session Start (Legacy)' },
            '__utmc': { purpose: 'Google Analytics Session', duration: 'Session', category: 'analytics', tool: 'Google Analytics', desc: 'Session Ende (Legacy)' },
            '__utmz': { purpose: 'Google Analytics Traffic Source', duration: '6 Monate', category: 'analytics', tool: 'Google Analytics', desc: 'Traffic-Quelle (Legacy)' },
            '__gads': { purpose: 'Google Ads Tracking', duration: '1 Jahr', category: 'marketing', tool: 'Google Ads', desc: 'Werbeanzeigen-Tracking' },
            '_gcl_au': { purpose: 'Google Ads Conversion', duration: '90 Tage', category: 'marketing', tool: 'Google Ads', desc: 'Conversion-Tracking' },
            'IDE': { purpose: 'Google DoubleClick', duration: '1 Jahr', category: 'marketing', tool: 'Google DoubleClick', desc: 'Werbeanzeigen-ID' },
            '_fbp': { purpose: 'Facebook Pixel', duration: '90 Tage', category: 'marketing', tool: 'Facebook Pixel', desc: 'Facebook Browser-ID' },
            '_fbc': { purpose: 'Facebook Click Tracking', duration: '90 Tage', category: 'marketing', tool: 'Facebook Pixel', desc: 'Facebook Click-ID' },
            'fr': { purpose: 'Facebook Advertising', duration: '90 Tage', category: 'marketing', tool: 'Facebook', desc: 'Facebook Werbe-Cookie' },
            '_hjid': { purpose: 'Hotjar Analytics', duration: '1 Jahr', category: 'analytics', tool: 'Hotjar', desc: 'Hotjar Besucher-ID' },
            'cc_cookie': { purpose: 'Cookie Consent', duration: '6 Monate', category: 'necessary', tool: 'CookieConsent', desc: 'Speichert Ihre Cookie-Einstellungen' },
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

    DeepCookieScanner.prototype.performDeepScan = function() {
        this.scanCount++;
        
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools.clear();
        
        this.scanBrowserCookies();
        this.scanStorage();
        this.scanScripts();
        
        // Füge Cookie Consent Cookie hinzu wenn noch nichts da ist
        if (this.scannedCookies.necessary.length === 0) {
            this.scannedCookies.necessary.push({
                name: 'cc_cookie',
                purpose: 'Cookie Consent Einstellung',
                duration: '6 Monate',
                category: 'necessary',
                type: 'Cookie',
                tool: 'CookieConsent',
                description: 'Speichert Ihre Cookie-Präferenzen'
            });
        }
        
        var total = 
            this.scannedCookies.necessary.length +
            this.scannedCookies.functionality.length +
            this.scannedCookies.analytics.length +
            this.scannedCookies.marketing.length;
        
        console.log('🔍 Scan #' + this.scanCount + ': ' + total + ' Elemente');
        
        return this.scannedCookies;
    };

    DeepCookieScanner.prototype.scanBrowserCookies = function() {
        var cookieString = document.cookie;
        if (!cookieString) return;
        
        var cookies = cookieString.split(';');
        var found = {};
        
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (!cookie) continue;
            
            var name = cookie.split('=')[0];
            if (name && !found[name]) {
                found[name] = true;
                var data = this.analyzeCookie(name, 'Cookie');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
        }
    };

    DeepCookieScanner.prototype.scanStorage = function() {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key) {
                    var data = this.analyzeCookie(key, 'LocalStorage');
                    this.scannedCookies[data.category].push(data);
                    if (data.tool) this.detectedTools.add(data.tool);
                }
            }
        } catch(e) {}
        
        try {
            for (var i = 0; i < sessionStorage.length; i++) {
                var key = sessionStorage.key(i);
                if (key) {
                    var data = this.analyzeCookie(key, 'SessionStorage');
                    this.scannedCookies[data.category].push(data);
                    if (data.tool) this.detectedTools.add(data.tool);
                }
            }
        } catch(e) {}
    };

    DeepCookieScanner.prototype.scanScripts = function() {
        var scripts = document.querySelectorAll('script[src]');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src;
            for (var domain in this.scriptDomains) {
                if (src.indexOf(domain) !== -1) {
                    this.detectedTools.add(this.scriptDomains[domain]);
                    break;
                }
            }
        }
    };

    DeepCookieScanner.prototype.analyzeCookie = function(name, type) {
        for (var pattern in this.cookieDatabase) {
            if (name.toLowerCase().indexOf(pattern.toLowerCase()) !== -1) {
                var data = this.cookieDatabase[pattern];
                return {
                    name: name,
                    purpose: data.purpose,
                    duration: data.duration,
                    category: data.category,
                    type: type,
                    tool: data.tool,
                    description: data.desc || data.purpose
                };
            }
        }
        
        return {
            name: name,
            purpose: this.guessPurpose(name),
            duration: type === 'SessionStorage' ? 'Session' : '1 Jahr',
            category: this.guessCategory(name),
            type: type,
            tool: this.guessTool(name),
            description: 'Automatisch erkanntes Element'
        };
    };

    DeepCookieScanner.prototype.guessCategory = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1 || n.indexOf('analytics') !== -1 || n.indexOf('_hj') !== -1) return 'analytics';
        if (n.indexOf('fb') !== -1 || n.indexOf('ad') !== -1) return 'marketing';
        if (n.indexOf('lang') !== -1 || n.indexOf('locale') !== -1) return 'functionality';
        if (n.indexOf('session') !== -1 || n.indexOf('cc_') !== -1 || n.indexOf('wf_') !== -1) return 'necessary';
        return 'functionality';
    };

    DeepCookieScanner.prototype.guessPurpose = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1) return 'Google Analytics';
        if (n.indexOf('fb') !== -1) return 'Facebook Tracking';
        if (n.indexOf('wf') !== -1) return 'Webflow Platform';
        return 'Website-Funktion';
    };

    DeepCookieScanner.prototype.guessTool = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1) return 'Google Analytics';
        if (n.indexOf('fb') !== -1) return 'Facebook';
        if (n.indexOf('wf') !== -1) return 'Webflow';
        if (n.indexOf('cc_') !== -1) return 'CookieConsent';
        return null;
    };

    DeepCookieScanner.prototype.getToolCategory = function(tool) {
        var marketing = ['Google Ads', 'Google DoubleClick', 'Facebook', 'Facebook Pixel'];
        var analytics = ['Google Analytics', 'Hotjar', 'Segment', 'Google Tag Manager'];
        var necessary = ['Webflow', 'CookieConsent'];
        if (marketing.indexOf(tool) !== -1) return 'marketing';
        if (analytics.indexOf(tool) !== -1) return 'analytics';
        if (necessary.indexOf(tool) !== -1) return 'necessary';
        return 'functionality';
    };

    DeepCookieScanner.prototype.generateCookieListHTML = function(category) {
        var cookies = this.scannedCookies[category];
        if (cookies.length === 0) {
            return '<p style="color:#718096;font-size:13px;text-align:center;padding:20px">Keine Cookies in dieser Kategorie gefunden</p>';
        }
        
        var html = '<div class="cookie-details">';
        html += '<div style="margin-bottom:12px;color:#4a5568;font-weight:700;font-size:14px">Gefundene Elemente: <span class="cookie-count">' + cookies.length + '</span></div>';
        
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            html += '<div class="cookie-item">';
            html += '<div class="cookie-name">' + c.name + '</div>';
            
            html += '<div class="cookie-meta">';
            html += '<div class="cookie-meta-item"><strong>Typ:</strong> ' + c.type + '</div>';
            html += '<div class="cookie-meta-item"><strong>Dauer:</strong> ' + c.duration + '</div>';
            if (c.tool) {
                html += '<div class="cookie-meta-item"><strong>Anbieter:</strong> ' + c.tool + '</div>';
            }
            html += '</div>';
            
            html += '<div class="cookie-purpose"><strong>Zweck:</strong> ' + c.description + '</div>';
            
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    };

    DeepCookieScanner.prototype.getCategoryDescription = function(category) {
        var count = this.scannedCookies[category].length;
        var descriptions = {
            necessary: 'Diese Cookies sind für die Grundfunktionen der Website unerlässlich und können nicht deaktiviert werden',
            functionality: 'Diese Cookies ermöglichen erweiterte Funktionen wie Spracheinstellungen und Personalisierung',
            analytics: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren und sie zu verbessern',
            marketing: 'Diese Cookies werden verwendet, um Werbung für Sie relevanter zu gestalten'
        };
        return descriptions[category] + '. <strong>' + count + ' Element(e) erkannt.</strong>';
    };

    DeepCookieScanner.prototype.getToolsSummary = function() {
        if (this.detectedTools.size === 0) {
            return '<div class="scan-status">' + ICONS.check + ' <span>Keine externen Tracking-Tools erkannt</span></div>';
        }
        var tools = Array.from(this.detectedTools).sort();
        var html = '<div class="scan-status">' + ICONS.magnifying + ' <span><strong>Erkannte Tools:</strong><br>';
        for (var i = 0; i < tools.length; i++) {
            html += '<span style="background:#fff;padding:4px 10px;margin:4px 2px;display:inline-block;border-radius:4px;font-size:12px;font-weight:600">' + tools[i] + '</span> ';
        }
        html += '</span></div>';
        return html;
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Webflow Cookie Consent v4 FINAL');
        
        injectCSS();

        loadCookieConsent(() => {
            var scanner = new DeepCookieScanner();
            
            setTimeout(function() {
                scanner.performDeepScan();
            }, CONFIG.scanDelay);

            if (CONFIG.deepScanInterval > 0) {
                setInterval(function() {
                    scanner.performDeepScan();
                }, CONFIG.deepScanInterval);
            }

            window.CookieConsent.run({
                guiOptions: {
                    consentModal: { layout: "box", position: "bottom left", equalWeightButtons: true, flipButtons: false },
                    preferencesModal: { layout: "box", position: "right", equalWeightButtons: true, flipButtons: true }
                },
                categories: {
                    necessary: { readOnly: true, enabled: true },
                    functionality: {},
                    analytics: { autoClear: { cookies: [{ name: /^(_ga|_gid|_gat|__utm|_hj)/ }] } },
                    marketing: { autoClear: { cookies: [{ name: /^(fr|_fbp|_fbc|IDE|__gads)/ }] } }
                },
                language: {
                    default: "de",
                    autoDetect: "browser",
                    translations: {
                        de: {
                            consentModal: {
                                title: '<span class="cookie-icon-inline">' + ICONS.cookie + '<span>Cookie-Einstellungen</span></span>',
                                description: "Wir nutzen Cookies zur Verbesserung Ihrer Erfahrung",
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                showPreferencesBtn: "Details",
                                footer: '<a href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>\n<a href="' + CONFIG.termsUrl + '">Impressum</a>'
                            },
                            preferencesModal: {
                                title: '<span class="cookie-icon-inline">' + ICONS.magnifying + '<span>Cookie-Einstellungen</span></span>',
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                savePreferencesBtn: "Speichern",
                                closeIconLabel: "Schließen",
                                serviceCounterLabel: "Dienste",
                                sections: [
                                    { title: "Automatische Erkennung", description: scanner.getToolsSummary() },
                                    { 
                                        title: '<span class="section-title-icon">' + ICONS.shield + '<span>Notwendig</span></span> <span class="pm__badge">Immer aktiv</span>', 
                                        description: scanner.getCategoryDescription('necessary') + '<br><br>' + scanner.generateCookieListHTML('necessary'), 
                                        linkedCategory: "necessary" 
                                    },
                                    { 
                                        title: '<span class="section-title-icon">' + ICONS.cog + '<span>Funktional</span></span>', 
                                        description: scanner.getCategoryDescription('functionality') + '<br><br>' + scanner.generateCookieListHTML('functionality'), 
                                        linkedCategory: "functionality" 
                                    },
                                    { 
                                        title: '<span class="section-title-icon">' + ICONS.chart + '<span>Analyse</span></span>', 
                                        description: scanner.getCategoryDescription('analytics') + '<br><br>' + scanner.generateCookieListHTML('analytics'), 
                                        linkedCategory: "analytics" 
                                    },
                                    { 
                                        title: '<span class="section-title-icon">' + ICONS.megaphone + '<span>Marketing</span></span>', 
                                        description: scanner.getCategoryDescription('marketing') + '<br><br>' + scanner.generateCookieListHTML('marketing'), 
                                        linkedCategory: "marketing" 
                                    },
                                    { 
                                        title: '<span class="section-title-icon">' + ICONS.info + '<span>Weitere Infos</span></span>', 
                                        description: 'Weitere Details finden Sie in unserer <a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutzerklärung</a>' 
                                    }
                                ]
                            }
                        }
                    }
                },
                onConsent: function() {
                    setTimeout(function() { scanner.performDeepScan(); }, 1000);
                }
            });

            const createButton = () => {
                if (document.getElementById('cookie-settings-btn')) return;
                var btn = document.createElement('button');
                btn.id = 'cookie-settings-btn';
                btn.innerHTML = ICONS.cookie + ' Cookie-Einstellungen';
                btn.setAttribute('aria-label', 'Cookie-Einstellungen');
                btn.setAttribute('type', 'button');
                btn.onclick = function() {
                    scanner.performDeepScan();
                    window.CookieConsent.showPreferences();
                };
                document.body.appendChild(btn);
            };

            waitForDOM(createButton);
            if (window.addEventListener) {
                window.addEventListener('cc:onConsent', createButton);
            }

            window.deepScanCookies = function() {
                scanner.performDeepScan();
                console.table(scanner.scannedCookies);
                return { cookies: scanner.scannedCookies, tools: Array.from(scanner.detectedTools) };
            };
            
            window.resetCookieConsent = function() {
                window.CookieConsent.reset(true);
                location.reload();
            };

            console.log('✅ Cookie Consent v4 ready!');
        });
    };

    waitForDOM(init);

})();
