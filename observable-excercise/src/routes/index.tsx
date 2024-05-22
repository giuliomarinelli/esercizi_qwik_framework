import { component$ } from "@builder.io/qwik";
import { messageBus$ } from "~/services/messaging-service";


export default component$(() => {
  
  const sendMessage = () => {
    messageBus$.next('Ciao da /')
  }

  sendMessage()
  
  return (
    <h1>Hello World</h1>
  );
});

export const compA = component$(() => {
  let message: string
  const subscription = messageBus$.subscribe(msg => message = msg)
  
})


