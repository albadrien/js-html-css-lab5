function useForm() {
    console.log("send");

    // get all the element of the form thanks to their ID
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let province = document.getElementById("province").value;
    let city = document.getElementById("city").value;


    // try to find the good option choose
    let option;
    if (document.getElementById("premium").checked == true) {
        option = "Premium";
    }
    else if (document.getElementById("standard").checked) {
        option = "Standard";
    } else if (document.getElementById("basic").checked) {
        option = "Basic";
    }

    console.log(fname + " " + lname + " " + email + " " + address + " " + province + " " + city + " " + option);
    let fullName = fname + " " + lname
    let output = document.getElementById('output');
    let newP = document.createElement('p');

    newP.innerHTML = "Full Name :  " + fullName + "<br/> Email : " + email + "<br/> Address : " + address + "<br/> City : " + city + ", " + province + "<br/> Membership :" + option;
    output.append(newP);


}

//document.getElementById("calculate").addEventListener("click", myExcelFuns());

function myExcelFuns() {
    console.log("hello");

    let numberStr = document.getElementById('number').value;

    if (!numberStr) {
        console.log("is empty");
        alert("Write a number");
    } else {
        console.log("continue");
        numberStr = numberStr.trim();
        let numberArr = numberStr.split(" ");
        console.log(numberArr);
        let numberArrFinal = new Array();
        numberArr.forEach(value => {
            if ((/[a-zA-Z]/).test(value) != true && value != "") {

                numberArrFinal.push(parseInt(value));

            }
        })
        // console.log(numberArrFinal);

        let result = 0;
        let option;
        if (document.getElementById("autosum").checked == true) {
            numberArrFinal.forEach(value => {
                result += value;
            })
            // console.log(result);
        }
        else if (document.getElementById("average").checked) {
            numberArrFinal.forEach(value => {
                result += value;
            })
            result = result / (numberArrFinal.length)
            // console.log(result);

        } else if (document.getElementById("max").checked) {
            result = Math.max(...numberArrFinal);
            console.log(result)
        } else if (document.getElementById("min").checked) {
            result = Math.min(...numberArrFinal);
            console.log(result);
        }

        document.getElementById('result').innerHTML = "Result : " + result;
    }




}
