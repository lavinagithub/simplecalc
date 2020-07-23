function calcAddValue(){
    let result = 0;
    let val1 = document.getElementById("inlineFormInputName1").value;
    let val2 = document.getElementById("inlineFormInputName2").value;

    //alert(val1);
   // alert(val2);
    //result = Number(val1) + Number(val2);
    result = val1 + val2;
    document.getElementById("displayLabel").innerHTML = result;
}