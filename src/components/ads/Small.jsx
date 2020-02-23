import React from 'react'

function AdConfig () {
  return {
    __html: `<script type="text/javascript">
   atOptions = {
     'key' : '955e07a765dd0c7104935854ff34fb5a',
     'format' : 'iframe',
     'height' : 50,
     'width' : 320,
     'params' : {}
   };
   document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.madcpms.com/955e07a765dd0c7104935854ff34fb5a/invoke.js"></scr' + 'ipt>');
 </script>`
  }
}

export const AdSmall = () => {
  return <div dangerouslySetInnerHTML={AdConfig()} className="advertisement-small" />
}
