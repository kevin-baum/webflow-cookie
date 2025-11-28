/**
 * Webflow Cookie Consent with Deep Scanner v3.0
 * Mit Heroicons Solid und funktionierendem Cookie-Scanning
 * 
 * INSTALLATION:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-v3.js"></script>
 */

(function() {
    'use strict';

    // ===================================
    // HEROICONS SOLID (Inline SVG)
    // ===================================
    const ICONS = {
        cookie: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
        cog: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" /></svg>',
        chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" /></svg>',
        megaphone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
        magnifying: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" /><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" /></svg>'
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
            .cookie-icon-wrapper{display:inline-flex!important;align-items:center!important;gap:8px!important}
            .cookie-icon-wrapper svg{width:20px;height:20px;flex-shrink:0}
            #cookie-settings-btn{position:fixed;bottom:20px;left:20px;background:#2d3748;color:#fff;border:none;border-radius:8px;padding:12px 20px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:2147483647!important;transition:all .3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:inline-flex!important;align-items:center!important;gap:8px!important}
            #cookie-settings-btn svg{width:18px;height:18px;flex-shrink:0}
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
            .scan-status{background:#d4edda;border:1px solid #c3e6cb;color:#155724;padding:8px 12px;border-radius:4px;margin:10px 0;font-size:12px;font-weight:500;display:flex;align-items:center;gap:8px}
            .scan-status svg{width:18px;height:18px;flex-shrink:0}
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
        scanDelay: 3000, // Warte 3s nach Page Load für Cookies
    };

    const loadCookieConsent = (callback) => {
        if (window.CookieConsent) {
            callback();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
        script.onload = callback;
        script.onerror = () => console.error('❌ Failed to load CookieConsent');
        document.head.appendChild(script);
    };

    // ===================================
    // IMPROVED DEEP SCANNER V3
    // ===================================
    function DeepCookieScanner() {
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools = new Set();
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
            'cc_cookie': { purpose: 'Cookie Consent', duration: '6 Monate', category: 'necessary', tool: 'CookieConsent' },
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
        
        // Reset
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools.clear();
        
        this.scanBrowserCookies();
        this.scanStorage();
        this.scanScripts();
        
        // WICHTIG: Füge immer mindestens einen Cookie hinzu damit es nicht leer ist
        if (this.scannedCookies.necessary.length === 0) {
            this.scannedCookies.necessary.push({
                name: 'cc_cookie',
                purpose: 'Speichert Cookie-Einstellungen',
                duration: '6 Monate',
                category: 'necessary',
                type: 'cookie',
                tool: 'CookieConsent'
            });
        }
        
        // Füge erkannte Tools als "Scripts" hinzu
        var tools = Array.from(this.detectedTools);
        for (var i = 0; i < tools.length; i++) {
            var tool = tools[i];
            var category = this.getToolCategory(tool);
            this.scannedCookies[category].push({
                name: tool + ' (erkannt)',
                purpose: 'Tool wurde auf der Seite gefunden',
                duration: 'Laufzeit',
                category: category,
                type: 'script',
                tool: tool
            });
        }
        
        var total = 
            this.scannedCookies.necessary.length +
            this.scannedCookies.functionality.length +
            this.scannedCookies.analytics.length +
            this.scannedCookies.marketing.length;
        
        console.log('🔍 Scan #' + this.scanCount + ': ' + total + ' Elemente gefunden');
        console.log('Browser Cookies: ' + document.cookie.split(';').filter(function(c){return c.trim();}).length);
        
        return this.scannedCookies;
    };

    DeepCookieScanner.prototype.scanBrowserCookies = function() {
        var cookieString = document.cookie;
        if (!cookieString || cookieString.trim() === '') {
            console.log('⚠️ Keine Browser-Cookies gefunden');
            return;
        }
        
        var cookies = cookieString.split(';');
        var found = {};
        
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (!cookie) continue;
            
            var parts = cookie.split('=');
            var name = parts[0];
            
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
                if (key) {
                    var data = this.analyzeCookie(key, 'localStorage');
                    this.scannedCookies[data.category].push(data);
                    if (data.tool) this.detectedTools.add(data.tool);
                }
            }
        } catch(e) {
            console.log('⚠️ localStorage nicht verfügbar');
        }
        
        try {
            for (var i = 0; i < sessionStorage.length; i++) {
                var key = sessionStorage.key(i);
                if (key) {
                    var data = this.analyzeCookie(key, 'sessionStorage');
                    this.scannedCookies[data.category].push(data);
                    if (data.tool) this.detectedTools.add(data.tool);
                }
            }
        } catch(e) {
            console.log('⚠️ sessionStorage nicht verfügbar');
        }
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
        if (n.indexOf('ga') !== -1 || n.indexOf('analytics') !== -1 || n.indexOf('_hj') !== -1) return 'analytics';
        if (n.indexOf('fb') !== -1 || n.indexOf('ad') !== -1) return 'marketing';
        if (n.indexOf('lang') !== -1 || n.indexOf('locale') !== -1) return 'functionality';
        if (n.indexOf('session') !== -1 || n.indexOf('cc_') !== -1 || n.indexOf('wf_') !== -1) return 'necessary';
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
            return '<p style="color:#718096;font-size:13px;text-align:center;padding:20px">Keine Cookies gefunden</p>';
        }
        
        var html = '<div class="cookie-details">';
        html += '<div style="margin-bottom:10px;color:#4a5568;font-weight:600">Gefundene Elemente: <span class="cookie-count">' + cookies.length + '</span></div>';
        
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            html += '<div class="cookie-item">';
            html += '<div style="flex:1">';
            html += '<div class="cookie-name">' + c.name + '</div>';
            html += '<div class="cookie-info">' + c.duration + ' • ' + c.type + '</div>';
            html += '<div class="cookie-purpose">' + c.purpose + '</div>';
            if (c.tool) html += '<div class="cookie-source">' + c.tool + '</div>';
            html += '</div>';
            html += '</div>';
        }
        
        html += '</div>';
        return html;
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
        html += '</div>';
        return html;
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Initializing Webflow Cookie Consent v3...');
        
        injectCSS();

        loadCookieConsent(() => {
            var scanner = new DeepCookieScanner();
            
            // Warte länger damit alle Cookies gesetzt sind
            setTimeout(function() {
                console.log('🔍 Starte initialen Scan...');
                scanner.performDeepScan();
            }, CONFIG.scanDelay);

            // Periodic scan
            if (CONFIG.deepScanInterval > 0) {
                setInterval(function() {
                    scanner.performDeepScan();
                }, CONFIG.deepScanInterval);
            }

            // Configure CookieConsent - Verwende Funktion statt feste Strings
            var getSections = function() {
                return [
                    { 
                        title: "Automatische Erkennung", 
                        description: scanner.getToolsSummary() 
                    },
                    { 
                        title: '<span class="cookie-icon-wrapper">' + ICONS.shield + '<span>Notwendig</span></span> <span class="pm__badge">Immer aktiv</span>', 
                        description: scanner.getCategoryDescription('necessary') + '<br><br>' + scanner.generateCookieListHTML('necessary'), 
                        linkedCategory: "necessary" 
                    },
                    { 
                        title: '<span class="cookie-icon-wrapper">' + ICONS.cog + '<span>Funktional</span></span>', 
                        description: scanner.getCategoryDescription('functionality') + '<br><br>' + scanner.generateCookieListHTML('functionality'), 
                        linkedCategory: "functionality" 
                    },
                    { 
                        title: '<span class="cookie-icon-wrapper">' + ICONS.chart + '<span>Analyse</span></span>', 
                        description: scanner.getCategoryDescription('analytics') + '<br><br>' + scanner.generateCookieListHTML('analytics'), 
                        linkedCategory: "analytics" 
                    },
                    { 
                        title: '<span class="cookie-icon-wrapper">' + ICONS.megaphone + '<span>Marketing</span></span>', 
                        description: scanner.getCategoryDescription('marketing') + '<br><br>' + scanner.generateCookieListHTML('marketing'), 
                        linkedCategory: "marketing" 
                    },
                    { 
                        title: '<span class="cookie-icon-wrapper">' + ICONS.info + '<span>Weitere Infos</span></span>', 
                        description: '<a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutzerklärung</a>' 
                    }
                ];
            };

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
                                title: '<span class="cookie-icon-wrapper">' + ICONS.cookie + '<span>Cookie-Einstellungen</span></span>',
                                description: "Wir nutzen Cookies zur Verbesserung Ihrer Erfahrung",
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                showPreferencesBtn: "Details",
                                footer: '<a href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>\n<a href="' + CONFIG.termsUrl + '">Impressum</a>'
                            },
                            preferencesModal: {
                                title: '<span class="cookie-icon-wrapper">' + ICONS.magnifying + '<span>Cookie-Einstellungen</span></span>',
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                savePreferencesBtn: "Speichern",
                                closeIconLabel: "Schließen",
                                serviceCounterLabel: "Dienste",
                                sections: getSections()
                            }
                        }
                    }
                },
                onConsent: function() {
                    setTimeout(function() {
                        scanner.performDeepScan();
                    }, 1000);
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
                    // Update sections dynamisch
                    window.CookieConsent.showPreferences();
                };
                document.body.appendChild(btn);
            };

            waitForDOM(createButton);
            if (window.addEventListener) {
                window.addEventListener('cc:onConsent', createButton);
            }

            // Dev tools
            window.deepScanCookies = function() {
                scanner.performDeepScan();
                console.table(scanner.scannedCookies);
                return {
                    cookies: scanner.scannedCookies,
                    tools: Array.from(scanner.detectedTools)
                };
            };
            
            window.resetCookieConsent = function() {
                window.CookieConsent.reset(true);
                location.reload();
            };

            console.log('🍪 Webflow Cookie Consent v3 geladen!');
        });
    };

    waitForDOM(init);

})();
