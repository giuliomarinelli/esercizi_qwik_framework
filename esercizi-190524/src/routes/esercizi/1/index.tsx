import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    const _value = useSignal('')
    return (
        <>
            <input type="text" class="mb-3" onInput$={(e, input) => _value.value = input.value} />
            <p>{_value}</p>
            <Link href="/">Go Home</Link>
        </>
    )
})