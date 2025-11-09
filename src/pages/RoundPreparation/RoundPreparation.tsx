import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { PATHS } from "../../routes/paths.const";
import { DefaultButton, Item } from "../../ui";
import {
  Title,
  Wrapper,
  WrapperButtons,
  WrapperElements,
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
import { Grid, TextField } from "@mui/material";
import { QUESTIONS_ABOUT_UKRAINE } from "../../constants";

interface IAddPlayerProps {
  name: string;
}
const RoundPreparation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);
  const passedRounds = useAppSelector(getPassedRounds);

  const handleDelete = (playerName: string) => {
    dispatch(deletePlayer(playerName));
  };

  const handleAddPlayer = (values: IAddPlayerProps) => {
    if (values.name.trim()) {
      dispatch(addPlayer(values.name ?? ""));
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
      <Formik initialValues={{ name: "" }} onSubmit={handleAddPlayer}>
        {({ values, setFieldValue }) => (
          <Form>
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              gap="20px"
            >
              <Grid sx={{ flexGrow: 1, minWidth: 250 }}>
                <TextField
                  label="Ім'я"
                  variant="outlined"
                  id="name"
                  name="name"
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "20px",
                    },
                  }}
                />
              </Grid>
              <Grid>
                <DefaultButton
                  height="53px"
                  variant="contained"
                  type="submit"
                  isDisabled={!values.name.trim()}
                  borderradius="4px"
                >
                  Додати Гравця
                </DefaultButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
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
