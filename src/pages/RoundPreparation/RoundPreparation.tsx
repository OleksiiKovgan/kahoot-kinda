import { useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths.const";
import { DefaultButton, Item } from "../../ui";
import {
  Title,
  Wrapper,
  WrapperButtons,
  WrapperElements,
  WrapperForm,
  WrapperHeader,
} from "./RoundPreparation.styled";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getPassedRounds,
  getPlayers,
} from "../../reduxStore//game/gameSelectors";
import {
  addPlayer,
  deletePlayer,
  resetPlayersScore,
  startRound,
} from "../../reduxStore/game/gameSlice";
import { useState } from "react";
import { TextField } from "@mui/material";
import { QUESTIONS_ABOUT_UKRAINE } from "../../constants";

const RoundPreparation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);
  const passedRounds = useAppSelector(getPassedRounds);

  const [name, setName] = useState("");

  const handleDelete = (playerName: string) => {
    dispatch(deletePlayer(playerName));
  };

  const handleAddPlayer = () => {
    if (name.trim()) {
      dispatch(addPlayer(name));
      setName("");
    }
  };

  const handleStartNewRound = () => {
    dispatch(resetPlayersScore());
    dispatch(startRound(QUESTIONS_ABOUT_UKRAINE[0]));
    navigate(PATHS.ROUND.build());
  };

  const handleContinueRound = () => {
    navigate(PATHS.ROUND.build());
  };
  return (
    <Wrapper>
      <WrapperHeader>
        <Title>Хто Грає?</Title>
        <WrapperButtons>
          <DefaultButton
            onClick={() => navigate(PATHS.WELCOME_PAGE.build())}
            height="48px"
            variant="contained"
          >
            Повернутися На Головну
          </DefaultButton>
          <DefaultButton
            onClick={handleStartNewRound}
            height="48px"
            variant="contained"
            isDisabled={players.length === 0}
          >
            Почати Новий Раунд
          </DefaultButton>
          {passedRounds.length > 0 && (
            <DefaultButton
              onClick={handleContinueRound}
              height="48px"
              variant="contained"
              isDisabled={players.length === 0}
            >
              Продовжити Раунд
            </DefaultButton>
          )}
        </WrapperButtons>
      </WrapperHeader>
      <WrapperForm component="form" onSubmit={handleAddPlayer}>
        <TextField
          label="Ім'я"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            flexGrow: 1,
            minWidth: 250,
            "& .MuiInputBase-input": {
              height: "20px",
            },
          }}
        />
        <DefaultButton
          height="53px"
          variant="contained"
          type="submit"
          isDisabled={!name.trim()}
          borderradius="4px"
        >
          Додати Гравця
        </DefaultButton>
      </WrapperForm>
      <WrapperElements>
        {players.map((player, index) => (
          <Item
            title={player.name}
            key={index}
            handleAction={() => handleDelete(player.name)}
          />
        ))}
      </WrapperElements>
    </Wrapper>
  );
};

export default RoundPreparation;
