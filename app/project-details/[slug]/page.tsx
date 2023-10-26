import { promises as fs } from "fs";

async function getData(params) {
  const file = await fs.readFile(
    process.cwd() + `/pages/data/${params.slug}.json`,
    "utf8"
  );
  const project = JSON.parse(file);
  console.log("getStaticProps -->", project);

  return { props: { project } };
}
export default function ProjectDetails({ params }) {
  const project = getData(params);
  console.log("ProjectDetails -->", params);
  return <div>{params.slug}</div>;
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + "/pages/data/index.json",
    "utf8"
  );
  const projects = JSON.parse(file);
  console.log("generateStaticParams -->", projects);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
