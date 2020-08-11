const form = document.querySelector("#form");
let firInput = document.querySelector("#first");
let secInput = document.querySelector("#second");
let thiInput = document.querySelector("#third");
let spoonCheck = document.querySelector("#spoon");
let forkCheck = document.querySelector("#fork");
let knifeCheck = document.querySelector("#knife");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemData = new FormData(event.target);
    const items = Object.fromEntries(itemData.entries());
    const checkboxes = document.getElementsByClassName("checkbox");

    Array.from(checkboxes).forEach((key) => {
        if (key.checked){
            // setCookie(key.id, "1");
            items[key.id] = "true";
        }
        else{
            // setCookie(key.id, "0");
            items[key.id] = "false";
        }
    })
    localStorage.setItem("dinner", JSON.stringify(items));
});

const readFromLocal = () => {
    let localItems = (localStorage.getItem('dinner'));
    localItems = JSON.parse(localItems);
    firInput.value = localItems['soup'];
    secInput.value = localItems['maincourse'];
    thiInput.value = localItems['drink'];
    if (localItems['fork'] === "true"){
        forkCheck.checked = 1;
    }
    if (localItems['spoon'] === "true"){
        spoonCheck.checked = 1;
    }
    if (localItems['knife'] === "true"){
        knifeCheck.checked = 1;
    }
}
readFromLocal();