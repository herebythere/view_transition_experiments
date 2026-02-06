window.addEventListener("pageswap", async (e: PageSwapEvent) => {
    if (!e.viewTransition) return;

    // @ts-expect-error
    if (!window.navigation) {
        localStorage.setItem("prevUrl", location.href);
    }
})

window.addEventListener("pagereveal", async (e: PageRevealEvent) => {
    if (!e.viewTransition) return;

    // @ts-expect-error
    let prevUrl = (window.navigation)
        // @ts-expect-error
        ? new URL(window.navigation.activation.from.url)
        : localStorage.getItem("prevUrl");

    console.log(prevUrl);

    // // @ts-expect-error
    // e.viewTransition.types.add(transitionType);

    // @ts-expect-error
    console.log("default view transition types", e.viewTransition.types.entries());
})

// When view transitions are supported in all browsers
// "from" will never be a string
function determineTransitionType(
    origin: NavigationHistoryEntry | string | null | undefined,
    target: NavigationHistoryEntry | null | undefined,
) {
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

function getCoordinates(url: URL) {
    let coordinateStr = url.searchParams.get("coordinates");

}