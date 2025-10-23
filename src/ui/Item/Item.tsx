import { Delete, Title, WrapperItem } from "./Item.styled";

interface IItemProps {
  width?: string;
  height?: string;
  title: string;
  handleAction?: (values?: unknown) => void;
}

const Item = ({ width, height, title, handleAction }: IItemProps) => {
  return (
    <WrapperItem width={width} height={height}>
      <Title>{title}</Title>
      <Delete underline="none" onClick={handleAction}>
        Видалити
      </Delete>
    </WrapperItem>
  );
};

export default Item;
