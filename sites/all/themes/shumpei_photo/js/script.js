(function ($) {
      // Fix flexslider's height
      Drupal.behaviors.fixFlexsliderHeight = {
        attach: function() {
          var sliderImages = $('.flexslider img');

            // Hide slider image
            // sliderImages.hide();

            // Add background-image with the url of the each image.
            $.each(sliderImages, function(index, image) {
              $(image).parent('.field-content').css('background-image', 'url("' + $(image).attr('src') + '")');
            });
          }
        }
      })(jQuery);