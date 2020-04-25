



(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();




/*
window.onresize = function(event) {
    document.location.reload();
}
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
 */


