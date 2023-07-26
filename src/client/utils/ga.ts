import { useEffect, useState } from "react";


export const verifyScript = (url: string) => {
    const scripts = document.getElementsByTagName('script');
    for(let i = scripts.length; i--;) {
        if(scripts[i].src === url) {
            return true;
        }
    }
    return false;
}

export const embeddedDataLayer = (w: Window, d: Document, s: 'script', l: string, i: string) => {
    (w as any).dataLayer = (window as any).dataLayer || [];
    (w as any).dataLayer.push({
        'user_id': localStorage.getItem('user_id'),
        'gtm.start': new Date().getTime(),
        'event': 'gtm.js'
    });

    var dl = l !== 'dataLayer' ? '&l='+l : '';
    var src = 'https://www.googletagmanager.com/gtm.js?id='+i+dl;

    if(!verifyScript(src)) {
        const js: HTMLScriptElement = d.createElement(s);
        const f = d.getElementsByTagName(s)[0];
        js.async = true;
        js.src = src;
        f.parentNode?.insertBefore(js, f);
    }
}

export const embeddedScriptsGA = (w: Window, d: Document, s: 'script', l: string, i: string) => {
    const g = (w as any).gapi || ((w as any).gapi = {});
    g.analytics={
        q: [],
        ready: function(cb: Function) {
            this.q.push(cb);
        }
    }

    var src = 'https://apis.google.com/js/platform.js';

    if(!verifyScript(src)) {
        const js: HTMLScriptElement = d.createElement(s);
        const f = d.getElementsByTagName(s)[0];
        js.async = true;
        js.src = src;
        f.parentNode?.insertBefore(js, f);
        js.onload= function(){
            g.load('analytics')
        }
    }
}

const useGoogleAnalytics = () => {
    const location = 'path';
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {        
      if(localStorage.getItem('user_id')) {
        //GA.set({ userId: location.getItem('user_id') })
        embeddedDataLayer(window, document, 'script', 'dataLayer', 'GTM-xxxxxxx')
      };
      //GA.initialize(GOOGLE_ANALYTICS_ID)
      setInitialized(true);
    }, []);

    useEffect(() => {
        if(initialized) {
            //GA.send({ hitType: 'pageview', page: path + query})
        }
    }, [location, initialized]);
};
