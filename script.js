function printOutput() {
    let str1 = window.prompt("Enter the first string");
    let str2 = window.prompt("Enter the Second string");
    let strTemp = str1;
    let strlen1 = str1.length;
    let strlen2 = str2.length;
    for (let i = 0; i < strlen1; i++) {
        for (let j = 0; j < strlen2; j++) {
            if (str1.charAt(i) === str2.charAt(j)) {
                str1 = str1.replace(str1.charAt(i), "");
            }
        }
    }

    for (let i = 0; i < strlen2; i++) {

        for (let j = 0; j < strlen1; j++) {

            if (str2.charAt(i) === strTemp.charAt(j)) {
                str2 = str2.replace(str2.charAt(i), "");
            }
        }
    }
    document.getElementById('output1').innerHTML = str1.toUpperCase();
    document.getElementById('output2').innerHTML = str2.toUpperCase();

    console.log("Output 1 = " + str1.toUpperCase());
    console.log("Output 2 = " + str2.toUpperCase());
}
printOutput();