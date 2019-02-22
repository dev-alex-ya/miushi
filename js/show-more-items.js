(function($) {
  $.fn.showMoreItems = function(options) {

    var $totalItems = $('.item-list li').length,
        $visibleItems = $('.item-list li:visible').length,
        settings = $.extend({}, $.fn.showMoreItems.defaults, options),
        i = settings.count,
        countLess = settings.count - 1;

    $('.item-list li:lt(' + settings.count + ')').show();

    $('.btn-more-trigger').click(function(el) {
      el.preventDefault();

      if ($visibleItems !== $totalItems) {
        $('.item-list li:gt(' + countLess + ')').show();
        $('.btn-more-trigger').text("Show Less");
        $visibleItems = $totalItems;
        i = $totalItems;
      } else if($visibleItems === $totalItems) {
        $('.item-list li:gt(' + countLess + ')').hide();
        $('.btn-more-trigger').text("Show More");
        $visibleItems = settings.count;
        i = settings.count;
      }

    });
  }

  $.fn.showMoreItems.defaults = {
    count: 3
  };
})(jQuery);
