import { useNavigate } from "react-router";
import { Title, Wrapper, WrapperActions } from "./WelcomePage.styled";
import { PATHS } from "../../routes/paths.const";
import { DefaultButton } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getPlayers } from "../../reduxStore/game/gameSelectors";
import { resetPlayers } from "../../reduxStore/game/gameSlice";

const WelcomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);

  const handleNewRound = () => {
    dispatch(resetPlayers());
    navigate(PATHS.ROUND_PREPARATION.build());
  };

  return (
    <Wrapper>
      <Title>Вітаю На Вечорі Вікторин!</Title>
      <WrapperActions>
        <DefaultButton variant="contained" isDisabled={true}>
          Переглянути Історію
        </DefaultButton>
        <DefaultButton variant="contained" onClick={handleNewRound}>
          Почати Новий Раунд
        </DefaultButton>
        {players.length > 0 && (
          <DefaultButton
            variant="contained"
            onClick={() => navigate(PATHS.ROUND_PREPARATION.build())}
          >
            Повернутися До Раунду
          </DefaultButton>
        )}
      </WrapperActions>
    </Wrapper>
  );
};
export default WelcomePage;
