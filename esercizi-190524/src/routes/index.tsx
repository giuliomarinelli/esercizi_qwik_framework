import { component$, useSignal, $, useStore } from "@builder.io/qwik";


export default component$(() => {

  return <QuartaProva />
});

export const QuartaProva = component$(() => {
  const state = useStore({ name: 'Qwik' })
  return (
    <>
      <input type="text" value={state.name} onInput$={(_, el) => state.name = el.value} />
      <p>{state.name}</p>
    </>
  )
})

export enum ButtonType {
  PRIMARY, SECONDARY
}

export interface ButtonProps {
  type: ButtonType
  value: string
}

export const Button = component$((props: ButtonProps) => {
  const { type, value } = props
  let bgColor: string = type === ButtonType.PRIMARY ? 'bg-green-600' : 'bg-zinc-400'
  let textColor: string = type === ButtonType.PRIMARY ? 'text-slate-200' : 'gray-950'
  let hover: string = type === ButtonType.PRIMARY ? 'hover:bg-green-600/75' : 'hover:bg-zinc-400/75'
  return (
    <>
      <button class={`text-lg rounded-full py-2 px-4 
      transition-colors duration-300 ${hover} ${bgColor} ${textColor}`}>{value}</button>
    </>
  )
})

export const PrimaProva = component$(() => {
  return (
    <>
      <div class="w-full h-screen flex justify-center items-center">
        <div id="box" class="h-[400px] w-[400px] bg-slate-400 border border-px border-purple-600 rounded-md
      font-semibold text-indigo-600 text-2xl flex justify-center items-center relative">
          <div class="absolute top-8 mx-auto left-0 right-0 w-fit flex items-center gap-3 text-lg">
            <input type="text" id="nome" placeholder="nome" class="p-2" />
            <button type="button" class="bg-indigo-800 rounded-full
             text-slate-200 py-2 px-5 cursor-pointer transition-colors
              hover:bg-indigo-700 duration-300"
              onClick$={() => {
                const hello = document.getElementById('hello') as HTMLElement
                const nome = document.getElementById('nome') as HTMLInputElement
                hello.innerText = `Hello ${nome.value}` || 'Hello World'
              }}
            >Saluta</button>
          </div>
          <span id="hello" class="hover:text-purple-500 cursor-pointer 
          duration-300 transition-colors transition-1 capitalize"
            onClick$={() => {
              const box = document.getElementById('box')
              box?.classList.toggle('bg-slate-400')
              box?.classList.toggle('bg-red-300')
            }}>Hello World</span>
        </div>
      </div>
    </>
  );
})

export const SecondaProva = component$(() => {

  const n = useSignal(0)

  const incrementa = $(() => n.value++)
  const decrementa = $(() => {
    if (n.value !== 0) n.value--
  })
  const dice = $(() => n.value = Math.floor(Math.random() * 6) + 1)

  return (
    <>
      <main class="bg-purple-700 m-0 w-full min-h-screen text-xl pt-3 text-slate-200 font-semibold">
        <h1 class="text-5xl text-center mb-5">Prova incremento</h1>
        <div class="bg-fuchsia-500 h-[150px] flex flex-col items-center justify-between py-2 text-zinc-800">
          <span class="text-6xl text-indigo-800">{n}</span>
          <div class="flex gap-3 items-baseline">
            <div class="w-fit" onClick$={decrementa}><Button type={ButtonType.SECONDARY} value="Decrementa" /></div>
            <div class="w-fit" onClick$={incrementa}><Button type={ButtonType.PRIMARY} value="Incrementa" /></div>
            <a class="no-underline text-indigo-700 hover:underline" href="#"
              preventdefault:click onClick$={dice}>Tira i dadi</a>
          </div>

        </div>
      </main>
    </>
  )

})


