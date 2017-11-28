import NextHead from 'next/head';
import Link from 'next/link'

class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <title>Coinest</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="./static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
        <link rel="manifest" href="./static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="./static/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
  analytics.load("1Krm0FsBgKwcWVH8fb9cS1k4B10jnhHM");
  analytics.page();
  }}();`
        }}/>
      </NextHead>
    )
  }
}

export default Head;
