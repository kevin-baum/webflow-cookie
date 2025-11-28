/**
 * Webflow Cookie Consent with Deep Scanner
 * Version: 1.0.1 - Webflow Compatible (No ES6 Modules)
 * 
 * INSTALLATION IN WEBFLOW:
 * Project Settings → Custom Code → Footer Code
 * 
 * Paste this:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-webflow.js"></script>
 */

(function() {
    'use strict';

    // ===================================
    // WAIT FOR DOM
    // ===================================
    const waitForDOM = (callback) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    };

    // ===================================
    // CSS INJECTION
    // ===================================
    const injectCSS = () => {
        if (document.getElementById('webflow-cookie-css')) return;
        
        // CookieConsent CSS
        const link = document.createElement('link');
        link.id = 'webflow-cookie-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css';
        document.head.appendChild(link);

        // Custom CSS
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
        
        console.log('✅ CSS injected');
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
        script.onerror = () => {
            console.error('❌ Failed to load CookieConsent');
        };
        document.head.appendChild(script);
    };

    // ===================================
    // DEEP SCANNER CLASS
    // ===================================
    function DeepCookieScanner() {
        this.scannedCookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.detectedTools = new Set();
        this.detectedScripts = new Set();
        
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
        this.scanBrowserCookies();
        this.scanStorage();
        this.scanScripts();
        this.scanIframes();
        return this.scannedCookies;
    };

    DeepCookieScanner.prototype.scanBrowserCookies = function() {
        var cookies = document.cookie.split(';');
        var found = {};
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
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
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var data = this.analyzeCookie(key, 'localStorage');
            this.scannedCookies[data.category].push(data);
            if (data.tool) this.detectedTools.add(data.tool);
        }
        for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            var data = this.analyzeCookie(key, 'sessionStorage');
            this.scannedCookies[data.category].push(data);
            if (data.tool) this.detectedTools.add(data.tool);
        }
    };

    DeepCookieScanner.prototype.scanScripts = function() {
        var scripts = document.querySelectorAll('script[src]');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src;
            for (var domain in this.scriptDomains) {
                if (src.indexOf(domain) !== -1) {
                    var tool = this.scriptDomains[domain];
                    this.detectedTools.add(tool);
                    var category = this.getToolCategory(tool);
                    this.scannedCookies[category].push({
                        name: '📜 ' + tool + ' Script',
                        purpose: 'Externes Script',
                        duration: 'Runtime',
                        category: category,
                        type: 'script',
                        tool: tool
                    });
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
        if (n.indexOf('session') !== -1 || n.indexOf('csrf') !== -1 || n.indexOf('wf_') !== -1) return 'necessary';
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
        var necessary = ['Webflow', 'PHP'];
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
            if (c.tool) html += '<div class="cookie-source">🔧 ' + c.tool + '</div>';
            html += '</div></div>';
        }
        return html + '</div>';
    };

    DeepCookieScanner.prototype.getCategoryDescription = function(category) {
        var count = this.scannedCookies[category].length;
        var descriptions = {
            necessary: 'Essentiell für die Funktion',
            functionality: 'Erweiterte Funktionen',
            analytics: 'Website-Analyse',
            marketing: 'Werbung und Marketing'
        };
        return descriptions[category] + '. <strong>' + count + ' Element(e) erkannt.</strong>';
    };

    DeepCookieScanner.prototype.getToolsSummary = function() {
        if (this.detectedTools.size === 0) return '<div class="scan-status">✅ Keine externen Tools</div>';
        var tools = Array.from(this.detectedTools).sort();
        var html = '<div class="scan-status">🔍 Erkannte Tools:<br><br>';
        for (var i = 0; i < tools.length; i++) {
            html += '<span style="background:#fff;padding:4px 8px;margin:2px;display:inline-block;border-radius:4px;font-size:11px">🛠️ ' + tools[i] + '</span> ';
        }
        return html + '</div>';
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Initializing Webflow Cookie Consent...');
        
        // Inject CSS
        injectCSS();

        // Load CookieConsent
        loadCookieConsent(() => {
            // Initialize Scanner
            var scanner = new DeepCookieScanner();
            
            // Initial scan
            setTimeout(function() {
                scanner.performDeepScan();
                console.log('✅ Initial scan complete');
            }, 1500);

            // Periodic scan
            if (CONFIG.deepScanInterval > 0) {
                setInterval(function() {
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
                                footer: '<a href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>\n<a href="' + CONFIG.termsUrl + '">Impressum</a>'
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
                                    { title: "ℹ️ Info", description: '<a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>' }
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
                btn.innerHTML = '🍪 Cookie-Einstellungen';
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

            console.log('🍪 Webflow Cookie Consent mit Deep Scanner geladen!');
            console.log('💡 Nutze window.deepScanCookies() zum Testen');
        });
    };

    // Start
    waitForDOM(init);

})();
