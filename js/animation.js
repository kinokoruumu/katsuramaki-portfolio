(function($){
    var $win = $(window)
    var scroll = $win.scrollTop()
    var top = 0
    var bottom = 0
    var rotate = 0
    var rightAndLeftScroll = 0
    var delay = 20
    var showPortFolioFlg = false;

    var windowWidth = $(window).width();
    // var minWidth = 768;
    var minWidth = 997;

    $win.on('load scroll', function () {
        if (!showPortFolioFlg) {
            scroll = $win.scrollTop()
            top = (scroll*3)*-1
            bottom = (scroll*3)
            rotate = delay+Math.floor(scroll*0.2)*-1
            rightAndLeftScroll = scroll - delay
            if (rightAndLeftScroll < 0) {
                rightAndLeftScroll = 0
            }
            right = (rightAndLeftScroll*5)
            left = (rightAndLeftScroll*5)*-1
            upAndDownAnim(top, bottom)
            leftAndRightAnim(left, right, rotate)
            titleAnim(top)

            var $animSelector = $('.main-message')
            var $contentSelector = $('.main-content')
            if (windowWidth >= minWidth) {
                if (scroll >= $win.height()/10 && $win.height()/4 >= scroll ) {
                    $animSelector.not(':animated').fadeIn('slow')
                    $animSelector.css({
                        position: 'fixed',
                        top: 'calc('+scroll+' + 50%)'
                    })
                } else {
                    $animSelector.fadeOut('fast')
                }
            } else {
                if (scroll >= $win.height()/20 && $win.height()/4 >= scroll ) {
                    $animSelector.not(':animated').fadeIn('slow')
                    $animSelector.css({
                        position: 'fixed',
                        top: 'calc('+scroll+' + 50%)'
                    })
                } else {
                    $animSelector.fadeOut('fast')
                }
            }
            

            //チャタリング軽減
            if (scroll <= 0) {
                $animSelector.hide()
            }

            if (scroll >= $win.height()/4) {
                $contentSelector.not(':animated').fadeIn('slow')
                $contentSelector.css({
                    top: $win.height()/2
                })
                $('.anim-container').fadeOut('fast')
            } else {
                $contentSelector.fadeOut('fast')
                $('.anim-container').not(':animated').fadeIn('fast')
            }
        }
    })

    function upAndDownAnim(top, bottom) {
        $('.up-and-down-top').css({
            top: 'calc(-50% + '+top+'px)'
        })
        $('.up-and-down-bottom').css({
            bottom: 'calc(-50% - '+bottom+'px)'
        })
    }

    function leftAndRightAnim(left, right, rotate) {
        $('.left-and-right-left').css({
            left: 'calc(-50% + '+left+'px)',
            transform: 'translateY(-50%) rotate('+rotate+'deg)'
        })
        $('.left-and-right-right').css({
            right: 'calc(-50% - '+right+'px)',
            transform: 'translateY(-50%) rotate('+rotate+'deg)'
        })
    }

    function titleAnim(top) {
        $('.title').css({
            transform: 'translateX(calc(-50% - '+top*4+'px))'
        })
        $('.sub-title').css({
            transform: 'translateX(calc(-50% + '+top*4+'px))'
        })
    }



    

    if (windowWidth >= minWidth) {
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
    }

    $('.portfolio-content').on('click', function(){
        var selector = $(this).find('.hide-portfolio-content')
        showPortFolioAnim()
        $('.portfolio-content-detail').remove()
        $('.hide-portfolio-content-anim-container').append('<div class="portfolio-content-detail"></div>')
        $('.portfolio-content-detail').append(selector.html())
    })

    function showPortFolioAnim(){
        showPortFolioFlg = true;
        if (windowWidth <= minWidth) {
            $('.hide-portfolio-content-anim-container-shadow').fadeIn()
            TweenMax.to($('.hide-portfolio-content-anim-container'), 0.4, {width: '100%',height: '100%'})
        } else {
            $('.hide-portfolio-content-anim-container-shadow').fadeIn()
            TweenMax.to($('.hide-portfolio-content-anim-container'), 0.4, {width: '80%',height: 'auto'})
        }

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
        showPortFolioFlg = false;
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
            $('.portfolio-content-detail .portfolio-content-detail-main-view').empty().hide()
            $('.portfolio-content-detail .portfolio-content-detail-main-view').append(value).fadeIn()
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
})(jQuery)