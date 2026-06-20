const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'dark-mode-init',
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t===null?true:t==='dark')}catch(e){}})()`,
      },
    }),
  ])

  setHeadComponents([
    React.createElement('link', { key: 'fav-32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }),
    React.createElement('link', { key: 'fav-16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }),
    React.createElement('link', { key: 'fav-96', rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }),
    React.createElement('link', { key: 'fav-ico', rel: 'icon', href: '/favicon.ico', sizes: 'any' }),
    React.createElement('link', { key: 'apple', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }),
  ])
}
