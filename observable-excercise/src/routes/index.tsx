import { $, component$, useOnWindow, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
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
  const message = useSignal('')

  useVisibleTask$(() => {
    const subscription = messageBus$.subscribe(msg => message.value = msg)
    console.log(message.value)
    return () => subscription.unsubscribe()
  })

  return <></>

})


function useWatch$(arg0: () => void) {
  throw new Error("Function not implemented.");
}

