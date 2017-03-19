(function($){
    var $win = $(window)
    var scroll = $win.scrollTop()
    var top = 0
    var bottom = 0
    var rotate = 0
    var rightAndLeftScroll = 0
    var delay = 20
    $win.on('load scroll', function () {
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
        if (scroll >= $win.height()/10 && $win.height()/4 >= scroll ) {
            $animSelector.not(':animated').fadeIn('slow')
            $animSelector.css({
                position: 'fixed',
                top: 'calc('+scroll+' + 50%)'
            })
        } else {
            $animSelector.fadeOut('fast')
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
})(jQuery)