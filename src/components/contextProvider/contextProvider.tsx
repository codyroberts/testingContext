import { component$, Slot, useSignal } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import { useContextProvider, createContextId } from "@builder.io/qwik";

// Define the context ID
export const TestContext = createContextId<Signal<string>>(
  "test-context-provider",
);

export default component$(() => {
  // Create a signal with the initial value of "testing", this is the value that will be shared
  const test = useSignal("testing");

  // Define a useContextProvider to create the context for the component and its children using the signal and the context ID
  useContextProvider(TestContext, test);
  return <Slot />;
});