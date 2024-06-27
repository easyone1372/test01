import { CSSProperties } from "react";

type Option = {
  id: number | string;
  value: number | string;
  text: string;
};

type SelectProps = {
  options: Option[];
  //   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  OptionChange: (selectedValue: string) => void;
  defaultOption: "날짜 선택" | "수업 선택";
  defaultValue?: "";
};

const SelectComponent = ({
  options,
  OptionChange,
  defaultOption,
  defaultValue = "",
}: SelectProps) => {
  const style: CSSProperties = { width: "100px", height: "40px" };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    OptionChange(e.target.value);
  };
  return (
    <select style={style} onChange={handleChange} defaultValue={defaultValue}>
      <option value="">{defaultOption}</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
