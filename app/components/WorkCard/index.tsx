import type { FC } from "react";

import { NavLink } from "@remix-run/react";

import styles from "~/styles/components/WorkCard/index.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface WorkCardProps {
  name: string;
  image: string;
  description: string;
  tags: string[];
  url?: string;
}

const WorkCard: FC<WorkCardProps> = ({
  name,
  image,
  description,
  tags,
  url,
}) => {
  return (
    <div className="workCard">
      <div className="workCard__realCard">
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <div className="workCard__realCard_open">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </a>
        )}

        <div className="workCard__image">
          <figure className="workCard__image_container">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="workCard__content">
          <div className="workCard__content_info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="workCard__tags">
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
