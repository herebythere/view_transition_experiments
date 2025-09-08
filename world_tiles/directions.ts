// document.addEventListener("DOMContentLoaded", (e: Event) => {
//     console.log("dom content loaded", e);
//     // history.replaceState({}, location.href);
// })
// window.addEventListener("popstate", function (e: PopStateEvent) {
//     console.log("pop state!", e);
// })
window.addEventListener("pageswap", async (e: PageSwapEvent) => {
    if (!e.viewTransition) return;

    console.log("page swap!", e);

    const transitionType = determineTransitionType(e.activation?.from, e.activation?.entry);
    if (!transitionType) return;

    console.log("transition type", transitionType);
    // // @ts-expect-error
    // e.viewTransition?.types.add(transitionType);
    // // @ts-expect-error
    // if (!window.navigation) {
    //     localStorage.setItem("direction", transitionType);
    // }

    localStorage.setItem("direction", transitionType);

    // @ts-expect-error
    e.viewTransition?.types.add(transitionType);
})

window.addEventListener("pagereveal", async (e: PageRevealEvent) => {
    console.log("pagereveal!", e)

    // if (!e.viewTransition) return;

    // const transitionType = determineTransitionType(e.activation?.from, e.activation?.entry);

    // const url = new URL(location.href);
    // let direction = url.searchParams.get("direction");
    // console.log("direction:", direction);

    // if (history.state.revert) {
    //     console.log("history:", history.state);
    //     direction = history.state.revert;
    // }
    // console.log("final:", direction);

    // if (!history.state.revert) {
    //     let revert;
    //     if (direction === "east") revert = "west";
    //     if (direction === "north") revert = "south";
    //     if (direction === "west") revert = "east";
    //     if (direction === "south") revert = "north";
    //     if (revert) history.replaceState({ revert }, location.href);
    // }

    // // @ts-expect-error
    // e.viewTransition?.types.clear();
    // // @ts-expect-error

    let transitionType;
    // @ts-expect-error
    if (!window.navigation) {
        transitionType = localStorage.getItem("direction");
    } else {
        transitionType = localStorage.getItem("direction");
    }

    console.log(transitionType);
    
    // @ts-expect-error
    e.viewTransition?.types.add(transitionType);
})

function determineTransitionType(
    from: NavigationHistoryEntry | null | undefined,
    to: NavigationHistoryEntry | null | undefined,
) {
    console.log("from:", from);
    console.log("to:", to);
    if (!to?.url) return;
    const url = new URL(to.url);
    let direction = url.searchParams.get("direction");
    console.log("direction:", direction);

    return direction;
}