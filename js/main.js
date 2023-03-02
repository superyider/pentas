$(function () {
    
    //判斷行動裝置
    var isMobile = false;
    var currentSet;
    var anidalay = 0;

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    //動態時間軸
    if(!isMobile){
        var section1    = new TimelineMax({delay:anidalay,paused:true});
        var section2    = new TimelineMax({delay:anidalay,paused:true});
        var section3    = new TimelineMax({delay:anidalay,paused:true});
        var section3_2  = new TimelineMax({delay:.6,paused:true});
        var section4    = new TimelineMax({delay:.6,paused:true});
        var section5    = new TimelineMax({delay:.6,paused:true});
        var section6    = new TimelineMax({delay:anidalay,paused:true});
        var section7    = new TimelineMax({delay:anidalay,paused:true});
        var section8    = new TimelineMax({delay:.5,paused:true});

        var box1        = new TimelineMax({delay:anidalay,paused:true});
        var box2        = new TimelineMax({delay:anidalay,paused:true});
        var box3        = new TimelineMax({delay:anidalay,paused:true});
        var box4        = new TimelineMax({delay:anidalay,paused:true});
        var box5        = new TimelineMax({delay:anidalay,paused:true});

    }

    //動畫
    function init() {
        $('a').css('cursor','pointer');
        if(!isMobile){

            //左邊葉子動態
            TweenMax.to($('.side-1 #obj-1'),1,{x:0,rotation:-8, transformOrigin:"left 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-1 #obj-2'),1,{x:0,rotation:6, transformOrigin:"left 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-1 #obj-3'),1,{x:0,rotation:-2, transformOrigin:"left 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})

            //右邊葉子動態
            TweenMax.to($('.side-2 #obj-1'),1.5,{x:0,rotation:-2, transformOrigin:"right 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-2 #obj-2'),1.5,{x:0,rotation:3, transformOrigin:"right 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})

            //左邊葉子動態-2
            TweenMax.to($('.side-3 #obj-1'),1.5,{x:0,rotation:-2, transformOrigin:"left 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-3 #obj-2'),1.5,{x:0,rotation:3, transformOrigin:"left 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})

            //右邊葉子動態-2
            TweenMax.to($('.side-4 #obj-1'),1,{x:0,rotation:-8, transformOrigin:"right 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-4 #obj-2'),1,{x:0,rotation:6, transformOrigin:"right 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('.side-4 #obj-3'),1,{x:0,rotation:-2, transformOrigin:"right 50%",ease:Linear.easeNone,repeat:-1,yoyo:true})

            //吹泡泡人
            TweenMax.to($('#section-3-2 .side-3'),1,{y:-10,ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('#section-3-2 .side-3'),1,{y:0,ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('#section-3-2 .side-3'),1,{y:10,ease:Linear.easeNone,repeat:-1,yoyo:true})

            //吹泡泡人
            TweenMax.to($('#section-4 .side-3'),1,{y:-10,ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('#section-4 .side-3'),1,{y:0,ease:Linear.easeNone,repeat:-1,yoyo:true})
            TweenMax.to($('#section-4 .side-3'),1,{y:10,ease:Linear.easeNone,repeat:-1,yoyo:true})

            box1.from($('#section-6 .box-1'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
            box2.from($('#section-6 .box-2'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
            box3.from($('#section-6 .box-3'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
            box4.from($('#section-6 .box-4'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
            box5.from($('#section-6 .box-5'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })

            section1
                .from($('#section-1'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                .from($('#section-1 .main-pic'), 2, { y:100 , opacity: 0, ease: Circ.easeOut },'-=0.8')
                .from($('#section-1 .top-box'), 1, { y:-100 , opacity: 0, ease: Bounce.easeOut },'-=1.5')
            
            section2
                .from($('#section-2'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                .from($('#section-2 .main-pic'), 2, { y:100 , opacity: 0, ease: Circ.easeOut },'-=0.8')
                
            section3
                .from($('#section-3 .main-title'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                s3_items = $('#section-3 .slick-box .item');
                $.each(s3_items,function(){
                    section3.from($(this),1.5,{ y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')
                });
                section3.from($('#section-3 .btn-more-1'), 1, { y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')

            section3_2
                .from($('#section-3-2 .main-title'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                s3_2_items = $('#section-3-2 .slick-box .item-full');
                $.each(s3_2_items,function(){
                    section3_2.from($(this),1.5,{ y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')
                });
                section3_2.from($('#section-3-2 .btn-more-1'), 1, { y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2') 

            section4
                .from($('#section-4 .main-title'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                s4_items = $('#section-4 .slick-box .item');
                $.each(s4_items,function(){
                    section4.from($(this),1.5,{ y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')
                });
                section4.from($('#section-4 .btn-more-1'), 1, { y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2') 
                
            section5
                .from($('#section-5 .main-title'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                s5_items = $('#section-5 .slick-box .item');
                $.each(s5_items,function(){
                    section5.from($(this),1.5,{ y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')
                });
                section5.from($('#section-5 .btn-more-1'), 1, { y:100 , opacity: 0, ease: Circ.easeOut },'-=1.2')

            section7
                .from($('#section-7 .main-title'), 1, { y:50 , opacity: 0, ease: Circ.easeOut })
                .from($('#section-7 .main-discription'), 1, { y:50 , opacity: 0, ease: Circ.easeOut },'-=.8')
                .from($('#section-7 .main-pic'), 2, { y:100 , opacity: 0, ease: Circ.easeOut },'-=1.5');

            section8
                .from($('#section-8 .contact-1'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut })
                .from($('#section-8 .contact-2'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .contact-3'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .contact-4'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .contact-5'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .contact-6'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .contact-7'), 2, { scale:1.1, opacity: 0, ease: Circ.easeOut },'-=1.8')
                .from($('#section-8 .center-box'), 4, {scale:1, opacity: 0, ease:  Circ.easeOut },'-=1.8')
        }
    }

    //scrollEnd
    var rtime;
	var timeout = false;
    var delta = 2000;
	$(window).bind('scroll',function(){
        $('.notice-arrow').fadeOut('500');
		rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(scrollend, delta);
	    }
	});

	function scrollend(){
		if (new Date() - rtime < delta) {
            setTimeout(scrollend, delta);
            console.log(currentSet);
	    } else {
            timeout = false;
            setTimeout(scrollend, delta);
            if(currentSet!='sec8'){
                $('.notice-arrow').fadeIn('slow');
            }
	    }          
    }
    
    //resizeEnd
    var rtime2;
	var timeout2 = false;
    var delta2 = 500;
	$(window).bind('resize',function(){
		rtime2 = new Date();
	    if (timeout2 === false) {
	        timeout2 = true;
	        setTimeout(resizend, delta2);
	    }
	});

	function resizend(){
		if (new Date() - rtime2 < delta2) {
            if($(window).width()<991){
                console.log('mobile')
                $('.menu').hide();
            }else{
                console.log('web')
                $('.menu').show().css('display','flex');
            }
            /*
            if($(window).width()>991){
                $('#section-7 .slick-box').slick(
                    {
                        slidesToShow:3,
                        slidesToScroll: 3,
                        dots: true,
                        infinite: true,
                        speed: 500,
                        arrows:true,
                        fade: false,
                        autoplay:true,
                        autoplaySpeed: 3000,
                    }
                );
            }else{
                $('#section-7 .slick-box')[0].slick.unslick();
            }
            */
            setTimeout(resizend, delta2);
	    } else {
            timeout = false;
            setTimeout(resizend, delta2);  
	    }          
    }
    
    function scrollspy(){
        var sec1 = $('#section-1').offset().top;
        var sec2 = $('#section-2').offset().top;
        var sec3 = $('#section-3').offset().top;
        var sec3_2 = $('#section-3-2').offset().top;
        var sec4 = $('#section-4').offset().top;
        var sec5 = $('#section-5').offset().top;
        var sec6 = $('#section-6').offset().top;
        var box_1 = $('.box-1').offset().top;
        var box_2 = $('.box-2').offset().top;
        var box_3 = $('.box-3').offset().top;
        var box_4 = $('.box-4').offset().top;
        var box_5 = $('.box-5').offset().top;
        var sec7 = $('#section-7').offset().top;
        var sec8 = $('#section-8').offset().top;

        var scrollTop = $(this).scrollTop();
        var showNum = $(window).height()/2;
        $(".menu li").removeClass('active');

        if (scrollTop >= (sec1 - showNum) && scrollTop < (sec2 - showNum)) {
            $(".menu .m1").addClass('active').removeClass('over');
            if (!isMobile){
                section1.play();
            }
            currentSet = 'sec1';
        }

        if (scrollTop >= (sec2 - showNum) && scrollTop < (sec3 - showNum)) {
            $(".menu .m2").addClass('active').removeClass('over');
            if (!isMobile){
                section2.play();
            }
            currentSet = 'sec2';
        }

        if (scrollTop >= (sec3 - showNum) && scrollTop < (sec3_2 - showNum)) {
            $(".menu .m3").addClass('active').removeClass('over');
            if (!isMobile){
                section3.play();
            }
            currentSet = 'sec3';
        }

        if (scrollTop >= (sec3_2 - showNum) && scrollTop < (sec4 - showNum)) {
            $(".menu .m3_2").addClass('active').removeClass('over');
            if (!isMobile){
                section3_2.play();
            }
            currentSet = 'sec3_2';
        }

        if (scrollTop >= (sec4 - showNum) && scrollTop < (sec5 - showNum)) {
            $(".menu .m4").addClass('active').removeClass('over');
            if (!isMobile){
                section4.play();
            }
            currentSet = 'sec4';
        }

        if (scrollTop >= (sec5 - showNum) && scrollTop < (sec6 - showNum)) {
            $(".menu .m5").addClass('active').removeClass('over');
            if (!isMobile){
                section5.play();
            }
            currentSet = 'sec5';
        }

        if (scrollTop >= (sec6 - showNum) && scrollTop < (sec7 - showNum)) {
            $(".menu .m6").addClass('active').removeClass('over');
            if (!isMobile){
                //section6.play();
                if (scrollTop >= (box_1 - showNum) && scrollTop < (box_2 - showNum)) {
                    box1.play();
                    currentSet = 'sec6-1';
                }
                if (scrollTop >= (box_2 - showNum) && scrollTop < (box_3 - showNum)) {
                    box2.play();
                    currentSet = 'sec6-2';
                }
                if (scrollTop >= (box_3 - showNum) && scrollTop < (box_4 - showNum)) {
                    box3.play();
                    currentSet = 'sec6-3';
                }
                if (scrollTop >= (box_4 - showNum) && scrollTop < (box_5 - showNum)) {
                    box4.play();
                    currentSet = 'sec6-4';
                }
                if (scrollTop >= (box_5 - showNum)) {
                    box5.play();
                    currentSet = 'sec6-5';
                }
            }
        }

        if (scrollTop >= (sec7 - showNum) && scrollTop < (sec8 - showNum)) {
            $(".menu .m7").addClass('active').removeClass('over');
            if (!isMobile){
                section7.play();
            }
            currentSet = 'sec7';
        }

        if (scrollTop >= (sec8 - showNum)) {
            $(".menu .m8").addClass('active').removeClass('over');
            if (!isMobile){
                section8.play();
            }
            currentSet = 'sec8';
        }
        
        var last = $("body").height() - $(window).height() - 90;
        var posi = last - scrollTop;
        if (scrollTop >= last) {
            //$('.videobg').css({ bottom: (-posi + 'px') });
            $(".menu .m8").addClass('active').removeClass('over');
            if (!isMobile){
                section8.play();
            }
            currentSet = 'sec8';
        } else {
            //$('.videobg').css({ bottom: '0' });
        }
    }
    scrollspy();

    //捲動導航
    $(window).bind('load scroll', function () {   
        scrollspy()
    });

    function scrollTosec() {
        $('.menu li a[href^="#"]').click(function (e) {
            e.preventDefault();
            this.anidalay = 1;
            var target = $(this).attr('href'),
                stop = $(target).offset().top + 1,
                delay = 500;
            $('html, body').animate({ scrollTop: stop + 'px' }, delay, 'easeOutCirc');
        });
    }
    scrollTosec();

    var hash = window.location.hash.substring(1);
    if(hash){
        var target = $('#'+hash).offset().top;
        $('html, body').animate({ scrollTop: target+'px' }, 400, 'easeOutCirc');
        switch(hash){
            case 'section-1':
                $(".menu li").removeClass('active');
                $(".menu .m1").addClass('active').removeClass('over');
                if (!isMobile){
                    section1.play();
                }
                currentSet = 'sec1';
                break;
            case 'section-2':
                $(".menu li").removeClass('active');
                $(".menu .m2").addClass('active').removeClass('over');
                if (!isMobile){
                    section2.play();
                }
                currentSet = 'sec2';
                break;
            case 'section-3':
                $(".menu li").removeClass('active');
                $(".menu .m3").addClass('active').removeClass('over');
                if (!isMobile){
                    section3.play();
                }
                currentSet = 'sec3';
                break;
            case 'section-3-2':
                    $(".menu li").removeClass('active');
                    $(".menu .m3_2").addClass('active').removeClass('over');
                    if (!isMobile){
                        section3_2.play();
                    }
                    currentSet = 'sec3';
                    break;
            case 'section-4':
                $(".menu li").removeClass('active');
                $(".menu .m4").addClass('active').removeClass('over');
                if (!isMobile){
                    section4.play();
                }
                currentSet = 'sec4';
                break;
            case 'section-5':
                $(".menu li").removeClass('active');
                $(".menu .m5").addClass('active').removeClass('over');
                if (!isMobile){
                    section5.play();
                }
                currentSet = 'sec5';
                break;
            case 'section-6':
                $(".menu li").removeClass('active');
                $(".menu .m6").addClass('active').removeClass('over');
                if (!isMobile){
                    section6.play();
                }
                currentSet = 'sec6';
                break;
            case 'section-7':
                $(".menu li").removeClass('active');
                $(".menu .m7").addClass('active').removeClass('over');
                if (!isMobile){
                    section7.play();
                }
                currentSet = 'sec7';
                break;
            case 'section-8':
                $(".menu li").removeClass('active');
                $(".menu .m8").addClass('active').removeClass('over');
                if (!isMobile){
                    section8.play();
                }
                currentSet = 'sec8';
                break;
        }
    }else{
        console.log("no")
    }

    //menu
    $('.menu_btn').on('click', function () {
        $('.menu').fadeIn('slow',function(){
            $('.menu').removeClass('hide').addClass('open');
        })
    });
    $('.close_btn').on('click', function () {
        $('.menu').fadeOut('slow',function(){
            $('.menu').removeClass('open').addClass('hide');
        })
    });
    $('.menu li a').on('click',function(){
        if($(window).width()<991){
            $('.menu').fadeOut('slow',function(){
                $('.menu').removeClass('open').addClass('hide');
            })
        }
    });

    //toNext
    $('.toNext').click(function(){
        if(currentSet == 'sec1'){
            $(".menu li.m2 a").click();
        }
        if(currentSet == 'sec2'){
            $(".menu li.m3 a").click();
        }
        if(currentSet == 'sec3'){
            $(".menu li.m4 a").click();
        }
        if(currentSet == 'sec4'){
            $(".menu li.m5 a").click();
        }
        if(currentSet == 'sec5'){
            $(".menu li.m6 a").click();
        }
        if(currentSet == 'sec6-1'){
            $('html, body').animate({ scrollTop: $('.box-2').offset().top - 20 + 'px' }, 400, 'easeOutCirc');
        }
        if(currentSet == 'sec6-2'){
            $('html, body').animate({ scrollTop: $('.box-3').offset().top - 50 + 'px' }, 400, 'easeOutCirc');
        }
        if(currentSet == 'sec6-3'){
            $('html, body').animate({ scrollTop: $('.box-4').offset().top - 60 + 'px' }, 400, 'easeOutCirc');
        }
        if(currentSet == 'sec6-4'){
            $('html, body').animate({ scrollTop: $('.box-5').offset().top - 80 + 'px' }, 400, 'easeOutCirc');
        }
        if(currentSet == 'sec6-5'){
            $(".menu li.m7 a").click();
        }
        if(currentSet == 'sec7'){
            $(".menu li.m8 a").click();
        }
    });
   
    /*--------------------- 圖片預載 ---------------------*/
    function setImgLoading(fn,imgAry) {
        //加入背景圖片
        let imgs = imgAry;

        //所有圖片
        for (let i = 0; i < $('img').length; i++) {
            let imgUrl = $('img').eq(i).attr('src');
            imgs.push(imgUrl);
        }

        let count = { total: imgs.length, num: 0 };

        for (let i = 0; i < imgs.length; i++) {
            let imgUrl = imgs[i];
            let img = new Image();
            img.src = imgUrl;
            img.onload = function () {
                count.num += 1;
            }
        }

        let loadImgProgress = setInterval(function () {
            
            let percent = Math.floor(count.num / (count.total / 100));
            console.log(percent)
            $('.preload .txt').html('LOADING:' + percent + '%');
            if (percent >= 0) {
                $('.preload .txt').html('LOADING:100%');
                clearInterval(loadImgProgress);
                $('.preload').fadeOut('fast');
                fn();
            }
        }, '500');
    }
    
    setImgLoading(init,[]);

    //滾動視差背景
    if($(window).width()>991){
        $('#section-2').parallax({
            imageSrc: './images/bg2.jpg',
            naturalWidth: 100
        });
        $('#section-4').parallax({
            imageSrc: './images/bg4.jpg',
            naturalWidth: 100
        });
        $('#section-5').parallax({
            imageSrc: './images/bg5.jpg',
            naturalWidth: 100
        });
        $('#section-7').parallax({
            imageSrc: './images/bg7.jpg',
            naturalWidth: 100
        });
    }

    $(".lightBox").mCustomScrollbar({theme:"dark"});

    //slick 輪播
    
    
    $('#section-7 .slick-box').slick(
        {
            slidesToShow:3,
            slidesToScroll: 3,
            dots: true,
            infinite: true,
            speed: 500,
            arrows:true,
            fade: false,
            autoplay:false,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                      slidesToShow:1,
                      slidesToScroll: 1,
                      arrows:false
                  }
                }
            ]
        }
    );

    $('.box.grap .slick-box').slick(
        {
            slidesToShow:1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            speed: 500,
            arrows:true,
            fade: false,
            autoplay:false,
            autoplaySpeed: 3000
        }
    );
});