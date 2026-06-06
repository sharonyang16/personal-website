import { Typography } from "@/components/base";
import { cn } from "@/components/base";

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
      <div className={`col-span-2 ${isHomePage && "py-16"}`}>
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col gap-2">
            <Typography intent={isHomePage ? "heading1" : "heading2"}>
              {title}
            </Typography>
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
