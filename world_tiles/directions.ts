document.addEventListener("DOMContentLoaded", (e: Event) => {
    console.log("dom content loaded", e);
})
window.addEventListener("popstate", function(e: PopStateEvent) {
    console.log("pop state!", e);
})
window.addEventListener("pageswap", (e: PageSwapEvent) => {
    console.log("page swap!", e);
    console.log(e.viewTransition);
    console.log(e.activation?.entry.url);
})

window.addEventListener("pagereveal", (e: PageRevealEvent)=> {
    const url = new URL(location.href);
    const direction = url.searchParams.get("direction");
    console.log("direction", direction);
    
    // @ts-expect-error
    e.viewTransition?.types.add(direction);
})
