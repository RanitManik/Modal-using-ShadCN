import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className={`absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2`}
    >
      <Button>This is The initial setup</Button>
    </main>
  );
}
