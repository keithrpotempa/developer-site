$(function(){
	
	var
    $outerSquare = $('.cube'),
		$menus		 = $('a.item'),
		$innerSquare = $('.center'),
		$menuParent	= $menus.parent(),
		$box 			 = $('.shape')
    ;
	
	$outerSquare
   .click('$flip', function() {
		$box.shape('flip up');
		})
  ;

  $menus.detach();
    $menus
      .click( '$menus', function() {
          $(this)
          .addClass('active')
            .siblings('.item')
              .removeClass('active');
    
      })
  ;

  $menuParent.append( $menus );
    
    $menus.on('click', function(attr) {
      var tabId = $(this).attr('data-tab');
      $box.shape(tabId);
    })
  ;
	
});