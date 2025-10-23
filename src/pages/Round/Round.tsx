import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getPassedRounds,
  getPlayerAnswering,
  getPlayers,
  getRound,
} from "../../reduxStore/game/gameSelectors";
import { DefaultButton, Question } from "../../ui";
import {
  AppBarSpacer,
  StyledToolbar,
  Wrapper,
  WrapperQuestions,
} from "./Round.styled";
import { QUESTIONS_ABOUT_UKRAINE } from "../../constants";
import { getItemRank } from "../../utils";
import { AppBar } from "@mui/material";
import type { IPlayer } from "../../types/game.type";
import { setPlayerAnswering } from "../../reduxStore/game/gameSlice";
import deepEqual from "fast-deep-equal";

const Round = () => {
  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);
  const round = useAppSelector(getRound);
  const passedRounds = useAppSelector(getPassedRounds);
  const savedSelectedPlayer = useAppSelector(getPlayerAnswering);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(
    savedSelectedPlayer?.name ?? null
  );

  const handleSelectPlayer = (player: IPlayer) => {
    setSelectedPlayer(player.name);
    dispatch(setPlayerAnswering(player));
  };

  return (
    <Wrapper>
      <AppBar position="fixed">
        <StyledToolbar>
          {players.map((player, index) => (
            <DefaultButton
              key={index}
              height="53px"
              variant="contained"
              borderradius="4px"
              styles={{ flexGrow: 1, minWidth: 250 }}
              onClick={() => handleSelectPlayer(player)}
              isSelected={selectedPlayer === player.name ? "true" : undefined}
              gobletColor={
                getItemRank(player.name, players) === 1
                  ? "gold"
                  : getItemRank(player.name, players) === 2
                  ? "silver"
                  : getItemRank(player.name, players) === 3
                  ? "brown"
                  : undefined
              }
            >
              {player.name} - {player.points}
            </DefaultButton>
          ))}
        </StyledToolbar>
      </AppBar>

      <AppBarSpacer />

      <WrapperQuestions>
        {QUESTIONS_ABOUT_UKRAINE.map((question, index) => (
          <Question
            question={question}
            round={round}
            key={index}
            playerAnswering={players.find(
              (player) => player.name === selectedPlayer
            )}
            isEverythingDisabled={!deepEqual(question, round?.question)}
            isAlreadyAnswered={
              !!passedRounds.find((round) =>
                deepEqual(question, round.question)
              )
            }
          />
        ))}
      </WrapperQuestions>
    </Wrapper>
  );
};

export default Round;
