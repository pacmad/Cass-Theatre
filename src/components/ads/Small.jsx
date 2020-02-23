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
 </script>
 <iframe data-aa="1332545" src="//ad.a-ads.com/1332545?size=120x90" scrolling="no" style="width:120px; height:90px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>
 `
  }
}

export const AdSmall = () => {
  return <div dangerouslySetInnerHTML={AdConfig()} className="advertisement-small" />
}
