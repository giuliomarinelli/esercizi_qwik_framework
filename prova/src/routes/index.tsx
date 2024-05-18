import { $, component$ } from "@builder.io/qwik";

export interface ProvaProva {
  nome: string
  anni: number
}

let i: number = 1

export default component$(() => {
  const incrementa = $(() => {
    i++
    console.log(i)
  })
  console.log(i)
  return (
    <>
      <h1>Hello World</h1>
      <Prova nome="Giulio" anni={32} />
      <p>{i}</p>
      <button onClick$={incrementa}>Incrementa</button>
    </>
  );
});

export const Prova = component$((props: ProvaProva) => {
  const { nome, anni } = props
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Anni: {anni}</p>
    </>
  )
})