System.register([],(function(e,r){"use strict";return{execute:function(){e({a:
/**
			 * @param {object} element
			 * @param {number} index
			 * @param {object[]} children
			 * @param {function} callback
			 * @return {string}
			 */
function(e,s,i,f){switch(e.type){case u:if(e.children.length)break;case t:case c:return e.return=e.return||e.value;case r:return"";case a:return e.return=e.value+"{"+K(e.children,f)+"}";case n:if(!k(e.value=e.props.join(",")))return""}return k(i=K(e.children,f))?e.return=e.value+"{"+i+"}":""},c:
/**
			 * @param {string} value
			 * @return {object[]}
			 */
function(e){
/**
			 * @param {any} value
			 * @return {any}
			 */return function(e){return y="",e
/**
			 * @param {number} type
			 * @return {string}
			 */}(G("",null,null,null,[""],e=
/**
			 * @param {string} value
			 * @return {any[]}
			 */
function(e){return v=g=1,p=k(y=e),m=0,[]}(e),0,[0],e))}
/**
			 * @param {string} value
			 * @param {object} root
			 * @param {object?} parent
			 * @param {string[]} rule
			 * @param {string[]} rules
			 * @param {string[]} rulesets
			 * @param {number[]} pseudo
			 * @param {number[]} points
			 * @param {string[]} declarations
			 * @return {object}
			 */,s:K});var r="comm",n="rule",c="decl",t="@import",a="@keyframes",u="@layer",s=Math.abs,i=String.fromCharCode;
/**
			 * @param {string} value
			 * @return {string}
			 */
function f(e){return e.trim()}
/**
			 * @param {string} value
			 * @param {(string|RegExp)} pattern
			 * @param {string} replacement
			 * @return {string}
			 */function o(e,r,n){return e.replace(r,n)}
/**
			 * @param {string} value
			 * @param {string} search
			 * @return {number}
			 */function l(e,r){return e.indexOf(r)}
/**
			 * @param {string} value
			 * @param {number} index
			 * @return {number}
			 */function h(e,r){return 0|e.charCodeAt(r)}
/**
			 * @param {string} value
			 * @param {number} begin
			 * @param {number} end
			 * @return {string}
			 */function b(e,r,n){return e.slice(r,n)}
/**
			 * @param {string} value
			 * @return {number}
			 */function k(e){return e.length}
/**
			 * @param {any[]} value
			 * @return {number}
			 */
/**
			 * @param {any} value
			 * @param {any[]} array
			 * @return {any}
			 */
function d(e,r){return r.push(e),e}var v=1,g=1,p=0,m=0,w=0,y="";
/**
			 * @param {string} value
			 * @param {object | null} root
			 * @param {object | null} parent
			 * @param {string} type
			 * @param {string[] | string} props
			 * @param {object[] | string} children
			 * @param {object[]} siblings
			 * @param {number} length
			 */
function C(e,r,n,c,t,a,u,s){return{value:e,root:r,parent:n,type:c,props:t,children:a,line:v,column:g,length:u,return:"",siblings:s}}
/**
			 * @return {number}
			 */
/**
			 * @return {number}
			 */
function x(){return w=m>0?h(y,--m):0,g--,10===w&&(g=1,v--),w}
/**
			 * @return {number}
			 */function S(){return w=m<p?h(y,m++):0,g++,10===w&&(g=1,v++),w}
/**
			 * @return {number}
			 */function j(){return h(y,m)}
/**
			 * @return {number}
			 */function A(){return m}
/**
			 * @param {number} begin
			 * @param {number} end
			 * @return {string}
			 */function M(e,r){return b(y,e,r)}
/**
			 * @param {number} type
			 * @return {number}
			 */function O(e){switch(e){// \0 \t \n \r \s whitespace token
case 0:case 9:case 10:case 13:case 32:return 5;// ! + , / > @ ~ isolate token
case 33:case 43:case 44:case 47:case 62:case 64:case 126:// ; { } breakpoint token
case 59:case 123:case 125:return 4;// : accompanied token
case 58:return 3;// " ' ( [ opening delimit token
case 34:case 39:case 40:case 91:return 2;// ) ] closing delimit token
case 41:case 93:return 1}return 0}function q(e){return f(M(m-1,D(91===e?e+2:40===e?e+1:e)))}
/**
			 * @param {number} type
			 * @return {string}
			 */function z(e){for(;(w=j())&&w<33;)S();return O(e)>2||O(w)>3?"":" "}
/**
			 * @param {number} index
			 * @param {number} count
			 * @return {string}
			 */function B(e,r){for(;--r&&S()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return M(e,A()+(r<6&&32==j()&&32==S()))}
/**
			 * @param {number} type
			 * @return {number}
			 */function D(e){for(;S();)switch(w){// ] ) " '
case e:return m;// " '
case 34:case 39:34!==e&&39!==e&&D(w);break;// (
case 40:41===e&&D(e);break;// \
case 92:S()}return m}
/**
			 * @param {number} type
			 * @param {number} index
			 * @return {number}
			 */function E(e,r){for(;S()&&e+w!==57&&(e+w!==84||47!==j()););return"/*"+M(r,m-1)+"*"+i(47===e?e:S())}
/**
			 * @param {number} index
			 * @return {string}
			 */function F(e){for(;!O(j());)S();return M(e,m)}function G(e,r,n,c,t,a,u,s,f){for(var b=0,v=0,g=u,p=0,m=0,w=0,y=1,C=1,M=1,O=0,D="",K=t,L=a,N=c,P=D;C;)switch(w=O,O=S()){// (
case 40:if(108!=w&&58==h(P,g-1)){-1!=l(P+=o(q(O),"&","&\f"),"&\f")&&(M=-1);break}// " ' [
case 34:case 39:case 91:P+=q(O);break;// \t \n \r \s
case 9:case 10:case 13:case 32:P+=z(w);break;// \
case 92:P+=B(A()-1,7);continue;// /
case 47:switch(j()){case 42:case 47:d(I(E(S(),A()),r,n,f),f);break;default:P+="/"}break;// {
case 123*y:s[b++]=k(P)*M;// } ; \0
case 125*y:case 59:case 0:switch(O){// \0 }
case 0:case 125:C=0;// ;
case 59+v:-1==M&&(P=o(P,/\f/g,"")),m>0&&k(P)-g&&d(m>32?J(P+";",c,n,g-1,f):J(o(P," ","")+";",c,n,g-2,f),f);break;// @ ;
case 59:P+=";";// { rule/at-rule
default:if(d(N=H(P,r,n,b,v,t,s,D,K=[],L=[],g,a),a),123===O)if(0===v)G(P,r,N,N,K,a,g,s,L);else switch(99===p&&110===h(P,3)?100:p){// d l m s
case 100:case 108:case 109:case 115:G(e,N,N,c&&d(H(e,N,N,0,0,t,s,D,t,K=[],g,L),L),t,L,g,s,c?K:L);break;default:G(P,N,N,N,[""],L,0,s,L)}}b=v=m=0,y=M=1,D=P="",g=u;break;// :
case 58:g=1+k(P),m=w;default:if(y<1)if(123==O)--y;else if(125==O&&0==y++&&125==x())continue;switch(P+=i(O),O*y){// &
case 38:M=v>0?1:(P+="\f",-1);break;// ,
case 44:s[b++]=(k(P)-1)*M,M=1;break;// @
case 64:// -
45===j()&&(P+=q(S())),p=j(),v=g=k(D=P+=F(A())),O++;break;// -
case 45:45===w&&2==k(P)&&(y=0)}}return a}
/**
			 * @param {string} value
			 * @param {object} root
			 * @param {object?} parent
			 * @param {number} index
			 * @param {number} offset
			 * @param {string[]} rules
			 * @param {number[]} points
			 * @param {string} type
			 * @param {string[]} props
			 * @param {string[]} children
			 * @param {number} length
			 * @param {object[]} siblings
			 * @return {object}
			 */function H(e,r,c,t,a,u,i,l,h,k,d,v){for(var g=a-1,p=0===a?u:[""],m=function(e){return e.length}(p),w=0,y=0,x=0;w<t;++w)for(var S=0,j=b(e,g+1,g=s(y=i[w])),A=e;S<m;++S)(A=f(y>0?p[S]+" "+j:o(j,/&\f/g,p[S])))&&(h[x++]=A);return C(e,r,c,0===a?n:l,h,k,d,v)}
/**
			 * @param {number} value
			 * @param {object} root
			 * @param {object?} parent
			 * @param {object[]} siblings
			 * @return {object}
			 */function I(e,n,c,t){return C(e,n,c,r,i(w),b(e,2,-2),0,t)}
/**
			 * @param {string} value
			 * @param {object} root
			 * @param {object?} parent
			 * @param {number} length
			 * @param {object[]} siblings
			 * @return {object}
			 */function J(e,r,n,t,a){return C(e,r,n,c,b(e,0,t),b(e,t+1,-1),t,a)}
/**
			 * @param {object[]} children
			 * @param {function} callback
			 * @return {string}
			 */function K(e,r){for(var n="",c=0;c<e.length;c++)n+=r(e[c],c,e,r)||"";return n}}}}));
