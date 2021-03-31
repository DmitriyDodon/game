window.onload = function () {

    document.querySelector("#sart_game").onclick = function () {
        document.querySelector("#game").style.visibility = "visible";
        document.querySelector("#sart_game").style.visibility = "hidden";
    }

    let prog_result = game_question();
    let number_of_answers = 0;

    document.querySelector('#button').onclick = function () {
        if(result(prog_result ,document.querySelector('#answer'))){
            prog_result = game_question();
            document.querySelector('#result').className = "alert alert-success "
            document.querySelector("#result").innerHTML = "Your answer is correct.";
            document.querySelector('#answer').value = "";
            number_of_answers++;
            if (number_of_answers == 10 ){
                alert("Game over.");
                document.querySelector("#game").style.visibility = "hidden";
                document.querySelector("#sart_game").style.visibility = "visible";
            }
        }else{
           document.querySelector('#result').className = "alert alert-danger"
           document.querySelector("#result").innerHTML = "Your answer isn't correct.<br>Try again";
           document.querySelector('#answer').value = "";
        }

    }
}

function result(prog_res, unswer) {

    if (!isNaN(unswer.value)) {

        if (prog_res != +unswer.value) {
            document.querySelector('#answer').value = "";
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function game_question() {
    //логика игры заключаеться в том что бы правильно выполнять действия с числами
    let a = Math.round(Math.random() * 20);
    let b = Math.round(Math.random() * 20);
    let prog_res = a + b;
    document.querySelector('#question_text').innerHTML = a + "+" + b ;

    return prog_res;
}
