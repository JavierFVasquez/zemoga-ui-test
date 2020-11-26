import { createReducer, createActions } from "reduxsauce";
import { findIndex } from "lodash";
import PopeImage from "../../assets/pope.png";
import KanyeImage from "../../assets/Kanye.png";
import MarkImage from "../../assets/Mark.png";
import CristinaImage from "../../assets/Cristina.png";
import MalalaImage from "../../assets/Malala.png";

const { Types, Creators } = createActions({
  setPeople: ["people"],
  vote: ["vote"],
});

export const ServiceTypes = Types;
export default Creators;

export const voteTypes = {
  against: "against",
  pro: "pro",
};

export const INITIAL_STATE = {
  people: [],
};

const setPeople = (state, { people }) =>
  Object.assign({}, state, {
    people,
  });

const vote = (state, { vote }) => {
  let votedPersonIndex = findIndex(
    state.people,
    (person) => person.id === vote.id
  );
  let people = [...state.people];
  people[votedPersonIndex] = {
    ...people[votedPersonIndex],
    ...(vote.type === voteTypes.against && {
      against: people[votedPersonIndex].against + 1,
    }),
    ...(vote.type === voteTypes.pro && {
      pro: people[votedPersonIndex].pro + 1,
    }),
  };
  return Object.assign({}, state, {
    people,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PEOPLE]: setPeople,
  [Types.VOTE]: vote,
});
