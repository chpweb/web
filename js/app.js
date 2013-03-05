!function ($) {

    "use strict"; // jshint ;_;

	window.LOADER = {
		include: function(template) {
			$.ajax({
				url     : template,
				async   : false,
			    success : function(tpl) {
					document.write(tpl);
				}
			});
		}
	}

}(window.jQuery);

(function(doc, script) {
  var js, 
      fjs = doc.getElementsByTagName(script)[0],
      frag = doc.createDocumentFragment(),
      add = function(url, id) {
          if (doc.getElementById(id)) {return;}
          js = doc.createElement(script);
          js.src = url;
          id && (js.id = id);
          frag.appendChild( js );
      };
      
    // Google+ button
    add('http://apis.google.com/js/plusone.js');
    // Facebook SDK
    add('//connect.facebook.net/en_US/all.js#xfbml=1', 'facebook-jssdk');
    // Twitter SDK
    add('//platform.twitter.com/widgets.js');

    fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));