/**
 * Webflow Cookie Consent with Deep Scanner v2.0
 * Mit Heroicons und verbessertem Cookie-Scanning
 * 
 * INSTALLATION:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-v2.js"></script>
 */

(function() {
    'use strict';

    // ===================================
    // HEROICONS SVG (Inline)
    // ===================================
    const ICONS = {
        cookie: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cookie"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-shield"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>',
        cog: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cog"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        chart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-chart"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',
        megaphone: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-megaphone"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-info"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-check"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        magnifying: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-magnifying"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>'
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
            .icon-cookie,.icon-shield,.icon-cog,.icon-chart,.icon-megaphone,.icon-info,.icon-check,.icon-magnifying{width:20px;height:20px;display:inline-block;vertical-align:middle;margin-right:6px}
            #cookie-settings-btn{position:fixed;bottom:20px;left:20px;background:#2d3748;color:#fff;border:none;border-radius:8px;padding:12px 20px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:2147483647!important;transition:all .3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;gap:8px}
            #cookie-settings-btn svg{width:18px;height:18px}
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
            .cookie-icon-wrapper{display:inline-flex;align-items:center;gap:4px}
        `;
        document.head.appendChild(style);
        
        console.log('✅ CSS injected');
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
        scanDelay: 2000, // Warte 2s nach Page Load
    };

    const loadCookieConsent = (callback) => {
        if (window.CookieConsent) {
            console.log('✅ CookieConsent already loaded');
            callback();
            return;
        }

        console.log('📥 Loading CookieConsent...');
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
        script.onload = () => {
            console.log('✅ CookieConsent loaded');
            callback();
        };
        script.onerror = () => console.error('❌ Failed to load CookieConsent');
        document.head.appendChild(script);
    };

    // ===================================
    // IMPROVED DEEP SCANNER
    // ===================================
    function DeepCookieScanner() {
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools = new Set();
        this.detectedScripts = new Set();
        this.scanCount = 0;
        
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

    DeepCookieScanner.prototype.performDeepScan = function() {
        this.scanCount++;
        console.log('🔍 Deep Scan #' + this.scanCount);
        
        // Reset
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        
        this.scanBrowserCookies();
        this.scanStorage();
        this.scanScripts();
        this.scanIframes();
        
        // Immer Cookie Consent Cookie hinzufügen
        if (this.scanCount === 1) {
            this.scannedCookies.necessary.push({
                name: 'cc_cookie',
                purpose: 'Cookie Consent Einstellung',
                duration: '6 Monate',
                category: 'necessary',
                type: 'cookie',
                tool: 'CookieConsent'
            });
        }
        
        var totalCookies = 
            this.scannedCookies.necessary.length +
            this.scannedCookies.functionality.length +
            this.scannedCookies.analytics.length +
            this.scannedCookies.marketing.length;
        
        console.log('✅ Scan complete: ' + totalCookies + ' items found');
        return this.scannedCookies;
    };

    DeepCookieScanner.prototype.scanBrowserCookies = function() {
        var cookies = document.cookie.split(';');
        var found = {};
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (!cookie) continue;
            var name = cookie.split('=')[0];
            if (name && !found[name]) {
                found[name] = true;
                var data = this.analyzeCookie(name, 'cookie');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
        }
    };

    DeepCookieScanner.prototype.scanStorage = function() {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var data = this.analyzeCookie(key, 'localStorage');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
        } catch(e) {}
        
        try {
            for (var i = 0; i < sessionStorage.length; i++) {
                var key = sessionStorage.key(i);
                var data = this.analyzeCookie(key, 'sessionStorage');
                this.scannedCookies[data.category].push(data);
                if (data.tool) this.detectedTools.add(data.tool);
            }
        } catch(e) {}
    };

    DeepCookieScanner.prototype.scanScripts = function() {
        var scripts = document.querySelectorAll('script[src]');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src;
            for (var domain in this.scriptDomains) {
                if (src.indexOf(domain) !== -1) {
                    var tool = this.scriptDomains[domain];
                    this.detectedTools.add(tool);
                    break;
                }
            }
        }
    };

    DeepCookieScanner.prototype.scanIframes = function() {
        var iframes = document.querySelectorAll('iframe[src]');
        for (var i = 0; i < iframes.length; i++) {
            var src = iframes[i].src;
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
                    tool: data.tool
                };
            }
        }
        return {
            name: name,
            purpose: this.guessPurpose(name),
            duration: type === 'sessionStorage' ? 'Session' : '1 Jahr',
            category: this.guessCategory(name),
            type: type,
            tool: this.guessTool(name)
        };
    };

    DeepCookieScanner.prototype.guessCategory = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1 || n.indexOf('analytics') !== -1 || n.indexOf('_hj') !== -1 || n.indexOf('utm') !== -1) return 'analytics';
        if (n.indexOf('fb') !== -1 || n.indexOf('ad') !== -1 || n.indexOf('marketing') !== -1) return 'marketing';
        if (n.indexOf('lang') !== -1 || n.indexOf('locale') !== -1 || n.indexOf('preference') !== -1) return 'functionality';
        if (n.indexOf('session') !== -1 || n.indexOf('csrf') !== -1 || n.indexOf('wf_') !== -1 || n.indexOf('cc_') !== -1) return 'necessary';
        return 'functionality';
    };

    DeepCookieScanner.prototype.guessPurpose = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1) return 'Google Analytics';
        if (n.indexOf('fb') !== -1) return 'Facebook';
        if (n.indexOf('wf') !== -1) return 'Webflow';
        return 'Website-Funktion';
    };

    DeepCookieScanner.prototype.guessTool = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1 || n.indexOf('_gid') !== -1) return 'Google Analytics';
        if (n.indexOf('fb') !== -1) return 'Facebook';
        if (n.indexOf('wf') !== -1) return 'Webflow';
        return null;
    };

    DeepCookieScanner.prototype.getToolCategory = function(tool) {
        var marketing = ['Google Ads', 'Google DoubleClick', 'Facebook', 'Facebook Pixel'];
        var analytics = ['Google Analytics', 'Hotjar', 'Segment', 'Amplitude', 'Mixpanel'];
        var necessary = ['Webflow', 'PHP', 'CookieConsent'];
        if (marketing.indexOf(tool) !== -1) return 'marketing';
        if (analytics.indexOf(tool) !== -1) return 'analytics';
        if (necessary.indexOf(tool) !== -1) return 'necessary';
        return 'functionality';
    };

    DeepCookieScanner.prototype.generateCookieListHTML = function(category) {
        var cookies = this.scannedCookies[category];
        if (cookies.length === 0) {
            return '<p style="color:#718096;font-size:13px;text-align:center;padding:20px">Keine Cookies gefunden</p>';
        }
        var html = '<div class="cookie-details"><div style="margin-bottom:10px;color:#4a5568;font-weight:600">Gefundene Cookies: <span class="cookie-count">' + cookies.length + '</span></div>';
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            html += '<div class="cookie-item"><div style="flex:1"><div class="cookie-name">' + c.name + '</div><div class="cookie-info">' + c.duration + ' • ' + c.type + '</div><div class="cookie-purpose">' + c.purpose + '</div>';
            if (c.tool) html += '<div class="cookie-source">' + c.tool + '</div>';
            html += '</div></div>';
        }
        return html + '</div>';
    };

    DeepCookieScanner.prototype.getCategoryDescription = function(category) {
        var count = this.scannedCookies[category].length;
        var descriptions = {
            necessary: 'Essentiell für die Funktion der Website',
            functionality: 'Erweiterte Funktionen und Personalisierung',
            analytics: 'Website-Analyse und Optimierung',
            marketing: 'Werbung und Marketing'
        };
        return descriptions[category] + '. <strong>' + count + ' Element(e) erkannt.</strong>';
    };

    DeepCookieScanner.prototype.getToolsSummary = function() {
        if (this.detectedTools.size === 0) {
            return '<div class="scan-status">' + ICONS.check + ' Keine externen Tracking-Tools erkannt</div>';
        }
        var tools = Array.from(this.detectedTools).sort();
        var html = '<div class="scan-status">' + ICONS.magnifying + ' Erkannte Tools:<br><br>';
        for (var i = 0; i < tools.length; i++) {
            html += '<span style="background:#fff;padding:4px 8px;margin:2px;display:inline-block;border-radius:4px;font-size:11px">' + tools[i] + '</span> ';
        }
        return html + '</div>';
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Initializing Webflow Cookie Consent v2...');
        
        injectCSS();

        loadCookieConsent(() => {
            var scanner = new DeepCookieScanner();
            
            // Delayed initial scan (warte bis alle Cookies gesetzt sind)
            setTimeout(function() {
                scanner.performDeepScan();
            }, CONFIG.scanDelay);

            // Periodic scan
            if (CONFIG.deepScanInterval > 0) {
                setInterval(function() {
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
                                title: '<span class="cookie-icon-wrapper">' + ICONS.cookie + ' Cookie-Einstellungen</span>',
                                description: "Automatischer Deep Scanner erkennt alle Cookies und Tools",
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                showPreferencesBtn: "Details",
                                footer: '<a href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>\n<a href="' + CONFIG.termsUrl + '">Impressum</a>'
                            },
                            preferencesModal: {
                                title: '<span class="cookie-icon-wrapper">' + ICONS.magnifying + ' Cookie-Einstellungen</span>',
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                savePreferencesBtn: "Speichern",
                                closeIconLabel: "Schließen",
                                serviceCounterLabel: "Dienste",
                                sections: [
                                    { title: "Automatische Erkennung", description: scanner.getToolsSummary() },
                                    { title: '<span class="cookie-icon-wrapper">' + ICONS.shield + ' Notwendig</span> <span class="pm__badge">Immer aktiv</span>', description: scanner.getCategoryDescription('necessary') + '<br><br>' + scanner.generateCookieListHTML('necessary'), linkedCategory: "necessary" },
                                    { title: '<span class="cookie-icon-wrapper">' + ICONS.cog + ' Funktional</span>', description: scanner.getCategoryDescription('functionality') + '<br><br>' + scanner.generateCookieListHTML('functionality'), linkedCategory: "functionality" },
                                    { title: '<span class="cookie-icon-wrapper">' + ICONS.chart + ' Analyse</span>', description: scanner.getCategoryDescription('analytics') + '<br><br>' + scanner.generateCookieListHTML('analytics'), linkedCategory: "analytics" },
                                    { title: '<span class="cookie-icon-wrapper">' + ICONS.megaphone + ' Marketing</span>', description: scanner.getCategoryDescription('marketing') + '<br><br>' + scanner.generateCookieListHTML('marketing'), linkedCategory: "marketing" },
                                    { title: '<span class="cookie-icon-wrapper">' + ICONS.info + ' Weitere Infos</span>', description: '<a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutzerklärung</a>' }
                                ]
                            }
                        }
                    }
                },
                onConsent: function() {
                    setTimeout(function() {
                        scanner.performDeepScan();
                    }, 2000);
                }
            });

            // Create button
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
                console.log('✅ Button created');
            };

            waitForDOM(createButton);
            if (window.addEventListener) {
                window.addEventListener('cc:onConsent', createButton);
            }

            // Dev tools
            window.deepScanCookies = function() {
                scanner.performDeepScan();
                return {
                    cookies: scanner.scannedCookies,
                    tools: Array.from(scanner.detectedTools)
                };
            };
            
            window.resetCookieConsent = function() {
                window.CookieConsent.reset(true);
                location.reload();
            };

            console.log('🍪 Webflow Cookie Consent v2 geladen!');
            console.log('💡 Nutze window.deepScanCookies() zum Testen');
        });
    };

    waitForDOM(init);

})();
