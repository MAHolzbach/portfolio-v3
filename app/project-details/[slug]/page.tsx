import { promises as fs } from "fs";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { TCardData, TSlugParams, TProjectDetailsParams } from "../../types";
import ImageToggle from "../../components/ImageToggle";
import addBlurredDataUrls from "../../lib/getBase64";

import "./page.scss";

export default async function ProjectDetails({
  params,
}: TProjectDetailsParams) {
  const {
    props: {
      project: {
        tools,
        detailsTitle,
        visitUrl,
        detailsSubtitle,
        detailsTask,
        detailsChallenges,
        detailsResults,
        detailsComments,
        detailsTeam,
        repoUrl,
        imageSectionTitle,
        images,
      },
    },
  } = await getData(params);

  const imagesWithBlur = await addBlurredDataUrls(images);

  return (
    <div>
      <Link className="homeLink" href="/">
        <FaArrowLeft className="icon" />
        Back
      </Link>
      <h1 className="projectTitle">{detailsTitle}</h1>
      <p className="subtitle">
        {detailsSubtitle}
        {visitUrl !== null && (
          <a href={`${visitUrl}`} target="_blank" rel="noopener noreferrer">
            View Site
          </a>
        )}
      </p>
      <hr />
      <div>
        {repoUrl !== null && (
          <p className="text">
            <span className="boldText">Source Code: </span>
            <Link href={repoUrl} target="_blank">
              {detailsTitle}
            </Link>
          </p>
        )}
        <p className="text">
          <span className="boldText">Tools: </span>
          {tools}
        </p>
        <p className="text">
          <span className="boldText">Task: </span>
          {detailsTask}
        </p>
        <p className="text">
          <span className="boldText">Challenges: </span>
          {detailsChallenges}
        </p>
        <p className="text">
          <span className="boldText">Results: </span>
          {detailsResults}
        </p>
        <p className="text">
          <span className="boldText">Comments: </span>
          {detailsComments}
        </p>
        <p className="text">
          <span className="boldText">Team Members: </span>
          {detailsTeam}
        </p>
        <p className="text boldText">{imageSectionTitle}</p>
      </div>

      <ImageToggle images={imagesWithBlur} />
    </div>
  );
}

async function getData(params: TSlugParams) {
  const file = await fs.readFile(
    process.cwd() + `/app/data/${params.slug}.json`,
    "utf8"
  );

  const project = JSON.parse(file);

  return { props: { project } };
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/card-data.json",
    "utf8"
  );

  const projects = JSON.parse(file);

  return projects.map((project: TCardData) => ({
    slug: project.slug,
  }));
}
