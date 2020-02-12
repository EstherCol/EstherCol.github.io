$(document).ready(function() {
	(function() {
    var e = document.querySelector(".js-general-slider")
      , t = document.querySelector(".slider")
      , n = document.querySelector(".slider-preview")
      , i = document.querySelector(".slider-preview-nav")
      , s = []
      , r = []
      , o = document.querySelector(".carouselBlock")
      , a = document.querySelector(".slider-preloader-box")
      , l = 0
      , c = ""
      , d = 0;
    if (e && 0 != JSON.parse(e.dataset.slider).length) {
        var u = function() {
            for (var e = document.querySelectorAll(".slider-preview-loadbar"), t = 0; t < e.length; t++) {
                var n = e[t];
                n.classList.contains("is-active") && (n.style.animationDuration = "5s")
            }
        }
          , h = function() {
            var e = document.querySelector(".slider-preview__item")
              , t = document.querySelector(".slider-preview-loadbar");
            document.querySelector(".slider__item").classList.add("is-active"),
            e && (document.querySelector(".slider-preview-row").classList.add("is-current"),
            e.classList.add("is-active"),
            t.classList.add("is-active"),
            u());
            var n = new Event("startAutoPlayAfterLoad");
            document.dispatchEvent(n)
        };
        !function() {
            !function() {
                for (var n = JSON.parse(e.dataset.slider), i = "", s = [], r = 0; r < n.length; r++) {
                    var o = n[r];
                    i = null == o.link ? '\n                    <div class="slider__item" data-item="' + r + '">\n                        <img src="' + o.img + '" alt="" class="slider__image">\n                    </div>' : '\n                    <div class="slider__item" data-item="' + r + '">\n                        <a href="' + o.link + '" class="slider__link">\n                            <img src="' + o.img + '" alt="" class="slider__image">\n                        </a>\n                    </div>',
                    s.push(i)
                }
                t.insertAdjacentHTML("beforeend", s.join(""))
            }();
            !function() {
                for (var i = JSON.parse(e.dataset.slider), o = "", a = 0; a < i.length; a++) {
                    o = '<div class="slider-preview__item" data-item="' + a + '">\n                    <div class="item-gereral-thumbs-wrapp">\n                        <div class="item-gereral-thumbs">\n                            <div class="slider-preview-loadbar"></div>\n                            \n                            <img src="' + i[a].previewImg + '" class="slider-preview__image" alt="" />\n                        </div>\n                    </div>\n                 </div>',
                    s.push(o)
                }
                if (i.length > 1) {
                    for (var l = 0; l < Math.ceil(s.length / 5); l++)
                        r[l] = '<div class="slider-preview-row" data-row="' + l + '">' + s.slice(5 * l, 5 * l + 5).join("") + "</div>";
                    n.insertAdjacentHTML("beforeend", r.join("")),
                    t.classList.add("slider-fadein")
                }
            }();
            var o = function() {
                var e = (document.querySelectorAll(".slider-preview__item"),
                document.querySelectorAll(".slider-preview-row"))
                  , t = document.querySelector(".slider-preview-nav__left")
                  , n = document.querySelector(".slider-preview-nav__right")
                  , i = t.querySelector(".icon-slider-top-left")
                  , s = n.querySelector(".icon-slider-top-right");
                0 === d && (i.classList.add("disabled"),
                s.classList.remove("disabled")),
                d >= 1 && i.classList.remove("disabled"),
                d >= e.length - 1 && s.classList.add("disabled")
            };
            !function() {
                var e = document.querySelectorAll(".slider-preview__item")
                  , t = document.querySelectorAll(".slider-preview-row")
                  , n = document.querySelector(".slider-preview-nav__left")
                  , s = document.querySelector(".slider-preview-nav__right")
                  , r = n.querySelector(".icon-slider-top-left")
                  , o = s.querySelector(".icon-slider-top-right");
                e.length > 5 && i.classList.add("is-active"),
                s.addEventListener("click", function() {
                    if (!o.classList.contains("disabled")) {
                        d++,
                        d >= 1 && r.classList.remove("disabled"),
                        d >= t.length - 1 && o.classList.add("disabled");
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e]
                              , i = Number(t[e].dataset.row);
                            d < t.length && n.classList.remove("is-current"),
                            d === i && n.classList.add("is-current")
                        }
                    }
                }),
                n.addEventListener("click", function() {
                    if (!r.classList.contains("disabled")) {
                        d--,
                        o.classList.contains("disabled") && o.classList.remove("disabled"),
                        0 === d && r.classList.add("disabled");
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e]
                              , i = Number(t[e].dataset.row);
                            d < t.length && n.classList.remove("is-current"),
                            d === i && n.classList.add("is-current")
                        }
                    }
                })
            }();
            var a = function() {
                for (var e = document.querySelectorAll(".slider__item"), t = document.querySelectorAll(".slider-preview__item"), n = document.querySelectorAll(".slider-preview-loadbar"), i = 0; i < e.length; i++)
                    e[i].classList.remove("is-active");
                for (var s = 0; s < t.length; s++)
                    t[s].classList.remove("is-active");
                for (var r = 0; r < n.length; r++)
                    n[r].classList.remove("is-active")
            }
              , h = function(e) {
                for (var t = document.querySelectorAll(".slider__item"), n = e.querySelector(".slider-preview-loadbar"), i = 0; i < t.length; i++) {
                    var s = t[i];
                    e.dataset.item === s.dataset.item && (l = parseInt(e.dataset.item),
                    s.classList.add("is-active"),
                    e.classList.add("is-active"),
                    n.classList.add("is-active"),
                    u())
                }
            };
            !function() {
                for (var e = document.querySelectorAll(".slider-preview__item"), t = 0; t < e.length; t++)
                    !function(t) {
                        var n = e[t];
                        n.addEventListener("click", function() {
                            if (n.classList.contains("is-active"))
                                return !1;
                            a(),
                            h(n),
                            clearInterval(c),
                            f()
                        })
                    }(t)
            }();
            var p = function() {
                for (var e = document.querySelectorAll(".slider-preview-row"), t = 0; t < e.length; t++)
                    e[t].classList.remove("is-current")
            }
              , f = function() {
                var e = document.querySelectorAll(".slider-preview__item")
                  , t = function(t) {
                    for (var n = document.querySelectorAll(".slider__item"), i = 0; i < e.length; i++) {
                        var s = e[i]
                          , r = s.parentNode;
                        if (Number(s.dataset.item) === t) {
                            r.classList.contains("is-current") || (p(),
                            r.classList.add("is-current"),
                            d = Number(r.dataset.row));
                            var o = s.querySelector(".slider-preview-loadbar");
                            a(),
                            s.classList.add("is-active"),
                            o.classList.add("is-active"),
                            u();
                            for (var l = 0; l < n.length; l++) {
                                var c = n[l];
                                Number(c.dataset.item) === t && c.classList.add("is-active")
                            }
                        }
                    }
                };
                c = setInterval(function() {
                    l++,
                    t(l),
                    l < e.length ? t(l) : (l = 0,
                    t(l)),
                    o()
                }, 5e3)
            };
            document.addEventListener("startAutoPlayAfterLoad", f)
        }();
        !function() {
            window.addEventListener("load", function() {
                a.classList.add("slider-fadeout"),
                setTimeout(function() {
                    o.removeChild(a),
                    h()
                }, 1e3)
            })
        }()
    }
})();
$(".igrovoy-slider").owlCarousel({
    items: 6,
    loop: !1,
    margin: 10,
    nav: !0,
    autoplay: !1,
    dots: !1,
    autoplay: true, 
    loop:true,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        410: {
            items: 2
        },
        540: {
            items: 3
        },
        768: {
            items: 4
        },
        1e3: {
            items: 5
        },
        1360: {
            items: 6
        }
    }
}),
$(".ssilki__menu").click(function(){
        $('body').toggleClass('ofh');
        $(this).toggleClass("active");
        $('.shapka').toggleClass("shapka--open");
        $(".ssilki").fadeToggle();
        $('.vipodblock').hide();
    });
 $(".slider-general-mobile").owlCarousel({
        dots: !0,
        video: !0,
        startPosition: 0,
        items: 1,
        loop: !0,
        margin: 10,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        nav: !1
    });
