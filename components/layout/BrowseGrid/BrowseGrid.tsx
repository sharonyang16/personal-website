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

export const BrowseGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-12 py-4">
      {children}
    </div>
  );
};
