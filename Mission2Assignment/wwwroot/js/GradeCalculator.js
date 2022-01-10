$("#btnsubmit").click(function () {

    /*calculate the final grade percentage based on weights provided in learning suite*/

    result = (($("#assignments").val() * .55) + ($("#groupprojects").val() * .05) + ($("#quizzes").val() * .10) + ($("#exams").val() * .20) + ($("#intex").val() * .10));

    //determine the letter grade associated with the calculated value

    if (result >= 94) {
        letter = "A"
    } else if (90 <= result && result < 94) {
        letter = "A-"
    }
    else if (87 <= result && result < 90) {
        letter = "B+"
    }
    else if (84 <= result && result < 87) {
        letter = "B"
    }
    else if (80 <= result && result < 84) {
        letter = "B-"
    }
    else if (77 <= result && result < 80) {
        letter = "C+"
    }
    else if (74 <= result && result < 77) {
        letter = "C"
    }
    else if (70 <= result && result < 74) {
        letter = "C-"
    }
    else if (67 <= result && result < 70) {
        letter = "D+"
    }
    else if (64 <= result && result < 67) {
        letter = "D"
    }
    else if (60 <= result && result < 64) {
        letter = "D-"
    }
    else if (result < 60) {
        letter = "E"
    }

    //display the final results in an alert message

    alert("Final Grade: " + result + " (" + letter + ")")
})