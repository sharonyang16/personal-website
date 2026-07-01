import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ProjectCardProps } from '@/types/data';
import { cache } from 'react';

const postsDir = path.join(process.cwd(), 'content/posts');

export type PostMeta = {
  slug: string;
  title: string;
  headline: string;
  cover_image?: string;
  category: 'code' | 'design';
  role: string;
  team: string[];
  stack: string[];
  links?: { type: string; url: string }[];
};

export const getPostBySlug = cache(async (slug: string) => {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8');
  const { data: meta, content } = matter(raw);
  return { meta, content };
});

export const getAllPosts = (): PostMeta[] => {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const { data } = matter(
        fs.readFileSync(path.join(postsDir, filename), 'utf8')
      );
      return { slug, ...data } as PostMeta;
    });
};

export const toProjectCardProps = (post: PostMeta): ProjectCardProps => ({
  title: post.title,
  thumbnail: post.cover_image,
  description: post.headline,
  technologies: post.stack,
  links: post.links,
});
