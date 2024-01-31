let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function clickApply() {
    let bgColorInputVal = bgColorInputElement.value;
    let fontColorInputVal = fontColorInputElement.value;
    let fontSizeInputVal = fontSizeInputElement.value;
    let fontWeightInputVal = fontWeightInputElement.value;
    let paddingInputVal = paddingInputElement.value;
    let borderRadiusInputVal = borderRadiusInputElement.value;
    customButtonElement.style.backgroundColor = bgColorInputVal;
    customButtonElement.style.color = fontColorInputVal;
    customButtonElement.style.fontSize = fontSizeInputVal;
    customButtonElement.style.fontWeight = fontWeightInputVal;
    customButtonElement.style.padding = paddingInputVal;
    customButtonElement.style.borderRadius = borderRadiusInputVal;
}
