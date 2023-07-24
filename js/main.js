let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplica = document.getElementById("btnMultiplica")
let btnDivide = document.getElementById("btnDivide")
let btnClear = document.getElementById("btnClear")
let txtResultado = document.getElementById("txtResultado")
let lblDatos = document.getElementById("lblDatos")

    function numero(num) {
        txtResultado.value += num;
    }

    function operacion(oper) {
        txtResultado.value += oper;
    }

    function calcular() {
        try {
            lblDatos.innerText = txtResultado.value; //¿cómo hacer que cuando limpie también limpie este apartado?
            txtResultado.value = eval(txtResultado.value);
        } catch (error) {
            txtResultado.value = "Error";
        }
    }

//¿cómo hacer que cuando introduzcas un nuevo número, detecte que es una operación nueva?
    function clear() {
        txtResultado.value = "";
    }