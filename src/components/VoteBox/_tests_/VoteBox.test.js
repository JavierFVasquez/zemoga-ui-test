import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import VoteBox from "../VoteBox";
import { light } from "../../../styles/themes";

const mockPerson = {
  id: 3,
  name: "Mark Zuckerberg",
  description:
    "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
  wiki: "https://es.wikipedia.org/wiki/Francisco_(papa)",
  createdAt: "2020-10-25T21:27:51+00:00",
  closeDate: "2020-12-25T21:27:51+00:00",
  section: "Bussines",
  image:
    "https://firebasestorage.googleapis.com/v0/b/jfvr-zemoga-test.appspot.com/o/Mark.png?alt=media&token=cec47f20-977f-40aa-8a41-060054dabef8",
  pro: 64,
  against: 36,
};
it("snapshot test", async () => {
  const spy = jest.fn();
  const component = render(
    <ThemeProvider theme={light}>
      <VoteBox person={mockPerson} onVote={spy} />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot();
});
it("simulate vote", async () => {
  const spy = jest.fn();
  const component = render(
    <ThemeProvider theme={light}>
      <VoteBox person={mockPerson} onVote={spy} />
    </ThemeProvider>
  );
  const voteupButton = await waitFor(() => component.getByTestId("voteup"));
  const sendVoteButton = await waitFor(() =>
    component.getByTestId("send-vote")
  );
  fireEvent.click(voteupButton);
  fireEvent.click(sendVoteButton);
  expect(spy).toHaveBeenCalled();
});
