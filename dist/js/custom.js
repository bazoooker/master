// ДЛЯ ПОИСКА

// маска для телефона
// сообщение при добавлении в корзину
// гамбургер-меню анимация кнопки
// карточки списока категорий на главной
// универсальная открывалка: модалки, аккорденоы и пр
// универсальная менялка классов
// закрытие всех фильтры
// табы в дитейле
// скролл до любой секции
// кнопка наверх
// рейндж-слайдер в фильтре
// аккордеоны в фильтре
// анимция чекбокса
// сортировки
// вид отображения товаров
// слайдеры


$(window).scroll(function() {

	
	// появление деко	
    $('.js-fancy-heading').each(function() {
        if( $(this).visible(true) ) {  
            $(this).addClass('lines-added')
        }
    });



    // маска для телефона
    $('.js-mask-tel').mask('+7 (999) 999-99-99', {placeholder:"_"});





    // сообщение
    $('.js-message').click(function(e) {
        e.preventDefault();
        var message = $(this).data('message'); 
        $('.message').addClass('active').html(message);

        setTimeout(function() {
            $('.message').removeClass('active');
        }, 1000);
    });



    // гамбургер-меню анимация кнопки
    $('.js-toggle-hamburger').click(function() {
        $(this).toggleClass('is-active');
    });



    // карточки списока категорий на главной
    $('.js-catalog-unit-hover').mouseenter(function() {
        if($(window).width() > 992) {
        // $('.js-catalog-unit-hover').addClass('disabled');
            $(this).addClass('active');
            console.log('more than 992');
        }
    });
    $('.js-catalog-unit-hover').mouseleave(function() {
        if($(window).width() > 992) {
            // $('.js-catalog-unit-hover').removeClass('disabled');
            $(this).removeClass('active');
            console.log('more than 992');
        }
    });


    // универсальная открывалка: модалки, аккорденоы и пр
    $('.js-opener').click(function(){
        var targetName = $(this).data('target-id');                        
        var elementToOpen = $('#' + targetName);
        var isClosed = $(elementToOpen).hasClass('hidden');
        if(isClosed) {
            $(elementToOpen).removeClass('hidden');
        }else {
            $(elementToOpen).addClass('hidden');
        };
    });
    $('.js-closer').click(function(){
        var targetName = $(this).data('target-id');                        
        var elementToClose = $('#' + targetName);
        $(elementToClose).addClass('hidden');
    });






    // универсальная менялка. Может менять любой класс у любого набора элементов
    // в html передаем три дата-параметра:
    // 1. элемент, который нужно изменить
    // 2. класс, который нужно накинуть/убрать
    // 3. тип дйствия: убрать, добавить, тогл
    $('.js-changer').click(function(target, classToChage, action) {
        var target          = $(this).data('changer-target');                    
        var classToChage    = $(this).data('changer-class');                        
        var action          = $(this).data('changer-action');

        if(action == "remove") {
            $('.' + target).removeClass(classToChage);
        };
        if(action == "add") {
            $('.' + target).addClass(classToChage);
        };
        if(action == "toggle") {
            $('.' + target).toggleClass(classToChage);
        };
    });

    // закрытие всех фильтры
    $('.js-close-all').click(function() {
        $('#filter, #catalog-list-top').addClass('hidden');
    });


    // табы в дитейле
    $('.js-tab').click(function() {
        $('.js-tab').removeClass('active');
        $(this).addClass('active');
        var targetName = $(this).data('target');
        $('.tab-container').hide();
        $('#' + targetName).show();
    });



    // скролл до любой секции
    $('.js-scroller').click(function() { 
    var targetSection = $(this).data('target');
        $("html, body").animate({        
            scrollTop: $('#' + targetSection ).offset().top - 50 }, 900);
            return false;
    });



    // кнопка наверх
    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('visible')
        }
        else {
            $('.to-top').removeClass('visible')
        }
    }; 

    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }; 
    
    $('.js-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton); 

     


    // рейндж-слайдер в фильтре
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        min: 1000,
        max: 50000,
        from: 10000,
        to: 40000,
        hide_min_max: true,
        onChange: function(data) {
            $('#price-range-min').val(data.from);
            $('#price-range-max').val(data.to);
        }
    });

    // аккордеоны в фильтре
    $('.js-filter-accordeon').click(function() {
        var isOpened = $(this).parent().hasClass('active');
        console.log(isOpened);
        if(!isOpened) {
            $(this).parent().addClass('active').find('.filter-accordeon-content').slideDown(200);
        } else {
            $(this).parent().removeClass('active').find('.filter-accordeon-content').slideUp(200);

        }
    });

    $('.js-show-all-filters').click(function() {
        var isClosed = !$(this).hasClass('show-all');

        if (isClosed) {
            $(this).addClass('show-all').find('span').html('Скрыть все');
        } else {
            $(this).removeClass('show-all').find('span').html('Развернуть все');
        }

        $('.js-filter-accordeon').click();
        var allFilterCategories = document.querySelectorAll('.filter-category-item');        
        for(var i=6; i<allFilterCategories.length; i++) {
            $(allFilterCategories[i]).toggleClass('hidden');
        }

        // $('.filter-category-item')
    });

    // анимция чекбокса
    $('.js-anim-checkbox').click(function() {
        var decoElem = $(this).find('.state-deco');
        $(decoElem).addClass('active');
        setTimeout(function() {
            $(decoElem).removeClass('active');
        }, 300);
    });


    // сортировки
    $('.js-sorting-icons-animations').click(function() {
        var az = $(this).hasClass('a-z');
        var za = $(this).hasClass('z-a');

        if(az) {
            $(this).removeClass('a-z').addClass('z-a');
        }
        if(za) {
            $(this).removeClass('z-a').addClass('a-z');
        }
    });

    $('.js-letters-in-name-sorting').click(function() {
        var az = $(this).hasClass('a-z');
        var za = $(this).hasClass('z-a');

        if(az) {
            $('#sorting-name-letters').html('А-Я');
        }
        if(za) {
            $('#sorting-name-letters').html('Я-А');
        }
    });

    $('.js-view-item-animaiton').click(function() {
        var self = $(this);
        $('.view-item').removeClass('active');
        $(self).addClass('active');

        $(self).addClass('theme-anim');
        setTimeout(function() {
            $(self).removeClass('theme-anim');
        }, 300);
    });




    // вид отображения товаров
    $('.js-view-cards').click(function() {
        var cardsModeOn = $('.catalog-list').hasClass('view-cards');

        if (!cardsModeOn) {
            $('.catalog-list').addClass('in-progress');
            setTimeout(function() {
                $('.catalog-list').removeClass('view-list').addClass('view-cards');
            }, 400);
            setTimeout(function() {
                $('.catalog-list').removeClass('in-progress');
            }, 900);
        }
    });

    $('.js-view-list').click(function() {
        var listModeOn = $('.catalog-list').hasClass('view-list');

        if (!listModeOn) {
            $('.catalog-list').addClass('in-progress');
            setTimeout(function() {
                $('.catalog-list').removeClass('view-cards').addClass('view-list');
            }, 400);
            setTimeout(function() {
                $('.catalog-list').removeClass('in-progress');
            }, 900);
        }

    });















    // слайдеры ==============================

    var swiperHero = new Swiper('.js-hero-slider', {
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiperPartners = new Swiper('.js-partners-slider', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            375: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }
    });

     var swiperAbout = new Swiper('.js-swiper-about', {
        // spaceBetween: 20,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

     var swiperSpecs = new Swiper('.js-specs-slider', {
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


});

