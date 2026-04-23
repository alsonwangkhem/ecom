import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-md m-4">
      <Button variant="elevated">
        Click me
      </Button>
      <Input placeholder="Put your name in here"></Input>
      <Progress value={50}></Progress>
      <Textarea placeholder="Put your message in here"></Textarea>
    </div>
  );
}
