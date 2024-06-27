import { useState } from "react";

interface DateOption {
  dateId: number;
  date: string;
}

const [dates, setDates] = useState<DateOption[]>([]);
const [selectedDate, setSelectedDate] = useState<string | null>(null);
