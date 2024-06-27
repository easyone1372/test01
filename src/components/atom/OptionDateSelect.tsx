import axios from "axios";
import { CSSProperties, useEffect, useState } from "react";

// type OptionDateSelectProps = {
//   selectContent: string;
//   setSelectData: [];
//   selectChange: (event: any) => void;
// };

type OptionDateSelectProps = {
  dataOptions: [];
};

export interface DateOption {
  dateId: number;
  date: string;
}

const OptionDateSelect = () => {
  const [dates, setDates] = useState<DateOption[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleSelectDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };

  useEffect(() => {
    const fetchDates = async () => {
      const response = await axios.get("http://localhost:3001/dates");
      setDates(response.data);
    };
    fetchDates();
  }, []);

  const selectStyle: CSSProperties = {
    width: "100px",
    height: "40px",
  };

  return (
    <select style={selectStyle} onChange={handleSelectDate} defaultValue="">
      <option value="">날짜 선택</option>
      {dates.map((date) => (
        <option key={date.dateId} value={date.date}>
          {date.date}
        </option>
      ))}
    </select>
  );
};

export default OptionDateSelect;
