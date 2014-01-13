$(document).ready(function() {
    $('#hamburger').on('click', function () {
        $('nav').css({
            'width': '200px',
            'marginLeft': '0px'
        });

        $('.container').css('marginLeft', '200px');

        return false;
    });

    $('nav').on('click', function() {
        $('.container').css('marginLeft', '0px');
        $('nav').css('marginLeft', '-200px');

        return false;
    });

    var clicks = 0;

    function click_counter () {
        clicks++;

        return clicks;
    }

    function reset_clicks () {
        clicks = 0;

        return clicks;
    }

    $('.item').on('click', function() {
        click_counter();

        var item = $('.item');

        $.each(item, function() {
            $('.item').css({
                'zIndex': '0',
                'width': '140px',
                'height': '140px',
                'fontSize': '1em'
                }
            );
        });

        $(this).css({
                'zIndex': '99999',
                'width': '160px',
                'height': '160px',
                'fontSize': '1.2em'
            }
        );

        $('body').css('backgroundColor', 'rgb(233,241,247)');

        if ($(document).height() <= 480) {
            $('.panel').css('top', '50%');
            $('.info-panel').css('top', '68%');
            $('.results').css('top', '25%');
        } else if ($(document).height() <= 600) {
            $('.panel').css('top', '45%');
            $('.info-panel').css('top', '60%');
            $('.results').css('top', '25%');
        } else {
            $('.panel').css('top', '45%');
            $('.info-panel').css('top', '55%');
            $('.results').css('top', '30%');
        }

        var new_position = $(this).position().left;
        var dom_position = $(this).offset().left;

        if ($(this).html() === $('.item').first().html() ||
            dom_position <= 0 ||
            clicks === 1) {
            $('.results').css({
              'left': -new_position + 75
            });
            return false;
        } else {
            $('.results').css({
              'left': -new_position + 95
            });
        }

        return false;
    });

    $('.panel').on('click', function() {
        reset_clicks();
        var item = $('.item');

        $('.results').css({
              'left': 25,
              'top': '38%'
            });
        $(this).css('top', '100%');
        $('.info-panel').css('top', '100%');

        $.each(item, function() {
            $('.item').css({
                'zIndex': '0',
                'width': '140px',
                'height': '140px',
                'fontSize': '1em'
                }
            );
        });

        $('body').css('backgroundColor', 'rgb(255,255,255)');

        return false;
    });
});