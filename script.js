// function generateNumber() {
//     for (let index = 0; index <= 30; index++) {

//         var number = document.getElementById("randomNumber");
//         number.textContent = Math.floor((Math.random() * 100) + 1);

//     }

// }

console.log("Quang Huy - Chào mừng bạn đến giải thưởng quay số ngẫu nhiên")

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var number = document.querySelector("#randomNumber");
let activeRolling = false;
let timer;

function generateRandom() {
    setRightOrder(num1, num2);
    if (activeRolling === false) {
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
    } else {
        activeRolling = false;
        clearInterval(timer);
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
        console.info("true", 1);
    }
}

function randomNum(min, max) {
    // var min = (parseInt(min.value));
    // var max = (parseInt(max.value) + 1);
    // var random = ((Math.floor(Math.random() * (max - min)) + min));
    var random = Math.floor((Math.random() * 100) + 1)
    return random;
}

function setRightOrder(num1, num2) {
    const value1 = num1.value;
    const value2 = num2.value;
    if (value1 > value2) {
        num1.value = value2;
        num2.value = value1;
    }
}

function rollNumber(number1, number2) {
    start = parseInt(number1)
    end = parseInt(number2);
    var time = function(start, end) {
        dif = Math.abs(start - end);
        // console.info("start", start);
        // console.info("end", end);
        // console.info("dif", dif);

        if (dif < 10) {
            return 50;
        } else if (dif < 20) {
            return 40;
        } else if (dif < 50) {
            return 30;
        } else if (dif < 100) {
            return 20;
        } else if (dif < 500) {
            return 5;
        } else if (dif < 1000) {
            return 1;
        }
    }

    if (activeRolling === false) {
        activeRolling = true;
        if (start < end) {
            timer = setInterval(function() {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                } else if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                } else if (dif > 10000) {
                    start += (1000);
                    number.textContent = start;
                } else if (dif > 1000) {
                    start += (100);
                    number.textContent = start;
                } else if (dif > 100) {
                    start += (10);
                    number.textContent = start;
                } else {
                    number.textContent = start++;
                }
                console.info("start", start);
                console.info("textContent", 1);
            }, time(start, end));
        } else if (start > end) {
            timer = setInterval(function() {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                } else if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                } else if (dif > 10000) {
                    start -= (1000);
                    number.textContent = start;
                } else if (dif > 1000) {
                    start -= (100);
                    number.textContent = start;
                } else if (dif > 100) {
                    start -= (10);
                    number.textContent = start;
                } else {
                    number.textContent = start--;
                }
                console.info("textContent", 2);
            }, time(start, end));
        } else {
            number.textContent = start;
            activeRolling = false;
            console.info("textContent", 3);
        }
    }
}

function setMax() {
    if (parseInt(num1.value) > 100) {
        num1.value = 100;
    }
    if (parseInt(num2.value) > 100) {
        num2.value = 100;
    }
}











$("#h1Toggle").on("dblclick", function() {
    $(".ToggleShow").toggle();
});


function Chon3O() {
    $('#chk2O').prop('checked', false);
    if (document.getElementById('chk3O').checked) {
        document.getElementById('dv3O').style.display = 'block';
        document.getElementById('div2O').style.display = 'none';

    } else {}
}


function Chon2O() {
    $('#chk3O').prop('checked', false);
    if (document.getElementById('chk2O').checked) {
        document.getElementById('dv3O').style.display = 'none';
        document.getElementById('div2O').style.display = 'block';
    } else {}
}


