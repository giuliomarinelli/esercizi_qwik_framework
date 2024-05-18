import { component$, $, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0)
  const increment = $(() => count.value++)
  const decrement = $(() => {
    if (count.value !== 0) count.value--
  })
  return (
    <>
      <p>Conteggio: {count.value}</p>
      <button onClick$={increment}>Incrementa</button>
      <button onClick$={decrement}>Decrementa</button>
    </>
  )
})