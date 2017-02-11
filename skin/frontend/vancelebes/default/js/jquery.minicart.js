/*
    JS for Home page
 */

(function ($) {
    'use strict';
    $.widget('gope.minicart', {

        _create: function () {
            // Initialize js on minicart
            this.initMinicartHover();
        },

        initMinicartHover: function() {
            enquire.register(_responsive.mqDesktop, {
            
                match: function() {
                    // desktop & tablet version
                    $j('#shopping-menu .shopping-arrow-down').hide();

                    $j('.header-minicart').mouseenter( 
                        function() {
                            $j('.header-minicart .block-cart').addClass('active');
                            $j('.header-minicart .block-cart').show();
                            $j('#shopping-menu .shopping-arrow-down').show();
                            $j('#shopping-menu .shopping-arrow').hide();
                        } 
                    ).mouseleave( 
                        function() {                        
                            $j('.header-minicart .block-cart').removeClass('active');
                            $j('.header-minicart .block-cart').hide();
                            $j('#shopping-menu .shopping-arrow-down').hide();
                            $j('#shopping-menu .shopping-arrow').show();
                            
                            setTimeout(
                                function() {
                                    if (!$j('.shopping-wripper').is(':hover')) {
                                        $j('.shopping-wripper').removeClass('active');
                                    };
                                }
                            ,100);
                        }
                    );
                }
            });  
            

            enquire.register(_responsive.mqTabletSmall, {
                
                match : function() {
                
                    // mobile version
                    $j('#shopping-menu .shopping-arrow-down').hide();
                    $j('.header-minicart').click( 
                            function() {
                                
                                $j('.header-minicart .block-cart').toggle();
                                $j('#shopping-menu .shopping-arrow-down').toggle();
                                if($j('.header-minicart .block-cart').is(":visible")){
                                    $j('.header-minicart .block-cart').addClass('active');
                                } else {
                                    $j('.header-minicart .block-cart').removeClass('active');
                                }
                            } 
                        );
                },
                
                unmatch : function() {
            
                }
            });
        }
    });
}(jQuery));