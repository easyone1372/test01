//쓰레기 코드
//강사님이 경악하신 이유가 있음 진심 쓰레기임

// export type connectInfo = [
//   {
//     checkNum: 1;
//     checkMessage: "지각";
//   },
//   {
//     checkNum: 2;
//     checkMessage: "출석";
//   },
//   {
//     checkNum: 3;
//     checkMessage: "결석";
//   }
// ];

type connectInfoDataProps = {
  checkNum: number;
  checkMessage: string;
};

export const connectInfoData: connectInfoDataProps[] = [
  {
    checkNum: 1,
    checkMessage: "지각",
  },
  {
    checkNum: 2,
    checkMessage: "출석",
  },
  {
    checkNum: 3,
    checkMessage: "결석",
  },
];
