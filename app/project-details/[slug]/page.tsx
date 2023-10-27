import { promises as fs } from "fs";
import { TCardData, TSlugParams, TProjectDetailsParams } from "../../../types";

export default async function ProjectDetails({
  params,
}: TProjectDetailsParams) {
  const {
    props: { project },
  } = await getData(params);

  console.log("ProjectDetails -->", project);

  return (
    <div>
      <p>{project.tools}</p>
    </div>
  );
}

async function getData(params: TSlugParams) {
  const file = await fs.readFile(
    process.cwd() + `/pages/data/${params.slug}.json`,
    "utf8"
  );

  const project = JSON.parse(file);

  return { props: { project } };
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + "/pages/data/index.json",
    "utf8"
  );

  const projects = JSON.parse(file);

  return projects.map((project: TCardData) => ({
    slug: project.slug,
  }));
}
