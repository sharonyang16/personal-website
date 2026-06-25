import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export const getPostBySlug = (slug: string) => {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { meta: data, content };
};
export const getAllPosts = () => {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx")) // ← only process .mdx files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { data } = matter(
        fs.readFileSync(path.join(postsDir, filename), "utf8"),
      );
      return { slug, ...data };
    });
};
