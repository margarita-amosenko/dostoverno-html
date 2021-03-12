var window_height;
var window_width;

$(function () {
    // Табы
    $(".tablink").click(function (e) {
        e.preventDefault();
        let $this = $(this);
        let tab_target = $this.attr("href");
        $this.parent().find(".tab").removeClass("active");
        $(".tablink").removeClass("active");
        $this.addClass("active");
        $(tab_target).parent().find(".tab").removeClass("active");
        $(tab_target).addClass("active");
    });

    // Добавить в избранное
    $(".add-to-fav").click(function (e) {
        $(this).toggleClass("added");
    });


    $(".secondary-menu__link").click(function (e) {
        e.preventDefault();
        $(".secondary-menu__link").removeClass("active");
        $(this).addClass("active");
    });

    // Плашки на страницах видео.фильтр, мероприятия
    $(".filter-menu__link").click(function (e) {
        e.preventDefault();
        $(".filter-menu__link").removeClass("active");
        $(this).addClass("active");
    });

    // Сортировка в слайдерах на главной
    $(".index-showcase__sort-courses").click(function (e) {
        e.preventDefault();
        $(".index-showcase__sort-courses").removeClass("active");
        $(this).addClass("active");
    });
    $(".index-showcase__sort-podcasts").click(function (e) {
        e.preventDefault();
        $(".index-showcase__sort-podcasts").removeClass("active");
        $(this).addClass("active");
    });

    // Мобильное меню
    $(".mobile-menu-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("opened");
        $(".mobile-menu").slideToggle(300, function () { });
        $('#popupLogin').removeClass("active");
        $("#loginHeaderButton").removeClass("active");
    });

    // Аккордеон на странице видео.фильтр
    $(".filter-accordion__header").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".filter-accordion__body").slideToggle(300);
    });

    // Главная. Всплывающее верхнее окно
    $(".message-content__close").click(function (e) {
        e.preventDefault();
        $(".message").slideUp(200);
    });

    // Плашка на главной
    var counterHeight = $(".fixed-counter").outerHeight() / 2;
    $(".fixed-counter").css({ 'top': 'calc(50% - ' + counterHeight + 'px)' });
    $(".fixed-counter__toggle").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".fixed-counter__list").show();
        var counterHeight = $(".fixed-counter").outerHeight() / 2;
        $(".fixed-counter").css({ 'top': 'calc(50% - ' + counterHeight + 'px)' });
        if ($(this).hasClass("active")) {
        }
        else {
            $(".fixed-counter").hide();
        }
    });

    // Расшифровка
    $(".transcription-button").click(function (e) {
        e.preventDefault();
        $(".transcription-text").toggleClass("active");
    });

    // Pagination
    $(".pagination__link").click(function (e) {
        e.preventDefault();
        $(".pagination__link").removeClass("active");
        $(this).addClass("active");
    });

    // Аккордеон на странице FAQ
    $(".faq-accordion-header").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".faq-accordion-body").slideToggle(300);
    });

    $(".speed-button").click(function (e) {
        e.preventDefault();
        var audio = document.getElementById("audio-player");
        if (audio.playbackRate == 1.25) audio.playbackRate = 1;
        else audio.playbackRate = 1.25;
    });

    $(".dropdown-container").mouseenter(function () {
        let $this = $(this);
        if (window_width > sm_width) {
            $this.find(".dropdown-link").addClass("active");
            $this.find(".menu-dropdown").stop().fadeIn(400);
        }
    });

    $("#loginHeaderButton").click(function (e) {
        e.preventDefault();
        $("#popupLogin").toggleClass("active");
        $(this).toggleClass("active");
        $(".mobile-menu-button").removeClass("opened");
        $(".mobile-menu").hide();
    });

    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('#loginWrapper').length &&
            $('#popupLogin').is(":visible")) {
            $('#popupLogin').removeClass("active");
            $("#loginHeaderButton").removeClass("active");
        }
    });

    $(".password-button").click(function (e) {
        e.preventDefault();
        let $this = $(this);
        $this.toggleClass("active");
        let $target = $this.parent().find(".password-input");
        if ($target.attr("type") == "password") $target.attr("type", "text");
        else $target.attr("type", "password");
    });

    $(".menu-dropdown").mouseleave(function () {
        if (window_width > sm_width) {
            let $this = $(this);
            $this.closest(".dropdown-container").find(".dropdown-link").first().removeClass("active");
            $this.stop().fadeOut(400);
        }
    });

    $(".dropdown-link").click(function () {
        let $this = $(this);
        if (window_width < sm_width) {
            $this.parent().find(".menu-dropdown").stop().slideToggle();
            $this.toggleClass("active");
        }
    });

    $(".link-modal").click(function (e) {
        e.preventDefault();
        let target_id = "#" + $(this).attr("data-modal");
        $(target_id).addClass("active");
    });

    $(".modal-close").click(function (e) {
        e.preventDefault();
        $(this).closest(".modal").removeClass("active");
    });

    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });

    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });

    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });

    $(".mobile-button").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".header").slideToggle();
    });

    $('.autocomplete').autocomplete({
        serviceUrl: 'https://amosenko.ru/tmp/response.json', // ВСТАВЬТЕ СЮДА АДРЕС СВОЕГО СКРИПТА, КОТОРЫЙ ПРИНИМАЕТ ЗАПРОС ЧЕРЕЗ GET (?QUERY=) и ОТДАЕТ В ОТВЕТ JSON
        onSelect: function (suggestion) {
            console.log("Вы выбрали" + suggestion);
        }
    });

    /*$(".mail-mask").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        showMaskOnHover: false,
      });

      $(".phone-mask").inputmask({
        mask: "+7 (999) 999 99 99",
        greedy: false
      });*/

    if ($('.index-slider').length > 0) {
        $('.index-slider').owlCarousel({
            margin: 40,
            items: 4,
            nav: true,
            navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                    margin: 30,
                    nav: false
                },
                480: {
                    items: 2,
                    margin: 30,
                    stagePadding: 0
                },
                768: {
                    items: 3,
                    margin: 40
                },
                960: {
                    items: 4,
                }
            }
        });
    }

    if ($('.authors-slider').length > 0) {
        $('.authors-slider').owlCarousel({
            margin: 0,
            items: 4,
            nav: true,
            navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                    nav: false
                },
                480: {
                    items: 2,
                    margin: 30,
                    stagePadding: 0
                },
                860: {
                    items: 3
                },
                1200: {
                    items: 4,
                }
            }
        });
    }

});


MediaElementPlayer.prototype.buildspeed = function (player, controls, layers, media) {
    var speed =
        $('<div class="speed-button ' + ((player.options.speed) ? 'mejs-speed-high' : 'mejs-speed-normal') + '">' +
            '<span>1.25x</span>' +
            '</div>')
            .appendTo(controls)
            .click(function () {
                player.options.speed = !player.options.speed;
                if (player.options.speed) {
                    speed.removeClass('mejs-speed-normal').addClass('mejs-speed-high');
                } else {
                    speed.removeClass('mejs-speed-high').addClass('mejs-speed-normal');
                }
            });
}

MediaElementPlayer.prototype.builddownload = function (player, controls, layers, media) {
    var download = $('<a class="download-button" download href="' + player.getSrc() + '"></a>').appendTo(controls);
}

$('.dostoverno-audio').mediaelementplayer({
    features: ['playpause', 'speed', 'current', 'progress', 'duration', 'download'],
    alwaysShowControls: true,
});