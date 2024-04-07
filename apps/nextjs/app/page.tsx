import { greet } from "domain";

export default function AppPage() {
  const greeting = greet("Aziel");
  return <p>{greeting}</p>;
}
