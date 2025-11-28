/**
 * Webflow Cookie Consent - FINAL VERSION with Heroicons
 * Schwarze Icons, 16x16px, Flex Layout
 * 
 * INSTALLATION:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-final.js"></script>
 */

(function() {
    'use strict';

    // ===================================
    // HEROICONS SOLID 16x16 BLACK
    // ===================================
    const ICONS = {
        cookie: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM4 8a1 1 0 112 0 1 1 0 01-2 0zm6-1a1 1 0 100 2 1 1 0 000-2zM7 11a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd" /></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M8 0a.75.75 0 01.555.24l6.25 6.5a.75.75 0 01-.555 1.26H10v6.25a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75V8H2a.75.75 0 01-.555-1.26l6.25-6.5A.75.75 0 018 0zm3.78 6.5L8 2.35 4.22 6.5h7.56zM8.5 13V8h-1v5h1z" clip-rule="evenodd" /></svg>',
        cog: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M7.5 1.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.585a5.5 5.5 0 011.735.88l.494-.494a.5.5 0 01.707 0l.354.354a.5.5 0 010 .707l-.494.494c.383.52.662 1.105.88 1.735H13.5a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5h-.585a5.5 5.5 0 01-.88 1.735l.494.494a.5.5 0 010 .707l-.354.354a.5.5 0 01-.707 0l-.494-.494a5.5 5.5 0 01-1.735.88v.585a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-.585a5.5 5.5 0 01-1.735-.88l-.494.494a.5.5 0 01-.707 0l-.354-.354a.5.5 0 010-.707l.494-.494A5.5 5.5 0 014.585 8.5H4a.5.5 0 01-.5-.5V7.5a.5.5 0 01.5-.5h.585a5.5 5.5 0 01.88-1.735l-.494-.494a.5.5 0 010-.707l.354-.354a.5.5 0 01.707 0l.494.494A5.5 5.5 0 017.5 3.085V2.5zm2 6.5a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" /></svg>',
        chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path d="M12 2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h8zM5 5a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5A.5.5 0 005 5zm3-1a.5.5 0 00-.5.5v6.5a.5.5 0 001 0V4.5A.5.5 0 008 4zm3 2a.5.5 0 00-.5.5v4.5a.5.5 0 001 0V6.5A.5.5 0 0011 6z" /></svg>',
        megaphone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path d="M13.5 3a.5.5 0 01.5.5V12a.5.5 0 01-.854.354l-3.5-3.5H5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h4.646l3.5-3.5A.5.5 0 0113.5 3z" /><path d="M3 6.5a.5.5 0 01.5-.5H5v2H3.5a.5.5 0 01-.5-.5v-1z" /><path d="M2 6.5A1.5 1.5 0 013.5 5H5v3H3.5A1.5 1.5 0 012 6.5z" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M15 8A7 7 0 111 8a7 7 0 0114 0zM9 5a1 1 0 11-2 0 1 1 0 012 0zM6.5 7.5A.5.5 0 017 7h1.5v3H7a.5.5 0 010-1h.5V8H7a.5.5 0 01-.5-.5zM7 11a.5.5 0 000 1h2a.5.5 0 000-1H7z" clip-rule="evenodd" /></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M15 8A7 7 0 111 8a7 7 0 0114 0zm-4.146-2.854a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L6.5 8.793l3.646-3.647a.5.5 0 01.708 0z" clip-rule="evenodd" /></svg>',
        magnifying: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;color:#000"><path fill-rule="evenodd" d="M7 11a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 117 2a5 5 0 010 10z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M11.854 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd" /></svg>'
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
            .icon-text{display:flex!important;align-items:center!important;gap:8px!important}
            .icon-text svg{width:16px!important;height:16px!important;flex-shrink:0!important;color:#000!important}
            #cookie-settings-btn{position:fixed;bottom:20px;left:20px;background:#2d3748;color:#fff;border:none;border-radius:50%;padding:14px;font-size:14px;font-weight:500;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:2147483647!important;transition:all .3s ease;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex!important;align-items:center!important;justify-content:center!important;width:48px;height:48px}
            #cookie-settings-btn svg{width:24px!important;height:24px!important;color:#fff!important}
            #cookie-settings-btn:hover{background:#1a202c;transform:translateY(-2px) rotate(20deg);box-shadow:0 6px 12px rgba(0,0,0,.15)}
            @media (max-width:768px){#cookie-settings-btn{bottom:10px;left:10px;width:44px;height:44px;padding:12px}}
            .pm__badge{background:#48bb78;color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:600;margin-left:8px}
            .cookie-list{background:#f7fafc;border-radius:6px;padding:14px;margin:12px 0;font-size:13px;border:1px solid #e2e8f0}
            .cookie-item{background:#fff;border-left:4px solid #4299e1;border-radius:6px;padding:12px;margin:10px 0;box-shadow:0 1px 3px rgba(0,0,0,.1)}
            .cookie-name{font-weight:700;color:#2d3748;font-size:14px;margin-bottom:8px}
            .cookie-row{display:flex;justify-content:space-between;margin:4px 0;font-size:12px;line-height:1.6}
            .cookie-label{color:#718096;font-weight:600;min-width:80px}
            .cookie-value{color:#2d3748;flex:1;text-align:right}
            .cookie-desc{background:#e6fffa;color:#234e52;padding:8px;border-radius:4px;margin-top:8px;font-size:12px;line-height:1.5}
            .scan-info{background:#d4edda;border:1px solid #c3e6cb;color:#155724;padding:12px;border-radius:6px;margin:12px 0;font-size:13px;display:flex;align-items:center;gap:8px}
            .scan-info svg{width:16px!important;height:16px!important;color:#155724!important}
            .cookie-count{background:#4299e1;color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:700}
            .no-cookies{color:#718096;text-align:center;padding:20px;font-style:italic}
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
        script.onerror = () => console.error('❌ CookieConsent failed');
        document.head.appendChild(script);
    };

    // ===================================
    // SCANNER - SIMPLIFIED & GUARANTEED
    // ===================================
    function CookieScanner() {
        this.cookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.tools = new Set();
        this.scanCount = 0;
        
        this.database = {
            // Webflow
            'wf_': { purpose: 'Webflow Session', duration: 'Session', category: 'necessary', tool: 'Webflow' },
            'webflow': { purpose: 'Webflow Platform', duration: '1 Jahr', category: 'necessary', tool: 'Webflow' },
            
            // Elfsight
            'elfsight': { purpose: 'Elfsight Widget', duration: '1 Jahr', category: 'functionality', tool: 'Elfsight' },
            'elf': { purpose: 'Elfsight Tracking', duration: '1 Jahr', category: 'functionality', tool: 'Elfsight' },
            
            // Google Analytics
            '_ga': { purpose: 'Analytics Tracking', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics' },
            '_gid': { purpose: 'Analytics Session', duration: '24 Std', category: 'analytics', tool: 'Google Analytics' },
            '_gat': { purpose: 'Analytics Throttle', duration: '1 Min', category: 'analytics', tool: 'Google Analytics' },
            '__utma': { purpose: 'Analytics User', duration: '2 Jahre', category: 'analytics', tool: 'Google Analytics' },
            '__utmb': { purpose: 'Analytics Session', duration: '30 Min', category: 'analytics', tool: 'Google Analytics' },
            '__utmc': { purpose: 'Analytics Session', duration: 'Session', category: 'analytics', tool: 'Google Analytics' },
            '__utmz': { purpose: 'Analytics Traffic', duration: '6 Monate', category: 'analytics', tool: 'Google Analytics' },
            
            // Google Tag Manager
            '_gcl_': { purpose: 'Google Click Identifier', duration: '90 Tage', category: 'marketing', tool: 'Google Tag Manager' },
            
            // Facebook
            '_fbp': { purpose: 'Facebook Pixel', duration: '90 Tage', category: 'marketing', tool: 'Facebook' },
            '_fbc': { purpose: 'Facebook Click', duration: '90 Tage', category: 'marketing', tool: 'Facebook' },
            'fr': { purpose: 'Facebook Tracking', duration: '90 Tage', category: 'marketing', tool: 'Facebook' },
            
            // YouTube
            'VISITOR_INFO1_LIVE': { purpose: 'YouTube Player', duration: '6 Monate', category: 'marketing', tool: 'YouTube' },
            'YSC': { purpose: 'YouTube Session', duration: 'Session', category: 'marketing', tool: 'YouTube' },
            
            // Hotjar
            '_hjSession': { purpose: 'Hotjar Session', duration: '30 Min', category: 'analytics', tool: 'Hotjar' },
            '_hjIncludedInPageview': { purpose: 'Hotjar Pageview', duration: '30 Min', category: 'analytics', tool: 'Hotjar' },
            
            // Cookie Consent
            'cc_cookie': { purpose: 'Cookie Consent', duration: '6 Monate', category: 'necessary', tool: 'CookieConsent' },
            
            // Session/CSRF
            'PHPSESSID': { purpose: 'PHP Session', duration: 'Session', category: 'necessary', tool: 'PHP' },
            'csrf': { purpose: 'CSRF Protection', duration: 'Session', category: 'necessary', tool: 'Security' },
            '_token': { purpose: 'Session Token', duration: 'Session', category: 'necessary', tool: 'Security' },
        };
    }

    CookieScanner.prototype.scan = function() {
        this.scanCount++;
        this.cookies = { necessary: [], functionality: [], analytics: [], marketing: [] };
        this.tools.clear();
        
        console.log('🔍 Starte umfassenden Cookie-Scan...');
        
        // 1. Scanne Browser Cookies
        var cookieStr = document.cookie;
        if (cookieStr && cookieStr.length > 0) {
            var items = cookieStr.split(';');
            console.log('📋 Gefundene Browser-Cookies: ' + items.length);
            for (var i = 0; i < items.length; i++) {
                var item = items[i].trim();
                if (item) {
                    var parts = item.split('=');
                    var name = parts[0].trim();
                    if (name) {
                        console.log('  • Cookie: ' + name);
                        var data = this.analyze(name, 'Cookie');
                        this.cookies[data.category].push(data);
                        if (data.tool) this.tools.add(data.tool);
                    }
                }
            }
        } else {
            console.log('📋 Keine Browser-Cookies gefunden');
        }
        
        // 2. Scanne LocalStorage
        try {
            console.log('💾 Scanne LocalStorage (' + localStorage.length + ' Einträge)...');
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key) {
                    console.log('  • LocalStorage: ' + key);
                    var data = this.analyze(key, 'LocalStorage');
                    this.cookies[data.category].push(data);
                    if (data.tool) this.tools.add(data.tool);
                }
            }
        } catch(e) {
            console.log('⚠️ LocalStorage-Zugriff blockiert');
        }
        
        // 3. Scanne SessionStorage
        try {
            console.log('🔐 Scanne SessionStorage (' + sessionStorage.length + ' Einträge)...');
            for (var i = 0; i < sessionStorage.length; i++) {
                var key = sessionStorage.key(i);
                if (key) {
                    console.log('  • SessionStorage: ' + key);
                    var data = this.analyze(key, 'SessionStorage');
                    this.cookies[data.category].push(data);
                    if (data.tool) this.tools.add(data.tool);
                }
            }
        } catch(e) {
            console.log('⚠️ SessionStorage-Zugriff blockiert');
        }
        
        // 4. Erkenne Tools durch Script-Analyse
        this.detectToolsFromScripts();
        
        // GARANTIERE mindestens 1 Cookie (Cookie Consent selbst)
        if (this.cookies.necessary.length === 0 && 
            this.cookies.functionality.length === 0 && 
            this.cookies.analytics.length === 0 && 
            this.cookies.marketing.length === 0) {
            
            this.cookies.necessary.push({
                name: 'cc_cookie',
                purpose: 'Cookie Consent',
                duration: '6 Monate',
                category: 'necessary',
                type: 'Cookie',
                tool: 'CookieConsent',
                desc: 'Speichert Ihre Cookie-Einstellungen für diese Website'
            });
            this.tools.add('CookieConsent');
        }
        
        var total = this.cookies.necessary.length + this.cookies.functionality.length + 
                    this.cookies.analytics.length + this.cookies.marketing.length;
        
        console.log('✅ Scan #' + this.scanCount + ' abgeschlossen');
        console.log('📊 Insgesamt ' + total + ' Cookies/Storage-Einträge gefunden');
        console.log('  ├─ Necessary: ' + this.cookies.necessary.length);
        console.log('  ├─ Functionality: ' + this.cookies.functionality.length);
        console.log('  ├─ Analytics: ' + this.cookies.analytics.length);
        console.log('  └─ Marketing: ' + this.cookies.marketing.length);
        console.log('🔧 Erkannte Tools: ' + Array.from(this.tools).join(', '));
        
        return this.cookies;
    };

    CookieScanner.prototype.detectToolsFromScripts = function() {
        console.log('🔎 Analysiere geladene Scripts...');
        var scripts = document.getElementsByTagName('script');
        var detectedTools = [];
        
        // Prüfe zuerst Window-Objekte (am zuverlässigsten)
        if (typeof window.Webflow !== 'undefined') {
            console.log('  ✓ Webflow erkannt über window.Webflow');
            detectedTools.push('Webflow');
            this.tools.add('Webflow');
            this.addToolCookie('Webflow', 'necessary', 'Webflow Platform', 'Webflow Website-Platform');
        }
        
        if (typeof window.elfsight !== 'undefined' || window.location.href.indexOf('elfsight') !== -1) {
            console.log('  ✓ Elfsight erkannt über window.elfsight');
            detectedTools.push('Elfsight');
            this.tools.add('Elfsight');
            this.addToolCookie('Elfsight', 'functionality', 'Elfsight Widgets', 'Elfsight Widget-Plattform');
        }
        
        if (typeof window.gtag !== 'undefined' || typeof window.ga !== 'undefined') {
            console.log('  ✓ Google Analytics erkannt über window Objekt');
            detectedTools.push('Google Analytics');
            this.tools.add('Google Analytics');
        }
        
        if (typeof window.fbq !== 'undefined') {
            console.log('  ✓ Facebook Pixel erkannt über window.fbq');
            detectedTools.push('Facebook');
            this.tools.add('Facebook');
        }
        
        // Scanne alle Script-Tags
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src || '';
            var innerHTML = scripts[i].innerHTML || '';
            var srcLower = src.toLowerCase();
            var innerLower = innerHTML.toLowerCase();
            
            // Webflow Detection
            if (srcLower.indexOf('webflow') !== -1 || innerLower.indexOf('webflow') !== -1) {
                if (!this.tools.has('Webflow')) {
                    console.log('  ✓ Webflow erkannt in Script: ' + (src.substring(0, 50) || 'inline'));
                    detectedTools.push('Webflow');
                    this.tools.add('Webflow');
                    this.addToolCookie('Webflow', 'necessary', 'Webflow Platform', 'Webflow Website-Platform');
                }
            }
            
            // Elfsight Detection
            if (srcLower.indexOf('elfsight') !== -1 || srcLower.indexOf('eapps.elfsight') !== -1 || 
                innerLower.indexOf('elfsight') !== -1) {
                if (!this.tools.has('Elfsight')) {
                    console.log('  ✓ Elfsight erkannt in Script: ' + (src.substring(0, 50) || 'inline'));
                    detectedTools.push('Elfsight');
                    this.tools.add('Elfsight');
                    this.addToolCookie('Elfsight', 'functionality', 'Elfsight Widgets', 'Elfsight Widget-Plattform');
                }
            }
            
            // Google Analytics Detection
            if (srcLower.indexOf('google-analytics') !== -1 || srcLower.indexOf('googletagmanager') !== -1 ||
                innerLower.indexOf('gtag') !== -1 || innerLower.indexOf('ga(') !== -1) {
                if (!this.tools.has('Google Analytics')) {
                    console.log('  ✓ Google Analytics erkannt in Script');
                    detectedTools.push('Google Analytics');
                    this.tools.add('Google Analytics');
                }
            }
            
            // Facebook Pixel Detection
            if (srcLower.indexOf('facebook') !== -1 || srcLower.indexOf('fbevents') !== -1 || 
                innerLower.indexOf('fbq(') !== -1) {
                if (!this.tools.has('Facebook')) {
                    console.log('  ✓ Facebook Pixel erkannt in Script');
                    detectedTools.push('Facebook');
                    this.tools.add('Facebook');
                }
            }
            
            // YouTube Detection
            if (srcLower.indexOf('youtube') !== -1 || srcLower.indexOf('ytimg') !== -1) {
                if (!this.tools.has('YouTube')) {
                    console.log('  ✓ YouTube erkannt in Script');
                    detectedTools.push('YouTube');
                    this.tools.add('YouTube');
                }
            }
            
            // Hotjar Detection
            if (srcLower.indexOf('hotjar') !== -1 || innerLower.indexOf('hotjar') !== -1) {
                if (!this.tools.has('Hotjar')) {
                    console.log('  ✓ Hotjar erkannt in Script');
                    detectedTools.push('Hotjar');
                    this.tools.add('Hotjar');
                }
            }
        }
        
        // Prüfe iFrames
        var iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; i++) {
            var src = (iframes[i].src || '').toLowerCase();
            
            if (src.indexOf('elfsight') !== -1) {
                if (!this.tools.has('Elfsight')) {
                    console.log('  ✓ Elfsight erkannt in iFrame: ' + iframes[i].src.substring(0, 50));
                    detectedTools.push('Elfsight');
                    this.tools.add('Elfsight');
                    this.addToolCookie('Elfsight', 'functionality', 'Elfsight Widget (iFrame)', 'Elfsight Widget eingebettet');
                }
            }
            
            if (src.indexOf('youtube') !== -1 || src.indexOf('youtu.be') !== -1) {
                if (!this.tools.has('YouTube')) {
                    console.log('  ✓ YouTube erkannt in iFrame');
                    detectedTools.push('YouTube');
                    this.tools.add('YouTube');
                }
            }
        }
        
        // Prüfe Meta-Tags und Link-Tags
        var links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            var href = (links[i].href || '').toLowerCase();
            if (href.indexOf('webflow') !== -1) {
                if (!this.tools.has('Webflow')) {
                    console.log('  ✓ Webflow erkannt in Link-Tag');
                    detectedTools.push('Webflow');
                    this.tools.add('Webflow');
                    this.addToolCookie('Webflow', 'necessary', 'Webflow Platform', 'Webflow Website-Platform');
                }
            }
        }
        
        // Prüfe auch den HTML-Kommentare
        var htmlContent = document.documentElement.outerHTML.toLowerCase();
        if (htmlContent.indexOf('webflow') !== -1 && !this.tools.has('Webflow')) {
            console.log('  ✓ Webflow erkannt im HTML-Code');
            detectedTools.push('Webflow');
            this.tools.add('Webflow');
            this.addToolCookie('Webflow', 'necessary', 'Webflow Platform', 'Webflow Website-Platform');
        }
        
        if (htmlContent.indexOf('elfsight') !== -1 && !this.tools.has('Elfsight')) {
            console.log('  ✓ Elfsight erkannt im HTML-Code');
            detectedTools.push('Elfsight');
            this.tools.add('Elfsight');
            this.addToolCookie('Elfsight', 'functionality', 'Elfsight Widgets', 'Elfsight Widget-Plattform');
        }
        
        if (detectedTools.length > 0) {
            console.log('  📦 Insgesamt erkannt: ' + detectedTools.join(', '));
        } else {
            console.log('  ℹ Keine zusätzlichen Tools durch Script-Analyse erkannt');
        }
    };
    
    CookieScanner.prototype.addToolCookie = function(tool, category, name, description) {
        // Prüfe ob bereits vorhanden
        var list = this.cookies[category];
        for (var i = 0; i < list.length; i++) {
            if (list[i].tool === tool) {
                return; // Bereits vorhanden
            }
        }
        
        // Füge hinzu
        this.cookies[category].push({
            name: name.toLowerCase().replace(/\s/g, '_'),
            purpose: description,
            duration: category === 'necessary' ? 'Session' : '1 Jahr',
            category: category,
            type: 'Plattform',
            tool: tool,
            desc: description
        });
    };

    CookieScanner.prototype.analyze = function(name, type) {
        var nameLower = name.toLowerCase();
        
        // Exakte Suche zuerst
        for (var pattern in this.database) {
            if (nameLower === pattern.toLowerCase()) {
                var info = this.database[pattern];
                return {
                    name: name,
                    purpose: info.purpose,
                    duration: info.duration,
                    category: info.category,
                    type: type,
                    tool: info.tool,
                    desc: info.purpose + ' - ' + info.tool
                };
            }
        }
        
        // Teilübereinstimmung (beginnt mit...)
        for (var pattern in this.database) {
            if (nameLower.indexOf(pattern.toLowerCase()) === 0) {
                var info = this.database[pattern];
                return {
                    name: name,
                    purpose: info.purpose,
                    duration: info.duration,
                    category: info.category,
                    type: type,
                    tool: info.tool,
                    desc: info.purpose + ' - ' + info.tool
                };
            }
        }
        
        // Enthält-Suche
        for (var pattern in this.database) {
            if (nameLower.indexOf(pattern.toLowerCase()) !== -1) {
                var info = this.database[pattern];
                return {
                    name: name,
                    purpose: info.purpose,
                    duration: info.duration,
                    category: info.category,
                    type: type,
                    tool: info.tool,
                    desc: info.purpose + ' - ' + info.tool
                };
            }
        }
        
        // Fallback
        var cat = this.guessCategory(name);
        var tool = this.guessTool(name);
        return {
            name: name,
            purpose: this.guessPurpose(name),
            duration: type === 'SessionStorage' ? 'Session' : '1 Jahr',
            category: cat,
            type: type,
            tool: tool,
            desc: 'Automatisch erkannt'
        };
    };

    CookieScanner.prototype.guessCategory = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('ga') !== -1 || n.indexOf('analytics') !== -1) return 'analytics';
        if (n.indexOf('fb') !== -1 || n.indexOf('ad') !== -1) return 'marketing';
        if (n.indexOf('lang') !== -1 || n.indexOf('locale') !== -1) return 'functionality';
        if (n.indexOf('cc_') !== -1 || n.indexOf('wf_') !== -1 || n.indexOf('session') !== -1) return 'necessary';
        return 'functionality';
    };

    CookieScanner.prototype.guessPurpose = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('_ga') !== -1 || n.indexOf('__utm') !== -1) return 'Analytics & Statistiken';
        if (n.indexOf('_fb') !== -1) return 'Social Media Tracking';
        if (n.indexOf('wf') === 0 || n.indexOf('webflow') !== -1) return 'Website-Platform';
        if (n.indexOf('elf') !== -1 || n.indexOf('elfsight') !== -1) return 'Widget-Funktionalität';
        if (n.indexOf('session') !== -1 || n.indexOf('sess') !== -1) return 'Sitzungsverwaltung';
        if (n.indexOf('csrf') !== -1 || n.indexOf('token') !== -1) return 'Sicherheit';
        if (n.indexOf('lang') !== -1 || n.indexOf('locale') !== -1) return 'Spracheinstellungen';
        if (n.indexOf('consent') !== -1 || n.indexOf('cookie') !== -1) return 'Cookie-Einwilligung';
        return 'Website-Funktion';
    };

    CookieScanner.prototype.guessTool = function(name) {
        var n = name.toLowerCase();
        if (n.indexOf('_ga') !== -1 || n.indexOf('_gid') !== -1 || n.indexOf('_gat') !== -1 || n.indexOf('__utm') !== -1) return 'Google Analytics';
        if (n.indexOf('_gcl') !== -1 || n.indexOf('gtm') !== -1) return 'Google Tag Manager';
        if (n.indexOf('_fb') !== -1 || n.indexOf('fr') === 0) return 'Facebook';
        if (n.indexOf('wf') === 0 || n.indexOf('webflow') !== -1) return 'Webflow';
        if (n.indexOf('elf') !== -1 || n.indexOf('elfsight') !== -1) return 'Elfsight';
        if (n.indexOf('_hj') !== -1) return 'Hotjar';
        if (n.indexOf('cc_') !== -1) return 'CookieConsent';
        if (n.indexOf('ys') !== -1 || n.indexOf('visitor_info') !== -1) return 'YouTube';
        if (n.indexOf('sess') !== -1 || n.indexOf('session') !== -1) return 'Session Management';
        if (n.indexOf('csrf') !== -1 || n.indexOf('token') !== -1) return 'Security';
        return 'Website';
    };

    CookieScanner.prototype.generateHTML = function(category) {
        var list = this.cookies[category];
        
        if (!list || list.length === 0) {
            return '<div class="no-cookies">Keine Cookies in dieser Kategorie</div>';
        }
        
        var html = '<div class="cookie-list">';
        html += '<div style="margin-bottom:12px;font-weight:700">Gefunden: <span class="cookie-count">' + list.length + '</span></div>';
        
        for (var i = 0; i < list.length; i++) {
            var c = list[i];
            html += '<div class="cookie-item">';
            html += '<div class="cookie-name">' + c.name + '</div>';
            html += '<div class="cookie-row"><span class="cookie-label">Typ:</span><span class="cookie-value">' + c.type + '</span></div>';
            html += '<div class="cookie-row"><span class="cookie-label">Dauer:</span><span class="cookie-value">' + c.duration + '</span></div>';
            html += '<div class="cookie-row"><span class="cookie-label">Anbieter:</span><span class="cookie-value">' + (c.tool || 'N/A') + '</span></div>';
            html += '<div class="cookie-desc"><strong>Zweck:</strong> ' + c.desc + '</div>';
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    };

    CookieScanner.prototype.getDescription = function(category) {
        var count = this.cookies[category].length;
        var desc = {
            necessary: 'Essentiell für die Grundfunktionen der Website',
            functionality: 'Erweiterte Funktionen und Personalisierung',
            analytics: 'Website-Analyse zur Verbesserung',
            marketing: 'Werbung und Marketing-Tracking'
        };
        return desc[category] + '. <strong>' + count + ' Element(e) gefunden.</strong>';
    };

    CookieScanner.prototype.getToolsHTML = function() {
        if (this.tools.size === 0) {
            return '<div class="scan-info"><div class="icon-text">' + ICONS.check + '<span>Keine externen Tools erkannt</span></div></div>';
        }
        var arr = Array.from(this.tools).sort();
        var html = '<div class="scan-info"><div class="icon-text">' + ICONS.magnifying + '<span><strong>Erkannte Tools:</strong> ';
        for (var i = 0; i < arr.length; i++) {
            html += '<span style="background:#fff;padding:4px 10px;margin:2px;display:inline-block;border-radius:4px;font-weight:600">' + arr[i] + '</span> ';
        }
        html += '</span></div></div>';
        return html;
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Cookie Consent FINAL');
        
        injectCSS();

        loadCookieConsent(() => {
            var scanner = new CookieScanner();
            
            // Initial Scan mit kleiner Verzögerung (damit alle Scripts geladen sind)
            console.log('🔍 Warte auf vollständiges Laden der Seite...');
            setTimeout(function() {
                console.log('🔍 Starte Initial Scan...');
                scanner.scan();
            }, 500);
            
            // Zusätzlicher Scan nach 2 Sekunden (für langsame Scripts)
            setTimeout(function() {
                console.log('🔍 Deep Scan...');
                scanner.scan();
            }, 2000);

            // Periodic Re-Scan
            if (CONFIG.deepScanInterval > 0) {
                setInterval(function() {
                    scanner.scan();
                }, CONFIG.deepScanInterval);
            }

            // CookieConsent Konfiguration
            window.CookieConsent.run({
                guiOptions: {
                    consentModal: { layout: "box", position: "bottom left", equalWeightButtons: true, flipButtons: false },
                    preferencesModal: { layout: "box", position: "right", equalWeightButtons: true, flipButtons: true }
                },
                categories: {
                    necessary: { readOnly: true, enabled: true },
                    functionality: {},
                    analytics: { autoClear: { cookies: [{ name: /^(_ga|_gid|_gat)/ }] } },
                    marketing: { autoClear: { cookies: [{ name: /^(fr|_fbp|_fbc)/ }] } }
                },
                language: {
                    default: "de",
                    translations: {
                        de: {
                            consentModal: {
                                title: '<div class="icon-text">' + ICONS.cookie + '<span>Cookie-Einstellungen</span></div>',
                                description: "Wir nutzen Cookies zur Verbesserung Ihrer Erfahrung",
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                showPreferencesBtn: "Details anzeigen",
                                footer: '<a href="' + CONFIG.privacyPolicyUrl + '">Datenschutz</a>\n<a href="' + CONFIG.termsUrl + '">Impressum</a>'
                            },
                            preferencesModal: {
                                title: '<div class="icon-text">' + ICONS.magnifying + '<span>Cookie-Einstellungen</span></div>',
                                acceptAllBtn: "Alle akzeptieren",
                                acceptNecessaryBtn: "Nur notwendige",
                                savePreferencesBtn: "Speichern",
                                closeIconLabel: "Schließen",
                                sections: [
                                    { 
                                        title: "Automatische Erkennung", 
                                        description: scanner.getToolsHTML() 
                                    },
                                    { 
                                        title: '<div class="icon-text">' + ICONS.shield + '<span>Notwendig</span></div> <span class="pm__badge">Immer aktiv</span>', 
                                        description: scanner.getDescription('necessary') + '<br><br>' + scanner.generateHTML('necessary'), 
                                        linkedCategory: "necessary" 
                                    },
                                    { 
                                        title: '<div class="icon-text">' + ICONS.cog + '<span>Funktional</span></div>', 
                                        description: scanner.getDescription('functionality') + '<br><br>' + scanner.generateHTML('functionality'), 
                                        linkedCategory: "functionality" 
                                    },
                                    { 
                                        title: '<div class="icon-text">' + ICONS.chart + '<span>Analyse</span></div>', 
                                        description: scanner.getDescription('analytics') + '<br><br>' + scanner.generateHTML('analytics'), 
                                        linkedCategory: "analytics" 
                                    },
                                    { 
                                        title: '<div class="icon-text">' + ICONS.megaphone + '<span>Marketing</span></div>', 
                                        description: scanner.getDescription('marketing') + '<br><br>' + scanner.generateHTML('marketing'), 
                                        linkedCategory: "marketing" 
                                    },
                                    { 
                                        title: '<div class="icon-text">' + ICONS.info + '<span>Weitere Informationen</span></div>', 
                                        description: 'Details in unserer <a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutzerklärung</a>' 
                                    }
                                ]
                            }
                        }
                    }
                },
                onConsent: function() {
                    setTimeout(function() { 
                        updateModalContent();
                    }, 1000);
                },
                onFirstConsent: function() {
                    updateModalContent();
                },
                onChange: function() {
                    updateModalContent();
                }
            });

            // Funktion zum Aktualisieren der Modal-Inhalte
            const updateModalContent = function() {
                scanner.scan();
                
                // Aktualisiere die sections im Config-Objekt
                var config = window.CookieConsent.getConfig();
                if (config && config.language && config.language.translations && config.language.translations.de && config.language.translations.de.preferencesModal) {
                    config.language.translations.de.preferencesModal.sections = [
                        { 
                            title: "Automatische Erkennung", 
                            description: scanner.getToolsHTML() 
                        },
                        { 
                            title: '<div class="icon-text">' + ICONS.shield + '<span>Notwendig</span></div> <span class="pm__badge">Immer aktiv</span>', 
                            description: scanner.getDescription('necessary') + '<br><br>' + scanner.generateHTML('necessary'), 
                            linkedCategory: "necessary" 
                        },
                        { 
                            title: '<div class="icon-text">' + ICONS.cog + '<span>Funktional</span></div>', 
                            description: scanner.getDescription('functionality') + '<br><br>' + scanner.generateHTML('functionality'), 
                            linkedCategory: "functionality" 
                        },
                        { 
                            title: '<div class="icon-text">' + ICONS.chart + '<span>Analyse</span></div>', 
                            description: scanner.getDescription('analytics') + '<br><br>' + scanner.generateHTML('analytics'), 
                            linkedCategory: "analytics" 
                        },
                        { 
                            title: '<div class="icon-text">' + ICONS.megaphone + '<span>Marketing</span></div>', 
                            description: scanner.getDescription('marketing') + '<br><br>' + scanner.generateHTML('marketing'), 
                            linkedCategory: "marketing" 
                        },
                        { 
                            title: '<div class="icon-text">' + ICONS.info + '<span>Weitere Informationen</span></div>', 
                            description: 'Details in unserer <a class="cc__link" href="' + CONFIG.privacyPolicyUrl + '">Datenschutzerklärung</a>' 
                        }
                    ];
                }
            };

            // Button erstellen
            const createButton = () => {
                if (document.getElementById('cookie-settings-btn')) return;
                var btn = document.createElement('button');
                btn.id = 'cookie-settings-btn';
                btn.innerHTML = ICONS.cookie;
                btn.setAttribute('aria-label', 'Cookie-Einstellungen');
                btn.setAttribute('title', 'Cookie-Einstellungen');
                btn.onclick = function() {
                    updateModalContent();
                    window.CookieConsent.showPreferences();
                };
                document.body.appendChild(btn);
            };

            waitForDOM(createButton);
            if (window.addEventListener) {
                window.addEventListener('cc:onConsent', createButton);
            }

            // Dev Tools
            window.deepScanCookies = function() {
                scanner.scan();
                console.log('📊 Scan Results:');
                console.table(scanner.cookies);
                return { cookies: scanner.cookies, tools: Array.from(scanner.tools) };
            };
            
            window.resetCookieConsent = function() {
                window.CookieConsent.reset(true);
                location.reload();
            };

            console.log('✅ Ready! Use window.deepScanCookies()');
        });
    };

    waitForDOM(init);

})();
