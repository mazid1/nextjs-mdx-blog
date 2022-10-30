import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <div className="mt-5">
      {posts.map((post, index) => {
        const {
          slug,
          frontMatter: { title, description, date, thumbnailUrl },
        } = post;
        return (
          <Link href={"/blog/" + slug} passHref key={index}>
            <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                      <small className="text-muted">{date}</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 m-auto">
                  <Image
                    src={thumbnailUrl}
                    className="img-fluid mt-1 rounded-start"
                    alt="thumbnail"
                    width={500}
                    height={400}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
