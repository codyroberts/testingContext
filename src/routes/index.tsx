import { component$, useContext } from "@builder.io/qwik";
import { TestContext } from "~/components/contextProvider/contextProvider";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const test = useContext(TestContext);
  return (
    <>
      <h1>{test.title}</h1>
      <h1>{test.description}</h1>
      <h1>{test.count}</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
