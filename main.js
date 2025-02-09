document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
"Нажимай на экран \nгде угодно",  
"Эй, ты, котёнок ❤️",  
"Я хочу тебе кое-что сказать...",  
"Попробуй нажать",  
"Нажми еще раз",  
"Давай, не сдавайся, нажимай",  
"Обещаю, это последний раз",  
"Серьезно",  
"Это",  
"Последний",  
"Но это обман, хахаха, давай еще!",  
"Я знаю, ты уже злишься",  
"Хмм",  
"Ладно тогда",  
"Я просто хотел сказать",  
"Я люблю тебя, коть ❤️",  
"Офигеть",  
"Попробуй нажать кнопку внизу 💝"
];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

