$(document).ready(function(){
    // Get the slider element
    var slider = $("#myRange");
    // Get the output element
    var output = $("#demo");
    // Display the default slider value
    output.text(slider.val());

    // Update the current slider value when slider is moved
    slider.on("input", function() {
        output.text($(this).val());
    });


    $(".color-box").on("click", function() {
        // Get the background color of the clicked color box
        var color = $(this).css("background-color");
        console.log("Selected color:", color);
    });
    
    $('.mycolor').click(function () {
        // Remove border from all boxes
        $('.mycolor').removeClass('bgred bggreen bgblue bgyellow bgorange bgpurple bglight bglgreen');
        // Determine which color to add based on index
        var index = $(this).index();
        switch (index) {
            case 0:
                $(this).addClass('bgred');
                break;
            case 1:
                $(this).addClass('bggreen');
                break;
            case 2:
                $(this).addClass('bgblue');
                break;
            case 3:
                $(this).addClass('bgyellow');
                break;
            case 4:
                $(this).addClass('bgorange');
                break;
            case 5:
                $(this).addClass('bgpurple');
                break;
            case 6:
                $(this).addClass('bglight');
                break;
            case 7:
                $(this).addClass('bglgreen');
                break;
        }
    });



    $('.accordion-button').click(function () {
        var target = $($(this).data('bs-target'));
        var isOpen = target.hasClass('show');

        if (!isOpen) {
            $('.accordion-collapse.show').collapse('hide');
            target.collapse('show');
        } else {
            target.collapse('hide');
        }
    });
});

