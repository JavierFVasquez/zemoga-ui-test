import React from "react";
import { MainContainer, Content, People, SectionTitle } from "./styles";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import PopeImage from "../../assets/pope.png";
import KanyeImage from "../../assets/Kanye.png";
import MarkImage from "../../assets/Mark.png";
import CristinaImage from "../../assets/Cristina.png";
import MalalaImage from "../../assets/Malala.png";
import PersonCard from "../../components/PersonCard/PersonCard";
import Banner from "../../components/Banner/Banner";
import BottomBanner from "../../components/BottomBanner/BottomBanner";

const people = [
  {
    id: 1,
    name: "Pope Francis",
    description:
      "He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
    wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
    createdAt: "2020-10-25T21:27:51+00:00",
    closeDate: "2020-12-25T21:27:51+00:00",
    section: "Entertainment",
    image: PopeImage,
    pro: 50,
    against: 23,
  },
  {
    id: 2,
    name: "Kanye West",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
    createdAt: "2020-10-25T21:27:51+00:00",
    closeDate: "2020-12-25T21:27:51+00:00",
    section: "Entertainment",
    image: KanyeImage,
    pro: 640,
    against: 360,
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
    createdAt: "2020-10-25T21:27:51+00:00",
    closeDate: "2020-12-25T21:27:51+00:00",
    section: "Bussines",
    image: MarkImage,
    pro: 360,
    against: 640,
  },
  {
    id: 4,
    name: "Cristina Fernández de Kirchner",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
    createdAt: "2020-10-25T21:27:51+00:00",
    closeDate: "2020-12-25T21:27:51+00:00",
    section: "Politics",
    image: CristinaImage,
    pro: 720,
    against: 1280,
  },
  {
    id: 3,
    name: "Malala Yousafzai",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
    createdAt: "2020-10-25T21:27:51+00:00",
    closeDate: "2020-12-25T21:27:51+00:00",
    section: "Entertainment",
    image: MalalaImage,
    pro: 1280,
    against: 720,
  },
];

const App = (props) => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Hero person={people[0]} />
      <Content>
        <Banner />
        <SectionTitle size={40} weight={300}>
          {t("votes")}
        </SectionTitle>
        <People>
          {people.slice(1).map((person) => (
            <PersonCard person={person} />
          ))}
        </People>
        <BottomBanner />
      </Content>
    </MainContainer>
  );
};

export default App;
