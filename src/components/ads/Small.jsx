import React from 'react'

function AdConfig() {
   return {__html: `<script type="text/javascript">
   atOptions = {
     'key' : '3d8912bbeafdf6684436dad6056dca6e',
     'format' : 'iframe',
     'height' : 300,
     'width' : 160,
     'params' : {}
   };
   document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.madcpms.com/3d8912bbeafdf6684436dad6056dca6e/invoke.js"></scr' + 'ipt>');
 </script>`}
}

export const AdSmall = () => {
  return (
    <div dangerouslySetInnerHTML={AdConfig()} className="advertisement-small" />
  )
}