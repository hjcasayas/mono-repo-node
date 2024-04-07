import { greet } from "@hjcasayas/domain";

export default function AppPage() {
  const greeting = greet("Jose!");
  return <p>{greeting}</p>;
}
