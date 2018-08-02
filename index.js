/*! (c) 2018 - Andrea Giammarchi (ISC) */
Object.defineProperty(Function.prototype,'this',{configurable:!0,value:function(){var f=this,a=[];a.push.apply(a,arguments);return function(s){return f.apply(s,a)}}});
