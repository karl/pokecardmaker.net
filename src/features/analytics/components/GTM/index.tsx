import Script from 'next/script';
import { FC } from 'react';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const GoogleTagManagerScript: FC = () => (
  <>
    {!!gtmId && (
      <Script
        id="google-tag-manager-script"
        data-cookieconsent="statistics,marketing"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                });
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
        }}
      />
    )}
  </>
);

export const GoogleTagManagerNoScript: FC = () => (
  <>
    {!!gtmId && (
      <noscript>
        <iframe
          title="GTM"
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}&gtm_cookies_win=x`}
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        />
      </noscript>
    )}
  </>
);
