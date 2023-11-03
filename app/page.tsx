import { promises as fs } from "fs";
import { TCardData } from "../types";
import ProjectCard from "./components/ProjectCard";

import "./page.scss";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/card-data.json",
    "utf8"
  );

  const data = JSON.parse(file);

  return (
    <div className="indexWrapper">
      <div>
        <h1>What I Do</h1>
        <p>
          I&apos;m a front-end web developer specializing in React and pixel
          perfect CSS. I have extensive experience working in an Agile
          environment using HTML5, CSS3/Sass, ES5/ES6, Typescript, React, Redux,
          Vue, Git, and Webpack. Additionally, I am familiar with Netlify,
          Contentful, Gatsby, Node.js and Express, AWS, and Jenkins.
        </p>
        <hr />
        <h2>Professional Work</h2>
        <p>
          <strong>Note for European visitors:</strong> Due to GDPR, Carfax
          directs European IPs to their European site. I am happy to discuss
          these projects on a call!
        </p>
      </div>
      {data.map((item: TCardData) => (
        <ProjectCard
          key={item.cardTitle}
          title={item.cardTitle}
          img={item.cardImg}
          altImg={item.altCardImg}
          description={item.cardDescription}
          tools={item.tools}
          url={item.cardUrl}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
