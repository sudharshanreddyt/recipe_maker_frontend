import { Button } from '@/components/livekit/button';
import Image from "next/image";

function WelcomeImage() {
  return (
    <Image
        src="/happy-chef.png"
        alt="Welcome"
        width={256}
        height={256}
        className="mb-4"
        priority
      />
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref}>
      <section className="bg-background flex flex-col items-center justify-center text-center">
        <WelcomeImage />

        <p className="text-foreground max-w-prose pt-1 leading-6 font-medium">
          Speak live with your AI cooking assistant <b>"Priyanka"</b>
        </p>

        <Button variant="primary" size="lg" onClick={onStartCall} className="mt-6 w-64 font-mono">
          {startButtonText}
        </Button>
      </section>
    </div>
  );
};
