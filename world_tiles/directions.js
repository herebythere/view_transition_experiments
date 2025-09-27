"use strict";
window.addEventListener("pageswap", async (e) => {
    if (!e.viewTransition)
        return;
    // const transitionType = determineTransitionType(e.activation?.from, e.activation?.entry);
    // if (!transitionType) return;
    // @ts-expect-error
    if (!window.navigation) {
        localStorage.setItem("prevUrl", location.href);
    }
    // // @ts-expect-error
    // e.viewTransition.types.add(transitionType);
});
window.addEventListener("pagereveal", async (e) => {
    if (!e.viewTransition)
        return;
    let prevUrl;
    // @ts-expect-error
    if (window.navigation) {
        // @ts-expect-error
        prevUrl = new URL(window.navigation.activation.from.url);
    }
    else {
        prevUrl = localStorage.getItem("prevUrl");
    }
    console.log(prevUrl);
    // // @ts-expect-error
    // e.viewTransition.types.add(transitionType);
    // @ts-expect-error
    console.log("default view transition types", e.viewTransition.types.entries());
});
// When view transitions are supported in all browsers
// "from" will never be a string
function determineTransitionType(origin, target) {
    return "unknown";
    // let originUrl: URL | undefined;
    // if ("string" === typeof origin) originUrl = new URL(origin);
    // if (origin instanceof NavigationHistoryEntry && origin.url) originUrl = new URL(origin.url);
    // if (!originUrl) return;
    // if (!target?.url) return;
    // const targetUrl = new URL(target.url);
    // let originCoordinates = getCoordinates(originUrl);
    // return "unknown";
}
function getCoordinates(url) {
    let coordinateStr = url.searchParams.get("coordinates");
}
