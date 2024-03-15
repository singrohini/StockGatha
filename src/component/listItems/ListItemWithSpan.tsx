import { CompanyRatioItem } from "../../utils/types/ListItems";
import { ItemText, ItemContent } from "./ListItemWithSpan.styles";

type Props = {
  item: CompanyRatioItem;
  onClick: Function;
  selected?: boolean;
};

function ListItemWithSpan(props: Props) {
  const { item, selected, onClick } = props;

  return (
    <ItemContent onClick={() => onClick(item)} selected={selected}>
      <ItemText primary={item.name} />
      <ItemText primary={<span className="number">{item.value}</span>} />
    </ItemContent>
  );
}

export default ListItemWithSpan;
