import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
    const dark = useSignal(false)
    return (
        <>
            <button class={{ 'text-slate-200': dark.value, 'mb-10': true }} onClick$={() => {
                document.documentElement.classList.toggle('dark')
                dark.value = !dark.value
            }}>Toggle light dark mode</button>
            <LogoPrimaryExtended />
        </>
    )
})

export const LogoPrimaryExtended = component$(() => {
    return (
        <>
            <div class="text-center relative text-purple-700 text-montserrat text-4xl tracking-wide font-semibold">
                premierLink
                <div class="absolute top-0 left-0 text-orange-500 text-4xl font-bold">P</div>
            <div class="absolute bottom-0 right-0 text-orange-500 text-4xl font-bold">L</div>
            </div>
            
        </>
    )

})