"use strict";
(self["webpackChunklesson47_webpack"] = self["webpackChunklesson47_webpack"] || []).push([[57],{

/***/ 173
() {



// ─── ПЕРЕМЕННЫЕ
let current = "0"; // число на экране прямо сейчас
let previous = null; // число до того, как нажали операцию
let operation = null; // выбранная операция
let shouldReset = false; // true = следующая цифра начнёт новое число // false = цифра должна дописаться к текущему числу

// ─── ЭКРАН
const display = document.getElementById("display");
 
// Функция, которая обновляет текст на экране
function updateDisplay() {
    display.textContent = current;

    const length = current.length;

    if (length > 9) {
        display.style.fontSize = "32px";
    } else if (length > 6) {
        display.style.fontSize = "48px";
    } else {
        display.style.fontSize = "64px";
    }
}

// ─── ФУНКЦИИ
// ВВОД ЦИФР или запятой
function pressDigit(value) {
    // Если только что нажали операцию — начинаем новое число
    if (shouldReset) {

        if (value === ".") {
            current = "0.";
        } else {
            current = value;
        }

        shouldReset = false;
        updateDisplay();
        return;
    }

    // Нельзя поставить вторую точку
    if (value === "." && current.includes(".")) return;

    // Если на экране 0 и нажали точку
    if (value === "." && current === "0") {
        current = "0.";
        updateDisplay();
        return;
    }

    // Обычный ввод цифр
    if (current === "0") {
        current = value;
    } else {
        current = current + value;
    }

    updateDisplay();
}

// Нажата кнопка AC — сбрасываем всё до заводских настроек
function pressClear() {
    current = "0";
    previous = null;
    operation = null;
    shouldReset = false;
    updateDisplay();
}

// +/- — меняем знак числа
function pressSign() {
    current = String(-parseFloat(current)); // parseFloat(current) - возвращает число, -  знак, меняет число (было -25, будет -(-25), значит +25) и обратно в строку
    updateDisplay();
}
 
// Нажата кнопка % — делим на 100
function pressPercent() {
    current = String(parseFloat(current)/100);
    updateDisplay();
}
 
// Пользователь нажал одну из операций (+, -, ×, ÷)
function pressOperation(op) {
    previous = parseFloat(current); // число на экране
    operation = op; // (+, -, ×, ÷)
    shouldReset = true; // после операции вводим новое число
}

// Результат
function pressEquals() {
    // если ничего не нажато или 0, то... ничего
    if (!operation || previous === null) return;

    // выражение:
    const a = previous;
    const b = parseFloat(current);
    let result; // здесь пока нет значения, потому что нет никаких расчетов
    // console.log(result);

    if (operation === "+") result = a + b;
    if (operation === "-") result = a - b;
    if (operation === "*") result = a * b;
    if (operation === "/") {
    if (b === 0) {
        current = "Error";
        updateDisplay();
        operation = null;
        previous = null;
        shouldReset = true;
        return;
    }
    result = a / b;
}

    // Округляем до 10 знаков
    current = String(
        parseFloat(
            result.toFixed(10)
        )
    );

    operation = null;
    previous = null;
    shouldReset = true;

    updateDisplay();
}

// ─── addEventListener
// На каждую кнопку свой обработчик клика
 
document.getElementById('btn-clear').addEventListener('click', pressClear);
 
document.getElementById('btn-sign').addEventListener('click', pressSign);
 
document.getElementById('btn-percent').addEventListener('click', pressPercent);
 
document.getElementById('btn-divide').addEventListener('click', function() {
    pressOperation('/');
});
 
document.getElementById('btn-7').addEventListener('click', function() {
    pressDigit('7');
});
 
document.getElementById('btn-8').addEventListener('click', function() {
    pressDigit('8');
});
 
document.getElementById('btn-9').addEventListener('click', function() {
    pressDigit('9');
});
 
document.getElementById('btn-multiply').addEventListener('click', function() {
    pressOperation('*');
});
 
document.getElementById('btn-4').addEventListener('click', function() {
    pressDigit('4');
});
 
document.getElementById('btn-5').addEventListener('click', function() {
    pressDigit('5');
});
 
document.getElementById('btn-6').addEventListener('click', function() {
    pressDigit('6');
});
 
document.getElementById('btn-minus').addEventListener('click', function() {
    pressOperation('-');
});
 
document.getElementById('btn-1').addEventListener('click', function() {
    pressDigit('1');
});
 
document.getElementById('btn-2').addEventListener('click', function() {
    pressDigit('2');
});
 
document.getElementById('btn-3').addEventListener('click', function() {
    pressDigit('3');
});
 
document.getElementById('btn-plus').addEventListener('click', function() {
    pressOperation('+');
});
 
document.getElementById('btn-0').addEventListener('click', function() {
    pressDigit('0');
});
 
document.getElementById('btn-dot').addEventListener('click', function() {
    pressDigit('.');
});
 
document.getElementById('btn-equals').addEventListener('click', pressEquals);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(173));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQjtBQUNyQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXNzb240N193ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLy8g4pSA4pSA4pSAINCf0JXQoNCV0JzQldCd0J3Qq9CVXHJcbmxldCBjdXJyZW50ID0gXCIwXCI7IC8vINGH0LjRgdC70L4g0L3QsCDRjdC60YDQsNC90LUg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YFcclxubGV0IHByZXZpb3VzID0gbnVsbDsgLy8g0YfQuNGB0LvQviDQtNC+INGC0L7Qs9C+LCDQutCw0Log0L3QsNC20LDQu9C4INC+0L/QtdGA0LDRhtC40Y5cclxubGV0IG9wZXJhdGlvbiA9IG51bGw7IC8vINCy0YvQsdGA0LDQvdC90LDRjyDQvtC/0LXRgNCw0YbQuNGPXHJcbmxldCBzaG91bGRSZXNldCA9IGZhbHNlOyAvLyB0cnVlID0g0YHQu9C10LTRg9GO0YnQsNGPINGG0LjRhNGA0LAg0L3QsNGH0L3RkdGCINC90L7QstC+0LUg0YfQuNGB0LvQviAvLyBmYWxzZSA9INGG0LjRhNGA0LAg0LTQvtC70LbQvdCwINC00L7Qv9C40YHQsNGC0YzRgdGPINC6INGC0LXQutGD0YnQtdC80YMg0YfQuNGB0LvRg1xyXG5cclxuLy8g4pSA4pSA4pSAINCt0JrQoNCQ0J1cclxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcclxuIFxyXG4vLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L7QsdC90L7QstC70Y/QtdGCINGC0LXQutGB0YIg0L3QsCDRjdC60YDQsNC90LVcclxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcclxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50O1xyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IGN1cnJlbnQubGVuZ3RoO1xyXG5cclxuICAgIGlmIChsZW5ndGggPiA5KSB7XHJcbiAgICAgICAgZGlzcGxheS5zdHlsZS5mb250U2l6ZSA9IFwiMzJweFwiO1xyXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPiA2KSB7XHJcbiAgICAgICAgZGlzcGxheS5zdHlsZS5mb250U2l6ZSA9IFwiNDhweFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5LnN0eWxlLmZvbnRTaXplID0gXCI2NHB4XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOKUgOKUgOKUgCDQpNCj0J3QmtCm0JjQmFxyXG4vLyDQktCS0J7QlCDQptCY0KTQoCDQuNC70Lgg0LfQsNC/0Y/RgtC+0LlcclxuZnVuY3Rpb24gcHJlc3NEaWdpdCh2YWx1ZSkge1xyXG4gICAgLy8g0JXRgdC70Lgg0YLQvtC70YzQutC+INGH0YLQviDQvdCw0LbQsNC70Lgg0L7Qv9C10YDQsNGG0LjRjiDigJQg0L3QsNGH0LjQvdCw0LXQvCDQvdC+0LLQvtC1INGH0LjRgdC70L5cclxuICAgIGlmIChzaG91bGRSZXNldCkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBcIjAuXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdWxkUmVzZXQgPSBmYWxzZTtcclxuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCd0LXQu9GM0LfRjyDQv9C+0YHRgtCw0LLQuNGC0Ywg0LLRgtC+0YDRg9GOINGC0L7Rh9C60YNcclxuICAgIGlmICh2YWx1ZSA9PT0gXCIuXCIgJiYgY3VycmVudC5pbmNsdWRlcyhcIi5cIikpIHJldHVybjtcclxuXHJcbiAgICAvLyDQldGB0LvQuCDQvdCwINGN0LrRgNCw0L3QtSAwINC4INC90LDQttCw0LvQuCDRgtC+0YfQutGDXHJcbiAgICBpZiAodmFsdWUgPT09IFwiLlwiICYmIGN1cnJlbnQgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgY3VycmVudCA9IFwiMC5cIjtcclxuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0LHRi9GH0L3Ri9C5INCy0LLQvtC0INGG0LjRhNGAXHJcbiAgICBpZiAoY3VycmVudCA9PT0gXCIwXCIpIHtcclxuICAgICAgICBjdXJyZW50ID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyDQndCw0LbQsNGC0LAg0LrQvdC+0L/QutCwIEFDIOKAlCDRgdCx0YDQsNGB0YvQstCw0LXQvCDQstGB0ZEg0LTQviDQt9Cw0LLQvtC00YHQutC40YUg0L3QsNGB0YLRgNC+0LXQulxyXG5mdW5jdGlvbiBwcmVzc0NsZWFyKCkge1xyXG4gICAgY3VycmVudCA9IFwiMFwiO1xyXG4gICAgcHJldmlvdXMgPSBudWxsO1xyXG4gICAgb3BlcmF0aW9uID0gbnVsbDtcclxuICAgIHNob3VsZFJlc2V0ID0gZmFsc2U7XHJcbiAgICB1cGRhdGVEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vICsvLSDigJQg0LzQtdC90Y/QtdC8INC30L3QsNC6INGH0LjRgdC70LBcclxuZnVuY3Rpb24gcHJlc3NTaWduKCkge1xyXG4gICAgY3VycmVudCA9IFN0cmluZygtcGFyc2VGbG9hdChjdXJyZW50KSk7IC8vIHBhcnNlRmxvYXQoY3VycmVudCkgLSDQstC+0LfQstGA0LDRidCw0LXRgiDRh9C40YHQu9C+LCAtICDQt9C90LDQuiwg0LzQtdC90Y/QtdGCINGH0LjRgdC70L4gKNCx0YvQu9C+IC0yNSwg0LHRg9C00LXRgiAtKC0yNSksINC30L3QsNGH0LjRgiArMjUpINC4INC+0LHRgNCw0YLQvdC+INCyINGB0YLRgNC+0LrRg1xyXG4gICAgdXBkYXRlRGlzcGxheSgpO1xyXG59XHJcbiBcclxuLy8g0J3QsNC20LDRgtCwINC60L3QvtC/0LrQsCAlIOKAlCDQtNC10LvQuNC8INC90LAgMTAwXHJcbmZ1bmN0aW9uIHByZXNzUGVyY2VudCgpIHtcclxuICAgIGN1cnJlbnQgPSBTdHJpbmcocGFyc2VGbG9hdChjdXJyZW50KS8xMDApO1xyXG4gICAgdXBkYXRlRGlzcGxheSgpO1xyXG59XHJcbiBcclxuLy8g0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LDQttCw0Lsg0L7QtNC90YMg0LjQtyDQvtC/0LXRgNCw0YbQuNC5ICgrLCAtLCDDlywgw7cpXHJcbmZ1bmN0aW9uIHByZXNzT3BlcmF0aW9uKG9wKSB7XHJcbiAgICBwcmV2aW91cyA9IHBhcnNlRmxvYXQoY3VycmVudCk7IC8vINGH0LjRgdC70L4g0L3QsCDRjdC60YDQsNC90LVcclxuICAgIG9wZXJhdGlvbiA9IG9wOyAvLyAoKywgLSwgw5csIMO3KVxyXG4gICAgc2hvdWxkUmVzZXQgPSB0cnVlOyAvLyDQv9C+0YHQu9C1INC+0L/QtdGA0LDRhtC40Lgg0LLQstC+0LTQuNC8INC90L7QstC+0LUg0YfQuNGB0LvQvlxyXG59XHJcblxyXG4vLyDQoNC10LfRg9C70YzRgtCw0YJcclxuZnVuY3Rpb24gcHJlc3NFcXVhbHMoKSB7XHJcbiAgICAvLyDQtdGB0LvQuCDQvdC40YfQtdCz0L4g0L3QtSDQvdCw0LbQsNGC0L4g0LjQu9C4IDAsINGC0L4uLi4g0L3QuNGH0LXQs9C+XHJcbiAgICBpZiAoIW9wZXJhdGlvbiB8fCBwcmV2aW91cyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vINCy0YvRgNCw0LbQtdC90LjQtTpcclxuICAgIGNvbnN0IGEgPSBwcmV2aW91cztcclxuICAgIGNvbnN0IGIgPSBwYXJzZUZsb2F0KGN1cnJlbnQpO1xyXG4gICAgbGV0IHJlc3VsdDsgLy8g0LfQtNC10YHRjCDQv9C+0LrQsCDQvdC10YIg0LfQvdCw0YfQtdC90LjRjywg0L/QvtGC0L7QvNGDINGH0YLQviDQvdC10YIg0L3QuNC60LDQutC40YUg0YDQsNGB0YfQtdGC0L7QslxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIitcIikgcmVzdWx0ID0gYSArIGI7XHJcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIi1cIikgcmVzdWx0ID0gYSAtIGI7XHJcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIipcIikgcmVzdWx0ID0gYSAqIGI7XHJcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIi9cIikge1xyXG4gICAgaWYgKGIgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50ID0gXCJFcnJvclwiO1xyXG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICBvcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHByZXZpb3VzID0gbnVsbDtcclxuICAgICAgICBzaG91bGRSZXNldCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0ID0gYSAvIGI7XHJcbn1cclxuXHJcbiAgICAvLyDQntC60YDRg9Cz0LvRj9C10Lwg0LTQviAxMCDQt9C90LDQutC+0LJcclxuICAgIGN1cnJlbnQgPSBTdHJpbmcoXHJcbiAgICAgICAgcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgcmVzdWx0LnRvRml4ZWQoMTApXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBvcGVyYXRpb24gPSBudWxsO1xyXG4gICAgcHJldmlvdXMgPSBudWxsO1xyXG4gICAgc2hvdWxkUmVzZXQgPSB0cnVlO1xyXG5cclxuICAgIHVwZGF0ZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8g4pSA4pSA4pSAIGFkZEV2ZW50TGlzdGVuZXJcclxuLy8g0J3QsCDQutCw0LbQtNGD0Y4g0LrQvdC+0L/QutGDINGB0LLQvtC5INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LBcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsZWFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmVzc0NsZWFyKTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNpZ24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXNzU2lnbik7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wZXJjZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmVzc1BlcmNlbnQpO1xyXG4gXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZGl2aWRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByZXNzT3BlcmF0aW9uKCcvJyk7XHJcbn0pO1xyXG4gXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tNycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBwcmVzc0RpZ2l0KCc3Jyk7XHJcbn0pO1xyXG4gXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tOCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBwcmVzc0RpZ2l0KCc4Jyk7XHJcbn0pO1xyXG4gXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tOScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBwcmVzc0RpZ2l0KCc5Jyk7XHJcbn0pO1xyXG4gXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbXVsdGlwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NPcGVyYXRpb24oJyonKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi00JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByZXNzRGlnaXQoJzQnKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi01JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByZXNzRGlnaXQoJzUnKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi02JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByZXNzRGlnaXQoJzYnKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1taW51cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBwcmVzc09wZXJhdGlvbignLScpO1xyXG59KTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NEaWdpdCgnMScpO1xyXG59KTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NEaWdpdCgnMicpO1xyXG59KTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NEaWdpdCgnMycpO1xyXG59KTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBsdXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NPcGVyYXRpb24oJysnKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi0wJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByZXNzRGlnaXQoJzAnKTtcclxufSk7XHJcbiBcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1kb3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJlc3NEaWdpdCgnLicpO1xyXG59KTtcclxuIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVxdWFscycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJlc3NFcXVhbHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==