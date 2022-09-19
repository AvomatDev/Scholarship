// Variable Declaration
let firstName = document.getElementById("firstName");
let emailForm = document.getElementById("emailForm");
let phoneNumber = document.getElementById("phoneNumber");
let gender = document.getElementById("gender");
let countries = document.getElementById("countries");
let lastName = document.getElementById("lastName");
let course = document.getElementById("course");
let dob = document.getElementById("dob");
let description = document.getElementById("description");



//error label
let firstNameError = document.getElementById("firstNameError");
let emailFormError = document.getElementById("emailFormError");
let phoneNumberError = document.getElementById("phoneNumberError");
let genderError = document.getElementById("genderError");
let countriesError = document.getElementById("countriesError");
let lastNameError = document.getElementById("lastNameError");
let courseError = document.getElementById("courseError");
let dobError = document.getElementById("dobError");
let descriptionError = document.getElementById("descriptionError");


//course variable

let english1 = document.getElementById("english1");
let englishError = document.getElementById("englishError");

let mathematics = document.getElementById("mathematics")
let mathemacticsError = document.getElementById("mathematicsError");

let courses3 = document.getElementById("courses3")
let courses3Error = document.getElementById("courses3Error")

let courses4 = document.getElementById("courses4")
let courses4Error = document.getElementById("courses4Error")

let courses5 = document.getElementById("courses5")
let courses5Error = document.getElementById("courses5Error")

let courses6 = document.getElementById("courses6")
let courses6Error = document.getElementById("courses6Error")

let courses7 = document.getElementById("courses7")
let courses7Error = document.getElementById("courses7Error")

let courses8 = document.getElementById("courses8")
let courses8Error = document.getElementById("courses8Error")

let agree = document.getElementById("agree");
let agreeError = document.getElementById("agreeError");


let todayDate;
let todayYear;
let birthYear;
let birthDateStr;
let birthDate;
let age
let ageGrade
let result1
let result2
let result3
let result4
let result5
let result6
let result7
let totalStudentResult
let averageScore
let studentPoint
let stage1
let finalResult 



//Eventlistener


submitbutton.addEventListener("click", function () {
    validateData();
});

function validateData() {

    if (firstName.value == "") {
        firstNameError.innerHTML = "This value is required";
    } else {
        firstNameError = "";
    }


    if (lastName.value == "") {
        lastNameError.innerHTML = "This value is required";
    } else {
        lastNameError = "";
    }


    if (emailForm.value == "") {
        emailFormError.innerHTML = "This value is required";
    } else {
        emailFormError = "";
    }


    if (phoneNumber.value == "") {
        phoneNumberError.innerHTML = "This value is required";
    } else {
        phoneNumberError = "";
    }


    if (gender.value == "") {
        genderError.innerHTML = "This value is required";
    } else {
        genderError = "";
    }

    if (dob.value == "") {
        dobError.innerHTML = "This value is required";
    } else {
        dobError = "";
    }


    if (course.value == "") {
        courseError.innerHTML = "This value is required";
    } else {
        courseError = "";
    }


    if (countries.value == "") {
        countriesError.innerHTML = "This value is required";
    } else {
        countriesError = "";
    }


    if (description.value == "") {
        descriptionError.innerHTML = "This value is required";
    } else {
        descriptionError = "";
    }


    if (english1.value == "") {
        englishError.innerHTML = "This value is required";
    } else {
        englishError = "";
    }


    if (mathematics.value == "") {
        mathemacticsError.innerHTML = "This value is required";
    } else {
        mathemacticsError = "";
    }


    if (courses3.value == "") {
        courses3Error.innerHTML = "This value is required";
    } else {
        courses3Error = "";
    }


    if (courses4.value == "") {
        courses4Error.innerHTML = "This value is required";
    } else {
        courses4Error = "";
    }


    if (courses5.value == "") {
        courses5Error.innerHTML = "This value is required";
    } else {
        courses5Error = "";
    }


    if (courses6.value == "") {
        courses6Error.innerHTML = "This value is required";
    } else {
        courses6Error = "";
    }


    if (courses7.value == "") {
        courses7Error.innerHTML = "This value is required";
    } else {
        courses7Error = "";
    }


    if (courses8.value == "") {
        courses8Error.innerHTML = "This value is required";
    } else {
        courses8Error = "";
    }


    if (agree.value == "") {
        agreeError.innerHTML = "This value is required";
    } else {
        agreeError = "";
    }


    if (firstName.value != "" && lastName.value != "" && emailForm.value != "" && phoneNumber.value != "" && gender.value != "" && dob.value != "" && course.value != "" && countries.value != "" && description.value != "" && english1.value != "" && mathematics.value != "" && courses3 != "" && courses4 != "" && courses5 != "" && courses6 != "") {

        acceptValue()

    }
}


