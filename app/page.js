// app/page.js
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/users");
}
