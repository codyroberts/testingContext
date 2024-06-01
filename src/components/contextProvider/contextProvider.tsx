import { component$, Slot, useStore } from "@builder.io/qwik";
import { useContextProvider, createContextId } from "@builder.io/qwik";

export interface myStore {
  title: string,
  description: string,
  count: number
}

// Define the context ID
export const TestContext = createContextId<myStore>(
  "test-context-provider",
);

export default component$(() => {
  // Create a signal with the initial value of "testing", this is the value that will be shared
  const test = useStore({
    title: "Initial Title",
    description: "Initial Description",
    count: 0
  })

  // Define a useContextProvider to create the context for the component and its children using the signal and the context ID
  useContextProvider(TestContext, test);
  return <Slot />;
});