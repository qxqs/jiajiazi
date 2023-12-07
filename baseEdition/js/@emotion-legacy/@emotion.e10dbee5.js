System.register([],(function(e,o){"use strict";return{execute:function(){e("m",(/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function(e){for(// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var o,t=0,r=0,i=e.length// Mix 4 bytes at a time into the hash
;i>=4;++r,i-=4)o=/* Math.imul(k, m): */1540483477*(65535&(o=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(o>>>16)<<16),t=/* Math.imul(k, m): */1540483477*(65535&(o^=/* k >>> r: */o>>>24))+(59797*(o>>>16)<<16)^/* Math.imul(h, m): */1540483477*(65535&t)+(59797*(t>>>16)<<16);// Handle the last few bytes of the input array
switch(i){case 3:t^=(255&e.charCodeAt(r+2))<<16;case 2:t^=(255&e.charCodeAt(r+1))<<8;case 1:t=/* Math.imul(h, m): */1540483477*(65535&(t^=255&e.charCodeAt(r)))+(59797*(t>>>16)<<16)}// Do a few final mixes of the hash to ensure the last few
// bytes are well-incorporated.
return(((t=/* Math.imul(h, m): */1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)})),e("u",{animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1})}}}));
