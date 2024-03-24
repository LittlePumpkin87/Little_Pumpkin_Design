//////////////////////////////----------------------------CALCULATOR----------------------------//////////////////////////////

"use strict";

document.addEventListener("DOMContentLoaded", function () { // Loads Doc First

    //HTML Elemente

    let form = document.getElementById("calc"),
        out = document.querySelector("#calc output"),
        overwrite = true;

    //Functions

    function extra(type) {
        switch (type) {
            case "√":
                out.textContent = Math.sqrt(result(true)); // Wurzelberechnung
                break;
            case "x²":
                out.textContent = Math.pow(result(true), 2); // Quadrat berechnen
                break;
            case "ln":
                out.textContent = Math.log(result(true)); //Logarithmus berechnen
                break;
        }
        overwrite = true;
    }

    function clear() { //Löschen der Eingabe
        out.textContent = 0;
        overwrite = true;
    }

    function input(c) { //Usereingabe
        if (overwrite) {
            out.textContent = (c == "." ? "0." : c);
        }
        else {
            out.textContent += c;
        }
        overwrite = false;
    }
    function operator(c) { // Eingabe der Operatoren + - / etc.
        out.textContent += " " + c + " ";
        overwrite = false;
    }

    function result(noDisplay) { //Berechnung des Ergebnisses
        let input = out.textContent,
            r = 0; //default = '0'
        input = input.replace(/x/g, "*").replace(/÷/g, "/");
        input = input.replace(/[^0-9. +\-*\/]/g, " ");

        try {
            r = eval(input);
        } catch (e) { // bei fehlerhafter Eingabe wird das Ergebnis auf 0 zurück gesetzt
            r = 0;
        }
        if (noDisplay !== true) { // wenn was im Display steht ersetze das was drin steht mit dem Ergebnis
            out.textContent = r;
            overwrite = true;
        }
        return r; //gibt das Ergebnis als letiable zurück
    }

    if (out) {
        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            return false;
        });

        //Eingabe per Klick

        document.querySelectorAll("#calc button").forEach(function (b) {
            let c = b.textContent; //Mit b.textContent wird der Textknoten der Buttons ausgelesen und in einer Fallunterscheidung verarbeitet.

            switch (c) {
                case "9":
                case "8":
                case "7":
                case "6":
                case "5":
                case "4":
                case "3":
                case "2":
                case "1":
                case "0":
                case ".":
                    b.addEventListener("click", function () {
                        input(c); //falls es sich um einer der oberen Zeichen handelt wird der 'Text' mit function (c) der jeweiligen Buttons der Funktion 'input' weitergegeben
                    });
                    break;
                case "+":
                case "-":
                case "x":
                case "÷":
                    b.addEventListener("click", function () {
                        operator(c); //hier wird die Eingabe der Funktion als Operator weitergegeben
                    });
                    break;

                case "√":
                case "x²":
                case "ln":
                    b.addEventListener("click", function () {
                        extra(c); //mathematische Sonderfunktionen werden hier über die Funktion 'extra' abgerufen
                    });
                    break;

                case "=":
                    b.addEventListener("click", result); //ruft die Funktion 'result' auf
                    break;
                case "C":
                    b.addEventListener("click", clear); //ruft die funktion 'clear' auf
                    break;
            }
        });

        //Tastatureingabe

        document.addEventListener("keypress", function (ev) {

            if ([44, 46].includes(ev.charCode)) { //ASCII Code für ',' und '.' 'charcCode' definiert, dass hier ein ASCII Code gemeint ist
                input("."); // sorgt dafür dass ein Punkt angezeigt wird
            }
            if ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(ev.charCode)) { //ASCII Code für 0-9 checkup für Tasteneingabe
                input(ev.charCode - 48); //subtrahiert 48 von dem ASCII Code um eigentliche Zahl (0-9) anzuzeigen
            }

            if ([42, 43, 45, 47].includes(ev.charCode)) {
                operator(["x", "+", "-", "÷"][
                    [42, 43, 45, 47].indexOf(ev.charCode)  // sucht den korrekten Operator raus
                ]);
            }
            if (ev.charCode == 61) { //ASCII für'='
                result(); //gibt Ergebnis aus
            }
            if ([67, 99].includes(ev.charCode)) { // ASCII für 'C' und 'c'
                clear(); //löscht Eingabe
            }
            if ([76, 108].includes(ev.charCode)) { //ASCII für 'ln'
                extra("ln");
            }
            if ([82, 114].includes(ev.charCode)) {//ASCII für '√'
                extra("√");
            }
            if ([83, 115].includes(ev.charCode)) {//ASCII für 'x²'
                extra("x²");
            }
        });

        document.addEventListener("keydown", function (ev) {
            switch (ev.code) { //die Eigenschaft code hat den internen Namen der Taste gespeichert
                case "Backspace":
                case "Delete":
                    clear();
                    break;

                case "Enter":
                case "NumpadEnter":
                    result();
                    break;
            }
        }
        )
    }
});

