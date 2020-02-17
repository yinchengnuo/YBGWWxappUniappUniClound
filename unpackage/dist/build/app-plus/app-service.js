var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'good-item data-v-05ef7ee4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'preview']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isEditMode']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([3,'pulldown data-v-381a3bd7'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'transition']],[[4],[[5],[[4],[[5],[[5],[1,'transition']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'good-image data-v-56bbf0e0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^pulldownRefresh']],[[4],[[5],[[4],[[5],[1,'refresh']]]]]]]]])
Z([3,'pulldownRefresher'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'swiper'])
Z([[7],[3,'MIXIN_ActiveIndex']])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'transition']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_transition']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_change']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'animationfinish']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_animationfinish']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,333])
Z([3,'listIndex'])
Z([3,'listItem'])
Z([[7],[3,'lists']])
Z(z[14])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'MIXIN_ScrollViewHeight']],[1,'px']]],[1,';']])
Z([[7],[3,'isEditMode']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listItem']])
Z(z[20])
Z(z[0])
Z(z[21])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'listIndex']]],[1,'-']],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'good-image data-v-36a02ed8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ChooseImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-196dfbc4 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^pulldownRefresh']],[[4],[[5],[[4],[[5],[1,'refresh']]]]]]]]])
Z([3,'pulldownRefresher'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'swiper data-v-196dfbc4'])
Z([[7],[3,'MIXIN_ActiveIndex']])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'transition']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_transition']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_change']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'animationfinish']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_animationfinish']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,333])
Z([3,'listIndex'])
Z([3,'listItem'])
Z([[7],[3,'lists']])
Z(z[14])
Z([3,'data-v-196dfbc4'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'MIXIN_ScrollViewHeight']],[1,'px']]],[1,';']])
Z([[7],[3,'isEditMode']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listItem']])
Z(z[21])
Z(z[0])
Z([3,'item data-v-196dfbc4'])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'listIndex']]],[1,'-']],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^pulldownRefresh']],[[4],[[5],[[4],[[5],[1,'refresh']]]]]]]]])
Z([3,'pulldownRefresher'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'swiper'])
Z([[7],[3,'MIXIN_ActiveIndex']])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'transition']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_transition']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_change']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'animationfinish']],[[4],[[5],[[4],[[5],[[5],[1,'MIXIN_animationfinish']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,333])
Z([3,'listIndex'])
Z([3,'listItem'])
Z([[7],[3,'lists']])
Z(z[14])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'MIXIN_ScrollViewHeight']],[1,'px']]],[1,';']])
Z([[7],[3,'isEditMode']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listItem']])
Z(z[20])
Z(z[0])
Z(z[21])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'listIndex']]],[1,'-']],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wode'])
Z([[7],[3,'isAdmin']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/good-item.wxml','./components/pulldown-refresher.wxml','./pages/add-good/add-good.wxml','./pages/baihuo/baihuo.wxml','./pages/edit-good/edit-good.wxml','./pages/fushi/fushi.wxml','./pages/location/location.wxml','./pages/login/login.wxml','./pages/shengxian/shengxian.wxml','./pages/wode/wode.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_mz(z,'swiper',['vertical',-1,'bindtouchend',0,'bindtransition',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cF=_n('slot')
_(fE,cF)
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oH=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,3,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(r,oH)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_mz(z,'pulldown-refresher',['bind:__l',0,'bind:pulldownRefresh',1,'class',1,'data-event-opts',2,'data-ref',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var aL=_mz(z,'swiper',['bindanimationfinish',7,'bindchange',1,'bindtransition',2,'class',3,'current',4,'data-event-opts',5,'duration',6],[],e,s,gg)
var tM=_v()
_(aL,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'scroll-view',['scrollY',-1,'style',18],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,19,oP,bO,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'good-item',['bind:__l',24,'class',1,'item',2,'vueId',3],[],oX,cW,gg)
_(lY,t1)
return lY
}
hU.wxXCkey=4
_2z(z,22,oV,oP,bO,gg,hU,'item','index','index')
cT.wxXCkey=1
_(xQ,fS)
return xQ
}
tM.wxXCkey=4
_2z(z,16,eN,e,s,gg,tM,'listItem','listIndex','listIndex')
_(lK,aL)
_(r,lK)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b3=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
_(r,b3)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o6=_mz(z,'pulldown-refresher',['bind:__l',0,'bind:pulldownRefresh',1,'class',1,'data-event-opts',2,'data-ref',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var f7=_mz(z,'swiper',['bindanimationfinish',7,'bindchange',1,'bindtransition',2,'class',3,'current',4,'data-event-opts',5,'duration',6],[],e,s,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'scroll-view',['scrollY',-1,'class',18,'style',1],[],cAB,o0,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,20,cAB,o0,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_mz(z,'good-item',['bind:__l',25,'class',1,'item',2,'vueId',3],[],xIB,oHB,gg)
_(oJB,cLB)
return oJB
}
eFB.wxXCkey=4
_2z(z,23,bGB,cAB,o0,gg,eFB,'item','index','index')
tEB.wxXCkey=1
_(oBB,aDB)
return oBB
}
c8.wxXCkey=4
_2z(z,16,h9,e,s,gg,c8,'listItem','listIndex','listIndex')
_(o6,f7)
_(r,o6)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oPB=_mz(z,'pulldown-refresher',['bind:__l',0,'bind:pulldownRefresh',1,'class',1,'data-event-opts',2,'data-ref',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var lQB=_mz(z,'swiper',['bindanimationfinish',7,'bindchange',1,'bindtransition',2,'class',3,'current',4,'data-event-opts',5,'duration',6],[],e,s,gg)
var aRB=_v()
_(lQB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_mz(z,'scroll-view',['scrollY',-1,'style',18],[],bUB,eTB,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,19,bUB,eTB,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oXB,cZB)
var h1B=function(c3B,o2B,o4B,gg){
var a6B=_mz(z,'good-item',['bind:__l',24,'class',1,'item',2,'vueId',3],[],c3B,o2B,gg)
_(o4B,a6B)
return o4B
}
cZB.wxXCkey=4
_2z(z,22,h1B,bUB,eTB,gg,cZB,'item','index','index')
fYB.wxXCkey=1
_(oVB,oXB)
return oVB
}
aRB.wxXCkey=4
_2z(z,16,tSB,e,s,gg,aRB,'listItem','listIndex','listIndex')
_(oPB,lQB)
_(r,oPB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,1,e,s,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(e8B,o0B)
if(_oz(z,2,e,s,gg)){o0B.wxVkey=1
}
b9B.wxXCkey=1
o0B.wxXCkey=1
_(r,e8B)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/fushi/fushi","pages/baihuo/baihuo","pages/shengxian/shengxian","pages/wode/wode","pages/edit-good/edit-good","pages/add-good/add-good","pages/location/location","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"益百购物欢迎您"},"tabBar":{"color":"#000000","selectedColor":"#ff0000","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/fushi/fushi","iconPath":"static/tabbar/fushi.png","selectedIconPath":"static/tabbar/fushi-act.png","text":"副食"},{"pagePath":"pages/baihuo/baihuo","iconPath":"static/tabbar/baihuo.png","selectedIconPath":"static/tabbar/baihuo-act.png","text":"百货"},{"pagePath":"pages/shengxian/shengxian","iconPath":"static/tabbar/shengxian.png","selectedIconPath":"static/tabbar/shengxian-act.png","text":"生鲜"},{"pagePath":"pages/wode/wode","iconPath":"static/tabbar/wode.png","selectedIconPath":"static/tabbar/wode-act.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"益百购物","compilerVersion":"2.5.11","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/good-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/good-item.wxml']=$gwx('./components/good-item.wxml');

__wxAppCode__['components/pulldown-refresher.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/pulldown-refresher.wxml']=$gwx('./components/pulldown-refresher.wxml');

__wxAppCode__['pages/add-good/add-good.json']={"navigationBarTitleText":"新增商品","usingComponents":{}};
__wxAppCode__['pages/add-good/add-good.wxml']=$gwx('./pages/add-good/add-good.wxml');

__wxAppCode__['pages/baihuo/baihuo.json']={"navigationBarTitleText":"益百购物欢迎您（百货）","usingComponents":{"good-item":"/components/good-item","pulldown-refresher":"/components/pulldown-refresher"}};
__wxAppCode__['pages/baihuo/baihuo.wxml']=$gwx('./pages/baihuo/baihuo.wxml');

__wxAppCode__['pages/edit-good/edit-good.json']={"navigationBarTitleText":"编辑商品","usingComponents":{}};
__wxAppCode__['pages/edit-good/edit-good.wxml']=$gwx('./pages/edit-good/edit-good.wxml');

__wxAppCode__['pages/fushi/fushi.json']={"navigationBarTitleText":"益百购物欢迎您（副食）","usingComponents":{"good-item":"/components/good-item","pulldown-refresher":"/components/pulldown-refresher"}};
__wxAppCode__['pages/fushi/fushi.wxml']=$gwx('./pages/fushi/fushi.wxml');

__wxAppCode__['pages/location/location.json']={"usingComponents":{}};
__wxAppCode__['pages/location/location.wxml']=$gwx('./pages/location/location.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"管理员登陆","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/shengxian/shengxian.json']={"navigationBarTitleText":"益百购物欢迎您（生鲜）","usingComponents":{"good-item":"/components/good-item","pulldown-refresher":"/components/pulldown-refresher"}};
__wxAppCode__['pages/shengxian/shengxian.wxml']=$gwx('./pages/shengxian/shengxian.wxml');

__wxAppCode__['pages/wode/wode.json']={"navigationBarTitleText":"我的","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/wode/wode.wxml']=$gwx('./pages/wode/wode.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"14eb":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"19c6":function(t,e,n){},"1ab8":function(t,e,n){"use strict";n.r(e);var r=n("433c"),i=n("9736");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("e3e9");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},"1bf4":function(t,e,n){"use strict";var r=n("19c6"),i=n.n(r);i.a},2059:function(t,e,n){},"22e8":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"2bad":function(t,e,n){"use strict";n.r(e);var r=n("ffba"),i=n("e6ab");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("771d");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},"2e3f":function(t,e,n){},"314c":function(t,e,n){"use strict";n.r(e);var r=n("14eb"),i=n("a5ad");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("8c54");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"56bbf0e0",null,!1,r["a"],o);e["default"]=c.exports},"41c0":function(t,e,n){"use strict";n.r(e);var r=n("ff31");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("da1b");var u,o,a,c,f=n("f0c5"),s=Object(f["a"])(r["default"],u,o,!1,null,null,null,!1,a,c);e["default"]=s.exports},"433c":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"4f65":function(t,e,n){"use strict";n.r(e);var r=n("8aaf"),i=n("c819");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("a6b2");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},"52dd":function(t,e,n){},"57b5":function(t,e,n){"use strict";n.r(e);var r=n("dc03"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},7276:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("7c8b")),u=o(n("555e"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/good-item")]).then(n.bind(null,"9e34"))},c=function(){return n.e("components/pulldown-refresher").then(n.bind(null,"2c22"))},f={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/baihuo/baihuo"}},mixins:[i.default,u.default],components:{goodItem:a,pulldownRefresher:c},data:function(){return{navList:["洗化","百货","针织","日用","烟花"],lists:[]}},mounted:function(){var e=this;t.$on("REFRESH2",function(){return e.$refs.pulldownRefresher.pulldown()})},methods:{refresh:function(){var e=this;t.showLoading({mask:!0,title:"加载中..."}),r.callFunction({name:"good-R",data:{type:2}}).then(function(n){var r=n.result;t.hideLoading(),e.lists=r,e.$refs.pulldownRefresher.pullup()})},addGood:function(t){this.$router.push("/add-good",{type:"2-"+(t+1)})}}};e.default=f}).call(this,n("6e42")["default"],n("a9ff")["default"])},"771d":function(t,e,n){"use strict";var r=n("52dd"),i=n.n(r);i.a},"7c31":function(t,e,n){},"7c9b":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"7f33":function(t,e,n){"use strict";n.r(e);var r=n("7c9b"),i=n("e236");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("1bf4");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"08d3f266",null,!1,r["a"],o);e["default"]=c.exports},"82a8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{psw:""}},methods:{login:function(){"88888888"===this.psw&&(this.$store.commit("userinfo/getUserinfo",{isAdmin:!0,openid:"666"}),t.reLaunch({url:"../wode/wode"}))}}};e.default=n}).call(this,n("6e42")["default"])},"88bd":function(t,e,n){"use strict";n.r(e);var r=n("a141"),i=n("aeac");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("b288");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},8921:function(t,e,n){},"8aaf":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"8c54":function(t,e,n){"use strict";var r=n("f9cd"),i=n.n(r);i.a},9736:function(t,e,n){"use strict";n.r(e);var r=n("c0d7"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},"9a27":function(t,e,n){"use strict";n.r(e);var r=n("cf56"),i=n("57b5");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("ca60");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"196dfbc4",null,!1,r["a"],o);e["default"]=c.exports},a141:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},a193:function(t,e,n){"use strict";var r=n("7c31"),i=n.n(r);i.a},a401:function(t,e,n){"use strict";n.r(e);var r=n("ce16"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},a5ad:function(t,e,n){"use strict";n.r(e);var r=n("b024"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},a5e8:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,u,o){try{var a=t[u](o),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}a(void 0)})}}var c={onLaunch:function(){var t=a(i.default.mark(function t(){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){t("log","App Show"," at App.vue:12")},onHide:function(){t("log","App Hide"," at App.vue:15"),r.hideLoading()}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},a6b2:function(t,e,n){"use strict";var r=n("2e3f"),i=n.n(r);i.a},aeac:function(t,e,n){"use strict";n.r(e);var r=n("fa91"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},b024:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,u,o){try{var a=t[u](o),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}a(void 0)})}}function c(t,e){return l(t)||s(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,u=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw u}}return n}function l(t){if(Array.isArray(t))return t}var d={data:function(){return{imgList:[],type:"",name:"",price:"",unit:""}},onLoad:function(t){this.type=this.$route.query.type,this.chooseImage()},methods:{chooseImage:function(){var e=this;this.imgList.length||t.chooseImage({sourceType:["camera"],sizeType:["compressed"]}).then(function(t){var n=c(t,2),r=n[1].tempFilePaths;return e.imgList=r})},viewImage:function(e){t.previewImage({urls:this.imgList})},delImg:function(e){var n=this;t.showModal({title:"删除",content:"确定删除这张商品图片嘛？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},addGood:function(){var e=a(i.default.mark(function e(){var n,u,o,a,c,f=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.imgList.length){e.next=3;break}return t.showToast({title:"商品图片不能为空",icon:"none"}),e.abrupt("return");case 3:if(this.name){e.next=6;break}return t.showToast({title:"商品名称不能为空",icon:"none"}),e.abrupt("return");case 6:if(this.price){e.next=9;break}return t.showToast({title:"商品价格不能为空",icon:"none"}),e.abrupt("return");case 9:if(this.unit){e.next=12;break}return t.showToast({title:"商品单位不能为空",icon:"none"}),e.abrupt("return");case 12:return t.showLoading({mask:!0,title:"添加中..."}),e.next=15,r.uploadFile({filePath:this.imgList[0]});case 15:return n=e.sent,u=n.fileID,e.next=19,this.$mini(this.imgList[0]);case 19:return o=e.sent,e.next=22,r.uploadFile({filePath:o});case 22:a=e.sent,c=a.fileID,r.callFunction({name:"good-C",data:{url:c,_url:u,type:this.type,unit:this.unit,name:this.name,price:this.price,addTime:Date.now()}}).then(function(e){e.result;t.hideLoading(),t.showModal({title:"添加成功",showCancel:!1,content:"".concat(f.name,"    ").concat(f.price,"元 / ").concat(f.unit)}).then(function(){t.$emit("REFRESH".concat(f.type.split("-")[0])),f.$router.pop()})}).catch(function(e){t.hideLoading(),t.showToast({title:"上传失败，请联系成诺",icon:"none"})});case 25:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=d}).call(this,n("6e42")["default"],n("a9ff")["default"])},b288:function(t,e,n){"use strict";var r=n("cf83"),i=n.n(r);i.a},b7b2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{scale:17,latitude:32.597034,longitude:112.098133,covers:[{width:66,height:66,latitude:32.597034,longitude:112.098133,iconPath:"../../static/marker.jpg",callout:{padding:8,fontSize:20,borderWidth:1,borderRadius:8,color:"#000000",display:"ALWAYS",content:"益百购物",borderColor:"#C0C0C0"}}]}}};e.default=r},c0d7:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return f(t)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,u=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw u}}return n}function f(t){if(Array.isArray(t))return t}function s(t,e,n,r,i,u,o){try{var a=t[u](o),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function o(t){s(u,r,i,o,a,"next",t)}function a(t){s(u,r,i,o,a,"throw",t)}o(void 0)})}}var d={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/fushi/fushi"}},data:function(){return{swiperList:[]}},computed:{isAdmin:function(){return this.$store.state.userinfo.isAdmin}},created:function(){this.$store.state.userinfo.isAdmin?t.startPullDownRefresh():t.reLaunch({url:"../login/login"})},onPullDownRefresh:function(){var e=this;r.callFunction({name:"swiper-R"}).then(function(n){var r=n.result;e.swiperList=r,t.stopPullDownRefresh(),t.hideLoading()})},methods:{switchChange:function(t){var e=t.detail.value;this.$store.commit("app/isEditMode",e)},callPhone:function(){t.showLoading({mask:!0,title:"加载中..."}),t.makePhoneCall({phoneNumber:"18837723191"})},willOpen:function(){t.showToast({icon:"none",title:"开发中，敬请期待！"})},preview:function(e){t.previewImage({urls:this.swiperList,current:e})},changeSwiper:function(){var e=this;t.chooseImage({sourceType:["album"],sizeType:["compressed"]}).then(function(){var n=l(i.default.mark(function n(u){var a,c,f,s,l,d,h;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:a=o(u,2),c=a[1].tempFilePaths,t.showLoading({mask:!0,title:"更换中..."}),f=[],s=0;case 4:if(!(s<c.length)){n.next=13;break}return n.next=7,r.uploadFile({filePath:c[s]});case 7:l=n.sent,d=l.fileID,f.push(d);case 10:s++,n.next=4;break;case 13:return n.next=15,r.callFunction({name:"swiper-U",data:f});case 15:h=0;case 16:if(!(h<e.swiperList.length)){n.next=22;break}return n.next=19,r.deleteFile({fileList:[e.swiperList[h]]});case 19:h++,n.next=16;break;case 22:t.startPullDownRefresh();case 23:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}())}}};e.default=d}).call(this,n("6e42")["default"],n("a9ff")["default"])},c27e:function(t,e,n){"use strict";n.r(e);var r=n("22e8"),i=n("a401");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("a193");var o,a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"36a02ed8",null,!1,r["a"],o);e["default"]=c.exports},c819:function(t,e,n){"use strict";n.r(e);var r=n("b7b2"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},ca60:function(t,e,n){"use strict";var r=n("e41f"),i=n.n(r);i.a},ce16:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,u,o){try{var a=t[u](o),c=a.value}catch(f){return void n(f)}a.done?e(c):Promise.resolve(c).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}a(void 0)})}}function c(t,e){return l(t)||s(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,u=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw u}}return n}function l(t){if(Array.isArray(t))return t}var d={data:function(){return{url:"",unit:"",name:"",price:"",imgList:[]}},onLoad:function(t){this.url=this.$route.query.url,this.name=this.$route.query.name,this.unit=this.$route.query.unit,this.price=this.$route.query.price,this.imgList=[this.$route.query._url]},methods:{ChooseImage:function(){var e=this;this.imgList.length||t.chooseImage({sourceType:["camera"],sizeType:["compressed"]}).then(function(t){var n=c(t,2),r=n[1].tempFilePaths;return e.imgList=r})},ViewImage:function(e){t.previewImage({urls:this.imgList})},DelImg:function(e){var n=this;t.showModal({title:"删除",content:"确定删除这张商品图片嘛？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},addGood:function(){var e=a(i.default.mark(function e(){var n,u,o,a,c,f,s,l=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.imgList.length){e.next=3;break}return t.showToast({title:"商品图片不能为空",icon:"none"}),e.abrupt("return");case 3:if(this.name){e.next=6;break}return t.showToast({title:"商品名称不能为空",icon:"none"}),e.abrupt("return");case 6:if(this.price){e.next=9;break}return t.showToast({title:"商品价格不能为空",icon:"none"}),e.abrupt("return");case 9:if(this.unit){e.next=12;break}return t.showToast({title:"商品单位不能为空",icon:"none"}),e.abrupt("return");case 12:if(t.showLoading({mask:!0,title:"修改中"}),!this.imgList[0].match(/bsppub.oss-cn-shanghai.aliyuncs.com/g)){e.next=18;break}n=this.$route.query.url,u=this.$route.query._url,e.next=35;break;case 18:return e.next=20,r.deleteFile({fileList:[this.$route.query.url]});case 20:return e.next=22,r.deleteFile({fileList:[this.$route.query._url]});case 22:return e.next=24,r.uploadFile({filePath:this.imgList[0]});case 24:return o=e.sent,a=o.fileID,u=a,e.next=29,this.$mini(this.imgList[0]);case 29:return c=e.sent,e.next=32,r.uploadFile({filePath:c});case 32:f=e.sent,s=f.fileID,n=s;case 35:r.callFunction({name:"good-U",data:{_id:this.$route.query._id,data:{url:n,_url:u,name:this.name,price:this.price,unit:this.unit}}}).then(function(e){e.result;t.hideLoading(),t.showModal({title:"修改成功",showCancel:!1,content:"".concat(l.name,"    ").concat(l.price,"元 / ").concat(l.unit)}).then(function(){t.$emit("REFRESH".concat(l.$route.query.type.split("-")[0])),l.$router.pop()})});case 36:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=d}).call(this,n("6e42")["default"],n("a9ff")["default"])},cf56:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},cf83:function(t,e,n){},d23f:function(t,e,n){"use strict";(function(t,e){n("232c"),n("921b");var r=c(n("66fd")),i=c(n("41c0")),u=c(n("47f2")),o=a(n("b180"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}function c(t){return t&&t.__esModule?t:{default:t}}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.prototype.$store=u.default,r.default.prototype.$route=o.$route,r.default.prototype.$router=o.default,r.default.prototype.$offset=function(e){var n=this;return new Promise(function(r,i){t.createSelectorQuery().in(n).select(e).boundingClientRect(function(t){t&&(t.x=t.left+t.width/2),t&&(t.y=t.top+t.height/2),t?r(t):i("元素不存在")}).exec()})},r.default.prototype.$mini=function(t){return new Promise(function(e){plus.io.getImageInfo({src:t,success:function(n){plus.zip.compressImage({src:t,quality:66,width:"24%",height:"24%",overwrite:!0,dst:"_doc/".concat(Date.now(),".jpg"),clip:{top:"".concat(Math.floor(50*(1-n.width/n.height)),"%"),height:"".concat(Math.floor(n.width/n.height*100),"%")}},function(t){e(t.target)})}})})},r.default.config.productionTip=!1,e(new r.default(f({},i.default))).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},da1b:function(t,e,n){"use strict";var r=n("8921"),i=n.n(r);i.a},dc03:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("7c8b")),u=o(n("555e"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/good-item")]).then(n.bind(null,"9e34"))},c=function(){return n.e("components/pulldown-refresher").then(n.bind(null,"2c22"))},f={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/fushi/fushi"}},mixins:[i.default,u.default],components:{goodItem:a,pulldownRefresher:c},data:function(){return{navList:["副食","饮料","酒水","散点","粮油"],lists:[]}},mounted:function(){var e=this;t.$on("REFRESH1",function(t){return e.$refs.pulldownRefresher.pulldown(t)})},methods:{refresh:function(e){var n=this;!e&&t.showLoading({mask:!0,title:"加载中..."}),r.callFunction({name:"good-R",data:{type:1}}).then(function(e){var r=e.result;t.hideLoading(),n.lists=r,n.$refs.pulldownRefresher.pullup()})},addGood:function(t){this.$router.push("/add-good",{type:"1-"+(t+1)})}}};e.default=f}).call(this,n("6e42")["default"],n("a9ff")["default"])},e236:function(t,e,n){"use strict";n.r(e);var r=n("82a8"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},e3e9:function(t,e,n){"use strict";var r=n("2059"),i=n.n(r);i.a},e41f:function(t,e,n){},e6ab:function(t,e,n){"use strict";n.r(e);var r=n("7276"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},f9cd:function(t,e,n){},fa91:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("7c8b")),u=o(n("555e"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/good-item")]).then(n.bind(null,"9e34"))},c=function(){return n.e("components/pulldown-refresher").then(n.bind(null,"2c22"))},f={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/shengxian/shengxian"}},mixins:[i.default,u.default],components:{goodItem:a,pulldownRefresher:c},data:function(){return{navList:["蔬菜","水果","干货","冷冻","调料"],lists:[]}},mounted:function(){var e=this;t.$on("REFRESH3",function(){return e.$refs.pulldownRefresher.pulldown()})},methods:{refresh:function(){var e=this;t.showLoading({mask:!0,title:"加载中..."}),r.callFunction({name:"good-R",data:{type:3}}).then(function(n){var r=n.result;t.hideLoading(),e.lists=r,e.$refs.pulldownRefresher.pullup()})},addGood:function(t){this.$router.push("/add-good",{type:"3-"+(t+1)})}}};e.default=f}).call(this,n("6e42")["default"],n("a9ff")["default"])},ff31:function(t,e,n){"use strict";n.r(e);var r=n("a5e8"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},ffba:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})}},[["d23f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, i = t[0], l = t[1], c = t[2], s = 0, f = []; s < i.length; s++) {
      o = i[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (n in l) {
      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return a.push.apply(a, c || []), r();
  }

  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== u[i] && (n = !1);
      }

      n && (a.splice(t--, 1), e = l(l.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      a = [];

  function i(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports;
  }

  l.e = function (e) {
    var t = [],
        r = {
      "components/good-item": 1,
      "components/pulldown-refresher": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/good-item": "components/good-item",
        "components/pulldown-refresher": "components/pulldown-refresher"
      }[e] || e) + ".wxss", u = l.p + n, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
        var c = a[i],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === n || s === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (i = 0; i < f.length; i++) {
        c = f[i], s = c.getAttribute("data-href");
        if (s === n || s === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var n = t && t.target && t.target.src || u,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        a.request = n, delete o[e], p.parentNode.removeChild(p), r(a);
      }, p.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var n = u[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var a = new Promise(function (t, r) {
        n = u[e] = [t, r];
      });
      t.push(n[2] = a);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = i(e), c = function c(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var r = u[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            a.type = n, a.request = o, r[1](a);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        c({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, l.m = e, l.c = n, l.d = function (e, t, r) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (l.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      l.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var f = 0; f < c.length; f++) {
    t(c[f]);
  }

  var p = s;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[i]["apply"](console,e);var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(a.length>1){var c=a.pop();s=a.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=a[0];console[i](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"232c":function(t,e,n){},"26aa":function(t,e,n){var r={"./add-good/add-good.vue":"314c","./baihuo/baihuo.vue":"2bad","./edit-good/edit-good.vue":"c27e","./fushi/fushi.vue":"9a27","./location/location.vue":"4f65","./login/login.vue":"7f33","./shengxian/shengxian.vue":"88bd","./wode/wode.vue":"1ab8"};function o(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="26aa"},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return P}),n.d(e,"mapMutations",function(){return j}),n.d(e,"mapGetters",function(){return I}),n.d(e,"mapActions",function(){return $}),n.d(e,"createNamespacedHelpers",function(){return N});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&E(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=A(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){h.set(s,c,r.state)})}var u=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;O(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;S(t,r,o,u)}),r.forEachGetter(function(e,n){var r=a+n;k(t,r,e,u)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=T(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=T(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return A(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function O(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function E(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function A(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function T(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=T(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=T(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=A(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),_(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var P=D(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=R(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),j=D(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=R(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),I=D(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||R(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),$=D(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=R(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),N=function(t){return{mapState:P.bind(null,t),mapGetters:I.bind(null,t),mapMutations:j.bind(null,t),mapActions:$.bind(null,t)}};function C(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function D(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function R(t,e,n){var r=t._modulesNamespaceMap[n];return r}var M={Store:d,install:x,version:"3.0.1",mapState:P,mapMutations:j,mapGetters:I,mapActions:$,createNamespacedHelpers:N};e["default"]=M},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"47f2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=n("c41a"),s=a.keys().reduce(function(t,e){var n=e.replace(/^\.\/(.*)\.\w+$/,"$1"),r=a(e);return t[n]=r.default,t},{}),c=new o.default.Store({modules:s});e.default=c},"555e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={computed:{isEditMode:function(){return this.$store.state.app.isEditMode}},mounted:function(){this.$refs.pulldownRefresher.pulldown()}};e.default=r},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function f(t){return"[object Object]"===u.call(t)}function l(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,S=w(function(t){return t.replace(O,function(t,e){return e?e.toUpperCase():""})}),k=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=/\B([A-Z])/g,A=w(function(t){return t.replace(E,"-$1").toLowerCase()});function T(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var P=Function.prototype.bind?x:T;function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function I(t,e){for(var n in e)t[n]=e[n];return t}function $(t){for(var e={},n=0;n<t.length;n++)t[n]&&I(e,t[n]);return e}function N(t,e,n){}var C=function(t,e,n){return!1},D=function(t){return t};function R(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function L(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var q=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:N,parsePlatformTagName:D,mustUseProp:C,async:!0,_lifecycleHooks:U},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function K(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,W="__proto__"in{},z="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Q=z&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(z)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===Y&&(Y=!z&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Y},it=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=N,ft=0,lt=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function _t(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];K(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames(bt),St=!0;function kt(t){St=t}var Et=function(t){this.value=t,this.dep=new lt,this.vmCount=0,K(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?Tt(t,bt,Ot):At(t,bt):Tt(t,bt,Ot),this.observeArray(t)):this.walk(t)};function At(t,e){t.__proto__=e}function Tt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];K(t,i,e[i])}}function xt(t,e){var n;if(c(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof Et?n=t.__ob__:St&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Et(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!o&&xt(e),i.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function It(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}Et.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Et.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Nt=F.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Ct(r,o):jt(t,n,o));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Ct(r,o):o}:e?t?function(){return Ct("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Mt(n):n}function Mt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Lt(t,e,n,r){var o=Object.create(t||null);return e?I(o,e):o}Nt.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},U.forEach(function(t){Nt[t]=Rt}),q.forEach(function(t){Nt[t+"s"]=Lt}),Nt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in I(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Nt.props=Nt.methods=Nt.inject=Nt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return I(o,t),e&&I(o,e),o},Nt.provide=Dt;var qt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=S(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=S(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Ft(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?I({from:i},a):{from:a}}else 0}}function Bt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Ft(e,n),Bt(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Vt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Nt[r]||qt;a[r]=o(t[r],e[r],n,r)}return a}function Kt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=S(n);if(b(o,i))return o[i];var a=k(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Ht(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=zt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===A(t)){var c=zt(String,o.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Gt(r,o,t);var u=St;kt(!0),xt(a),kt(u)}return a}function Gt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Yt(e.type)?r.call(t):r}}function Yt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Yt(t)===Yt(e)}function zt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Jt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Qt(no,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{ht()}}function Xt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Jt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Jt(no,r,o)}return i}function Qt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(no){no!==t&&Zt(no,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!z&&!J||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(N)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(no){Jt(no,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function fe(t){le(t,ue),ue.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Xt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var c,u,f,l;for(c in t)u=t[c],f=e[c],l=pe(c),r(u)||(r(f)?(r(u.fns)&&(u=t[c]=he(u,s)),i(l.once)&&(u=t[c]=a(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==f&&(f.fns=u,t[c]=f));for(c in e)r(t[c])&&(l=pe(c),o(l.name,e[c],l.capture))}function ve(t,e,n,i){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(r(a))return n;var s=e.options.mpOptions.externalClasses||[],c=t.attrs,u=t.props;if(o(c)||o(u))for(var f in a){var l=A(f),p=_e(n,u,f,l,!0)||_e(n,c,f,l,!1);p&&n[f]&&-1!==s.indexOf(l)&&i[S(n[f])]&&(n[f]=i[S(n[f])])}return n}function ye(t,e,n,i){var a=e.options.props;if(r(a))return ve(t,e,{},i);var s={},c=t.attrs,u=t.props;if(o(c)||o(u))for(var f in a){var l=A(f);_e(s,u,f,l,!0)||_e(s,c,f,l,!1)}return ve(t,e,s,i)}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[_t(t)]:Array.isArray(t)?we(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function we(t,e){var n,a,c,u,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=f.length-1,u=f[c],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(u)&&(f[c]=_t(u.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?be(u)?f[c]=_t(u.text+a):""!==a&&f.push(_t(a)):be(a)&&be(u)?f[c]=_t(u.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function Oe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=ke(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){Pt(t,n,e[n])}),kt(!0))}function ke(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ee(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=xe(e,c,t[c]))}else o={};for(var u in e)u in o||(o[u]=Pe(e,u));return t&&Object.isExtensible(t)&&(t._normalized=o),K(o,"$stable",a),K(o,"$key",s),K(o,"$hasNormal",i),o}function xe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Pe(t,e){return function(){return t[e]}}function je(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r,r,r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r,r,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),f=u.next();while(!f.done)n.push(e(f.value,n.length,r++,r)),f=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r,r);return o(n)||(n=[]),n._isVList=!0,n}function Ie(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=I(I({},r),n)),o=i(n,this,n._i)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function $e(t){return Kt(this.$options,"filters",t,!0)||D}function Ne(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,n,r,o){var i=F.keyCodes[e]||n;return o&&r&&!F.keyCodes[e]?Ne(o,r):i?Ne(i,t):r?A(r)!==e:void 0}function De(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=$(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(a),u=A(a);if(!(c in i)&&!(u in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Le(r,"__static__"+t,!1),r)}function Me(t,e,n){return Le(t,"__once__"+e+(n?"_"+n:""),!0),t}function Le(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&qe(t[r],e+"_"+r,n);else qe(t,e,n)}function qe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(f(e)){var n=t.on=t.on?I({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Fe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Fe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function Ke(t){t._o=Me,t._n=v,t._s=d,t._l=je,t._t=Ie,t._q=R,t._i=M,t._m=Re,t._f=$e,t._k=Ce,t._b=De,t._v=_t,t._e=yt,t._u=Fe,t._g=Ue,t._d=Be,t._p=Ve}function He(t,e,r,o,a){var s,c=this,u=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(u._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=ke(u.inject,o),this.slots=function(){return c.$slots||Te(t.scopedSlots,c.$slots=Ee(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),f&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,l)}}function Ge(t,e,r,i,a){var s=t.options,c={},u=s.props;if(o(u))for(var f in u)c[f]=Ht(f,u,e||n);else o(r.attrs)&&We(c,r.attrs),o(r.props)&&We(c,r.props);var l=new He(r,c,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return Ye(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Ye(h[v],r,l.parent,s,l);return d}}function Ye(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function We(t,e){for(var n in e)t[S(n)]=e[n]}Ke(He.prototype);var ze={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ze.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,kn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||($n(n,"onServiceCreated"),$n(n,"onServiceAttached"),n._isMounted=!0,$n(n,"mounted")),t.data.keepAlive&&(e._isMounted?Kn(n):jn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?In(e,!0):e.$destroy())}},Je=Object.keys(ze);function Xe(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,u),void 0===t))return dn(f,e,n,a,s);e=e||{},hr(t),o(e.model)&&en(t.options,e);var l=ye(e,t,s,n);if(i(t.options.functional))return Ge(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],o=e[r],i=ze[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new dt(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Kt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(c,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&cn(n),a):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function cn(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ee(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Pt(t,"$attrs",i&&i.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function pn(t){Ke(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Te(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Jt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,u=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null))},p=L(function(n){t.resolved=hn(n,e),s?a.length=0:l(!0)}),d=L(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return c(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=hn(v.error,e)),o(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||yn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&On(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function wn(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function On(t,e,n){fn=t,de(e,n||{},mn,bn,wn,t),fn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?j(n):n;for(var r=j(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Xt(n[i],e,r,e,o)}return e}}var kn=null;function En(t){var e=kn;return kn=t,function(){kn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=En(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$n(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$n(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=Ht(h,d,e,t)}kt(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,On(t,r,v),u&&(t.$slots=Ee(i,o.context),t.$forceUpdate())}function Pn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function jn(t,e){if(e){if(t._directInactive=!1,Pn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);$n(t,"activated")}}function In(t,e){if((!e||(t._directInactive=!0,!Pn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)In(t.$children[n]);$n(t,"deactivated")}}function $n(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Xt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Nn=[],Cn=[],Dn={},Rn=!1,Mn=!1,Ln=0;function qn(){Ln=Nn.length=Cn.length=0,Dn={},Rn=Mn=!1}var Un=Date.now;if(z&&!Z){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Fn.now()})}function Bn(){var t,e;for(Un(),Mn=!0,Nn.sort(function(t,e){return t.id-e.id}),Ln=0;Ln<Nn.length;Ln++)t=Nn[Ln],t.before&&t.before(),e=t.id,Dn[e]=null,t.run();var n=Cn.slice(),r=Nn.slice();qn(),Hn(n),Vn(r),it&&F.devtools&&it.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Kn(t){t._inactive=!1,Cn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,jn(t[e],!0)}function Gn(t){var e=t.id;if(null==Dn[e]){if(Dn[e]=!0,Mn){var n=Nn.length-1;while(n>Ln&&Nn[n].id>t.id)n--;Nn.splice(n+1,0,t)}else Nn.push(t);Rn||(Rn=!0,ce(Bn))}}var Yn=0,Wn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Yn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Jt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Jt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var zn={enumerable:!0,configurable:!0,get:N,set:N};function Jn(t,e,n){zn.get=function(){return this[e][n]},zn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,zn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):xt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||kt(!1);var a=function(i){o.push(i);var a=Ht(i,e,n,t);Pt(r,i,a),i in t||Jn(t,"_props",i)};for(var s in e)a(s);kt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||V(i)||Jn(t,"_data",i)}xt(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(no){return Jt(no,e,"data()"),{}}finally{ht()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Wn(t,a||N,N,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(zn.get=r?or(e):ir(n),zn.set=N):(zn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):N,zn.set=n.set||N),Object.defineProperty(t,e,zn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?N:P(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)cr(t,n,r[o]);else cr(t,n,r)}}function cr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=It,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return cr(r,t,e,n);n=n||{},n.user=!0;var o=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Jt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Vt(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),gn(e),un(e),$n(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Xn(e),"mp-toutiao"!==e.mpHost&&Oe(e),"mp-toutiao"!==e.mpHost&&$n(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&I(t.extendOptions,o),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Vt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,q.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=I({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){q.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Or(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function kr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=Or(a.componentOptions);s&&!e(s)&&Er(n,i,r,o)}}}function Er(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(vr),ur(vr),Sn(vr),Tn(vr),pn(vr);var Ar=[String,RegExp,Array],Tr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Er(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){kr(t,function(t){return Sr(e,t)})}),this.$watch("exclude",function(e){kr(t,function(t){return!Sr(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=Or(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Sr(i,r))||a&&r&&Sr(a,r))return e;var s=this,c=s.cache,u=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[f]?(e.componentInstance=c[f].componentInstance,g(u,f),u.push(f)):(c[f]=e,u.push(f),this.max&&u.length>parseInt(this.max)&&Er(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:Tr};function Pr(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:I,mergeOptions:Vt,defineReactive:Pt},t.set=jt,t.delete=It,t.nextTick=ce,t.observable=function(t){return xt(t),t},t.options=Object.create(null),q.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,I(t.options.components,xr),yr(t),_r(t),gr(t),wr(t)}Pr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:He}),vr.version="2.6.11";var jr="[object Array]",Ir="[object Object]";function $r(t,e){var n={};return Nr(t,e),Cr(t,e,"",n),n}function Nr(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==Ir&&r==Ir){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Nr(i,e[o])}}else n==jr&&r==jr&&t.length>=e.length&&e.forEach(function(e,n){Nr(t[n],e)})}}function Cr(t,e,n,r){if(t!==e){var o=Rr(t),i=Rr(e);if(o==Ir)if(i!=Ir||Object.keys(t).length<Object.keys(e).length)Dr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Rr(i),c=Rr(a);if(s!=jr&&s!=Ir)i!=e[o]&&Dr(r,(""==n?"":n+".")+o,i);else if(s==jr)c!=jr?Dr(r,(""==n?"":n+".")+o,i):i.length<a.length?Dr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Cr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Ir)if(c!=Ir||Object.keys(i).length<Object.keys(a).length)Dr(r,(""==n?"":n+".")+o,i);else for(var u in i)Cr(i[u],a[u],(""==n?"":n+".")+o+"."+u,r)};for(var s in t)a(s)}else o==jr?i!=jr?Dr(r,n,t):t.length<e.length?Dr(r,n,t):t.forEach(function(t,o){Cr(t,e[o],n+"["+o+"]",r)}):Dr(r,n,t)}}function Dr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Lr(t){return Nn.find(function(e){return t._watcher===e})}function qr(t,e){if(!t.__next_tick_pending&&!Lr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Jt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Ur(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Fr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Ur(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=$r(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function Br(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Br),t.$options.render||(t.$options.render=Br),"mp-toutiao"!==t.mpHost&&$n(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,N,{before:function(){t._isMounted&&!t._isDestroyed&&$n(t,"beforeUpdate")}},!0),n=!1,t}function Kr(t,e){return o(t)||o(e)?Hr(t,Gr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function Gr(t){return Array.isArray(t)?Yr(t):c(t)?Wr(t):"string"===typeof t?t:""}function Yr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Gr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var zr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?$(t):"string"===typeof t?zr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){var e=getApp();e&&e.onError?e.onError(t):console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:j(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return qr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Oe,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Xt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t,e),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Kr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?I(e,n):n;return Object.keys(r).map(function(t){return A(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(c(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Fr,vr.prototype.$mount=function(t,e){return Vr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=ke,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function _(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,S=w(function(t){return t.replace(O,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],E={},A={};function T(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function P(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&(t[n]=T(t[n],e[n]))})}function I(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&P(t[n],e[n])})}function $(t,e){"string"===typeof t&&g(e)?j(A[t]||(A[t]={}),e):g(t)&&j(E,t)}function N(t,e){"string"===typeof t?g(e)?I(A[t],e):delete A[t]:g(t)&&I(E,t)}function C(t){return function(e){return t(e)||e}}function D(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(C(o));else{var i=o(e);if(D(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function L(t,e){var n=[];Array.isArray(E.returnValue)&&n.push.apply(n,f(E.returnValue));var r=A[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function q(t){var e=Object.create(null);Object.keys(E).forEach(function(t){"returnValue"!==t&&(e[t]=E[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=q(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[M(a,t)].concat(o))})}return e.apply(void 0,[M(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var F={returnValue:function(t){return D(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,K=/^on/;function H(t){return V.test(t)}function G(t){return B.test(t)}function Y(t){return K.test(t)&&"onPush"!==t}function W(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function z(t){return!(H(t)||G(t)||Y(t))}function J(t,e){return z(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?L(t,U.apply(void 0,[t,e,n].concat(o))):L(t,W(new Promise(function(r,i){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:F},it=Object.freeze({__proto__:null,upx2px:rt,interceptors:ot,addInterceptor:$,removeInterceptor:N}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?_(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return G(t)?pt(t,a,o.returnValue,H(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var _t=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(_t(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(_t(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(_t(),"$once",Array.prototype.slice.call(arguments))}function Ot(){return gt(_t(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({__proto__:null,$on:mt,$off:bt,$once:wt,$emit:Ot});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Et(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function At(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Et(e),e}var Tt=Object.freeze({__proto__:null,getSubNVueById:At,requireNativePlugin:kt}),xt=Page,Pt=Component,jt=/:/g,It=w(function(t){return S(t.replace(jt,"-"))});function $t(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[It(n)].concat(o))}}}function Nt(t,e){var n=e[t];e[t]=n?function(){$t(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){$t(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Nt("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Nt("created",t),Pt(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Dt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Mt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Lt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function qt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ft(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Bt=[String,Number,Boolean,Object,Array,null];function Vt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Kt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Gt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Gt(t.props,!0)}))}),a}function Ht(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Vt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];y(o)&&(o=o()),r.type=Ht(e,r.type),n[e]={type:-1!==Bt.indexOf(r.type)?r.type:null,value:o,observer:Vt(e)}}else{var i=Ht(e,r);n[e]={type:-1!==Bt.indexOf(i)?i:null,observer:Vt(e)}}}),n}function Yt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Wt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function zt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Wt(t,e)}),r}function Jt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=zt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Jt(t)):"string"===typeof t&&m(s,t)?c.push(s[t]):c.push(t)}),c}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Yt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var c=r.charAt(0)===Qt;r=c?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Xt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}i.push(a.apply(o,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Dt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Mt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){for(var n,r=t.$children,o=r.length-1;o>=0;o--){var i=r[o];if(i.$scope._$vueId===e)return i}for(var a=r.length-1;a>=0;a--)if(n=ie(r[a],e),n)return n}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ue})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Mt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Lt(r.default,t),s=i(a,2),c=s[0],u=s[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:Ft(u,r.default.prototype),behaviors:Kt(u,ae),properties:Gt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),qt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,c]}function ye(t){return ve(t,{isPage:se,initRelation:ce})}function _e(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=_e(t);return Mt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ce})}ge.push.apply(ge,Ct);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Oe(t){var e=be(t);return Mt(e.methods,we),e}function Se(t){return Component(Oe(t))}function ke(t){return Component(_e(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ee={};Object.keys(it).forEach(function(t){Ee[t]=it[t]}),Object.keys(St).forEach(function(t){Ee[t]=St[t]}),Object.keys(Tt).forEach(function(t){Ee[t]=J(t,Tt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Ee[t]=J(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ee,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=ke;var Ae=Ee,Te=Ae;e.default=Te}).call(this,n("c8ba"))},"7c8b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{MIXIN_DrogLeft:0,MIXIN_NowIndex:0,MIXIN_ActiveIndex:0,MIXIN_FinishedIndex:0,MIXIN_ScrollViewHeight:0,MIXIN_ScreenWidth:t.getSystemInfoSync().screenWidth}},mounted:function(){var t=this;this.$offset(".swiper").then(function(e){return t.MIXIN_ScrollViewHeight=e.height})},methods:{MIXIN_transition:function(t){var e=t.detail.dx;this.MIXIN_DrogLeft=this.MIXIN_FinishedIndex*(this.MIXIN_ScreenWidth/this.navList.length)+e/this.navList.length},MIXIN_change:function(t){var e=t.detail.current;this.MIXIN_ActiveIndex=e},MIXIN_animationfinish:function(t){var e=t.detail.current;this.MIXIN_FinishedIndex=this.MIXIN_NowIndex=e},MIXIN_SwitchNav:function(t){this.MIXIN_ActiveIndex=t}}};e.default=n}).call(this,n("6e42")["default"])},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},8525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__124A225"};e.default=r},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,_="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(_)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(_,e)}catch(n){t.setStorageSync(_,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},E=function(){return"n"===S()?plus.runtime.version:""},A=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},T=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",P="Last__Visit__Time",j=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=O(),t.setStorageSync(x,n),t.removeStorageSync(P)),n},I=function(){var e=t.getStorageSync(P),n=0;return n=e||"",t.setStorageSync(P,O()),n},$="__page__residence__time",N=0,C=0,D=function(){return N=O(),"n"===S()&&t.setStorageSync($,O()),N},R=function(){return C=O(),"n"===S()&&(N=t.getStorageSync($)),C-N},M="Total__Visit__Count",L=function(){var e=t.getStorageSync(M),n=1;return e&&(n=e,n++),t.setStorageSync(M,n),n},q=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,F=0,B=function(){var t=(new Date).getTime();return U=t,F=0,t},V=function(){var t=(new Date).getTime();return F=t,t},K=function(t){var e=0;if(0!==U&&(e=F-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},H=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},Y=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},z=n("e9af").default,J=n("8525").default||n("8525"),X=t.getSystemInfoSync(),Q=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:k(),ak:J.appid,usv:l,v:E(),ch:A(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=K("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=K();B();var r=G(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=H();if(this._navigationBarTitle.config=z&&z.pages[e]&&z.pages[e].titleNView&&z.pages[e].titleNView.titleText||z&&z.pages[e]&&z.pages[e].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=K("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=K("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=O(),this.statData.sc=T(t.scene),this.statData.fvts=j(),this.statData.lvts=I(),this.statData.tvc=L(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;J.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=O(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<y)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),D();var c=[],u=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?c.push(n):3===t?f.push(n):u.push(n)})};for(var h in s)p(h);c.push.apply(c,u.concat(f));var d={usv:l,t:o,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(q(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return c(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,D(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Y(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Y(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_($([])));g&&g!==r&&o.call(g,a)&&(y=g);var m=k.prototype=O.prototype=Object.create(y);S.prototype=m.constructor=k,k.constructor=S,k[c]=S.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},E(A.prototype),A.prototype[s]=function(){return this},f.AsyncIterator=A,f.async=function(t,e,n,r){var o=new A(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=$,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof O?e:O,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=T(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function O(){}function S(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function T(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return N()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a9ff:function(t,e,n){"use strict";n.r(e),function(t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{};function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function s(t,e){return t(e={exports:{}},e.exports),e.exports}var c=s(function(t,e){var n;t.exports=(n=n||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),r={},o=r.lib={},i=o.Base={extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,o=t.sigBytes;if(this.clamp(),r%4)for(var i=0;i<o;i++){var a=n[i>>>2]>>>24-i%4*8&255;e[r+i>>>2]|=a<<24-(r+i)%4*8}else for(i=0;i<o;i+=4)e[r+i>>>2]=n[i>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],o=function(e){e=e;var n=987654321,r=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(e=18e3*(65535&e)+(e>>16)&r)&r;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<e;i+=4){var s=o(4294967296*(n||t.random()));n=987654071*s(),r.push(4294967296*s()|0)}return new a.init(r,e)}}),s=r.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new a.init(n,e/2)}},u=s.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new a.init(n,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,s=o/(4*i),c=(s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0))*i,u=t.min(4*c,o);if(c){for(var f=0;f<c;f+=i)this._doProcessBlock(r,f);var l=r.splice(0,c);n.sigBytes-=u}return new a.init(l,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new p.HMAC.init(t,n).finalize(e)}}}),r.algo={});return r}(Math),n)}),u=(s(function(t,e){var n;t.exports=(n=c,function(t){var e=n,r=e.lib,o=r.WordArray,i=r.Hasher,a=e.algo,s=[];!function(){for(var e=0;e<64;e++)s[e]=4294967296*t.abs(t.sin(e+1))|0}();var c=a.MD5=i.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var r=e+n,o=t[r];t[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8)}var i=this._hash.words,a=t[e+0],c=t[e+1],h=t[e+2],d=t[e+3],v=t[e+4],y=t[e+5],_=t[e+6],g=t[e+7],m=t[e+8],b=t[e+9],w=t[e+10],O=t[e+11],S=t[e+12],k=t[e+13],E=t[e+14],A=t[e+15],T=i[0],x=i[1],P=i[2],j=i[3];T=u(T,x,P,j,a,7,s[0]),j=u(j,T,x,P,c,12,s[1]),P=u(P,j,T,x,h,17,s[2]),x=u(x,P,j,T,d,22,s[3]),T=u(T,x,P,j,v,7,s[4]),j=u(j,T,x,P,y,12,s[5]),P=u(P,j,T,x,_,17,s[6]),x=u(x,P,j,T,g,22,s[7]),T=u(T,x,P,j,m,7,s[8]),j=u(j,T,x,P,b,12,s[9]),P=u(P,j,T,x,w,17,s[10]),x=u(x,P,j,T,O,22,s[11]),T=u(T,x,P,j,S,7,s[12]),j=u(j,T,x,P,k,12,s[13]),P=u(P,j,T,x,E,17,s[14]),T=f(T,x=u(x,P,j,T,A,22,s[15]),P,j,c,5,s[16]),j=f(j,T,x,P,_,9,s[17]),P=f(P,j,T,x,O,14,s[18]),x=f(x,P,j,T,a,20,s[19]),T=f(T,x,P,j,y,5,s[20]),j=f(j,T,x,P,w,9,s[21]),P=f(P,j,T,x,A,14,s[22]),x=f(x,P,j,T,v,20,s[23]),T=f(T,x,P,j,b,5,s[24]),j=f(j,T,x,P,E,9,s[25]),P=f(P,j,T,x,d,14,s[26]),x=f(x,P,j,T,m,20,s[27]),T=f(T,x,P,j,k,5,s[28]),j=f(j,T,x,P,h,9,s[29]),P=f(P,j,T,x,g,14,s[30]),T=l(T,x=f(x,P,j,T,S,20,s[31]),P,j,y,4,s[32]),j=l(j,T,x,P,m,11,s[33]),P=l(P,j,T,x,O,16,s[34]),x=l(x,P,j,T,E,23,s[35]),T=l(T,x,P,j,c,4,s[36]),j=l(j,T,x,P,v,11,s[37]),P=l(P,j,T,x,g,16,s[38]),x=l(x,P,j,T,w,23,s[39]),T=l(T,x,P,j,k,4,s[40]),j=l(j,T,x,P,a,11,s[41]),P=l(P,j,T,x,d,16,s[42]),x=l(x,P,j,T,_,23,s[43]),T=l(T,x,P,j,b,4,s[44]),j=l(j,T,x,P,S,11,s[45]),P=l(P,j,T,x,A,16,s[46]),T=p(T,x=l(x,P,j,T,h,23,s[47]),P,j,a,6,s[48]),j=p(j,T,x,P,g,10,s[49]),P=p(P,j,T,x,E,15,s[50]),x=p(x,P,j,T,y,21,s[51]),T=p(T,x,P,j,S,6,s[52]),j=p(j,T,x,P,d,10,s[53]),P=p(P,j,T,x,w,15,s[54]),x=p(x,P,j,T,c,21,s[55]),T=p(T,x,P,j,m,6,s[56]),j=p(j,T,x,P,A,10,s[57]),P=p(P,j,T,x,_,15,s[58]),x=p(x,P,j,T,k,21,s[59]),T=p(T,x,P,j,v,6,s[60]),j=p(j,T,x,P,O,10,s[61]),P=p(P,j,T,x,h,15,s[62]),x=p(x,P,j,T,b,21,s[63]),i[0]=i[0]+T|0,i[1]=i[1]+x|0,i[2]=i[2]+P|0,i[3]=i[3]+j|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,o=8*e.sigBytes;n[o>>>5]|=128<<24-o%32;var i=t.floor(r/4294967296),a=r;n[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n[14+(o+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,c=s.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return s},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function u(t,e,n,r,o,i,a){var s=t+(e&n|~e&r)+o+a;return(s<<i|s>>>32-i)+e}function f(t,e,n,r,o,i,a){var s=t+(e&r|n&~r)+o+a;return(s<<i|s>>>32-i)+e}function l(t,e,n,r,o,i,a){var s=t+(e^n^r)+o+a;return(s<<i|s>>>32-i)+e}function p(t,e,n,r,o,i,a){var s=t+(n^(e|~r))+o+a;return(s<<i|s>>>32-i)+e}e.MD5=i._createHelper(c),e.HmacMD5=i._createHmacHelper(c)}(Math),n.MD5)}),s(function(t,e){var n,r,o;t.exports=(r=(n=c).lib.Base,o=n.enc.Utf8,void(n.algo.HMAC=r.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=o.parse(e));var n=t.blockSize,r=4*n;e.sigBytes>r&&(e=t.finalize(e)),e.clamp();for(var i=this._oKey=e.clone(),a=this._iKey=e.clone(),s=i.words,c=a.words,u=0;u<n;u++)s[u]^=1549556828,c[u]^=909522486;i.sigBytes=a.sigBytes=r,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,n=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(n))}})))}),s(function(t,e){t.exports=c.HmacMD5}));class f extends Error{constructor(t){super(t.message),this.errMsg=t.message||"",Object.defineProperties(this,{code:{get:()=>t.code},requestId:{get:()=>t.requestId},message:{get(){return`errCode: ${t.code||""} | errMsg: `+this.errMsg},set(t){this.errMsg=t}}})}}var l={sign:function(t,e){let n="";return Object.keys(t).sort().forEach(function(e){t[e]&&(n=n+"&"+e+"="+t[e])}),n=n.slice(1),u(n,e).toString()},wrappedRequest:function(t){return new Promise((e,n)=>{r.request(Object.assign(t,{complete(t){t||(t={}),"request:fail"!==t.errMsg&&t.errMsg;const r=t.header&&t.header["request-id"];if(!t.statusCode||t.statusCode>=400)return n(new f({code:"SYS_ERR",message:t.errMsg||"request:fail",requestId:r}));const o=t.data;if(o.error)return n(new f({code:o.error.code,message:o.error.message,requestId:r}));o.result=o.data,o.requestId=r,delete o.data,e(o)}}))})}};const p={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",mp3:"audio/mp3",mp4:"video/mp4",ogg:"audio/ogg",webm:"video/webm"};function h(t){return p[t.toLowerCase()]}class d{constructor(t){["spaceId","clientSecret"].forEach(e=>{if(!Object.prototype.hasOwnProperty.call(t,e))throw new Error(`缺少参数${e}`)}),this.config=Object.assign({},{endpoint:"https://api.bspapp.com"},t),this.config.provider="aliyun",this.config.requestUrl=this.config.endpoint+"/client",this.config.envType=this.config.envType||"public",this.config.accessTokenKey="access_token_"+this.config.spaceId}get hasAccessToken(){return!!this.accessToken}setAccessToken(t){r.setStorageSync(this.config.accessTokenKey,t),this.accessToken=t}requestAuth(t){return l.wrappedRequest(t)}request(t,e){return this.hasAccessToken?e?l.wrappedRequest(t):l.wrappedRequest(t).catch(e=>new Promise((t,n)=>{!e||"GATEWAY_INVALID_TOKEN"!==e.code&&"InvalidParameter.InvalidToken"!==e.code?n(e):t()}).then(()=>this.getAccessToken()).then(()=>{const e=this.rebuildRequest(t);return this.request(e,!0)})):this.getAccessToken().then(()=>{const e=this.rebuildRequest(t);return this.request(e,!0)})}rebuildRequest(t){const e=Object.assign({},t);return e.data.token=this.accessToken,e.header["x-basement-token"]=this.accessToken,e.header["x-serverless-sign"]=l.sign(e.data,this.config.clientSecret),e}setupRequest(t,e){const n=Object.assign({},t,{spaceId:this.config.spaceId,timestamp:Date.now()}),r={"Content-Type":"application/json"};return"auth"!==e&&(n.token=this.accessToken,r["x-basement-token"]=this.accessToken),r["x-serverless-sign"]=l.sign(n,this.config.clientSecret),{url:this.config.requestUrl,method:"POST",data:n,dataType:"json",header:r}}getAccessToken(){return this.requestAuth(this.setupRequest({method:"serverless.auth.user.anonymousAuthorize",params:"{}"},"auth")).then(t=>new Promise((e,n)=>{t.result&&t.result.accessToken?(this.setAccessToken(t.result.accessToken),e(this.accessToken)):n(new f({code:"AUTH_FAILED",message:"获取accessToken失败"}))}))}authorize(){this.getAccessToken()}callFunction(t){const e={method:"serverless.function.runtime.invoke",params:JSON.stringify({functionTarget:t.name,functionArgs:t.data||{}})};return this.config.useDebugFunction?this.request(this.setupRequest(e)).then(e=>{if(e&&e.requestId){const n=JSON.stringify({spaceId:this.config.spaceId,functionName:t.name,requestId:e.requestId});console.log(`[aliyun-request]${n}[/aliyun-request]`)}return Promise.resolve(e)}).catch(e=>{if(e&&e.requestId){const n=JSON.stringify({spaceId:this.config.spaceId,functionName:t.name,requestId:e.requestId});console.log(`[aliyun-request]${n}[/aliyun-request]`)}return Promise.reject(e)}):this.request(this.setupRequest(e))}getOSSUploadOptionsFromPath(t){const e={method:"serverless.file.resource.generateProximalSign",params:JSON.stringify(t)};return this.request(this.setupRequest(e))}uploadFileToOSS({url:t,formData:e,fileName:n,name:o,filePath:i,fileType:a,contentType:s}){return new Promise((s,c)=>{r.uploadFile({url:t,formData:e,fileName:n,name:o,filePath:i,fileType:a,header:{"X-OSS-server-side-encrpytion":"AES256"},success(t){t&&t.statusCode<400?s(t):c(new f({code:"UPLOAD_FAILED",message:"文件上传失败"}))},fail(t){c(t)}})})}reportOSSUpload(t){const e={method:"serverless.file.resource.report",params:JSON.stringify(t)};return this.request(this.setupRequest(e))}uploadFile({filePath:t,config:e}){const n=e&&e.envType||this.config.envType;let r,o,i,a,s,c=t.split("/").pop();return(r=h(o=t.split(".").pop())?Promise.resolve():Promise.reject(new f({code:"UNSUPPORTED_FILE_TYPE",message:"不支持的文件类型"}))).then(()=>this.getOSSUploadOptionsFromPath({env:n,filename:c})).then(e=>{const n=e.result;i=h(o),a=n.id,s="https://"+n.host+"/"+n.ossPath;const r={url:"https://"+n.host,formData:{"Cache-Control":"max-age=2592000","Content-Disposition":"attachment",OSSAccessKeyId:n.accessKeyId,Signature:n.signature,host:n.host,id:a,key:n.ossPath,policy:n.policy,success_action_status:200},fileName:"file",name:"file",filePath:t,fileType:"image",contentType:i};return this.uploadFileToOSS(r)}).then(()=>this.reportOSSUpload({id:a,contentType:i})).then(e=>new Promise((n,r)=>{e.success?n({success:!0,filePath:t,fileID:s}):r(new f({code:"UPLOAD_FAILED",message:"文件上传失败"}))}))}deleteFile({fileList:t}){const e={method:"serverless.file.resource.delete",params:JSON.stringify({id:t[0]})};return this.request(this.setupRequest(e))}}const v=n("8525").default||n("8525"),y="__DC_STAT_UUID",_="__DC_UUID_VALUE",g="https://ide.dcloud.net.cn/serverless/function/invoke";function m(){let t="";if("n"===b()){try{t=plus.runtime.getDCloudId()}catch(a){t=""}return t}try{t=r.getStorageSync(y)}catch(a){t=_}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{r.setStorageSync(y,t)}catch(t){r.setStorageSync(y,_)}}return t}function b(){return{"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"}["app-plus"]}function w(t){return function(e){if(!((e=e||{}).success||e.fail||e.complete))return t.call(this,e);t.call(this,e).then(t=>{e.success&&e.success(t),e.complete&&e.complete(t)}).catch(t=>{e.fail&&e.fail(t),e.complete&&e.complete(t)})}}const O={init(t){const e=new d(t);return["callFunction","uploadFile","deleteFile"].forEach(t=>{e[t]=w(e[t]).bind(e)}),setTimeout(()=>{e.authorize()}),e}};var S;!function(t){t.local="local",t.none="none",t.session="session"}(S||(S={}));var k=function(){},E=function(){};function A(t,e,n){void 0===n&&(n={});var r=/\?/.test(e),o="";for(var i in n)""===o?!r&&(e+="?"):o+="&",o+=i+"="+encodeURIComponent(n[i]);return/^http(s)?\:\/\//.test(e+=o)?e:""+t+e}var T,x=Object.freeze({__proto__:null,get StorageType(){return S},AbstractSDKRequest:k,AbstractStorage:E,formatUrl:A}),P=(T=function(t,e){return(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}T(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),j=function(){return(j=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},I=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return P(e,t),e.prototype.post=function(t){var e=t.url,n=t.data,o=t.headers;return new Promise(function(t,i){r.request({url:A("https:",e),data:n,method:"POST",header:o,success:function(e){t(e)},fail:function(t){i(t)}})})},e.prototype.upload=function(t){return new Promise(function(e){var n=t.url,o=t.file,i=t.data,a=t.headers;r.uploadFile({url:A("https:",n),name:"file",formData:Object.assign({},i,{file:o}),filePath:o,header:a,success:function(t){var n={statusCode:t.statusCode,data:t.data||{}};200===t.statusCode&&i.success_action_status&&(n.statusCode=parseInt(i.success_action_status,10)),e(n)},fail:function(t){e(t)}})})},e.prototype.download=function(t){var e=t.url,n=t.headers;return new Promise(function(t,o){r.downloadFile({url:A("https:",e),header:n,success:function(e){200===e.statusCode&&e.tempFilePath?t({statusCode:200,tempFilePath:e.tempFilePath}):t(e)},fail:function(t){o(t)}})})},e}(k),$={setItem:function(t,e){r.setStorageSync(t,e)},getItem:function(t){return r.getStorageSync(t)},removeItem:function(t){r.removeStorageSync(t)},clear:function(){r.clearStorageSync()}},N=function(t,e){void 0===e&&(e={});var n=r.connectSocket(j({url:t},e));return{set onopen(t){n.onOpen(t)},set onmessage(t){n.onMessage(t)},set onclose(t){n.onClose(t)},set onerror(t){n.onError(t)},send:function(t){return n.send({data:t})},close:function(t,e){return n.close({code:t,reason:e})},get readyState(){return n.readyState},CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3}},C={genAdapter:function(){return{root:{},reqClass:I,wsClass:N,localStorage:$,primaryStorage:S.local}},isMatch:function(){return"undefined"!=typeof r&&!!r.request},runtime:"uni_app"},D=s(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getQuery=function(t,e){if("undefined"==typeof window)return!1;var n=e||window.location.search,r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=n.substr(n.indexOf("?")+1).match(r);return null!=o?o[2]:""},e.getHash=function(t){var e=window.location.hash.match(new RegExp("[#?&/]"+t+"=([^&#]*)"));return e?e[1]:""},e.removeParam=function(t,e){var n=e.split("?")[0],r=[],o=-1!==e.indexOf("?")?e.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===t&&r.splice(i,1);n=n+"?"+r.join("&")}return n},e.createPromiseCallback=function(){var t;if(!Promise){(t=function(){}).promise={};var e=function(){throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')};return Object.defineProperty(t.promise,"then",{get:e}),Object.defineProperty(t.promise,"catch",{get:e}),t}var n=new Promise(function(e,n){t=function(t,r){return t?n(t):e(r)}});return t.promise=n,t},e.getWeixinCode=function(){return e.getQuery("code")||e.getHash("code")},e.getMiniAppCode=function(){return new Promise(function(t,e){wx.login({success:function(e){t(e.code)},fail:function(t){e(t)}})})},e.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e.isString=function(t){return"string"==typeof t},e.isUndefined=function(t){return void 0===t},e.isInstanceOf=function(t,e){return t instanceof e},e.isFormData=function(t){return"[object FormData]"===Object.prototype.toString.call(t)},e.genSeqId=function(){return Math.random().toString(16).slice(2)},e.getArgNames=function(t){var e=t.toString();return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)},e.formatUrl=function(t,e,n){void 0===n&&(n={});var r=/\?/.test(e),o="";for(var i in n)""===o?!r&&(e+="?"):o+="&",o+=i+"="+encodeURIComponent(n[i]);return/^http(s)?\:\/\//.test(e+=o)?e:""+t+e}});a(D),D.getQuery,D.getHash,D.removeParam,D.createPromiseCallback,D.getWeixinCode,D.getMiniAppCode,D.isArray,D.isString,D.isUndefined,D.isInstanceOf,D.isFormData,D.genSeqId,D.getArgNames,D.formatUrl;var R,M="dist/index.js",L="./dist/index.d.ts",q={build:"npm run tsc && webpack",tsc:"tsc -p tsconfig.json","tsc:w":"tsc -p tsconfig.json -w",test:"jest --verbose false -i",e2e:'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"',start:"webpack-dev-server --hot --open",eslint:'eslint "./**/*.js" "./**/*.ts"',"eslint-fix":'eslint --fix "./**/*.js" "./**/*.ts"',test_web:"npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js"},U={type:"git",url:"https://github.com/TencentCloudBase/tcb-js-sdk"},F=["tcb","js-sdk"],B={"@cloudbase/adapter-interface":"^0.2.0","@cloudbase/adapter-wx_mp":"^0.2.1","@cloudbase/database":"^0.9.8"},V={"@babel/core":"^7.6.2","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-proposal-object-rest-spread":"^7.6.2","@babel/plugin-transform-runtime":"^7.6.2","@babel/preset-env":"^7.6.2","@babel/preset-typescript":"^7.6.0","@babel/runtime":"^7.6.2","@types/jest":"^23.1.4","@types/node":"^10.14.4","@types/superagent":"^4.1.4",axios:"^0.19.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.6","babel-polyfill":"^6.26.0",eslint:"^5.16.0","eslint-config-alloy":"^1.4.2","eslint-config-prettier":"^4.1.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-typescript":"^1.0.0-rc.3",express:"^4.17.1",husky:"^3.1.0",jest:"^24.7.1","jest-puppeteer":"^4.3.0","lint-staged":"^9.5.0","power-assert":"^1.6.1",puppeteer:"^1.20.0","serve-static":"^1.14.1","ts-jest":"^23.10.4","ts-loader":"^6.2.1",typescript:"^3.4.3","typescript-eslint-parser":"^22.0.0",webpack:"^4.41.3","webpack-bundle-analyzer":"^3.4.1","webpack-cli":"^3.3.0","webpack-dev-server":"^3.3.1","webpack-merge":"^4.2.2","webpack-visualizer-plugin":"^0.1.11"},K={hooks:{"pre-commit":"lint-staged"}},H={name:"tcb-js-sdk",version:"1.3.5",description:"js sdk for tcb",main:M,types:L,scripts:q,repository:U,keywords:F,author:"jimmyjzhang",license:"ISC",dependencies:B,devDependencies:V,husky:K,"lint-staged":{"*.{js,ts}":["eslint --fix","git add"]}},G=(R=Object.freeze({__proto__:null,name:"tcb-js-sdk",version:"1.3.5",description:"js sdk for tcb",main:M,types:L,scripts:q,repository:U,keywords:F,author:"jimmyjzhang",license:"ISC",dependencies:B,devDependencies:V,husky:K,default:H}))&&R.default||R,Y=s(function(t,e){var n=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=n(G);e.SDK_VERISON=r.version,e.ACCESS_TOKEN="access_token",e.ACCESS_TOKEN_Expire="access_token_expire",e.REFRESH_TOKEN="refresh_token",e.ANONYMOUS_UUID="anonymous_uuid",e.LOGIN_TYPE_KEY="login_type",e.protocol="undefined"!=typeof location&&"http:"===location.protocol?"http:":"https:",e.BASE_URL="//tcb-api.tencentcloudapi.com/web"});a(Y),Y.SDK_VERISON,Y.ACCESS_TOKEN,Y.ACCESS_TOKEN_Expire,Y.REFRESH_TOKEN,Y.ANONYMOUS_UUID,Y.LOGIN_TYPE_KEY,Y.protocol,Y.BASE_URL;var W=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=i&&i.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},a=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.get=function(t){return this._request(r(r({},t),{method:"get"}))},e.prototype.post=function(t){return this._request(r(r({},t),{method:"post"}))},e.prototype.upload=function(t){var e=t.data,n=t.file,o=t.name,i=new FormData;for(var a in e)i.append(a,e[a]);return i.append("key",o),i.append("file",n),this._request(r(r({},t),{data:i,method:"post"}))},e.prototype.download=function(t){return o(this,void 0,void 0,function(){var e,n;return a(this,function(r){return e=decodeURIComponent(new URL(t.url).pathname.split("/").pop()||""),(n=document.createElement("a")).href=t.url,n.setAttribute("download",e),n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),[2,new Promise(function(e){e({statusCode:200,tempFilePath:t.url})})]})})},e.prototype._request=function(t){var e=String(t.method).toLowerCase()||"get";return new Promise(function(n){var r=t.url,o=t.headers,i=void 0===o?{}:o,a=t.data,s=t.responseType,c=D.formatUrl(Y.protocol,r,"get"===e?a:{}),u=new XMLHttpRequest;for(var f in u.open(e,c),s&&(u.responseType=s),i)u.setRequestHeader(f,i[f]);u.onreadystatechange=function(){if(4===u.readyState){var t={statusCode:u.status};try{t.data=JSON.parse(u.responseText)}catch(t){}n(t)}},u.send("post"===e&&D.isFormData(a)?a:JSON.stringify(a||{}))})},e}(x.AbstractSDKRequest);e.WebRequest=s,e.genAdapter=function(){return{root:window,reqClass:s,wsClass:WebSocket,localStorage:localStorage,sessionStorage:sessionStorage}}});a(W),W.WebRequest,W.genAdapter;var z=s(function(t,e){var n=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(W);!function(t){t.WEB="web",t.WX_MP="wx_mp"}(r=e.RUNTIME||(e.RUNTIME={})),e.useAdapters=function(t){for(var e=0,n=D.isArray(t)?t:[t];e<n.length;e++){var r=n[e],o=r.isMatch,i=r.genAdapter,a=r.runtime;if(o())return{adapter:i(),runtime:a}}},e.useDefaultAdapter=function(){return{adapter:o.genAdapter(),runtime:r.WEB}},e.Adapter={adapter:null,runtime:void 0}});a(z),z.RUNTIME,z.useAdapters,z.useDefaultAdapter,z.Adapter;var J=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){switch(z.Adapter.adapter.primaryStorage||t){case"local":this.storageClass=z.Adapter.adapter.localStorage||new a;break;case"none":this.storageClass=new a;break;default:this.storageClass=z.Adapter.adapter.sessionStorage||new a}}return t.prototype.setStore=function(t,e,n){try{if(!this.storageClass)return}catch(t){return}var r,o={};o.version=n||"localCachev1",o.content=e,r=JSON.stringify(o);try{this.storageClass.setItem(t,r)}catch(t){return}},t.prototype.getStore=function(t,e){try{if(o&&Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"})&&Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).tcb_token)return Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).tcb_token;if(!this.storageClass)return}catch(t){return""}e=e||"localCachev1";var n=this.storageClass.getItem(t);return n&&n.indexOf(e)>=0?JSON.parse(n).content:""},t.prototype.removeStore=function(t){this.storageClass.removeItem(t)},t}();e.Cache=r;var a=function(t){function e(){var e=t.call(this)||this;return z.Adapter.adapter.root.tcbObject||(z.Adapter.adapter.root.tcbObject={}),e}return n(e,t),e.prototype.setItem=function(t,e){z.Adapter.adapter.root.tcbObject[t]=e},e.prototype.getItem=function(t){return z.Adapter.adapter.root.tcbObject[t]},e.prototype.removeItem=function(t){delete z.Adapter.adapter.root.tcbObject[t]},e.prototype.clear=function(){delete z.Adapter.adapter.root.tcbObject},e}(x.AbstractStorage)});a(J),J.Cache;var X=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=i&&i.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){this.data=e||null,this.name=t};e.IEvent=o;var a=function(t){function e(e,n){var r=t.call(this,"error",{error:e,data:n})||this;return r.error=e,r}return n(e,t),e}(o);e.IErrorEvent=a;var s=function(){function t(){this._listeners={}}return t.prototype.on=function(t,e){return function(t,e,n){n[t]=n[t]||[],n[t].push(e)}(t,e,this._listeners),this},t.prototype.off=function(t,e){return function(t,e,n){if(n&&n[t]){var r=n[t].indexOf(e);-1!==r&&n[t].splice(r,1)}}(t,e,this._listeners),this},t.prototype.fire=function(t,e){if(D.isInstanceOf(t,a))return console.error(t.error),this;var n=D.isString(t)?new o(t,e||{}):t,i=n.name;if(this._listens(i)){n.target=this;for(var s=0,c=this._listeners[i]?r(this._listeners[i]):[];s<c.length;s++)c[s].call(this,n)}return this},t.prototype._listens=function(t){return this._listeners[t]&&this._listeners[t].length>0},t}();e.IEventEmitter=s;var c=new s;e.addEventListener=function(t,e){c.on(t,e)},e.activateEvent=function(t,e){void 0===e&&(e={}),c.fire(t,e)},e.removeEventListener=function(t,e){c.off(t,e)},e.EVENTS={LOGIN_STATE_CHANGED:"loginStateChanged",LOGIN_STATE_EXPIRE:"loginStateExpire",LOGIN_TYPE_CHANGE:"loginTypeChanged",ANONYMOUS_CONVERTED:"anonymousConverted",REFRESH_ACCESS_TOKEN:"refreshAccessToken"}});a(X),X.IEvent,X.IErrorEvent,X.IEventEmitter,X.addEventListener,X.activateEvent,X.removeEventListener,X.EVENTS;var Q=s(function(t,e){var n=i&&i.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},o=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=["auth.getJwt","auth.logout","auth.signInWithTicket","auth.signInAnonymously"],s={"X-SDK-Version":Y.SDK_VERISON};function c(t,e,r){var o=t[e];t[e]=function(e){var i={},a={};r.forEach(function(n){var r=n.call(t,e),o=r.data,s=r.headers;Object.assign(i,o),Object.assign(a,s)});var s=e.data;return s&&function(){if(D.isFormData(s))for(var t in i)s.append(t,i[t]);else e.data=n(n({},s),i)}(),e.headers=n(n({},e.headers||{}),a),o.call(t,e)}}function u(){var t=D.genSeqId();return{data:{seqId:t},headers:n(n({},s),{"x-seqid":t})}}var f=function(){function t(t){void 0===t&&(t={}),this.config=t,this.cache=new J.Cache(t.persistence),this.accessTokenKey=Y.ACCESS_TOKEN+"_"+t.env,this.accessTokenExpireKey=Y.ACCESS_TOKEN_Expire+"_"+t.env,this.refreshTokenKey=Y.REFRESH_TOKEN+"_"+t.env,this.anonymousUuidKey=Y.ANONYMOUS_UUID+"_"+t.env,this.loginTypeKey=Y.LOGIN_TYPE_KEY+"_"+t.env,this._reqClass=new z.Adapter.adapter.reqClass,c(this._reqClass,"post",[u]),c(this._reqClass,"upload",[u]),c(this._reqClass,"download",[u])}return t.prototype.post=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this._reqClass.post(t)];case 1:return[2,e.sent()]}})})},t.prototype.upload=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this._reqClass.upload(t)];case 1:return[2,e.sent()]}})})},t.prototype.download=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this._reqClass.download(t)];case 1:return[2,e.sent()]}})})},t.prototype.refreshAccessToken=function(){return r(this,void 0,void 0,function(){var t,e,n;return o(this,function(r){switch(r.label){case 0:this._refreshAccessTokenPromise||(this._refreshAccessTokenPromise=this._refreshAccessToken()),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._refreshAccessTokenPromise];case 2:return t=r.sent(),[3,4];case 3:return n=r.sent(),e=n,[3,4];case 4:if(this._refreshAccessTokenPromise=null,this._shouldRefreshAccessTokenHook=null,e)throw e;return[2,t]}})})},t.prototype._refreshAccessToken=function(){return r(this,void 0,void 0,function(){var t,e,n,r;return o(this,function(o){switch(o.label){case 0:if(this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey),!(t=this.cache.getStore(this.refreshTokenKey)))throw new Error("[tcb-js-sdk] 未登录CloudBase");return e={refresh_token:t},this.cache.getStore(this.loginTypeKey)===Z.LOGINTYPE.ANONYMOUS&&(e.anonymous_uuid=this.cache.getStore(this.anonymousUuidKey)),[4,this.request("auth.getJwt",e)];case 1:if((n=o.sent()).data.code)throw"SIGN_PARAM_INVALID"!==(r=n.data.code)&&"REFRESH_TOKEN_EXPIRED"!==r&&"INVALID_REFRESH_TOKEN"!==r||(X.activateEvent(X.EVENTS.LOGIN_STATE_EXPIRE),this.cache.removeStore(this.refreshTokenKey)),new Error("[tcb-js-sdk] 刷新access token失败："+n.data.code);return n.data.access_token?(X.activateEvent(X.EVENTS.REFRESH_ACCESS_TOKEN),this.cache.setStore(this.accessTokenKey,n.data.access_token),this.cache.setStore(this.accessTokenExpireKey,n.data.access_token_expire+Date.now()),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,n.data.login_type),[2,{accessToken:n.data.access_token,accessTokenExpire:n.data.access_token_expire}]):(n.data.refresh_token&&(this.cache.removeStore(this.refreshTokenKey),this.cache.setStore(this.refreshTokenKey,n.data.refresh_token),this._refreshAccessToken()),[2])}})})},t.prototype.getAccessToken=function(){return r(this,void 0,void 0,function(){var t,e,n,r;return o(this,function(o){switch(o.label){case 0:return t=this.cache.getStore(this.accessTokenKey),e=this.cache.getStore(this.accessTokenExpireKey),n=!0,(r=this._shouldRefreshAccessTokenHook)?[4,this._shouldRefreshAccessTokenHook(t,e)]:[3,2];case 1:r=!o.sent(),o.label=2;case 2:return r&&(n=!1),(!t||!e||e<Date.now())&&n?[2,this.refreshAccessToken()]:[2,{accessToken:t,accessTokenExpire:e}]}})})},t.prototype.request=function(t,e,i){return r(this,void 0,void 0,function(){var r,s,c,u,f,l,p,h,d,v,y,_;return o(this,function(o){switch(o.label){case 0:return r="application/x-www-form-urlencoded",s=n({action:t,env:this.config.env,dataVersion:"2019-08-16"},e),-1!==a.indexOf(t)?[3,2]:(c=s,[4,this.getAccessToken()]);case 1:c.access_token=o.sent().accessToken,o.label=2;case 2:if("storage.uploadFile"===t){for(f in u=new FormData)u.hasOwnProperty(f)&&void 0!==u[f]&&u.append(f,s[f]);r="multipart/form-data"}else r="application/json;charset=UTF-8",u=s;return l={headers:{"content-type":r}},i&&i.onUploadProgress&&(l.onUploadProgress=i.onUploadProgress),p=e.parse,h=e.query,d=e.search,v={env:this.config.env},p&&(v.parse=!0),h&&(v=n(n({},h),v)),y=D.formatUrl(Y.protocol,Y.BASE_URL,v),d&&(y+=d),[4,this.post(n({url:y,data:u},l))];case 3:if(_=o.sent(),200!==Number(_.status)&&200!==Number(_.statusCode)||!_.data)throw new Error("network request error");return[2,_]}})})},t.prototype.send=function(t,e){return void 0===e&&(e={}),r(this,void 0,void 0,function(){var n,r,i;return o(this,function(o){switch(o.label){case 0:return n=setTimeout(function(){console.warn("Database operation is longer than 3s. Please check query performance and your network environment.")},3e3),[4,this.request(t,e,{onUploadProgress:e.onUploadProgress})];case 1:return r=o.sent(),clearTimeout(n),"ACCESS_TOKEN_EXPIRED"!==r.data.code||-1!==a.indexOf(t)?[3,4]:[4,this.refreshAccessToken()];case 2:return o.sent(),[4,this.request(t,e,{onUploadProgress:e.onUploadProgress})];case 3:if((i=o.sent()).data.code)throw new Error("["+i.data.code+"] "+i.data.message);return[2,i.data];case 4:if(r.data.code)throw new Error("["+r.data.code+"] "+r.data.message);return[2,r.data]}})})},t}();e.Request=f});a(Q),Q.Request;var Z=s(function(t,e){var n,r=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},o=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ANONYMOUS="ANONYMOUS",t.WECHAT="WECHAT",t.CUSTOM="CUSTOM",t.NULL="NULL"}(n=e.LOGINTYPE||(e.LOGINTYPE={}));var a=function(){function t(t){this._loginType=n.NULL,this.config=t,this.onLoginTypeChanged=this.onLoginTypeChanged.bind(this),X.addEventListener(X.EVENTS.LOGIN_TYPE_CHANGE,this.onLoginTypeChanged)}return t.prototype.init=function(){this.httpRequest=new Q.Request(this.config),this.cache=new J.Cache(this.config.persistence),this.accessTokenKey=Y.ACCESS_TOKEN+"_"+this.config.env,this.accessTokenExpireKey=Y.ACCESS_TOKEN_Expire+"_"+this.config.env,this.refreshTokenKey=Y.REFRESH_TOKEN+"_"+this.config.env,this.loginTypeKey=Y.LOGIN_TYPE_KEY+"_"+this.config.env},t.prototype.onLoginTypeChanged=function(t){this._loginType=t.data,this.cache.setStore(this.loginTypeKey,this._loginType)},Object.defineProperty(t.prototype,"loginType",{get:function(){return this._loginType},enumerable:!0,configurable:!0}),t.prototype.setRefreshToken=function(t){this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey),this.cache.setStore(this.refreshTokenKey,t)},t.prototype.getRefreshTokenByWXCode=function(t,e,n){return r(this,void 0,void 0,function(){var r;return o(this,function(o){return r=z.Adapter.runtime===z.RUNTIME.WX_MP?"1":"0",[2,this.httpRequest.send("auth.getJwt",{appid:t,loginType:e,code:n,hybridMiniapp:r}).then(function(t){if(t.code)throw new Error("[tcb-js-sdk] 微信登录失败: "+t.code);if(t.refresh_token)return{refreshToken:t.refresh_token,accessToken:t.access_token,accessTokenExpire:t.access_token_expire};throw new Error("[tcb-js-sdk] getJwt未返回refreshToken")})]})})},t}();e.default=a});a(Z),Z.LOGINTYPE;var tt=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},o=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},a=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s,c,u=a(D),f=a(Z);!function(t){t.snsapi_base="snsapi_base",t.snsapi_userinfo="snsapi_userinfo",t.snsapi_login="snsapi_login"}(s||(s={})),function(t){t.redirect="redirect",t.prompt="prompt"}(c||(c={}));var l={},p=function(t){function e(e,n,r,o,i){var a=t.call(this,e)||this;return a.config=e,a.appid=n,a.scope=z.Adapter.runtime===z.RUNTIME.WX_MP?"snsapi_base":r,a.state=i||"weixin",a.loginMode=o||"redirect",a}return n(e,t),e.prototype.signIn=function(){return r(this,void 0,void 0,function(){var t,e,n;return o(this,function(r){switch(r.label){case 0:l[this.config.env]||(l[this.config.env]=this._signIn()),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,l[this.config.env]];case 2:return t=r.sent(),[3,4];case 3:return n=r.sent(),e=n,[3,4];case 4:if(l[this.config.env]=null,e)throw e;return[2,t]}})})},e.prototype._signIn=function(){return r(this,void 0,void 0,function(){var t,e,n,r,i,a;return o(this,function(o){switch(o.label){case 0:if(t=this.cache.getStore(this.accessTokenKey),e=this.cache.getStore(this.accessTokenExpireKey),t){if(e&&e>Date.now())return[2,{credential:{accessToken:t,refreshToken:this.cache.getStore(this.refreshTokenKey)}}];this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey)}if(!1===Object.values(s).includes(s[this.scope]))throw new Error("错误的scope类型");return z.Adapter.runtime!==z.RUNTIME.WX_MP?[3,2]:[4,u.getMiniAppCode()];case 1:return n=o.sent(),[3,4];case 2:return[4,u.getWeixinCode()];case 3:if(!(n=o.sent()))return[2,this.redirect()];o.label=4;case 4:return r=function(t){switch(t){case s.snsapi_login:return"WECHAT-OPEN";default:return"WECHAT-PUBLIC"}}(this.scope),[4,this.getRefreshTokenByWXCode(this.appid,r,n)];case 5:return i=o.sent(),a=i.refreshToken,this.cache.setStore(this.refreshTokenKey,a),i.accessToken&&this.cache.setStore(this.accessTokenKey,i.accessToken),i.accessTokenExpire&&this.cache.setStore(this.accessTokenExpireKey,i.accessTokenExpire+Date.now()),X.activateEvent(X.EVENTS.LOGIN_STATE_CHANGED),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,f.LOGINTYPE.WECHAT),[2,{credential:{refreshToken:a}}]}})})},e.prototype.redirect=function(){var t=u.removeParam("code",location.href);t=u.removeParam("state",t),t=encodeURIComponent(t);var e="//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login"===this.scope&&(e="//open.weixin.qq.com/connect/qrconnect"),"redirect"===c[this.loginMode]&&(location.href=e+"?appid="+this.appid+"&redirect_uri="+t+"&response_type=code&scope="+this.scope+"&state="+this.state+"#wechat_redirect")},e}(f.default);e.default=p});a(tt);var et=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=i&&i.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},a=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var c=s(Z),u=function(t){function e(e){var n=t.call(this,r(r({},e),{persistence:"local"}))||this;return n._anonymousUuidKey=Y.ANONYMOUS_UUID+"_"+n.config.env,n._loginTypeKey=Y.LOGIN_TYPE_KEY+"_"+n.config.env,n}return n(e,t),e.prototype.init=function(){t.prototype.init.call(this)},e.prototype.signIn=function(){return o(this,void 0,void 0,function(){var t,e,n;return a(this,function(r){switch(r.label){case 0:return t=this.cache.getStore(this._anonymousUuidKey)||void 0,e=this.cache.getStore(this.refreshTokenKey)||void 0,[4,this.httpRequest.send("auth.signInAnonymously",{anonymous_uuid:t,refresh_token:e})];case 1:return(n=r.sent()).uuid&&n.refresh_token?(this._setAnonymousUUID(n.uuid),this.setRefreshToken(n.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return r.sent(),X.activateEvent(X.EVENTS.LOGIN_STATE_CHANGED),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,c.LOGINTYPE.ANONYMOUS),[2,{credential:{refreshToken:n.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败")}})})},e.prototype.linkAndRetrieveDataWithTicket=function(t){return o(this,void 0,void 0,function(){var e,n,r;return a(this,function(o){switch(o.label){case 0:return e=this.cache.getStore(this._anonymousUuidKey),n=this.cache.getStore(this.refreshTokenKey),[4,this.httpRequest.send("auth.linkAndRetrieveDataWithTicket",{anonymous_uuid:e,refresh_token:n,ticket:t})];case 1:return(r=o.sent()).refresh_token?(this._clearAnonymousUUID(),this.setRefreshToken(r.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return o.sent(),X.activateEvent(X.EVENTS.ANONYMOUS_CONVERTED,{refresh_token:r.refresh_token}),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,c.LOGINTYPE.CUSTOM),[2,{credential:{refreshToken:r.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败")}})})},e.prototype.getAllStore=function(){var t={};return t[this.refreshTokenKey]=this.cache.getStore(this.refreshTokenKey)||"",t[this._loginTypeKey]=this.cache.getStore(this._loginTypeKey)||"",t[this.accessTokenKey]=this.cache.getStore(this.accessTokenKey)||"",t[this.accessTokenExpireKey]=this.cache.getStore(this.accessTokenExpireKey)||"",t},e.prototype._setAnonymousUUID=function(t){this.cache.removeStore(this._anonymousUuidKey),this.cache.setStore(this._anonymousUuidKey,t),this.cache.setStore(this._loginTypeKey,c.LOGINTYPE.ANONYMOUS)},e.prototype._clearAnonymousUUID=function(){this.cache.removeStore(this._anonymousUuidKey)},e}(c.default);e.AnonymousAuthProvider=u});a(et),et.AnonymousAuthProvider;var nt=s(function(t,e){var n=i&&i.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=i&&i.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},a=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=i&&i.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},c=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var u=s(tt),f=c(Z),l=function(t){function e(e){var n=t.call(this,e)||this;return n.config=e,n}return n(e,t),e.prototype.init=function(){t.prototype.init.call(this),this.customAuthProvider=new f.default(this.config),this.customAuthProvider.init()},e.prototype.weixinAuthProvider=function(t){var e=t.appid,n=t.scope,r=t.loginMode,o=t.state,i=new u.default(this.config,e,n,r,o);return i.init(),i},e.prototype.signInAnonymously=function(){return o(this,void 0,void 0,function(){var t=this;return a(this,function(e){switch(e.label){case 0:return this._anonymousAuthProvider||(this._anonymousAuthProvider=new et.AnonymousAuthProvider(this.config),this._anonymousAuthProvider.init()),X.addEventListener(X.EVENTS.LOGIN_TYPE_CHANGE,function(e){if(e&&e.data===f.LOGINTYPE.ANONYMOUS){var n=t._anonymousAuthProvider.getAllStore();for(var r in n)n[r]&&t.httpRequest.cache.setStore(r,n[r])}}),[4,this._anonymousAuthProvider.signIn()];case 1:return[2,e.sent()]}})})},e.prototype.linkAndRetrieveDataWithTicket=function(t){return o(this,void 0,void 0,function(){var e=this;return a(this,function(n){switch(n.label){case 0:return this._anonymousAuthProvider||(this._anonymousAuthProvider=new et.AnonymousAuthProvider(this.config),this._anonymousAuthProvider.init()),X.addEventListener(X.EVENTS.ANONYMOUS_CONVERTED,function(t){var n=t.data.refresh_token;n&&e.httpRequest.cache.setStore(e.refreshTokenKey,n)}),[4,this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(t)];case 1:return[2,n.sent()]}})})},e.prototype.signOut=function(){return o(this,void 0,void 0,function(){var t,e,n,r,o,i,s;return a(this,function(a){switch(a.label){case 0:if(this.loginType===f.LOGINTYPE.ANONYMOUS)throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return t=this.httpRequest,e=t.cache,n=t.refreshTokenKey,r=t.accessTokenKey,o=t.accessTokenExpireKey,(i=e.getStore(n))?[4,this.httpRequest.send("auth.logout",{refresh_token:i})]:[2];case 1:return s=a.sent(),e.removeStore(n),e.removeStore(r),e.removeStore(o),X.activateEvent(X.EVENTS.LOGIN_STATE_CHANGED),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,f.LOGINTYPE.NULL),[2,s]}})})},e.prototype.getAccessToken=function(){return o(this,void 0,void 0,function(){var t;return a(this,function(e){switch(e.label){case 0:return t={},[4,this.httpRequest.getAccessToken()];case 1:return[2,(t.accessToken=e.sent().accessToken,t.env=this.config.env,t)]}})})},e.prototype.onLoginStateExpire=function(t){X.addEventListener("loginStateExpire",t)},e.prototype.getLoginState=function(){return o(this,void 0,void 0,function(){var t,e,n,r,o;return a(this,function(i){switch(i.label){case 0:if(t=this.httpRequest,e=t.cache,n=t.refreshTokenKey,r=t.accessTokenKey,!(o=e.getStore(n)))return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.httpRequest.refreshAccessToken()];case 2:return i.sent(),[3,4];case 3:return i.sent(),[2,null];case 4:return[2,{isAnonymous:this.loginType===f.LOGINTYPE.ANONYMOUS,credential:{refreshToken:o,accessToken:e.getStore(r)}}];case 5:return[2,null]}})})},e.prototype.signInWithTicket=function(t){return o(this,void 0,void 0,function(){var e,n,r,o;return a(this,function(i){switch(i.label){case 0:if("string"!=typeof t)throw new Error("ticket must be a string");return e=this.httpRequest,n=e.cache,r=e.refreshTokenKey,[4,this.httpRequest.send("auth.signInWithTicket",{ticket:t,refresh_token:n.getStore(r)||""})];case 1:return(o=i.sent()).refresh_token?(this.customAuthProvider.setRefreshToken(o.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return i.sent(),X.activateEvent(X.EVENTS.LOGIN_STATE_CHANGED),X.activateEvent(X.EVENTS.LOGIN_TYPE_CHANGE,f.LOGINTYPE.CUSTOM),[2,{credential:{refreshToken:o.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败")}})})},e.prototype.shouldRefreshAccessToken=function(t){this.httpRequest._shouldRefreshAccessTokenHook=t.bind(this)},e.prototype.getUserInfo=function(){return this.httpRequest.send("auth.getUserInfo",{}).then(function(t){return t.code?t:r(r({},t.data),{requestId:t.seqId})})},e}(f.default);e.default=l});a(nt);var rt=s(function(t,e){var n=i&&i.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((r=r.apply(t,e||[])).next())})},r=i&&i.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.uploadFile=function(t,e){e=e||D.createPromiseCallback();var n=new Q.Request(this.config),r=t.cloudPath,o=t.filePath,i=t.onUploadProgress;return n.send("storage.getUploadMetadata",{path:r}).then(function(t){var a=t.data,s=a.url,c=a.authorization,u=a.token,f=a.fileId,l=a.cosFileId,p=t.requestId,h={key:r,signature:c,"x-cos-meta-fileid":l,success_action_status:"201","x-cos-security-token":u};n.upload({url:s,data:h,file:o,name:r,onUploadProgress:i}).then(function(t){201===t.statusCode?e(null,{fileID:f,requestId:p}):e(new Error("STORAGE_REQUEST_FAIL: "+t.data))}).catch(function(t){e(t)})}).catch(function(t){e(t)}),e.promise},e.deleteFile=function(t,e){var n=t.fileList;if(e=e||D.createPromiseCallback(),!n||!Array.isArray(n))return{code:"INVALID_PARAM",message:"fileList必须是非空的数组"};for(var r=0,o=n;r<o.length;r++){var i=o[r];if(!i||"string"!=typeof i)return{code:"INVALID_PARAM",message:"fileList的元素必须是非空的字符串"}}var a={fileid_list:n};return new Q.Request(this.config).send("storage.batchDeleteFile",a).then(function(t){t.code?e(null,t):e(null,{fileList:t.data.delete_list,requestId:t.requestId})}).catch(function(t){e(t)}),e.promise},e.getTempFileURL=function(t,e){var n=t.fileList;e=e||D.createPromiseCallback(),n&&Array.isArray(n)||e(null,{code:"INVALID_PARAM",message:"fileList必须是非空的数组"});for(var r=[],o=0,i=n;o<i.length;o++){var a=i[o];"object"==typeof a?(a.hasOwnProperty("fileID")&&a.hasOwnProperty("maxAge")||e(null,{code:"INVALID_PARAM",message:"fileList的元素必须是包含fileID和maxAge的对象"}),r.push({fileid:a.fileID,max_age:a.maxAge})):"string"==typeof a?r.push({fileid:a}):e(null,{code:"INVALID_PARAM",message:"fileList的元素必须是字符串"})}var s={file_list:r};return new Q.Request(this.config).send("storage.batchGetDownloadUrl",s).then(function(t){t.code?e(null,t):e(null,{fileList:t.data.download_list,requestId:t.requestId})}).catch(function(t){e(t)}),e.promise},e.downloadFile=function(t,o){var i=t.fileID;return n(this,void 0,void 0,function(){var t,n,a,s,c;return r(this,function(r){switch(r.label){case 0:return[4,e.getTempFileURL.call(this,{fileList:[{fileID:i,maxAge:600}]})];case 1:return t=r.sent(),"SUCCESS"!==(n=t.fileList[0]).code?[2,o?o(n):new Promise(function(t){t(n)})]:(a=n.download_url,a=encodeURI(a),s=new Q.Request(this.config),o?[4,s.download({url:a})]:[3,3]);case 2:return c=r.sent(),o(c),[3,4];case 3:return[2,s.download({url:a})];case 4:return[2]}})})}});a(rt),rt.uploadFile,rt.deleteFile,rt.getTempFileURL,rt.downloadFile;var ot=s(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.callFunction=function(t,e){var n,r=t.name,o=t.data,i=t.query,a=t.parse,s=t.search,c=e||D.createPromiseCallback();try{n=o?JSON.stringify(o):""}catch(t){return Promise.reject(t)}if(!r)return Promise.reject(new Error("函数名不能为空"));var u={query:i,parse:a,search:s,function_name:r,request_data:n};return new Q.Request(this.config).send("functions.invokeFunction",u).then(function(t){if(t.code)c(null,t);else{var e=t.data.response_data;if(a)c(null,{result:e,requestId:t.requestId});else try{e=JSON.parse(t.data.response_data),c(null,{result:e,requestId:t.requestId})}catch(t){c(new Error("response data must be json"))}}return c.promise}).catch(function(t){c(t)}),c.promise}});a(ot),ot.callFunction;var it=a(s(function(t){var e=i&&i.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n=i&&i.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=i&&i.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=n(C),a=n(nt),s=r(rt),c=r(ot),u={timeout:15e3},f=new(function(){function t(t){var e=this;this.config=t||this.config,this.authObj=void 0,X.addEventListener(X.EVENTS.LOGIN_TYPE_CHANGE,function(t){t.data===Z.LOGINTYPE.ANONYMOUS&&(e.config.persistence="local")})}return t.prototype.init=function(n){return this.config=e(e({},u),n),z.Adapter.adapter||this._useDefaultAdapter(),new t(this.config)},t.prototype.auth=function(t){var n=(void 0===t?{}:t).persistence;return this.authObj?this.authObj:(this.config=e(e({},this.config),{persistence:n||z.Adapter.adapter.primaryStorage||"session"}),this.authObj=new a.default(this.config),this.authObj.init(),this.authObj)},t.prototype.on=function(t,e){return X.addEventListener.apply(this,[t,e])},t.prototype.off=function(t,e){return X.removeEventListener.apply(this,[t,e])},t.prototype.callFunction=function(t,e){return c.callFunction.apply(this,[t,e])},t.prototype.deleteFile=function(t,e){return s.deleteFile.apply(this,[t,e])},t.prototype.getTempFileURL=function(t,e){return s.getTempFileURL.apply(this,[t,e])},t.prototype.downloadFile=function(t,e){return s.downloadFile.apply(this,[t,e])},t.prototype.uploadFile=function(t,e){return s.uploadFile.apply(this,[t,e])},t.prototype.useAdapters=function(t){var e=z.useAdapters(t)||{},n=e.adapter,r=e.runtime;n&&(z.Adapter.adapter=n),r&&(z.Adapter.runtime=r)},t.prototype._useDefaultAdapter=function(){var t=z.useDefaultAdapter(),e=t.adapter,n=t.runtime;z.Adapter.adapter=e,z.Adapter.runtime=n},t}());f.useAdapters(o.default);try{window.tcb=f}catch(i){}t.exports=f}));it.useAdapters(C);const at=it,st=at.init;let ct,ut;function ft(t){ct||(ct=function(){const t=r.getSystemInfoSync();return{PLATFORM:"app-plus",OS:t.platform,APPID:v.appid}}(),ut=function(){const t=r.getSystemInfoSync();return{ak:v.appid,p:"android"===t.platform?"a":"i",ut:b(),uuid:m()}}());const e=JSON.parse(JSON.stringify(t.data||{})),n=t.name,o=this.config.spaceId,i=Object.assign({},ut,{fn:n,sid:o});return Object.assign(e,{clientInfo:ct,uniCloudClientInfo:encodeURIComponent(JSON.stringify(i))}),t.data=e,t}function lt(t){const e=ft.call(this,t),n={tencent:"tcb",aliyun:"aliyun"}[this.config.provider],o=ut.ak,i=this.config.spaceId,a=JSON.stringify(e.data),s=e.name,c=JSON.stringify({body:{provider:n,appid:o,spaceId:i,functionName:s,run_params:a},header:{token:"daa76fb0-5192-11ea-90ec-f5c41ce87015"}});return new Promise((t,e)=>{r.request({url:g,method:"POST",data:{param:c},complete(r){r||(r={});const o=r.data&&r.data.body;if(!o)return void e(new Error(`[FUNCTIONS_EXECUTE_FAIL] Request Fail: [${s}]`));if("tcb"===n&&function(t){if(!t)return;const e=/^START RequestId:\s(.*?)\n/g.exec(t)[1],n=new RegExp(`\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z\\t${e.replace(/-/g,"\\-")}\\t`,"g"),r=[/^START RequestId:\s/g,/^Event RequestId:\s/g,/^END RequestId:\s/g,/^Report RequestId:\s/g];t.split("\n").forEach(t=>{let e=!1;for(let n=0;n<r.length;n++)if(r[n].test(t)){e=!0;break}e||console.log(t.replace(n,""))})}(o.log),0!==o.invokeResult&&"0"!==o.invokeResult)return void e(new Error(o.errorMsg));const i=o.requestId;let a={};try{a=JSON.parse(o.result)}catch(t){a=o.result}t({requestId:i,result:a})}})})}at.init=function(t){t.env=t.spaceId;const e=st.call(this,t);e.config.provider="tencent",e.config.spaceId=t.spaceId;const n=e.auth;if(e.auth=function(t){const e=n.call(this,t);return["linkAndRetrieveDataWithTicket","signInAnonymously","signOut","getAccessToken","getLoginState","signInWithTicket","getUserInfo"].forEach(t=>{e[t]=w(e[t]).bind(e)}),e},["callFunction","uploadFile","deleteFile","getTempFileURL","downloadFile"].forEach(t=>{e[t]=w(e[t]).bind(e)}),!1!==t.autoSignIn){const t=e.auth();t.getLoginState().then(e=>{e||t.signInAnonymously()})}return e};const pt={init(t){let e={};const n=(t.debugFunction,!1);switch(t.provider){case"tencent":e=at.init(Object.assign(t,{useDebugFunction:n}));break;case"aliyun":e=O.init(Object.assign(t,{useDebugFunction:n}));break;default:throw new Error("未提供正确的provider参数")}if(n&&"tencent"===t.provider)e.callFunction=function(t){return w(lt).call(this,t)};else{const t=e.callFunction;e.callFunction=function(e){const n=ft.call(this,e);return t.call(this,n)}}const r=e.callFunction;return e.callFunction=function(t){return r.call(this,t)},e.init=this.init,e}};let ht=pt;try{ht=pt.init({provider:"aliyun",spaceName:"yinchengnuo",spaceId:"8216c703-c6f5-412d-828c-41b285714dae",clientSecret:"3Btj83t2nVqvhcU1IM0Xuw==",endpoint:"https://api.bspapp.com"})}catch(i){["auth","callFunction","uploadFile","deleteFile","getTempFileURL","downloadFile"].forEach(t=>{ht[t]=function(){return console.error("请先执行uniCloud.init指明所用的服务空间"),Promise.reject(new f({code:"SYS_ERR",message:"请先执行uniCloud.init指明所用的服务空间"}))}})}var dt=ht;e["default"]=dt}.call(this,n("c8ba"),n("6e42")["default"],n("4362"))},b180:function(t,e,n){"use strict";(function(t){function r(t,e){return a(t)||i(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function a(t){if(Array.isArray(t))return t}function s(t){throw new Error('"'+t+'" is read-only')}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.$route=void 0;var c=n("26aa"),u={fullPath:c.keys()[0].replace(/^\./,"/pages"),path:c.keys()[0].replace(/\.vue$/,"").replace(/^\./,""),query:{}};e.$route=u;var f={route:u,afterEach:function(t){},beforeEach:function(t,e){return e()},routes:c.keys().map(function(t){return t.replace(/^\./,"/pages")}),_getFullPath:function(t){var e=this;return new Promise(function(n,r){var o=e.routes.find(function(e){return RegExp(t+".vue").test(e)}).replace(/\.vue$/,"");o?n(o):r("路由 ".concat(t+".vue"," 不存在于 pages 目录中"))})},_formatData:function(t){var e="?";return Object.keys(t).forEach(function(n){"object"===typeof t[n]?e+="".concat(n,"=").concat(JSON.stringify(t[n]),"&"):e+="".concat(n,"=").concat(t[n],"&")}),1===e.length?"":e.replace(/&$/,"")},_beforeEach:function(t,e,n){var r=this;return new Promise(function(o){r.beforeEach({path:t,fullPath:e,query:n},o)})},_next:function(t){var e=this;return new Promise(function(n,r){"function"===typeof t?(r("在全局前置守卫 next 中重定向路由"),Promise.resolve().then(function(){return t(e)})):!1===t?r("在全局前置守卫 next 中取消路由"):n()})},pop:function(e){t.navigateBack({delta:e})},_routeTo:function(t,n,o,i,a){var c=this;return new Promise(function(f,l){c._getFullPath(n).then(function(p){var h=function(i){var h=JSON.parse(JSON.stringify(u));Object.assign(u,{path:n,fullPath:p,query:o}),t({url:i}).then(function(t){var n=r(t,1),o=n[0];if(o)return e.$route=(s("$route"),u=h),void l(o.errMsg);f(u),!a&&c.afterEach(u)})};i?h("".concat(p).concat(c._formatData(o))):c._beforeEach(n,p,o).then(function(t){c._next(t).then(function(){h("".concat(p).concat(c._formatData(o)))}).catch(function(t){return l(t)})})}).catch(function(t){return l(t)})})},push:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return this._routeTo(t.navigateTo,e,n,r,o)},replace:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return this._routeTo(t.redirectTo,e,n,r,o)},switchTab:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return this._routeTo(t.switchTab,e,n,r,o)},reLaunch:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return this._routeTo(t.reLaunch,e,n,r,o)}};Object.setPrototypeOf(u,f);var l=f;e.default=l}).call(this,n("6e42")["default"])},b46a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={namespaced:!0,state:{openid:"",isAdmin:!1},mutations:{getUserinfo:function(t,e){Object.assign(t,e)}}};e.default=r},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c41a:function(t,e,n){var r={"./app.js":"e8e2","./userinfo.js":"b46a"};function o(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="c41a"},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e8e2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={namespaced:!0,state:{isEditMode:!1},mutations:{isEditMode:function(t,e){t.isEditMode=e}}};e.default=r},e9af:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/fushi/fushi":{navigationBarTitleText:"益百购物欢迎您（副食）"},"pages/baihuo/baihuo":{navigationBarTitleText:"益百购物欢迎您（百货）"},"pages/shengxian/shengxian":{navigationBarTitleText:"益百购物欢迎您（生鲜）"},"pages/wode/wode":{navigationBarTitleText:"我的",enablePullDownRefresh:!0},"pages/edit-good/edit-good":{navigationBarTitleText:"编辑商品"},"pages/add-good/add-good":{navigationBarTitleText:"新增商品"},"pages/location/location":{},"pages/login/login":{navigationBarTitleText:"管理员登陆"}},globalStyle:{navigationBarTextStyle:"black",navigationBarBackgroundColor:"#FFFFFF",navigationBarTitleText:"益百购物欢迎您"}};e.default=r},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s,c,u){var f,l="function"===typeof t?t.options:t;if(c&&(l.components=Object.assign(c,l.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(t,e){return f.call(e),p(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:l}}n.d(e,"a",function(){return r})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/good-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/good-item.js';

define('components/good-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/good-item"], {
  "2c25": function c25(t, e, n) {
    "use strict";

    var r,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "b", function () {
      return i;
    }), n.d(e, "c", function () {
      return o;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "5f3f": function f3f(t, e, n) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = o(n("a34a"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }))), r.forEach(function (e) {
            a(t, e, n[e]);
          });
        }

        return t;
      }

      function a(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      function c(t, e) {
        return s(t) || l(t, e) || f();
      }

      function f() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function l(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
            if (n.push(u.value), e && n.length === e) break;
          }
        } catch (c) {
          i = !0, o = c;
        } finally {
          try {
            r || null == a["return"] || a["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }

      function s(t) {
        if (Array.isArray(t)) return t;
      }

      function d(t, e, n, r, i, o, u) {
        try {
          var a = t[o](u),
              c = a.value;
        } catch (f) {
          return void n(f);
        }

        a.done ? e(c) : Promise.resolve(c).then(r, i);
      }

      function p(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);

            function u(t) {
              d(o, r, i, u, a, "next", t);
            }

            function a(t) {
              d(o, r, i, u, a, "throw", t);
            }

            u(void 0);
          });
        };
      }

      var h = {
        props: {
          item: {}
        },
        computed: {
          isEditMode: function isEditMode() {
            return this.$store.state.app.isEditMode;
          }
        },
        methods: {
          del: function del() {
            var e = this;
            t.showModal({
              title: "确定删除此商品？",
              content: "".concat(this.item.name, "    ").concat(this.item.price, "元 / ").concat(this.item.unit)
            }).then(function () {
              var n = p(i.default.mark(function n(o) {
                var u, a;
                return i.default.wrap(function (n) {
                  while (1) {
                    switch (n.prev = n.next) {
                      case 0:
                        if (u = c(o, 2), a = u[1], !a.confirm) {
                          n.next = 12;
                          break;
                        }

                        return t.showLoading({
                          mask: !0,
                          title: "删除中..."
                        }), n.next = 5, r.deleteFile({
                          fileList: [e.item.url]
                        });

                      case 5:
                        return n.next = 7, r.deleteFile({
                          fileList: [e.item._url]
                        });

                      case 7:
                        return n.next = 9, r.callFunction({
                          name: "good-D",
                          data: {
                            _id: e.item._id
                          }
                        });

                      case 9:
                        t.hideLoading(), t.$emit("REFRESH".concat(e.item.type.split("-")[0]), "noLoading"), t.showModal({
                          title: "删除成功",
                          showCancel: !1,
                          content: "".concat(e.item.name, "    ").concat(e.item.price, "元 / ").concat(e.item.unit)
                        });

                      case 12:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n, this);
              }));
              return function (t) {
                return n.apply(this, arguments);
              };
            }());
          },
          edit: function edit() {
            this.$router.push("/edit-good", u({}, this.item));
          },
          preview: function preview() {
            t.showLoading({
              mask: !0
            }), t.previewImage({
              urls: [this.item._url]
            });
          }
        }
      };
      e.default = h;
    }).call(this, n("6e42")["default"], n("a9ff")["default"]);
  },
  7086: function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("5f3f"),
        i = n.n(r);

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    e["default"] = i.a;
  },
  "8b0b": function b0b(t, e, n) {},
  "9e34": function e34(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("2c25"),
        i = n("7086");

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    n("d7f6");
    var u,
        a = n("f0c5"),
        c = Object(a["a"])(i["default"], r["b"], r["c"], !1, null, "05ef7ee4", null, !1, r["a"], u);
    e["default"] = c.exports;
  },
  d7f6: function d7f6(t, e, n) {
    "use strict";

    var r = n("8b0b"),
        i = n.n(r);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/good-item-create-component', {
  'components/good-item-create-component': function componentsGoodItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9e34"));
  }
}, [['components/good-item-create-component']]]);
});
require('components/good-item.js');
__wxRoute = 'components/pulldown-refresher';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/pulldown-refresher.js';

define('components/pulldown-refresher.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/pulldown-refresher"], {
  "09ea": function ea(n, e, t) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var l = {
      data: function data() {
        return {
          pulldownRefresh: 0,
          pullDownStopDistance: 0,
          pulldownRefreshingTop: 0,
          pulldownRefreshing: !1,
          pullDownRefreshDistance: 60
        };
      },
      methods: {
        transition: function transition(n) {
          var e = n.detail.dy;
          this.pulldownRefresh = e, this.pulldownRefreshing && (this.pulldownRefreshingTop = (1 - -e / this.pullDownStopDistance) * this.pullDownRefreshDistance);
        },
        touchend: function touchend() {
          this.pulldownRefresh < -this.pullDownRefreshDistance && (this.$emit("pulldownRefresh"), this.pulldownRefreshing = !0, this.pullDownStopDistance = -this.pulldownRefresh);
        },
        pullup: function pullup() {
          var n = this;
          this.pulldownRefreshing = !1;
          var e = setInterval(function () {
            n.pulldownRefreshingTop -= 4, n.pulldownRefreshingTop <= 0 && (n.pulldownRefreshingTop = 0, clearInterval(e));
          }, 10);
        },
        pulldown: function pulldown() {
          for (var n = this, e = arguments.length, t = new Array(e), l = 0; l < e; l++) {
            t[l] = arguments[l];
          }

          var o = setInterval(function () {
            n.pulldownRefreshingTop += 4, n.pulldownRefreshingTop >= n.pullDownRefreshDistance && (n.pulldownRefreshingTop = n.pullDownRefreshDistance, n.pulldownRefreshing = !0, n.$emit.apply(n, ["pulldownRefresh"].concat(t)), clearInterval(o));
          }, 10);
        }
      }
    };
    e.default = l;
  },
  "2c22": function c22(n, e, t) {
    "use strict";

    t.r(e);
    var l = t("918a"),
        o = t("5e90");

    for (var r in o) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return o[n];
        });
      }(r);
    }

    t("f2e6");
    var u,
        i = t("f0c5"),
        s = Object(i["a"])(o["default"], l["b"], l["c"], !1, null, "381a3bd7", null, !1, l["a"], u);
    e["default"] = s.exports;
  },
  "5e90": function e90(n, e, t) {
    "use strict";

    t.r(e);
    var l = t("09ea"),
        o = t.n(l);

    for (var r in l) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return l[n];
        });
      }(r);
    }

    e["default"] = o.a;
  },
  "90ac": function ac(n, e, t) {},
  "918a": function a(n, e, t) {
    "use strict";

    var l,
        o = function o() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        r = [];

    t.d(e, "b", function () {
      return o;
    }), t.d(e, "c", function () {
      return r;
    }), t.d(e, "a", function () {
      return l;
    });
  },
  f2e6: function f2e6(n, e, t) {
    "use strict";

    var l = t("90ac"),
        o = t.n(l);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/pulldown-refresher-create-component', {
  'components/pulldown-refresher-create-component': function componentsPulldownRefresherCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2c22"));
  }
}, [['components/pulldown-refresher-create-component']]]);
});
require('components/pulldown-refresher.js');

__wxRoute = 'pages/fushi/fushi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fushi/fushi.js';

define('pages/fushi/fushi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fushi/fushi"],{"57b5":function(n,e,t){"use strict";t.r(e);var u=t("dc03"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},"5e31":function(n,e,t){"use strict";(function(n){t("232c"),t("921b");u(t("66fd"));var e=u(t("9a27"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"9a27":function(n,e,t){"use strict";t.r(e);var u=t("cf56"),o=t("57b5");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("ca60");var a,f=t("f0c5"),c=Object(f["a"])(o["default"],u["b"],u["c"],!1,null,"196dfbc4",null,!1,u["a"],a);e["default"]=c.exports},ca60:function(n,e,t){"use strict";var u=t("e41f"),o=t.n(u);o.a},cf56:function(n,e,t){"use strict";var u,o=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return u})},dc03:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("7c8b")),r=a(t("555e"));function a(n){return n&&n.__esModule?n:{default:n}}var f=function(){return Promise.all([t.e("common/vendor"),t.e("components/good-item")]).then(t.bind(null,"9e34"))},c=function(){return t.e("components/pulldown-refresher").then(t.bind(null,"2c22"))},i={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/fushi/fushi"}},mixins:[o.default,r.default],components:{goodItem:f,pulldownRefresher:c},data:function(){return{navList:["副食","饮料","酒水","散点","粮油"],lists:[]}},mounted:function(){var e=this;n.$on("REFRESH1",function(n){return e.$refs.pulldownRefresher.pulldown(n)})},methods:{refresh:function(e){var t=this;!e&&n.showLoading({mask:!0,title:"加载中..."}),u.callFunction({name:"good-R",data:{type:1}}).then(function(e){var u=e.result;n.hideLoading(),t.lists=u,t.$refs.pulldownRefresher.pullup()})},addGood:function(n){this.$router.push("/add-good",{type:"1-"+(n+1)})}}};e.default=i}).call(this,t("6e42")["default"],t("a9ff")["default"])},e41f:function(n,e,t){}},[["5e31","common/runtime","common/vendor"]]]);
});
require('pages/fushi/fushi.js');
__wxRoute = 'pages/baihuo/baihuo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/baihuo/baihuo.js';

define('pages/baihuo/baihuo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/baihuo/baihuo"],{"2bad":function(n,e,t){"use strict";t.r(e);var u=t("ffba"),o=t("e6ab");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("771d");var a,i=t("f0c5"),f=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=f.exports},"52dd":function(n,e,t){},7276:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("7c8b")),r=a(t("555e"));function a(n){return n&&n.__esModule?n:{default:n}}var i=function(){return Promise.all([t.e("common/vendor"),t.e("components/good-item")]).then(t.bind(null,"9e34"))},f=function(){return t.e("components/pulldown-refresher").then(t.bind(null,"2c22"))},l={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/baihuo/baihuo"}},mixins:[o.default,r.default],components:{goodItem:i,pulldownRefresher:f},data:function(){return{navList:["洗化","百货","针织","日用","烟花"],lists:[]}},mounted:function(){var e=this;n.$on("REFRESH2",function(){return e.$refs.pulldownRefresher.pulldown()})},methods:{refresh:function(){var e=this;n.showLoading({mask:!0,title:"加载中..."}),u.callFunction({name:"good-R",data:{type:2}}).then(function(t){var u=t.result;n.hideLoading(),e.lists=u,e.$refs.pulldownRefresher.pullup()})},addGood:function(n){this.$router.push("/add-good",{type:"2-"+(n+1)})}}};e.default=l}).call(this,t("6e42")["default"],t("a9ff")["default"])},"771d":function(n,e,t){"use strict";var u=t("52dd"),o=t.n(u);o.a},b199:function(n,e,t){"use strict";(function(n){t("232c"),t("921b");u(t("66fd"));var e=u(t("2bad"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},e6ab:function(n,e,t){"use strict";t.r(e);var u=t("7276"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},ffba:function(n,e,t){"use strict";var u,o=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return u})}},[["b199","common/runtime","common/vendor"]]]);
});
require('pages/baihuo/baihuo.js');
__wxRoute = 'pages/shengxian/shengxian';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shengxian/shengxian.js';

define('pages/shengxian/shengxian.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shengxian/shengxian"],{"138f":function(n,e,t){"use strict";(function(n){t("232c"),t("921b");u(t("66fd"));var e=u(t("88bd"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"88bd":function(n,e,t){"use strict";t.r(e);var u=t("a141"),o=t("aeac");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("b288");var r,i=t("f0c5"),f=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=f.exports},a141:function(n,e,t){"use strict";var u,o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return a}),t.d(e,"a",function(){return u})},aeac:function(n,e,t){"use strict";t.r(e);var u=t("fa91"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=o.a},b288:function(n,e,t){"use strict";var u=t("cf83"),o=t.n(u);o.a},cf83:function(n,e,t){},fa91:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t("7c8b")),a=r(t("555e"));function r(n){return n&&n.__esModule?n:{default:n}}var i=function(){return Promise.all([t.e("common/vendor"),t.e("components/good-item")]).then(t.bind(null,"9e34"))},f=function(){return t.e("components/pulldown-refresher").then(t.bind(null,"2c22"))},c={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/shengxian/shengxian"}},mixins:[o.default,a.default],components:{goodItem:i,pulldownRefresher:f},data:function(){return{navList:["蔬菜","水果","干货","冷冻","调料"],lists:[]}},mounted:function(){var e=this;n.$on("REFRESH3",function(){return e.$refs.pulldownRefresher.pulldown()})},methods:{refresh:function(){var e=this;n.showLoading({mask:!0,title:"加载中..."}),u.callFunction({name:"good-R",data:{type:3}}).then(function(t){var u=t.result;n.hideLoading(),e.lists=u,e.$refs.pulldownRefresher.pullup()})},addGood:function(n){this.$router.push("/add-good",{type:"3-"+(n+1)})}}};e.default=c}).call(this,t("6e42")["default"],t("a9ff")["default"])}},[["138f","common/runtime","common/vendor"]]]);
});
require('pages/shengxian/shengxian.js');
__wxRoute = 'pages/wode/wode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/wode/wode.js';

define('pages/wode/wode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wode/wode"],{"1ab8":function(e,t,n){"use strict";n.r(t);var r=n("433c"),i=n("9736");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("e3e9");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=s.exports},2059:function(e,t,n){},"317f":function(e,t,n){"use strict";(function(e){n("232c"),n("921b");r(n("66fd"));var t=r(n("1ab8"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"433c":function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r})},9736:function(e,t,n){"use strict";n.r(t);var r=n("c0d7"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},c0d7:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return c(e)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(n.push(u.value),t&&n.length===t)break}catch(s){i=!0,a=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw a}}return n}function c(e){if(Array.isArray(e))return e}function l(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function u(e){l(a,r,i,u,o,"next",e)}function o(e){l(a,r,i,u,o,"throw",e)}u(void 0)})}}var d={onShareAppMessage:function(){return{title:"益百购物欢迎您！",path:"/pages/fushi/fushi"}},data:function(){return{swiperList:[]}},computed:{isAdmin:function(){return this.$store.state.userinfo.isAdmin}},created:function(){this.$store.state.userinfo.isAdmin?e.startPullDownRefresh():e.reLaunch({url:"../login/login"})},onPullDownRefresh:function(){var t=this;r.callFunction({name:"swiper-R"}).then(function(n){var r=n.result;t.swiperList=r,e.stopPullDownRefresh(),e.hideLoading()})},methods:{switchChange:function(e){var t=e.detail.value;this.$store.commit("app/isEditMode",t)},callPhone:function(){e.showLoading({mask:!0,title:"加载中..."}),e.makePhoneCall({phoneNumber:"18837723191"})},willOpen:function(){e.showToast({icon:"none",title:"开发中，敬请期待！"})},preview:function(t){e.previewImage({urls:this.swiperList,current:t})},changeSwiper:function(){var t=this;e.chooseImage({sourceType:["album"],sizeType:["compressed"]}).then(function(){var n=f(i.default.mark(function n(a){var o,s,c,l,f,d,h;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:o=u(a,2),s=o[1].tempFilePaths,e.showLoading({mask:!0,title:"更换中..."}),c=[],l=0;case 4:if(!(l<s.length)){n.next=13;break}return n.next=7,r.uploadFile({filePath:s[l]});case 7:f=n.sent,d=f.fileID,c.push(d);case 10:l++,n.next=4;break;case 13:return n.next=15,r.callFunction({name:"swiper-U",data:c});case 15:h=0;case 16:if(!(h<t.swiperList.length)){n.next=22;break}return n.next=19,r.deleteFile({fileList:[t.swiperList[h]]});case 19:h++,n.next=16;break;case 22:e.startPullDownRefresh();case 23:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}())}}};t.default=d}).call(this,n("6e42")["default"],n("a9ff")["default"])},e3e9:function(e,t,n){"use strict";var r=n("2059"),i=n.n(r);i.a}},[["317f","common/runtime","common/vendor"]]]);
});
require('pages/wode/wode.js');
__wxRoute = 'pages/edit-good/edit-good';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/edit-good/edit-good.js';

define('pages/edit-good/edit-good.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/edit-good/edit-good"],{"22e8":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},"4c88":function(t,e,n){"use strict";(function(t){n("232c"),n("921b");r(n("66fd"));var e=r(n("c27e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7c31":function(t,e,n){},a193:function(t,e,n){"use strict";var r=n("7c31"),i=n.n(r);i.a},a401:function(t,e,n){"use strict";n.r(e);var r=n("ce16"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=i.a},c27e:function(t,e,n){"use strict";n.r(e);var r=n("22e8"),i=n("a401");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("a193");var a,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"36a02ed8",null,!1,r["a"],a);e["default"]=c.exports},ce16:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,u,a){try{var o=t[u](a),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var u=t.apply(e,n);function o(t){a(u,r,i,o,c,"next",t)}function c(t){a(u,r,i,o,c,"throw",t)}o(void 0)})}}function c(t,e){return f(t)||l(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,u=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw u}}return n}function f(t){if(Array.isArray(t))return t}var h={data:function(){return{url:"",unit:"",name:"",price:"",imgList:[]}},onLoad:function(t){this.url=this.$route.query.url,this.name=this.$route.query.name,this.unit=this.$route.query.unit,this.price=this.$route.query.price,this.imgList=[this.$route.query._url]},methods:{ChooseImage:function(){var e=this;this.imgList.length||t.chooseImage({sourceType:["camera"],sizeType:["compressed"]}).then(function(t){var n=c(t,2),r=n[1].tempFilePaths;return e.imgList=r})},ViewImage:function(e){t.previewImage({urls:this.imgList})},DelImg:function(e){var n=this;t.showModal({title:"删除",content:"确定删除这张商品图片嘛？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},addGood:function(){var e=o(i.default.mark(function e(){var n,u,a,o,c,s,l,f=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.imgList.length){e.next=3;break}return t.showToast({title:"商品图片不能为空",icon:"none"}),e.abrupt("return");case 3:if(this.name){e.next=6;break}return t.showToast({title:"商品名称不能为空",icon:"none"}),e.abrupt("return");case 6:if(this.price){e.next=9;break}return t.showToast({title:"商品价格不能为空",icon:"none"}),e.abrupt("return");case 9:if(this.unit){e.next=12;break}return t.showToast({title:"商品单位不能为空",icon:"none"}),e.abrupt("return");case 12:if(t.showLoading({mask:!0,title:"修改中"}),!this.imgList[0].match(/bsppub.oss-cn-shanghai.aliyuncs.com/g)){e.next=18;break}n=this.$route.query.url,u=this.$route.query._url,e.next=35;break;case 18:return e.next=20,r.deleteFile({fileList:[this.$route.query.url]});case 20:return e.next=22,r.deleteFile({fileList:[this.$route.query._url]});case 22:return e.next=24,r.uploadFile({filePath:this.imgList[0]});case 24:return a=e.sent,o=a.fileID,u=o,e.next=29,this.$mini(this.imgList[0]);case 29:return c=e.sent,e.next=32,r.uploadFile({filePath:c});case 32:s=e.sent,l=s.fileID,n=l;case 35:r.callFunction({name:"good-U",data:{_id:this.$route.query._id,data:{url:n,_url:u,name:this.name,price:this.price,unit:this.unit}}}).then(function(e){e.result;t.hideLoading(),t.showModal({title:"修改成功",showCancel:!1,content:"".concat(f.name,"    ").concat(f.price,"元 / ").concat(f.unit)}).then(function(){t.$emit("REFRESH".concat(f.$route.query.type.split("-")[0])),f.$router.pop()})});case 36:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=h}).call(this,n("6e42")["default"],n("a9ff")["default"])}},[["4c88","common/runtime","common/vendor"]]]);
});
require('pages/edit-good/edit-good.js');
__wxRoute = 'pages/add-good/add-good';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/add-good/add-good.js';

define('pages/add-good/add-good.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add-good/add-good"],{"14eb":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},"314c":function(t,e,n){"use strict";n.r(e);var i=n("14eb"),r=n("a5ad");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("8c54");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"56bbf0e0",null,!1,i["a"],o);e["default"]=c.exports},"8c54":function(t,e,n){"use strict";var i=n("f9cd"),r=n.n(i);r.a},a5ad:function(t,e,n){"use strict";n.r(e);var i=n("b024"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},b024:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,r,a,o){try{var u=t[a](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function u(t){o(a,i,r,u,c,"next",t)}function c(t){o(a,i,r,u,c,"throw",t)}u(void 0)})}}function c(t,e){return l(t)||f(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){r=!0,a=c}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return n}function l(t){if(Array.isArray(t))return t}var d={data:function(){return{imgList:[],type:"",name:"",price:"",unit:""}},onLoad:function(t){this.type=this.$route.query.type,this.chooseImage()},methods:{chooseImage:function(){var e=this;this.imgList.length||t.chooseImage({sourceType:["camera"],sizeType:["compressed"]}).then(function(t){var n=c(t,2),i=n[1].tempFilePaths;return e.imgList=i})},viewImage:function(e){t.previewImage({urls:this.imgList})},delImg:function(e){var n=this;t.showModal({title:"删除",content:"确定删除这张商品图片嘛？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&n.imgList.splice(e.currentTarget.dataset.index,1)}})},addGood:function(){var e=u(r.default.mark(function e(){var n,a,o,u,c,s=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.imgList.length){e.next=3;break}return t.showToast({title:"商品图片不能为空",icon:"none"}),e.abrupt("return");case 3:if(this.name){e.next=6;break}return t.showToast({title:"商品名称不能为空",icon:"none"}),e.abrupt("return");case 6:if(this.price){e.next=9;break}return t.showToast({title:"商品价格不能为空",icon:"none"}),e.abrupt("return");case 9:if(this.unit){e.next=12;break}return t.showToast({title:"商品单位不能为空",icon:"none"}),e.abrupt("return");case 12:return t.showLoading({mask:!0,title:"添加中..."}),e.next=15,i.uploadFile({filePath:this.imgList[0]});case 15:return n=e.sent,a=n.fileID,e.next=19,this.$mini(this.imgList[0]);case 19:return o=e.sent,e.next=22,i.uploadFile({filePath:o});case 22:u=e.sent,c=u.fileID,i.callFunction({name:"good-C",data:{url:c,_url:a,type:this.type,unit:this.unit,name:this.name,price:this.price,addTime:Date.now()}}).then(function(e){e.result;t.hideLoading(),t.showModal({title:"添加成功",showCancel:!1,content:"".concat(s.name,"    ").concat(s.price,"元 / ").concat(s.unit)}).then(function(){t.$emit("REFRESH".concat(s.type.split("-")[0])),s.$router.pop()})}).catch(function(e){t.hideLoading(),t.showToast({title:"上传失败，请联系成诺",icon:"none"})});case 25:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=d}).call(this,n("6e42")["default"],n("a9ff")["default"])},c460:function(t,e,n){"use strict";(function(t){n("232c"),n("921b");i(n("66fd"));var e=i(n("314c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f9cd:function(t,e,n){}},[["c460","common/runtime","common/vendor"]]]);
});
require('pages/add-good/add-good.js');
__wxRoute = 'pages/location/location';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/location/location.js';

define('pages/location/location.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/location/location"],{"2e3f":function(t,n,e){},"4f65":function(t,n,e){"use strict";e.r(n);var a=e("8aaf"),u=e("c819");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("a6b2");var r,c=e("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=i.exports},"8aaf":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},a6b2:function(t,n,e){"use strict";var a=e("2e3f"),u=e.n(a);u.a},b7b2:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{scale:17,latitude:32.597034,longitude:112.098133,covers:[{width:66,height:66,latitude:32.597034,longitude:112.098133,iconPath:"../../static/marker.jpg",callout:{padding:8,fontSize:20,borderWidth:1,borderRadius:8,color:"#000000",display:"ALWAYS",content:"益百购物",borderColor:"#C0C0C0"}}]}}};n.default=a},c819:function(t,n,e){"use strict";e.r(n);var a=e("b7b2"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},c87b:function(t,n,e){"use strict";(function(t){e("232c"),e("921b");a(e("66fd"));var n=a(e("4f65"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["c87b","common/runtime","common/vendor"]]]);
});
require('pages/location/location.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"19c6":function(n,t,e){},"1bf4":function(n,t,e){"use strict";var u=e("19c6"),c=e.n(u);c.a},"7c9b":function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},f=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return f}),e.d(t,"a",function(){return u})},"7f33":function(n,t,e){"use strict";e.r(t);var u=e("7c9b"),c=e("e236");for(var f in c)"default"!==f&&function(n){e.d(t,n,function(){return c[n]})}(f);e("1bf4");var o,r=e("f0c5"),i=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,"08d3f266",null,!1,u["a"],o);t["default"]=i.exports},"82a8":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{psw:""}},methods:{login:function(){"88888888"===this.psw&&(this.$store.commit("userinfo/getUserinfo",{isAdmin:!0,openid:"666"}),n.reLaunch({url:"../wode/wode"}))}}};t.default=e}).call(this,e("6e42")["default"])},e236:function(n,t,e){"use strict";e.r(t);var u=e("82a8"),c=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=c.a},f0af:function(n,t,e){"use strict";(function(n){e("232c"),e("921b");u(e("66fd"));var t=u(e("7f33"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f0af","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

