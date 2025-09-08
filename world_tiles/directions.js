"use strict";
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("dom content loaded", e);
});
window.addEventListener("popstate", function (e) {
    console.log("pop state!", e);
});
window.addEventListener("pageswap", (e) => {
    console.log("page swap!", e);
    console.log(e.viewTransition);
    console.log(e.activation?.entry.url);
    if (!e.activation)
        return;
    let { url } = e.activation.entry;
    if (!url)
        return;
    let url2 = new URL(url);
    let direction = url2.searchParams.get("direction");
    console.log(direction);
    console.log(e.viewTransition?.types);
    // @ts-ignore
    if (!window.navigation) {
        // localStorage.setItem("transitionType", transitionType);
    }
});
window.addEventListener("pagereveal", (e) => {
    const url = new URL(location.href);
    const direction = url.searchParams.get("direction");
    console.log("direction", direction);
    e.viewTransition?.types.forEach(function (value, key, parent) {
        console.log("key, parent:", key);
    }, window);
    // @ts-expect-error
    e.viewTransition?.types.add(direction);
});
