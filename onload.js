<script language="javascript">
window.document.onload = function(e){ 
    console.log("document.onload", e, Date.now() ,window.tdiff,  
    (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 
}
window.onload = function(e){ 
    console.log("window.onload", e, Date.now() ,window.tdiff, 
    (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred) ); 
}


document.addEventListener("DOMContentLoaded", function(event) {
      /* 
        - Code to execute when only the HTML document is loaded.
        - This doesn't wait for stylesheets, 
          images, and subframes to finish loading. 
      */
  });

window.addEventListener('load', function() {
    console.log('All assets are loaded')
})

$(window).on('load', function() {
    console.log('All assets are loaded')
})

</script>




