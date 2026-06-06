import { Typography } from "@/components/base";

type BrowseGridRowProps = {
  title: string;
  cta?: React.ReactNode;
  children: React.ReactNode;
};

export const BrowseGridRow = ({ title, cta, children }: BrowseGridRowProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Typography intent="subheadding1">{title}</Typography>
        {cta}
      </div>
      <div className="flex flex-col gap-8 col-span-2">{children}</div>
    </>
  );
};

type BrowseHeadingProps = {
  title: string;
  description: string;
};

export const BrowseHeading = ({ title, description }: BrowseHeadingProps) => {
  return (
    <>
      <div className="col-span-2">
        <div className="flex flex-col w-full gap-8 py-16">
          <div className="flex flex-col gap-2">
            <Typography intent="heading">{title}</Typography>
            <Typography intent="paragraph1">{description}</Typography>
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
