$(document).keydown(function(e){
    var key = e.which;
    var down_key = [37];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            {'top': '125px',
            'left': '45px',
            'transform': 'rotate(60deg)'}
        );
        $('.leftarm1').css(
            {'top': '150px',
            'left': '40px',
            'transform': 'rotate(-25deg)'}
        );
        $('.rightarm').css(
            {'top': '130px',
            'left': '110px',
            'transform': 'rotate(-30deg)'}
        );
        $('.rightarm1').css(
            {'top': '134px',
            'left': '131px',
            'transform': 'rotate(52deg)'}
        );
        $('.lefthita').css(
            {'top': '190px',
            'left': '70px',
            'transform': 'rotate(180deg)'}
        );
        $('.lefthita1').css(
            {'top': '231px',
            'left': '70px'}
        );
        $('.righthita').css(
            {'top': '190px',
            'left': '100px',
            'transform': 'rotate(180deg)'}
        );
        $('.righthita1').css(
            {'top': '231px',
            'left': '100px',
            'transform': 'rotate(180deg)'}
        );
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var down_key = [38];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            {'transform': 'rotate(40deg)',
            'left': '50px'}
        );
        $('.leftarm1').css(
            {'transform': 'rotate(-60deg)',
            'left': '49px'}
        );
        $('.rightarm').css(
            {'transform': 'rotate(180deg)',
            'left': '78px'}
        );
        $('.rightarm1').css(
            {'transform': 'rotate(90deg)',
            'top': '145px',
            'left': '120px'}
        );
        $('.lefthita').css(
            {'transform': 'rotate(-35deg)',
            'left': '82px',
            'top': '185px'}
        );
        $('.lefthita1').css(
            {'top': '220px',
            'left': '92px'}
        );
        $('.righthita').css(
            {'top': '190px',
            'left': '100px',
            'transform': 'rotate(180deg)'}
        );
        $('.righthita1').css(
            {'top': '231px',
            'left': '100px',
            'transform': 'rotate(180deg)'}
        );
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var down_key = [39];
    if(down_key.includes(key)) {
        $('.leftarm').css(
            {'top': '125px',
            'left': '45px',
            'transform': 'rotate(60deg)'}
        );
        $('.leftarm1').css(
            {'top': '150px',
            'left': '40px',
            'transform': 'rotate(-25deg)'}
        );
        $('.rightarm').css(
            {'top': '130px',
            'left': '110px',
            'transform': 'rotate(-30deg)'}
        );
        $('.rightarm1').css(
            {'top': '134px',
            'left': '131px',
            'transform': 'rotate(52deg)'}
        );
        $('.lefthita').css(
            {'top': '190px',
            'left': '70px',
            'transform': 'rotate(180deg)'}
        );
        $('.lefthita1').css(
            {'top': '231px',
            'left': '70px'}
        );
        $('.righthita').css(
            {'transform': 'rotate(-35deg)',
            'left': '100px',
            'top': '185px'}
        );
        $('.righthita1').css(
            {'top': '218px',
            'left': '111px'}
        );
    }
});
