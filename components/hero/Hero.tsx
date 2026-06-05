import { Typography } from "@/components/base";
import { headline, summary } from "./data";

const Hero = () => {
  return (
    <div className="flex flex-col w-full gap-8 py-16">
      <div className="flex flex-col gap-2">
        <Typography intent="heading">{headline}</Typography>
        <Typography intent="paragraph1">{summary}</Typography>
      </div>
    </div>
  );
};

export default Hero;
