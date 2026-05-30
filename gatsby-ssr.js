const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'dark-mode-init',
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t===null?true:t==='dark')}catch(e){}})()`,
      },
    }),
  ])
}
