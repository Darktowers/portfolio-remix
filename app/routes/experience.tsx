import { useEffect, useState } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import styles from "~/styles/pages/experience/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type Detail = {
  name: string;
};

interface ExperienceType {
  company: string;
  description: string;
  stack: string;
  from: string;
  to: string;
  activities: Detail[];
  achievements: Detail[];
}

export const meta: MetaFunction = () => {
  return {
    title: "Experience",
    description:
      "My software development experience working trough those years",
  };
};

export default function Experience() {
  const [experience, setExperience] = useState<ExperienceType[]>([]);

  console.log("experience", experience);

  const getExperience = async () => {
    const res = await fetch("/experience/data.json");
    const data: ExperienceType[] = await res.json();

    setExperience(data);
  };

  useEffect(() => {
    getExperience();
  }, []);

  return (
    <section className="experience hero is-fullheight">
      <div className="experience-content"></div>
    </section>
  );
}
