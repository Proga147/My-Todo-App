$(document).ready(function () {

    $("ul").on("click", "li", function () {

        $(this).find( ".fa-check-circle" ).toggle('linear');


        $("ul").on("click", "span", function (e) {
            $(this).parent().fadeOut(500, function () {

                $(this).remove();
            });
            e.stopPropogation(); //prevent event bubbling
        });

    })


    $("input[type='text']").keypress(function (e) {

        if (e.which === 13) {
            var todo = $(this).val();
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "  <i class='fas fa-check-circle'></i></l1>");
            $(this).val("");
        }

    });


    $("#toggler").click(function () {

        if ($(this).hasClass("fa-minus")) {

            $("input[type='text']").fadeToggle(600);

            $(this).fadeOut(400, function () {

                $(this).removeClass("fa-minus");

            });

            
            $(this).fadeIn(200, function () {

                $(this).addClass("fa-plus");

            })

           



        }

        else if ($(this).hasClass("fa-plus")) {

            $("input[type='text']").fadeToggle(600);

            $(this).fadeOut(400, function () {

                $(this).removeClass("fa-plus");

            });

            
            $(this).fadeIn(200, function () {

                $(this).addClass("fa-minus");

            })


        }


    });










}); // end of document