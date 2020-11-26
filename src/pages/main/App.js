import React, { useEffect } from "react";
import { MainContainer, Content, People, SectionTitle } from "./styles";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import PersonCard from "../../components/PersonCard/PersonCard";
import Banner from "../../components/Banner/Banner";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import { useDispatch, useSelector } from "react-redux";
import PeopleActions from "../../redux/reducers/people.reducer";
import peopleData from "../../__mocks__/data.json";
import Label from "../../components/Globals/Label/Label";

const App = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const people = useSelector(({ people }) => people.people);

  useEffect(() => {
    dispatch(PeopleActions.setPeople(peopleData));
    return () => {};
  }, []);

  const handleOnVote = (vote) => {
    dispatch(PeopleActions.vote(vote));
  };
  return people.length > 0 ? (
    <MainContainer>
      <Hero person={people[0]} />
      <Content>
        <Banner />
        <SectionTitle size={40} mobileSize={30} weight={300}>
          {t("votes")}
        </SectionTitle>
        <People>
          {people.slice(1).map((person) => (
            <PersonCard person={person} onVote={handleOnVote} />
          ))}
        </People>
        <BottomBanner />
      </Content>
    </MainContainer>
  ) : (
    <Label size={30}>{t("loading")}</Label>
  );
};

export default App;
