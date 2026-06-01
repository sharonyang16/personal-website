import Experiences from "@/components/home/Experiences/Experiences";

export default function About() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 py-4">
      <Experiences />
    </div>
  );
}