function acceptValue() {

    //age function

    todayDate = new Date();
    todayYear = todayDate.getFullYear();
    console.log(todayYear);

    birthDateStr = document.getElementById("dob").value;
    birthDate = new Date(birthDateStr);
    birthYear = birthDate.getFullYear();
    console.log(birthYear);


    age = todayYear - birthYear
    console.log(age)


    if (age >= 18 && age <= 24) {
        ageGrade = 100;
    }
    else if (age >= 25 && age <= 30) {
        ageGrade = 80;
    }
    else if (age >= 31 && age <= 35) {
        ageGrade = 50;
    }
    else if (age >= 36 && age <= 40) {
        ageGrade = 30;
    } else if (age > 41) {
        ageGrade = 10
    }
    else {
        ageGrade = 0
    }

    console.log(ageGrade)



    // coutries function

    if (countries.value == "africa") {
        studentMark = 50;
    }
    else if (countries.value == "asia") {
        studentMark = 40;

    }
    else if (countries.value == "northAmerica") {
        studentMark = 30;

    }
    else if (countries.value == "southAmerica") {
        studentMark = 20;
    }
    else {
        studentMark = 10
    }
    console.log(studentMark)


    // subject calculation

    result1 = Number(english1.value);
    console.log(result1);

    result2 = Number(mathematics.value);
    console.log(result2);

    result3 = Number(courses3.value)
    console.log(result3);

    result4 = Number(courses4.value)
    console.log(result4);

    result5 = Number(courses5.value)
    console.log(result5);

    result6 = Number(courses6.value)
    console.log(result6);

    result7 = Number(courses7.value)
    console.log(result7)

    result7 = Number(courses8.value)
    console.log(result7)

    totalStudentResult = result1 + result2 + result3 + result4 + result5 + result6 + result7;
    averageScore = totalStudentResult / 8
    averageScore = parseInt(averageScore, 10)
    console.log(averageScore)

    if (averageScore >= 90 && averageScore <= 100) {
        studentPoint = 150;
    }
    else if (averageScore >= 85 && averageScore <= 89) {
        studentPoint = 140;
    }
    else if (averageScore >= 75 && averageScore <= 84) {
        studentPoint = 120;
    }
    else if (averageScore >= 65 && averageScore <= 74) {
        studentPoint = 100;
    }
    else if (averageScore >= 60 && averageScore <= 64) {
        studentPoint = 80;
    }
    else if (averageScore >= 50 && averageScore <= 59) {
        studentPoint = 50;
    }
    else if (averageScore >= 40 && averageScore <= 49) {
        studentPoint = 20;
    }
    else {
        studentPoint = 0;
    }
    console.log(studentPoint)


// final calculation

    finalResult = studentPoint + studentMark + ageGrade;

    if (finalResult >= 180) {

        let myChart = document.getElementById("myChart").getContext("2d");

            let scoreChart = new Chart (myChart, {
                type: 'pie',
                data: {
                labels: ['grade', 'country', 'age'],
                datasets: [{
                label: 'My First dataset',
                data: [studentPoint, studentMark, ageGrade],
                backgroundColor:[
                    'rgb(255, 99, 132, 0.2)',
                    'rgb(54, 162, 235, 0.2)',
                    'rgb(255, 206, 86, 0.2)'
                ],

                borderColor: [
                    'rgb(255, 99, 132, 0.2)',
                    'rgb(54, 162, 235, 0.2)',
                    'rgb(255, 206, 86, 0.2)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y:{
                        beginAtZero: true
                    }
                }
            }
        })

        alert(            
            "Congratulations you have been selected for 2023 Scholarship with total score of " + finalResult)
    }
    else {
        alert("You're not qualified for this scholarship, pls kindly apply another time as your score " + finalResult + " didn't meet up with the requirement") 
    }
    exit()
}

    function exit() {

        firstName.value=""
        emailForm.value=""
        phoneNumber.value=""
        gender.value=""
        countries.value=""
        lastName.value=""
        course.value=""
        dob.value=""
        description.value=""
        dobError.value=""
        english1.value=""
        mathematics.value=""
        courses3.value=""
        courses4.value=""
        courses5.value=""
        courses6.value=""
        courses7.value=""
        courses8.value=""
        agree.checked=""
    }