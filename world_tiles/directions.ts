window.addEventListener("pageswap", async (e: PageSwapEvent) => {
    if (!e.viewTransition) return;

    const transitionType = determineTransitionType(e.activation?.from, e.activation?.entry);
    if (!transitionType) return;

    localStorage.setItem("direction", transitionType);

    // @ts-expect-error
    e.viewTransition?.types.add(transitionType);
})

window.addEventListener("pagereveal", async (e: PageRevealEvent) => {
    let transitionType;
    // @ts-expect-error
    if (!window.navigation) {
        transitionType = localStorage.getItem("direction");
    } else {
        transitionType = localStorage.getItem("direction");
    }
    
    // @ts-expect-error
    e.viewTransition?.types.add(transitionType);
})

function determineTransitionType(
    from: NavigationHistoryEntry | null | undefined,
    to: NavigationHistoryEntry | null | undefined,
) {
    if (!to?.url) return;
    const url = new URL(to.url);
    let direction = url.searchParams.get("direction");

    return direction;
}