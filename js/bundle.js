!function (e) {
    var t = {};

    function n(l) {
        if (t[l]) return t[l].exports;
        var o = t[l] = {i: l, l: !1, exports: {}};
        return e[l].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, l) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: l})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (n.r(l), Object.defineProperty(l, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e) for (var o in e) n.d(l, o, function (t) {
            return e[t]
        }.bind(null, o));
        return l
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    n(1), e.exports = n(2)
}, function (e, t) {
    $(function () {
        $(".accordion_item").on("click", function () {
            $(this).closest(".accordion_item").find(".accordion_content").slideToggle();
            $(this).toggleClass("active");
        });
    });

    $(function () {
        $("#price-filter").slider({
            range: !0,
            min: 0,
            max: 140,
            values: [0, 140],
            slide: function (e, t) {
                $("#lower").text(t.values[0]);
                $("#upper").text(t.values[1]);
            }
        });
        $("#lower").text($("#price-filter").slider("values", 0));
        $("#upper").text($("#price-filter").slider("values", 1));
    });

    $(document).ready(function () {
        var e = new Swiper(".mySwiper", {loop: !1, spaceBetween: 20, slidesPerView: 5});
        new Swiper(".mySwiper2", {loop: !1, spaceBetween: 0, thumbs: {swiper: e}, pagination: {el: ".swiper-pagination", clickable: !0}});
        new Swiper(".swiper-industries", {slidesPerView: 4, grid: {rows: 2}, spaceBetween: 30, navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}});
    });

    var n = document.getElementsByClassName("mobile-btn");
    var l = document.getElementsByClassName("header-inner");
    if (n[0]) {
        n[0].onclick = function () {
            l[0].classList.toggle("show");
        };
    }

    var o = document.getElementsByClassName("mobile-filter-btn");
    var i = document.getElementsByClassName("filter-catalog");
    if (o.length > 0 && i.length > 0) {
        o[0].onclick = function () {
            i[0].classList.toggle("show");
        };
    }

    var r = document.getElementsByClassName("filter__drop-title");
    var s = document.getElementsByClassName("filter--box");
    for (var idx = 0; idx < r.length; idx++) {
        r[idx].onclick = function (index) {
            return function () {
                if (s[index]) s[index].classList.toggle("show");
            };
        }(idx);
    }

    var a = document.querySelector(".help-quality");
    var c = document.querySelector(".quality-info");
    if (a && c) {
        a.onmouseover = function () {
            c.style.display = "block";
        };
        a.onmouseout = function () {
            c.style.display = "none";
        };
    }

    var u = document.getElementsByClassName("mobile-filter-btn");
    var m = document.getElementsByClassName("filter-catalog");
    if (u[0] && m[0]) {
        u[0].onclick = function () {
            m[0].classList.toggle("show");
        };
    }

    var d = document.getElementById("file");
    if (d) {
        d.addEventListener("change", function (e) {
            var files = e.target.files;
            for (var n = 0; n < files.length; n++) {
                var t = files[n];
                if (!t.type.match("image.*")) {
                    alert("Image only please....");
                    continue;
                }
                var l = new FileReader();
                l.onload = (function (file) {
                    return function (evt) {
                        var span = document.createElement("span");
                        span.innerHTML = ['<img class="thumb" title="', escape(file.name), '" src="', evt.target.result, '" />'].join("");
                        var output = document.getElementById("output");
                        if (output) output.insertBefore(span, null);
                    };
                })(t);
                l.readAsDataURL(t);
            }
        }, !1);
    }

    var f = 0;

    function p(e) {
        var t = document.getElementsByClassName("mob-step");
        if (!t.length) return;

        for (var i = 0; i < t.length; i++) {
            t[i].style.display = "none";
        }

        if (t[e]) t[e].style.display = "block";

        var prevBtn = document.getElementById("prevBtn");
        var nextBtn = document.getElementById("nextBtn");

        if (prevBtn) prevBtn.style.display = e == 0 ? "none" : "inline";

        if (nextBtn) {
            nextBtn.innerHTML = e == t.length - 1 ? "Отправить" : "Далее";
        }
    }

    p(f);
}, function (e, t, n) {
}]);