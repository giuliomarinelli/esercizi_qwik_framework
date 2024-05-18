import { component$ } from "@builder.io/qwik"

interface PizzaDto {
    gusto: string
    prezzo: number
    disponibile: boolean
}

export const Pizza = component$((props: PizzaDto) => {
    const { gusto, prezzo, disponibile } = props
    const _disponibile: string = disponibile ? 'Disponibile' : 'Non disponibile'
    return (
        <div class="p-3 m-3">
            <h2 class="text-indigo-800 font-sans mb-4 font-semibold text-3xl">{gusto}</h2>
            <ul class="bg-slate-300 text-fuchsia-800 list-inside">
                <li>{prezzo.toFixed(2)}€</li>
                <li>{_disponibile}</li>
            </ul>
        </div>
    )
})

const pizze: PizzaDto[] = [
    {
        gusto: 'Pizza Margherita',
        prezzo: 7,
        disponibile: true
    },
    {
        gusto: 'Pizza Rustica',
        prezzo: 9.5,
        disponibile: true
    },
    {
        gusto: 'Pizza Diavola',
        prezzo: 8.5,
        disponibile: false
    }
]

export default component$(() => {
    return (
        <>
            <h1>Pizze</h1>
            {
                pizze.map((p, i) => <Pizza key={i} prezzo={p.prezzo} disponibile={p.disponibile} gusto={p.gusto} />)
            }
        </>
    )
})