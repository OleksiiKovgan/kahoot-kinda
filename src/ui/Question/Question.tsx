import { Box, useTheme } from "@mui/material";
import type { IQuestion } from "../../types/questions.type";
import DefaultButton from "../DefaultButton/DefaultButton";
import {
  Title,
  Wrapper,
  WrapperAnswers,
  WrapperHeader,
} from "./Question.styled";
import type { IPlayer, IRound } from "../../types/game.type";
import { useAppDispatch } from "../../hooks";
import {
  endRound,
  savePlayersAnswer,
  startRound,
} from "../../reduxStore/game/gameSlice";
import { QUESTIONS_ABOUT_UKRAINE } from "../../constants";

interface IQuestionProps {
  question: IQuestion;
  round: IRound | null;
  playerAnswering?: IPlayer;
  isEverythingDisabled: boolean;
  isAlreadyAnswered: boolean;
}
const Question = ({
  question,
  playerAnswering,
  isEverythingDisabled,
  isAlreadyAnswered,
  round,
}: IQuestionProps) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handlePlayerAnswering = (answer: string) => {
    dispatch(
      savePlayersAnswer({ playerName: playerAnswering?.name ?? "", answer })
    );
  };

  const handleGoToNextQuestion = () => {
    const nextQuestion =
      QUESTIONS_ABOUT_UKRAINE[QUESTIONS_ABOUT_UKRAINE.indexOf(question) + 1];
    dispatch(endRound());
    dispatch(startRound(nextQuestion));
  };
  return (
    <Wrapper>
      <WrapperHeader>
        <Box width="75%">
          <Title>{question.title}</Title>
        </Box>
        <DefaultButton
          styles={{ background: "#89CFF0" }}
          height="53px"
          isDisabled={isEverythingDisabled}
          onClick={handleGoToNextQuestion}
        >
          Показати Правильну Відповідь
        </DefaultButton>
      </WrapperHeader>

      <WrapperAnswers>
        {question.answers.map((answer, index) => (
          <DefaultButton
            key={index}
            height="53px"
            borderradius="4px"
            styles={{
              flexGrow: 1,
              minWidth: 250,
              background:
                isAlreadyAnswered && question.correctAnswer === answer
                  ? theme.palette.success.main
                  : "",
              boxShadow: theme.shadows[1],
              "&:hover": {
                boxShadow: theme.shadows[4],
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => handlePlayerAnswering(answer)}
            isDisabled={isEverythingDisabled}
            isSelected={
              round?.answersOfPlayers[playerAnswering?.name ?? ""] === answer
                ? "true"
                : undefined
            }
          >
            {answer}
          </DefaultButton>
        ))}
      </WrapperAnswers>
    </Wrapper>
  );
};

export default Question;
