(function($){
    $('.portfolio-content').hover(
        function(){
            var selector = $(this).find('.portfolio-content-title-container')
            var img = $(this).find('.portfolio-content-img')
            // selector.not(':animated').fadeIn()
            selector.finish()
            selector.show()
            TweenMax.fromTo(selector, 0.5,
                {opacity: 0},
                {opacity: 1}
            )
            TweenMax.to(img, 0.5, {transform: 'scale(1.1)'})
        },
        function(){
            var selector = $(this).find('.portfolio-content-title-container')
            var img = $(this).find('.portfolio-content-img')
            TweenMax.fromTo(selector, 0.5,
                {opacity: 1},
                {opacity: 0}
            )
            selector.fadeOut()
            TweenMax.to(img, 0.3, {transform: 'scale(1)'})
        }
    )

    $('.portfolio-content').on('click', function(){
        var selector = $(this).find('.hide-portfolio-content')
        showPortFolioAnim()
        $('.portfolio-content-detail').remove()
        $('.hide-portfolio-content-anim-container').append('<div class="portfolio-content-detail"></div>')
        $('.portfolio-content-detail').append(selector.html())


    })

    function showPortFolioAnim(){
        $('.hide-portfolio-content-anim-container-shadow').fadeIn()
        TweenMax.to($('.hide-portfolio-content-anim-container'), 0.4, {width: '80%',height: 'auto'})
        // $('.hide-portfolio-content-anim-container').fadeIn()
        TweenMax.to($('.hide-portfolio-content-anim-container'), 0.5, {alpha:1, display: 'block'})
        $('.hide-portfolio-up-and-down').show()
        $('.hide-portfolio-left-and-right').show()
        TweenMax.fromTo($('.hide-portfolio-up-and-down-top'), 1.3,
            {top: 'calc(-50% - 0px)'},
            {top: 'calc(-50% - 1000px)',delay: 0.6}
        )
        TweenMax.fromTo($('.hide-portfolio-up-and-down-bottom'), 1.3,
            {bottom: 'calc(-50% - 0px)'},
            {bottom: 'calc(-50% - 1000px)',delay: 0.6}
        )

        TweenMax.fromTo($('.hide-portfolio-left-and-right-left'), 1.3,
            {
                left: 'calc(-50% - 0px)',
                transform: 'translateY(-50%)'
            },
            {
                left: 'calc(-50% - 1000px)',
                transform: 'translateY(-50%)',
                delay: 0.6
            }
        )
        TweenMax.fromTo($('.hide-portfolio-left-and-right-right'), 1.3,
            {
                right: 'calc(-50% - 0px)',
                transform: 'translateY(-50%)'
            },
            {
                right: 'calc(-50% - 1000px)',
                transform: 'translateY(-50%)',
                delay: 0.6,
                onComplete: function() {
                    endPortFolioAnim()
                }
            }
        )
    }

    $('.hide-portfolio-content-anim-container-shadow').on('click', function(){
        hidePortFolioAnim()
    })
    $(document).on('click', '.portfolio-content-detail-hide-button', function(){
        hidePortFolioAnim()
    })

    function hidePortFolioAnim(){
        $('.hide-portfolio-content-anim-container-shadow').fadeOut()
        // $('.hide-portfolio-content-anim-container').fadeOut()
        TweenMax.to($('.hide-portfolio-content-anim-container'), 0.5, {alpha:0, display: 'none', onComplete: function(){
            console.log('complete')
            $('.hide-portfolio-content-anim-container').css({
                width: 0,
                height: 0
            })
        }})
    }

    function endPortFolioAnim(){
        $('.hide-portfolio-up-and-down').hide()
        $('.hide-portfolio-left-and-right').hide()
    }
    
    $(document).on('click', '.gallery-container li', function(){
        if($(this).hasClass('over') == false){
            $('.gallery-container li').removeClass('over')
            $(this).addClass('over')
            var value = $(this).html()
            // $('.portfolio-content-detail .portfolio-content-detail-main-view img').hide().attr('src',$(this).attr('src')).fadeIn()
            $('.portfolio-content-detail .portfolio-content-detail-main-view').empty()
            $('.portfolio-content-detail .portfolio-content-detail-main-view').append(value)
        };
        return false;
    }).filter(':eq(0)').click();

    $(document).on('click', '#video', function(){
        var video = $(this).get(0)
        if($(this).hasClass('play')){
            video.pause()
            $(this).removeClass('play')
        } else {
            video.play()
            $(this).addClass('play')
        }
    })


    // $(document).on({
    //     'mouseenter': function(){
    //         console.log('hover')
    //         $(this).css({
    //             transform: 'translateY(0%)'
    //         })
    //     },
    //     'mouseleave': function(){
    //         $(this).css({
    //             transform: 'translateY(50%)'
    //         })
    //     }
    // }, '.gallery-container');
})(jQuery)