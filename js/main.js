$(document).ready(function() {
    let start = false;

    function makeRandomArr(a, b) {
        return Math.random() - 0.5;
    }
    function random() {
        let a = $(".card__item");
    
        a.sort(makeRandomArr);
        $(".card").html(a);
    }
    
    function startGameOrFinish() {
        if (!start) {
            $(".card__item").addClass("hide");
            $(".nav__btn").text("Finish");
            start = true;
        }
        else {
            setTimeout(function() {
                $(".lose-block").addClass("show");
                $(".card__item").removeClass("hide");
            }, 1300);
        }
    }

    function playAgain() {
        $(".nav__btn").text("start");
        $(".block-info").removeClass("show");
        random();
        start = false;
    }

    // GAME
    let f = true;
    let s = true;
    let nextClick = true;

    let first = 0;
    let seccond = 0;

    let hideFirst = 0;
    let hideSeccond = 0;

    function game() {
        console.log(nextClick, start);

        $(".card__item").click(function (e) {
            console.log(start);
            console.log(nextClick);
            if (nextClick && start) {
                console.log("START");

                if (s && !f && $(this).hasClass("card__item hide")) {
                    s = false;
                    seccond = $(this).val();
                    hideSeccond = $(this);
                    nextClick = false;
                }

                console.log(nextClick, start);

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
                        if ($(".hide").length == 0) {
                            setTimeout(function() {
                                $(".win-block").addClass("show");
                            }, 1300);
                        }
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
    }

    random();

    // START GAME
    $(".nav__btn").click(function (e) {
        startGameOrFinish();
        game();
    });

    // PLAY AGAIN
    $(".block__btn").click(function (e) {
        playAgain();
        game();
    });
})