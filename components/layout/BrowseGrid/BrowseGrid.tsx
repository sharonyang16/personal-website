import { Typography } from 'unremarkable-ui';

type BrowseGridRowProps = {
  title: string;
  cta?: React.ReactNode;
  children: React.ReactNode;
};

export const BrowseGridRow = ({ title, cta, children }: BrowseGridRowProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Typography variant="h3">{title}</Typography>
        {cta}
      </div>
      <div className="flex flex-col gap-8 col-span-2">{children}</div>
    </>
  );
};

type BrowseHeadingProps = {
  title: string;
  description: string;
  className?: string;
  isHomePage?: boolean;
};

export const BrowseHeading = ({
  title,
  description,
  isHomePage = false,
}: BrowseHeadingProps) => {
  return (
    <>
      <div className={`col-span-2 ${isHomePage && 'py-16'}`}>
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col gap-2">
            <Typography variant={isHomePage ? 'h1' : 'h2'}>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        </div>
      </div>
      {/* Spacer */ <div />}
    </>
  );
};

export const BrowseGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 py-4">
      {children}
    </div>
  );
};