function quay() {
    var check2o = document.getElementById('chk2O').checked;
    if (check2o == false) {

        var somin = document.getElementById('true-random-integer-generator-min').value;
        var somax = document.getElementById('true-random-integer-generator-max').value;
        var soluongtoida = document.getElementById('SoLuongToiDa').value;
        if (somin.trim() == '' || somax.trim() == '' || soluongtoida.trim() == '') {
            alert('Hãy nhập đủ số');
        } else {

            var chuoisola = '';

            if (document.getElementById('chk3O').checked) {
                for (var j = parseInt(somin); j <= parseInt(somax); j++) {
                    chuoisola += j + ",";
                }
            } else {}

            var catra = chuoisola.replace(/^\|+,\|+$/g, '');

            catra = catra.substring(0, catra.length - 1);
            var arr = catra.split(',');

            var chay = 0;

            var gioihan = parseInt($('#slTocDo').val() + '0');

            var rd = 0;

            var audio = new Audio('QuaySo1.m4a');
            audio.play();

            var refreshIntervalId = setInterval(function() {

                rd = Math.floor(Math.random() * arr.length);

                if (chay == gioihan) {
                    // $('#loadingnha').html(datas.d);
                    audio.pause();
                    var audio2 = new Audio('fanfare-winner.mp3');
                    audio2.play();

                    clearInterval(refreshIntervalId);
                } else {
                    chay += 1;
                    $('#loadingnha').html(arr[rd]);
                }

                //  $('#loadingnha').html(chay);
            }, 50);

            //setTimeout(function () {
            //    var str = '';

            //    var chuoi = datas.d.toString().split('-');
            //    var chay = 0;
            //    for (var i = 0; i < chuoi.length; i++) {

            //        if (chay == 5) {
            //            chay = 0;
            //            str += chuoi[i];
            //            str += "<br>";
            //        }
            //        else {
            //            str += chuoi[i];
            //            str += "-";
            //        }

            //        chay += 1;
            //    }

            //    $('#loadingnha').html(datas.d);
            //}, 2000);

        }
    } else {
        if (check2o) {
            var chuoi = $('#txtareadayso').val();
            var soluongtoida = document.getElementById('SoLuongToiDa2').value;

            var chuoisola = chuoi;

            var gioihan = parseInt($('#slTocDo2').val() + '0');

            var catra = chuoisola.replace(/^\|+,\|+$/g, '');

            catra = catra.substring(0, catra.length - 1);
            var arr = catra.split(',');

            var chay = parseInt($('#slTocDo2').val());

            var audio = new Audio('QuaySo1.m4a');
            audio.play();

            var rd = 0;
            var refreshIntervalId = setInterval(function() {

                rd = Math.floor(Math.random() * arr.length);

                if (chay == gioihan) {
                    // $('#loadingnha').html(datas.d);
                    audio.pause();
                    var audio2 = new Audio('fanfare-winner.mp3');
                    audio2.play();

                    clearInterval(refreshIntervalId);
                } else {
                    chay += 1;
                    $('#loadingnha').html(arr[rd]);
                }

                //  $('#loadingnha').html(chay);
            }, 50);

            //setTimeout(function () {
            //    $('#loadingnha').html(datas.d);
            //}, 2000);
        }
    }
    //if (datas.d.includes("Bạn")) {
    //    alert(datas.d);
    //    $('#loadingnha').html('Bấm nút quay để bắt đầu');
    //}
    //else {

    //    var str = '';

    //    var chuoi = datas.d.toString().split('-');
    //    var chay = 0;
    //    for (var i = 0; i < chuoi.length; i++) {

    //        if (chay == 5) {
    //            chay = 0;
    //            str += chuoi[i];
    //            str += "<br>";
    //        }
    //        else {
    //            str += chuoi[i];
    //            str += "-";
    //        }

    //        chay += 1;
    //    }

    //    $('#loadingnha').html(datas.d);
    //}
    // $('#loadingnha').html('Bấm nút quay để bắt đầu');



}

var htmlTocDo = "";
for (var i = 1; i <= 20; i++) {

    if (i == 3 || i == 5 || i == 8 || i == 10 || i == 15 || i == 20)
        htmlTocDo += "<option value='" + i + "'>" + i + "</option>";
    //slTocDo
}

$('#slTocDo').html(htmlTocDo);
$('#slTocDo2').html(htmlTocDo);

$('#slTocDo').val(5);
$('#slTocDo2').val(5);
