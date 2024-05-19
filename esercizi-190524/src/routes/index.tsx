import { component$ } from "@builder.io/qwik";


export default component$(() => {
 
});

export const PrimaProva = () => {
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
}

export const SecondaProva
