import { Container } from "ui";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About | Justd SK" }];
}

export default function About() {
  return <Container>About</Container>;
}
