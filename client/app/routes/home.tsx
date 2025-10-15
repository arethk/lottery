import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import { Lottery } from "~/lottery/lottery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lottery" },
    { name: "description", content: "An excersize in react and NodeJS with typescript" },
  ];
}

export default function Home() {
  //return <Welcome />;
  return <Lottery />;
}
