function generateNumber() {

    const min = Math.ceil(document.querySelector(".min-input").value)
    const max = Math.floor(document.querySelector(".max-input").value)


    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const inputResult = document.querySelector(".input-result").value = result;

 inputResult = result

    alert(result)

}



