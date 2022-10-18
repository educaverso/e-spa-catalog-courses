var A=Object.defineProperty;var I=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var w=(t,e,n)=>(I(t,typeof e!="symbol"?e+"":e,n),n);import{b as T}from"./index.2a111212.js";class F{constructor(e){this.id=e}equals(e){return e.id==null?!1:this==e||e.id.equals(this.id)}}class h extends F{constructor(n,r,i){super(n);w(this,"description");this.id=n,this.name=r,this.description=i}static of(n){return new h(n.roomId,n.name,n.description)}update(n){return this.description=n,this}}function D(t){return e=>{Object.defineProperty(e,"topic",{value:t,writable:!1,configurable:!1,enumerable:!1})}}var K=Object.defineProperty,S=Object.getOwnPropertyDescriptor,W=(t,e,n,r)=>{for(var i=r>1?void 0:r?S(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(r?s(e,n,i):s(i))||i);return r&&i&&K(e,n,i),i};let d=class{constructor(t){this.room=t,this.room=t}payload(){return this.room}timestamp(){return Date.now()}};d=W([D("room.created")],d);class q{constructor(e){this.value=e}equals(e){return e==null?!1:this==e||this.value===e.value}}class m extends q{constructor(e=""){super(e)}static of(e){return new m(e)}}class Z{constructor(e,n){this.dispacher=e,this.gateway=n}async execute(e){const n=m.of("random-uuid"),r=h.of({roomId:n,name:e.name,description:e.description});return this.dispacher.notify(new d(r)),{roomId:n.value}}}var y={exports:{}},c=typeof Reflect=="object"?Reflect:null,g=c&&typeof c.apply=="function"?c.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},l;c&&typeof c.ownKeys=="function"?l=c.ownKeys:Object.getOwnPropertySymbols?l=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:l=function(e){return Object.getOwnPropertyNames(e)};function U(t){console&&console.warn&&console.warn(t)}var b=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}y.exports=u;y.exports.once=z;u.EventEmitter=u;u.prototype._events=void 0;u.prototype._eventsCount=0;u.prototype._maxListeners=void 0;var _=10;function p(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(t){if(typeof t!="number"||t<0||b(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");_=t}});u.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};u.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||b(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function E(t){return t._maxListeners===void 0?u.defaultMaxListeners:t._maxListeners}u.prototype.getMaxListeners=function(){return E(this)};u.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(n.length>0&&(s=n[0]),s instanceof Error)throw s;var f=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw f.context=s,f}var a=o[e];if(a===void 0)return!1;if(typeof a=="function")g(a,this,n);else for(var L=a.length,M=R(a,L),r=0;r<L;++r)g(M[r],this,n);return!0};function O(t,e,n,r){var i,o,s;if(p(n),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),s===void 0)s=o[e]=n,++t._eventsCount;else if(typeof s=="function"?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=E(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=s.length,U(f)}return t}u.prototype.addListener=function(e,n){return O(this,e,n,!1)};u.prototype.on=u.prototype.addListener;u.prototype.prependListener=function(e,n){return O(this,e,n,!0)};function $(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function x(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=$.bind(r);return i.listener=n,r.wrapFn=i,i}u.prototype.once=function(e,n){return p(n),this.on(e,x(this,e,n)),this};u.prototype.prependOnceListener=function(e,n){return p(n),this.prependListener(e,x(this,e,n)),this};u.prototype.removeListener=function(e,n){var r,i,o,s,f;if(p(n),i=this._events,i===void 0)return this;if(r=i[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(o=-1,s=r.length-1;s>=0;s--)if(r[s]===n||r[s].listener===n){f=r[s].listener,o=s;break}if(o<0)return this;o===0?r.shift():B(r,o),r.length===1&&(i[e]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",e,f||n)}return this};u.prototype.off=u.prototype.removeListener;u.prototype.removeAllListeners=function(e){var n,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var o=Object.keys(r),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(i=n.length-1;i>=0;i--)this.removeListener(e,n[i]);return this};function C(t,e,n){var r=t._events;if(r===void 0)return[];var i=r[e];return i===void 0?[]:typeof i=="function"?n?[i.listener||i]:[i]:n?H(i):R(i,i.length)}u.prototype.listeners=function(e){return C(this,e,!0)};u.prototype.rawListeners=function(e){return C(this,e,!1)};u.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):j.call(t,e)};u.prototype.listenerCount=j;function j(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}u.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]};function R(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function B(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function H(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function z(t,e){return new Promise(function(n,r){function i(s){t.removeListener(e,o),r(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),n([].slice.call(arguments))}P(t,e,o,{once:!0}),e!=="error"&&G(t,i,{once:!0})})}function G(t,e,n){typeof t.on=="function"&&P(t,"error",e,n)}function P(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){r.once&&t.removeEventListener(e,i),n(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var J=y.exports;function N(t){let e;return()=>e!=null?e:e=t()}class Q extends J{}const v=N(()=>new Q)();class V{subscribe(e,n){const r=e.topic;if(!r)throw new TypeError(`Event class ${e.name} must have a topic property`);v.on(r,n),T(()=>{v.off(r,n)})}notify(e){v.emit(e.constructor.topic,e)}}const k=N(()=>new V)();export{Z as C,d as R,k as e};
