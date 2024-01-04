import { promises as fs } from "fs";
import { TCardData } from "./types";
import ProjectCard from "./components/ProjectCard";
import addBlurredDataUrls from "./lib/getBase64";

import "./page.scss";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/card-data.json",
    "utf8"
  );

  const data = JSON.parse(file);

  const dataWithImgPlaceholders = await addBlurredDataUrls(data);

  return (
    <div className="landing">
      <div>
        <div className="landing__aboutHeader">
          <h1>About Me</h1>
          <div className="landing__aboutText">
            <p>
              <span className="landing__aboutText--bold">I am: </span>a software
              developer specializing in Javascript/Typescript, React, and their
              surrounding ecosystem.
            </p>
            <p>
              <span className="landing__aboutText--bold">I have: </span>
              extensive experience working in an Agile environment using HTML5,
              CSS3/Sass, ES5/ES6, Typescript, React, Redux, Vue, and Git.
              Additionally, I am familiar with Next.js, Webpack, Netlify,
              Contentful, Gatsby, Node.js and Express, and AWS.
            </p>
            <p>
              <span className="landing__aboutText--bold">I believe: </span>a
              codebase should be maintainable, logically structured, and well
              documented.
            </p>
          </div>
        </div>
        <hr />
        <h2>Professional Work</h2>
        <p>
          <strong>Note for European visitors:</strong> Due to GDPR, Carfax
          directs European IPs to their European site. I am happy to discuss
          these projects on a call!
        </p>
      </div>
      {dataWithImgPlaceholders.map((item: TCardData) => (
        <ProjectCard
          key={item.cardTitle}
          title={item.cardTitle}
          imgSrc={item.imgSrc}
          blurredDataUrl={item.blurredDataUrl}
          description={item.cardDescription}
          tools={item.tools}
          url={item.cardUrl}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