if ((window.matchMedia('(max-width: 767px)').matches)) {
    $('.ssilki__item--drop').addClass('mobile');
    $('.ssilki__item--drop').click(function() {
        $('.vipodblock').slideUp();

        if ($(this).find('.vipodblock').is(':hidden')) {
            $(this).find('.vipodblock').slideDown();
        }
    });
}
$('.faq-questions__title').click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.faq-questions__answer').toggle();
});

var seoTextToggle = {
    elem: {
        toggleTextWrapp: document.querySelector(".infotext-toggle"),
        btn: document.querySelector(".infotext-toggle-btn"),
        contentFadeOut: document.querySelector(".infotext-fade-out")
    },
    checkToggle: function() {
        this.elem.toggleTextWrapp.style.height = "100%",
        this.elem.btn.parentNode.removeChild(this.elem.btn),
        this.elem.contentFadeOut.parentNode.removeChild(this.elem.contentFadeOut)
    },
    btnHandle: function() {
        var e = this;
        this.elem.btn.addEventListener("click", function() {
            e.checkToggle()
        })
    },
    init: function() {
        this.elem.toggleTextWrapp && this.btnHandle()
    }
};
seoTextToggle.init();
	(function() {
	    var e = document.querySelector(".shapka");
	    if (e) {
	        !function() {
	            window.addEventListener("scroll", function() {
	                var t = window.pageYOffset || document.documentElement.scrollTop;
	                t > 250 && e.classList.add("fixed"),
	                t < 1 && e.classList.contains("fixed") && e.classList.remove("fixed")
	            })
	        }()
	    }
	})();
	 $('.custom-select__choosen').click(function() {
    $(this).closest('.custom-select').toggleClass('custom-select--open');
});
});