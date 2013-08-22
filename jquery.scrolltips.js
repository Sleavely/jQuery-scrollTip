
(function(jQuery){
  
  jQuery.fn.scrollTip = function(options){
    var $this = jQuery(this);
    var defaultOptions = {
      scrollbar : 'body',
      fadeDuration : 600,
      sleepDuration : 1000,
    };
    if (typeof(options) === 'object') {
      options = jQuery.extend(defaultOptions, options);
    }else{
      options = defaultOptions;
    }
    
    //figure out scrollbar height and stuff
    var windowHeight = jQuery(window).height();
    var containerHeight = jQuery(options.scrollbar).height();
    var ratio = (windowHeight / containerHeight);
    
    var $tips = [];
    
    $this.each(function(){
      //new context - "override activated!!!"
      var $this = jQuery(this);
      
      //where on the scrollbar is the tooltip supposed to show?
      var topPos = $this.offset().top * ratio;
      
      var $tip = jQuery('<div class="scrolltip"></div>');
      $tip.text( $this.text() );
      $tip.css({
        'position' : 'fixed',
        'right' : '10px',
        'top' : topPos + 'px',
        'background-color' : 'rgba(0, 0, 0, 0.7)',
        'color' : '#FFFFFF'
      });
      $tips.push($tip);
    });
    
    var $tipContainer = jQuery('<div id="scrolltips"></div>');
    $tipContainer.append($tips);
    jQuery(options.scrollbar).append($tipContainer);
    $tipContainer.fadeOut(options.fadeDuration);
    
    
    var lastTimeout,
      eventTarget;
    
    eventTarget = options.scrollbar;
    if (options.scrollbar.toLowerCase().indexOf('body') != -1) {
      eventTarget = window;
    }
    
    jQuery(eventTarget).scroll(function(){
      //reset the counter
      if(typeof(lastTimeout) === 'number') window.clearTimeout(lastTimeout);
      
      $tipContainer.fadeIn(options.fadeDuration, function(){
        lastTimeout = window.setTimeout(function(){
          $tipContainer.fadeOut(options.fadeDuration);
        }, options.sleepDuration);
      })
    });
    
    return this;
  };
  
})(jQuery);
