// src/components/atom/useStudents.ts
import { useState, useEffect } from "react";

export type Student = {
  studentID: number;
  studentName: string;
};

const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/studentNames");
        if (!response.ok) {
          throw new Error("학생 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return { students, loading, error };
};

export default useStudents;
