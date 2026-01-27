import { useState } from "react";
import { Publication_Card } from "./publication-card";

export function publication_List() {
  const [publications, setPublications] = useState([]);

 

  return (
    <div class="m-10">
      <div class="grid grid-cols-4 gap-4">
        {publications.map((publication) => {
          return (
            <Publication_Card
              message={publication.message}
              username={publication.username}
              publication_date={publication.publication_date}
            />
          );
        })}
      </div>
    </div>
  );
}
