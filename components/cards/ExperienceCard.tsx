import { format } from 'date-fns';
import { ExperienceCardProps } from '@/types/data';
import { Chip, Typography } from 'unremarkable-ui';

export const ExperienceCard = ({
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
        <Typography variant="h4">{`${position} @ ${company}`}</Typography>
        <Typography
          variant="label2"
          color="secondary"
        >{`${format(start, 'MMM yyyy').toUpperCase()} - ${end ? format(end, 'MMM yyyy').toUpperCase() : 'PRESENT'}`}</Typography>
      </div>

      <Typography variant="body2">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {technologies.map((name) => (
          <Chip key={name} variant="subtle" size="sm">
            {name}
          </Chip>
        ))}
      </div>
    </div>
  );
};
