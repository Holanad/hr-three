const swiperNews = new Swiper(".news-inner", {
    slidesPerView: '3',
    spaceBetween: 20,
    pagination: {
        el: ".news-panel-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news-panel__next",
        prevEl: ".news-panel__prev",
    },
    breakpoints: {
        992: {
            slidesPerView: '3',
        },
        768: {
            slidesPerView: '2',
        },
        320: {
            slidesPerView: '1',
        },
    },
});
const swiperPartners = new Swiper(".work-inner", {
    slidesPerView: '6',
    slidesPerGroup: 6,
    spaceBetween: 20,
    pagination: {
        el: ".work-panel-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".work-panel__next",
        prevEl: ".work-panel__prev",
    },

    grid: {
        rows: 2,
    },
    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '6',
            slidesPerGroup: 6,
            grid: {
                rows: 2,
            },
        },
        768: {
            spaceBetween: 20,
            slidesPerView: '4',
            slidesPerGroup: 4,
            grid: {
                rows: 2,
            },
        },
        576: {
            spaceBetween: 0,
            grid: {
                rows: 4,
            },
            slidesPerView: '3',
            slidesPerGroup: 3,
        },
        320: {
            spaceBetween: 0,
            grid: {
                rows: 6,
            },
            slidesPerView: '2',
            slidesPerGroup: 2,
        },
    },
});
const swiperEducation = new Swiper(".single-gallery-slider", {
    slidesPerView: '2',
    spaceBetween: 20,
    pagination: {
        el: ".single-gallery-panel-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".single-gallery-panel__next",
        prevEl: ".single-gallery-panel__prev",
    },
});
const swiperSaidbar = new Swiper(".single-saidbar-still-slider", {
    slidesPerView: '1',
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".single-saidbar-still-panel-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".single-saidbar-still-panel__next",
        prevEl: ".single-saidbar-still-panel__prev",
    }
});
const swiperMain = new Swiper(".about-main-inner", {
    enabled: false,
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: ".about-main-progressbar .progress",
        type: "progressbar",
    },
    breakpoints: {
      768: {
        enabled: false,
      },
      320: {
        enabled: true,

      },
    },
});
const sliderMain = () => {
    let countSlide = document.querySelectorAll('.about-main-item').length;
    let recallItemCount = document.querySelector('.about-main-progressbar .all');
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
    }
    setInterval(() => {
        if($('.about-main-item:last-child').hasClass('swiper-slide-active')) {
            $('.about-main-progressbar .all').addClass('full')
        } else {
            $('.about-main-progressbar .all').removeClass('full')
        }
       
    }, 100);
};
sliderMain();

const swiperComm = new Swiper(".comm-info-block", {
    enabled: false,
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: ".comm-info-block .progress",
        type: "progressbar",
    },
    breakpoints: {
      1240: {
        enabled: false,
      },
      320: {
        enabled: true,

      },
    },
});
const sliderComm = () => {
    let countSlide = document.querySelectorAll('.comm-info__descr').length;
    let recallItemCount = document.querySelector('.comm-info-block .all');
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
    }
    setInterval(() => {
        if($('.comm-info__descr:last-child').hasClass('swiper-slide-active')) {
            $('.comm-info-block .all').addClass('full')
        } else {
            $('.comm-info-block .all').removeClass('full')
        }
       
    }, 100);
};
sliderComm();

const swiperAccents = new Swiper(".single-accent-block", {
    enabled: false,
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: ".single-accent-progressbar .progress",
        type: "progressbar",
    },
    breakpoints: {
      768: {
        enabled: false,
      },
      320: {
        enabled: true,
      },
    },
});

const sliderAccent = () => {
    let countSlide = document.querySelectorAll('.single-accent-item').length;
    let recallItemCount = document.querySelector('.single-accent-block .all');
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
    }
    setInterval(() => {
        if($('.single-accent-item:last-child').hasClass('swiper-slide-active')) {
            $('.single-accent-block .all').addClass('full')
        } else {
            $('.single-accent-block .all').removeClass('full')
        }
       
    }, 100);
};
sliderAccent();

