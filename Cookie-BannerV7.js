/**
 * Webflow Cookie Consent - FINAL VERSION with Feather Icons
 * Open Source Icons, Flex Layout
 * 
 * INSTALLATION:
 * <script src="https://cdn.jsdelivr.net/gh/kevin-baum/webflow-cookie@main/webflow-cookie-final.js"></script>
 */

(function() {
    'use strict';

    // Lade Feather Icons von CDN
    const loadFeatherIcons = (callback) => {
        if (window.feather) {
            callback();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        script.onload = callback;
        script.onerror = () => {
            console.error('❌ Feather Icons failed to load');
            callback(); // Fahre trotzdem fort
        };
        document.head.appendChild(script);
    };

    // Icon Helper-Funktion
    const icon = (name, size = 16, color = 'currentColor') => {
        if (!window.feather) return '';
        const svgString = window.feather.icons[name] ? window.feather.icons[name].toSvg({
            width: size,
            height: size,
            color: color,
            'stroke-width': 2,
            style: 'display:inline-block;vertical-align:middle'
        }) : '';
        return svgString;
    };
    
    // Feather Icons Mapping
    const ICONS = {
        get cookie() { return icon('circle', 16, '#2d3748'); },
        get shield() { return icon('shield', 16, '#2d3748'); },
        get cog() { return icon('settings', 16, '#2d3748'); },
        get chart() { return icon('bar-chart-2', 16, '#2d3748'); },
        get megaphone() { return icon('volume-2', 16, '#2d3748'); },
        get info() { return icon('info', 16, '#2d3748'); },
        get check() { return icon('check-circle', 16, '#48bb78'); },
        get magnifying() { return icon('search', 16, '#2d3748'); },
        get clock() { return icon('clock', 14, '#718096'); },
        get document() { return icon('file-text', 14, '#718096'); },
        get building() { return icon('home', 14, '#718096'); },
        get target() { return icon('target', 14, '#718096'); },
        get lightbulb() { return icon('zap', 14, '#4299e1'); },
        get xCircle() { return icon('x-circle', 14, '#e53e3e'); },
        get chartBar() { return icon('bar-chart', 14, '#4299e1'); }
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
            .cookie-list{background:#fff;border-radius:8px;padding:16px;margin:16px 0;font-size:13px;border:1px solid #e2e8f0;max-height:450px;overflow-y:auto;overflow-x:auto}
            .cookie-table{width:100%;border-collapse:separate;border-spacing:0;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1);border:1px solid #cbd5e0}
            .cookie-table thead{background:#2d3748;color:#fff}
            .cookie-table thead th{padding:14px 12px;text-align:left;font-weight:600;font-size:13px;border-right:1px solid #4a5568;white-space:nowrap}
            .cookie-table thead th:last-child{border-right:none}
            .cookie-table tbody tr{border-bottom:1px solid #e2e8f0;transition:background .15s ease}
            .cookie-table tbody tr:nth-child(odd){background:#fff}
            .cookie-table tbody tr:nth-child(even){background:#f7fafc}
            .cookie-table tbody tr:hover{background:#edf2f7!important}
            .cookie-table tbody tr:last-child{border-bottom:none}
            .cookie-table td{padding:12px 12px;text-align:left;vertical-align:middle;font-size:13px;line-height:1.5;border-right:1px solid #e2e8f0}
            .cookie-table td:last-child{border-right:none}
            .cookie-table td:first-child{font-weight:600;color:#2d3748;white-space:nowrap}
            .cookie-table .desc-cell{color:#4a5568;font-size:12px;line-height:1.6;max-width:300px}
            .table-icon{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}
            .cookie-summary{background:#fff;border-radius:6px;padding:12px;margin-bottom:16px;font-weight:600;color:#2d3748;display:flex;align-items:center;gap:10px;border:2px solid #e2e8f0}
            .cookie-count{background:#4299e1;color:#fff;padding:5px 12px;border-radius:16px;font-size:13px;font-weight:700;display:inline-block}
            .no-cookies{color:#718096;text-align:center;padding:20px;font-style:italic}
            .scan-info{background:#d4edda;border:1px solid #c3e6cb;color:#155724;padding:12px;border-radius:6px;margin:12px 0;font-size:13px;display:flex;flex-direction:column;gap:8px}
            .scan-info svg{width:16px!important;height:16px!important;color:#155724!important;flex-shrink:0}
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
            return '<div class="no-cookies"><span style="display:inline-flex;align-items:center;gap:6px">' + ICONS.xCircle + ' <span>Keine Cookies in dieser Kategorie gefunden</span></span></div>';
        }
        
        var html = '<div class="cookie-list">';
        html += '<div class="cookie-summary"><span style="display:inline-flex;align-items:center;gap:8px">' + ICONS.chartBar + ' <span>Gefundene Einträge: <span class="cookie-count">' + list.length + '</span></span></span></div>';
        
        // Tabelle erstellen
        html += '<table class="cookie-table">';
        html += '<thead><tr>';
        html += '<th><span class="table-icon">' + ICONS.cookie + ' Name</span></th>';
        html += '<th><span class="table-icon">' + ICONS.document + ' Typ</span></th>';
        html += '<th><span class="table-icon">' + ICONS.clock + ' Dauer</span></th>';
        html += '<th><span class="table-icon">' + ICONS.building + ' Anbieter</span></th>';
        html += '<th><span class="table-icon">' + ICONS.lightbulb + ' Beschreibung</span></th>';
        html += '</tr></thead>';
        html += '<tbody>';
        
        for (var i = 0; i < list.length; i++) {
            var c = list[i];
            html += '<tr>';
            html += '<td>' + this.escapeHtml(c.name) + '</td>';
            html += '<td>' + this.escapeHtml(c.type) + '</td>';
            html += '<td>' + this.escapeHtml(c.duration) + '</td>';
            html += '<td>' + this.escapeHtml(c.tool || 'Unbekannt') + '</td>';
            html += '<td class="desc-cell">' + this.escapeHtml(c.desc) + '</td>';
            html += '</tr>';
        }
        
        html += '</tbody></table>';
        html += '</div>';
        return html;
    };
    
    CookieScanner.prototype.escapeHtml = function(text) {
        if (!text) return '';
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
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
            return '<div class="scan-info" style="background:#fff3cd;border-color:#ffc107;color:#856404"><div class="icon-text">' + ICONS.info + '<span>Keine externen Tools erkannt</span></div></div>';
        }
        var arr = Array.from(this.tools).sort();
        var html = '<div class="scan-info"><div style="display:inline-flex;align-items:center;gap:8px;width:100%"><span style="display:inline-flex;align-items:center;gap:6px">' + ICONS.magnifying + '<strong>Erkannte Tools (' + arr.length + '):</strong></span></div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;width:100%">';
        for (var i = 0; i < arr.length; i++) {
            html += '<span style="background:#fff;padding:6px 12px;border-radius:6px;font-weight:600;box-shadow:0 1px 3px rgba(0,0,0,.1);border:1px solid #e2e8f0;display:inline-flex;align-items:center;gap:6px">' + ICONS.check + ' ' + this.escapeHtml(arr[i]) + '</span>';
        }
        html += '</div></div>';
        return html;
    };

    // ===================================
    // INITIALIZE
    // ===================================
    const init = () => {
        console.log('🍪 Cookie Consent mit Feather Icons');
        
        // Lade zuerst Feather Icons
        loadFeatherIcons(() => {
            console.log('✓ Feather Icons geladen');
            
            injectCSS();

            loadCookieConsent(() => {
                var scanner = new CookieScanner();
                
                // WICHTIG: Erst Cookies scannen, DANN Banner anzeigen!
                console.log('🔍 Scanne Cookies VOR Banner-Anzeige...');
                scanner.scan();
                
                // Nochmal nach 500ms scannen (für langsam ladende Scripts)
                setTimeout(function() {
                    console.log('🔍 Deep Scan...');
                    scanner.scan();
                }, 500);

                // Periodic Re-Scan
                if (CONFIG.deepScanInterval > 0) {
                    setInterval(function() {
                        scanner.scan();
                    }, CONFIG.deepScanInterval);
                }

            // CookieConsent Konfiguration - NACH dem ersten Scan!
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
        });
    };

    waitForDOM(init);

})();