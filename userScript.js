(function(){
  var base='https://raw.githubusercontent.com/gonitarot/musica-tv/main/dev.js?t='+Date.now();
  fetch(base).then(function(r){return r.text()}).then(function(t){(0,eval)(t)}).catch(function(e){console.log('MSTUB err '+e)});
  console.log('MSTUB start');
})();
