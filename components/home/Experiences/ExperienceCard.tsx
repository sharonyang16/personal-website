import { format } from "date-fns";
import { ExperienceCardProps } from "@/types/data";
import { Chip, Typography } from "@/components/base";

const ExperienceCard = ({
  company,
  position,
  start,
  end,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Typography intent="subheadding2">{`${position} @ ${company}`}</Typography>
        <Typography
          intent="label2"
          className="text-gray-600 dark:text-gray-400"
        >{`${format(start, "MMM yyyy").toUpperCase()} - ${end ? format(end, "MMM yyyy").toUpperCase() : "PRESENT"}`}</Typography>
      </div>

      <Typography intent="paragraph2">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {technologies.map((name) => (
          <Chip key={name}>{name}</Chip>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
