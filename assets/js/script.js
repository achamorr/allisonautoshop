$(document).ready(function( $ ){


    //Navbar
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() 
        {
            myFunction()
        };

        // Get the navbar
        var navbar = document.getElementById("navbar");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) 
            {
                navbar.classList.add("sticky")
            } else 
            {
                navbar.classList.remove("sticky");
            }
        }





    // Partner slider
        $('#partner-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }) // end of #partner-slider




    // Turn off Google Map zooming
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function () {
            $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });
        // you want to disable pointer events when the mouse leave the canvas area;
        $(".map_canvas").mouseleave(function () {
            $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        }); //end of Turn off Google Map zooming


    // Team box height
        var h = $('.team-img-detail').height();
        var mbottom = h;
        h = h/2;
        var top = $('.team-box').height();
        top = (top/2)-h;
        var win = $(window).width();

        if ( win >= 768 ){
            $(".team-img-detail").css("top", top);
        } else {
            $(".team-img-detail").css({
                "bottom": -mbottom+20,
                "left": "0",
                "width": "100%"
            });
            $(".team-box").css("margin-bottom", mbottom+30);
        }// end of Team box height


    // Pop up
        $('.test-popup-link').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        }); //end of Pop Up





        //Pasted Content Starts


        $("#google-reviews").googlePlaces({
            placeId: 'ChIJOSTFYzXHwokRwEqav2feyEA' //Find placeID @: https://developers.google.com/places/place-id
        , render: ['reviews']
        , min_rating:4
        , max_rows:5
        ,rotateTime: false
        , shorten_names: true
        });

        //Pasted content ends

}); // end of $(document).ready(function()

