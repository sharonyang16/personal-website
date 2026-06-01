import ProjectSection from "@/components/home/Projects/ProjectSection";
import { codeData } from "./data";

export default function Code() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 py-4">
      <ProjectSection title="Code" projects={codeData} />
    </div>
  );
}
