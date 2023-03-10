import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import WorkCard from "~/components/WorkCard";

import styles from "~/styles/pages/work/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return {
    title: "My Work",
    description: "All the projects I been working on",
  };
};

interface WorkType {
  image: string;
  name: string;
  description: string;
  stack: string;
  url: string;
}

export default function MyWork() {
  const [works, setWorks] = useState<WorkType[]>([]);

  const getWorks = async () => {
    const res = await fetch("/my-work/data.json");
    const data: WorkType[] = await res.json();

    setWorks(data);
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <section className="my-work hero is-fullheight">
      <div className="my-work__content">
        {works.map((work) => (
          <WorkCard
            key={work.name}
            name={work.name}
            description={work.description}
            image={work.image}
            tags={work.stack.split(",")}
            url={work.url}
          />
        ))}
      </div>
    </section>
  );
}
