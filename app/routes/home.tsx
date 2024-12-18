import { Container } from "ui";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Justd SK" },
    { name: "description", content: "Welcome to Justd Vite Starter Kit" },
  ];
}

export default function Home() {
  return <Container>Home</Container>;
}
