import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import AttendanceTable, { Attendance } from "../atom/AttendanceTable";
import SelectComponent from "../atom/SelectClass";

interface DateOption {
  dateId: number;
  date: string;
}

export interface ClassOption {
  classNum: number;
  className: string;
}

const AttendanceCheck: React.FC = () => {
  const [dates, setDates] = useState<DateOption[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [classes, setClasses] = useState<ClassOption[]>([]);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const [attendanceData, setAttendanceData] = useState<Attendance[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      const response = await axios.get("http://localhost:3001/dates");
      setDates(response.data);
    };
    fetchDates();
  }, []);

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axios.get("http://localhost:3001/classes");
      setClasses(response.data);
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    if (selectedDate && selectedClass) {
      const fetchAttendance = async () => {
        const response = await axios.get(
          `http://localhost:3001/attendancecheck?date=${selectedDate}&classNum=${selectedClass}`
        );
        setAttendanceData(response.data);
      };
      fetchAttendance();
    }
  }, [selectedDate, selectedClass]);

  const divStyle: CSSProperties = {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  };
  const h1Style: CSSProperties = {
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={divStyle}>
      <h1 style={h1Style}>출결 확인</h1>

      <SelectComponent
        options={dates.map((date) => ({
          id: date.dateId,
          value: date.date,
          text: date.date,
        }))}
        OptionChange={(selectedValue: string) => setSelectedDate(selectedValue)}
        defaultOption="날짜 선택"
      />

      <SelectComponent
        options={classes.map((cls) => ({
          id: cls.classNum,
          value: cls.classNum.toString(),
          text: cls.className,
        }))}
        OptionChange={(selectedValue: string) =>
          setSelectedClass(parseInt(selectedValue, 10))
        }
        defaultOption="수업 선택"
      />
      {selectedDate && selectedClass && (
        <AttendanceTable attendanceData={attendanceData} />
      )}
    </div>
  );
};

export default AttendanceCheck;