// jQuery function
$(document).ready(function() {
    // changepass
    function changePassword () {
        $('.main__password').click(function() {
            $('.main-password-change').addClass('open');
        })
    }
    changePassword()
    // teamadd
    function teamAdd () {
        $('.team-invite-btn').click(function() {
            $('.team-invite').addClass('open');
        })
        $('.team-member-btn').click(function() {
            $('.team-member').addClass('open');
        })
    }
    teamAdd()
    // Акордеон в faq
    function accordionFaq() {
        $(".single-program-item-head").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".single-program-item-head").not(this).removeClass("open").next().slideUp();
        });
    };
    accordionFaq();
    // Уведомления
    function notification() {
        $('.header-profile-notification').click(function() {
            $('.header-notification').toggleClass('active');
        })
    };
    notification();
    $(document).mouseup(function (e) {
        var container = $(".header-notification, .header-profile-notification");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header-notification').removeClass('active');
        }
    });



    //hidden input 
    function hiddenField () {
        $('._field').find('.job-checkbox').click(function () {
            setTimeout(() => {
                if($(this).parent().find('.job-checkbox').eq(0).hasClass('active')) {
                    $('._field-hidden').css('display', 'none');
                } else {
                    $('._field-hidden').css('display', 'block');
                }
            }, 50);
        })

    }
    hiddenField()
    //closeModal
    function closeModal() {
        $('.popup-close, .close').click(function() {
        $('html').removeClass('hidden');
        $('.duty').removeClass('open');
    });
    $(document).mouseup(function (e) {
        var container = $(".crop");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        }
        });
    };
    closeModal();

    // OpenModal  
    function openModal() { 
        $('.modal').click(function (e) {
            e.preventDefault();
            $('.popup-consult').addClass('open');
            $('html').addClass('hidden');
        });
    }
    openModal()



    function showMobile () {
        $('.result-item-other-bottom__link').click(function () {
            $(this).parent().addClass('show');
        })
    }
    showMobile()
    //result-form-recall-estimation
    function estimationRecall () {
        $('.result-form-recall-estimation').find('li').click(function () {
            $('.result-form-recall-estimation li').removeClass('active');
            $(this).addClass('active');
            $(this).parent().parent().find('input').val($(this).text().trim())
        })
    }
    estimationRecall();
    //itemMainClick
    function itemMainClick () {
        $('.result-item-info-inner').click(function () {
            $(this).find('.result-item-hide').slideToggle()
        })
    }
    itemMainClick()
    //selects 
    function selectCheckbox() {
        $(document).mouseup(function (e) {
            let container = $(".select-list");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass('active');
            }
        }); 

        $('.select-checkbox').find('.select-title').click(function() {
           // $('.select-list').removeClass('active')
            $(this).parent().toggleClass('focus');
            $(this).parent().find('.select-list').toggleClass('active');
        });
        $('.select-default').find('.select-title').click(function() {
            //$('.select-list').removeClass('active')
            $(this).parent().toggleClass('focus');
            $(this).parent().find('.select-list').toggleClass('active');
        });
        $('.select-accord').find('.select-title').click(function() {
            //$('.select-list').removeClass('active')
            $(this).parent().toggleClass('focus');
            $(this).parent().find('.select-list').toggleClass('active');
        });
        ///////
        /*$('.select-item').click(function() {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                if($(this).parent().find('.select-item').eq(0)) {
                    $(this).parent().find('.select-item').eq(0).removeClass('active')
                }
            } 
            if($(this).parent().parent().hasClass('select-default')) {
                $(this).parent().find('.select-item').removeClass('active');
                $(this).parent().parent().find('.select-title p').text($(this).text().trim());
                $(this).parent().parent().find('.select-list').removeClass('active')
                $(this).addClass('active');
                $(this).removeClass('focus');
            }
        });
        $('.select-item').eq(0).click(function() {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                $(this).parent().find('.select-item').removeClass('active');
                setTimeout(() => {
                    $(this).addClass('active');
                }, 100);
            }
        });*/
        $('.select-item').click(function() {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                $(this).parent().parent().find('.select-title p').text($(this).text().trim());
                $(this).parent().find('.select-item').removeClass('active')
                $(this).parent().removeClass('active')
            } 
            if($(this).parent().parent().hasClass('select-default')) {
                $(this).parent().find('.select-item').removeClass('active');
                $(this).parent().parent().find('.select-title p').text($(this).text().trim());
                $(this).parent().parent().find('.select-list').removeClass('active')
                $(this).addClass('active');
                $(this).removeClass('focus');
            }

        });
        $('.select-item').eq(0).click(function() {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                $(this).parent().find('.select-item').removeClass('active');
                setTimeout(() => {
                    $(this).addClass('active');
                }, 100);
            }
        });
        $('.select-item-checkbox').click(function() {
            console.log($(this).find('p').text())
            if($(this).parent().hasClass('group')) {
                $(this).parent().parent().parent().removeClass('active')
                $(this).parent().parent().parent().parent().find('.select-title p').text($(this).find('p').text().trim())
            }
        })
    }
    selectCheckbox()



    function checkbox() {
        $.each($(".checkbox"), function () {
            if ($(this).find("input").prop("checked") == true) {
                $(this).addClass("active");
                $('.recall-dop-form__btn').addClass("active");
            }
        });
        $(document).on("click", ".checkbox", function () {
            if ($(this).hasClass("active")) {
                $(this).find("input").prop("checked", false);
            } else {
                $(this).find("input").prop("checked", true);
            }
            $(this).toggleClass("active");
            return false;
        });


        $.each($(".select-item"), function () {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                if ($(this).find("input").prop("checked") == true) {
                    $(this).addClass("active");
                }
            }
        });

        $(document).on("click", ".select-item", function () {
            if($(this).parent().parent().hasClass('select-checkbox')) {
                if ($(this).hasClass("active")) {
                    $(this).find("input").prop("checked", false);
                } else {
                    $(this).find("input").prop("checked", true);
                }
                $(this).toggleClass("active");
                return false;
            }
        });
        $('.checkbox').click(function() {
            
            if($(this).parent().hasClass('group')) {
                
                if ($(this).hasClass("active")) {
                    $(this).find("input").prop("checked", false);
                } else {
                    $(this).parent().find('.checkbox input').prop("checked", false);

                    $(this).parent().find('.checkbox').removeClass("active");
                    setTimeout(() => {
                        $(this).find("input").prop("checked", true);
                    }, 50);
                }
                setTimeout(() => {
                    $(this).toggleClass("active");
                })
                return false;
            }
        })
        
    };
    checkbox();

    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            $('.header-data').toggleClass('active');
            if($('.header-burger').hasClass('open')) {
                $('html').addClass('hidden');
                $('body').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
                $('body').removeClass('hidden');
            }
        });
    };
    headerBurger();





    //closeModal
    function closeModal() {
        $('.popup-close').click(function() {
        $('html').removeClass('hidden');
        $('.duty').removeClass('open');
    });
    $(document).mouseup(function (e) {
        var container = $(".crop");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        }
        });
    };
    closeModal();

    // OpenModal  
    function openModal() { 
        $('.modal').click(function (e) {
            e.preventDefault();
            $('.popup').addClass('open');
            $('html').addClass('hidden');
        })
    }
    openModal();
       

    //tabs
   /* function tabs() {
        $('.tabs-btn').click(function() {
          let id = $(this).attr('data-tab'), 
          content = $('.main-search-form[data-tab="'+ id +'"]');
          $('.tabs-btn').removeClass('active');
          $(this).addClass('active');
          $('.main-search-form').removeClass('show');
          content.addClass('show');
        });
    };
    tabs();  */  





    //Валидации сайта
    /*unction formValidate() {
        $('#consultation-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                message: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 10 символов"
                }
            }
        });
        $('#form-sign-in').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 3
                },
            },
            messages: {
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                password: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
            }
        });
        $('#form-sign-up').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                organization: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 3
                },
                passwordRepeat: {
                    required: true,
                    minlength: 3
                },
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                organization: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                password: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
                passwordRepeat: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
            }
        });
        $('#form-forgot-password').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 2
                },
            },
            messages: {
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                }
            }
        });
        $('#popup').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                message: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 10 символов"
                }
            }
        });
    };
    formValidate();*/
});