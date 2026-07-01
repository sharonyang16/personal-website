import { getAllPosts, getPostBySlug } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { ProjectLinkIcon, toAriaLabel } from '@/utils/data.utils';
import { ReactNode } from 'react';
import { Chip, Link, Typography } from 'unremarkable-ui';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

const components = {
  h2: ({ children }: { children: ReactNode }) => (
    <Typography variant="h2">{children}</Typography>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <Typography variant="body1">{children}</Typography>
  ),
  a: ({ children, href }: { children: ReactNode; href: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">
      {children}
    </code>
  ),
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);
  return {
    title: meta.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { meta, content } = await getPostBySlug(slug);

  return (
    <article className="mx-auto h-full">
      <div className="flex flex-col gap-4">
        {meta.cover_image && (
          <div className="flex justify-center items-center w-full relative bg-gray-200 dark:bg-gray-800 px-8 py-4">
            <Image
              src={meta.cover_image}
              alt={`${meta.title} thumbnail`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        )}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-4">
            <Typography variant="h3">{meta.title}</Typography>
            <Typography variant="label1" className="col-span-2 self-end">
              {meta.headline}
            </Typography>
            {meta.links && meta.links.length > 0 && (
              <div className="flex gap-2">
                {meta.links.map((link: { type: string; url: string }) => (
                  <Link
                    key={`$${link.type}`}
                    variant="iconButtonOutline"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full h-fit"
                    aria-label={toAriaLabel(meta.title, link.type)}
                  >
                    <ProjectLinkIcon name={link.type} />
                  </Link>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 col-span-2">
              <div className="flex flex-col">
                <Typography variant="label2">Role</Typography>
                <Typography variant="body1">{meta.role}</Typography>
              </div>

              <div className="flex flex-col gap-1">
                <Typography variant="label2">Stack</Typography>
                <div className="flex gap-1 flex-wrap">
                  {meta.stack.map((tech: string) => (
                    <Chip
                      variant="subtle"
                      size="sm"
                      key={tech}
                      className="h-fit"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>

              {meta.team && meta.team.length > 0 && (
                <div className="flex flex-col">
                  <Typography variant="label2">Team</Typography>
                  <div className="flex flex-col">
                    {meta.team.map((member: string) => (
                      <Typography key={member} variant="body1">
                        {member}
                      </Typography>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-full">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </div>
    </article>
  );
}
