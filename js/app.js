$(function () {

    let worksSlider = $('[data-slider="slick"]');


    // Add underline to active category ================
    let activeLink;
    let worksNavLink = $(".works__nav-link");

    worksNavLink.each(function () {
        let c = $(this).hasClass("active-link");
        if (c === true) {
            activeLink = $(this);
        }
    });

    worksNavLink.on("click", function (e) {
        e.preventDefault();
        let c = $(this).hasClass("active-link");
        if (c === false) {
            activeLink.removeClass("active-link");
            $(this).addClass("active-link");
            activeLink = $(this)
        }
    });


    // Filter category =================================
    let filter = $("[data-filter]");

    filter.on("click", function (e) {
        e.preventDefault();
        let cat = $(this).data("filter");
        if (cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data("cat");

                if (workCat != cat) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });


    // Modal =========================================
    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function (e) {
        e.preventDefault();
        let modalId = $(this).data("modal");

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick("setPosition");
    });


    modalClose.on("click", function (e) {
        e.preventDefault();
        let modalParent = $(this).parents(".modal");

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);

    });


    $(".modal").on("click", function () {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);

    });


    $(".modal__dialog").on("click", function (e) {
        e.stopPropagation();
    });


    // Slider https://kenwheeler.github.io/slick/
    // =========================================
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    // Button prev
    $(".slickPrev").on("click", function (e) {
        e.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick("slickPrev");
    });

    // Button next
    $(".slickNext").on("click", function (e) {
        e.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick("slickNext");
    });


});