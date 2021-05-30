(()=>{
function O(o){this.o = o;}
O.prototype = {
    hide:      function( )   {this.o.forEach(e=>e.style.display="none");return this},
    show:      function(s)   {this.o.forEach(e=>e.style.display=s??"block");return this},
    html:      function(s)   {if(s){this.o.forEach(e=>e.innerHTML = s);return this}else{return this.ele().innerHTML}},
    append:    function(s)   {this.o.forEach(e=>e.append(s.ele?.()??s));return this},
    appendAll: function(eles){eles.o.forEach(e=>this.append(e));return this},
    prepend:   function(s)   {this.o.forEach(e=>e.prepend(s.ele?.()??s));return this},
    val:       function(s)   {if(s){this.o.forEach(e=>e.value = s);return this}else{return this.ele().value}},
    set:       function(k,v) {this.o.forEach(e=>e.setAttribute(k,v));return this},
    get:       function(a)   {return this.o[0].getAttribute(a)},
    ele:       function( )   {return this.o[0]??this.o},
    eles:      function( )   {return this.o},
    find:      function(q)   {return new O((this.o[0]??this.o)?.querySelectorAll(q))},
    mimic:     function(ts)  {this.ele().innerHTML='';return this.born(ts);},
    born:      function(ts)  {this.append($(ts).ele().content.cloneNode(true));return this},
    click:     function(f)   {this.o.forEach(e=>e.onclick=f);return this}
};
$=(x)=>new O(document.querySelectorAll(x))
ex=(q)=>q!=null&&q!=undefined&&q!=[]&&Object.keys(q).length>0
fetcher=(x,method,qs,body,cb,h, fail)=>{
    o={method,headers:h??{"Content-Type":"application/json"}}
    if(ex(body)){o.body = JSON.stringify(body)}
    if(ex(qs)){x+="?"+new URLSearchParams(qs).toString()}
    fetch(x,o).then(res=>res.json().then(cb)).catch(fail);
}
$.get =(u,q,c,h,f)=>fetcher(u,"GET", q,null,c,h, f)
$.delete =(u,q,c,h)=>fetcher(u,"DELETE", q,null,c,h)
$.post=(u,b,c,h)=>fetcher(u,"POST",null,b,c,h)
$.put=(u,b,c,h)=>fetcher(u,"PUT",null,b,c,h)
$.ajax=(u,all,c)=>fetcher(u,all.method??"GET",all.query,all.body,c,all.headers)
$.template=(ts)=>new O($(ts).ele().content.cloneNode(true))
window.$=$
})()
    