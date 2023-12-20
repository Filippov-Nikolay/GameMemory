$(document).ready(function() {
    function makeRandomArr(a, b) {
        return Math.random() - 0.5;
    }

    function random() {
        let a = $(".card__item");

        a.sort(makeRandomArr);
        $(".card").html(a);
    }

    random();

    let start = false;

    // START GAME
    $(".nav__btn").click(function (e) {
        if (!start) {
            $(".card__item").addClass("hide");
            $(".nav__btn").text("Finish");
            start = true;
        }
        else {
            if ($(".hide").length == 0)
                $(".win-block").addClass("show");
            else {
                setTimeout(function() {
                    $(".lose-block").addClass("show");
                }, 1300);
                $(".card__item").removeClass("hide");
            }
        }
    });


    // PLAY AGAIN
    $(".block__btn").click(function (e) {
        $(".nav__btn").text("start");
        $(".block-info").removeClass("show");
        random();
        start = false;
    });

    // GAME
    let f = true;
    let s = true;
    let nextClick = true;

    let first = 0;
    let seccond = 0;

    let hideFirst = 0;
    let hideSeccond = 0;

    $(".card__item").click(function (e) {
        if (nextClick && start) {
            if (s && !f && $(this).hasClass("card__item hide")) {
                s = false;
                seccond = $(this).val();
                hideSeccond = $(this);
                nextClick = false;
            }
    
            if (f && $(this).hasClass("card__item hide")) {
                f = false;
                first = $(this).val();
                hideFirst = $(this);
            }

            $(this).removeClass("hide");

            if (!f && !s) {
                f = true;
                s = true;
    
                console.log(hideSeccond.attr("class"));
    
                if (first == seccond) {
                    if ($(".hide").length == 0)
                        setTimeout(function() {
                            $(".win-block").addClass("show");
                        }, 1300)
                    
                    console.log("You win!");
                    nextClick = true;
                } else {
                    console.log("Retry");
    
                    setTimeout(function() {
                        hideFirst.addClass("hide");
                        hideSeccond.addClass("hide");
                        console.log("whan");
                        nextClick = true;
                    }, 1200);
                    console.log("whan1");
                }
            }
        }
    });
})