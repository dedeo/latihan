/*
    JQuery project main widget.
 */

(function ($) {
    'use strict';
    $.widget('gope.main', {

        _create: function () {
            this.initAllPages();
            this.initHomePage();
            this.initCategoryPage();
            this.initProductPage();
            this.initSearchPage();
            this.initShoppingCartPage();
            this.initCmsPage();
        },

        initAllPages: function() {
            /*main menu float*/
            var $document = $(document),
                $element = $('#header-nav'),
                className = 'hasScrolled';

            $document.scroll(function() {
              $element.toggleClass(className, $document.scrollTop() >= 115);
            });

            $('.nav-primary .has-children').append('<i class="fa fa-caret-down" aria-hidden="true" style="margin-left:5px;"></i>');

            $('.home-slider').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                items:1,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            });

            /*Minicart*/
            $(document).minicart();
        },

        initHomePage: function() {

            if ($('body.cms-index-index').length) {
                $(".product-list-slide").each(function() {
                    var $this = $(this);
                    
                    $this.owlCarousel({
                        items : 4, //10 items above 1000px browser width
                        itemsDesktop : [1070,4], //4 items between 1070px and 959px
                        itemsDesktopSmall : [959,3], // betweem 959px and 639px
                        itemsTablet: [639,2], //2 items between 639 and 0
                        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                        dots: false
                    });
                    
                    // Custom Navigation Events
                    $this.parent().find(".next").click(function(){
                        $this.trigger('next.owl.carousel');
                    });

                    $this.parent().find(".prev").click(function(){
                        $this.trigger('prev.owl.carousel');
                    });
                });
            }
        },

        initCategoryPage: function() {

            if ($('body.catalog-category-view').length) {
            }
        },

        initProductPage: function() {

            if ($('body.catalog-product-view').length) {
            }
        },

        initSearchPage: function() {

            if ($('body.catalogsearch-result-index, body.wordpress-search-index').length) {
            }
        },

        initShoppingCartPage: function() {

            if ($('body.checkout-cart-index').length) {
            }
        },

        initCmsPage: function() {

            if ($('body.cms-page-view').length) {
            }
        }
    });
}(jQuery));
