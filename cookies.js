const form = document.querySelector("#form");
let firInput = document.querySelector("#first");
let secInput = document.querySelector("#second");
let thiInput = document.querySelector("#third");
let spoonCheck = document.querySelector("#spoon");
let forkCheck = document.querySelector("#fork");
let knifeCheck = document.querySelector("#knife");

const setCookie = (cookieName, cookieValue) => {
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemData = new FormData(event.target);
    const items = Object.fromEntries(itemData.entries());
    const checkboxes = document.getElementsByClassName("checkbox");
    Object.keys(items).forEach((key) => {
        setCookie(key, items[key]);
    });
    Array.from(checkboxes).forEach((key) => {
        if (key.checked){
            setCookie(key.id, "1");
        }
        else{
            setCookie(key.id, "0");
        }
    })
});

const writeCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookiesArrElem) => {
        const [key, value] = cookiesArrElem.split("=");
        const elem = document.getElementById(key);
        if (elem) {
            if ((key === "spoon" || key === "fork" || key === "knife") && +value){
                elem.checked = "true";
                console.log(elem);
            }
            else {
                elem.value = value;
            }
        }
    });
};

const readCookies = () => {
        const cookies = document.cookie.split("; ");
    console.log(cookies);
    Array.from(cookies).forEach((elem) => {
        if (elem.startsWith('soup')){
            firInput.value = elem.substr(5);
        }
        if (elem.startsWith('maincourse')){
            secInput.value = elem.substr(11);
        }
        if (elem.startsWith('drink')){
            thiInput.value = elem.substr(6);
        }
    });
}
writeCookies();
readCookies();