type Question = {
  learningId: number;
  score: {
    success: number;
    failure: number;
    __typename: string;
  };
  type: string;
  okulusAssets: {
    s3swhUrl: string;
    mime: string;
    __typename: string;
  }[];
  _id: string;
  text: string;
  audioText: string | null;
  explanation: {
    text: string;
    audioText: string | null;
    __typename: string;
  };
  possibleAnswers: {
    _id: string;
    learningId: number;
    audioText: string | null;
    text: string;
    isCorrect: boolean;
    __typename: string;
  }[];
  __typename: string;
};

export type { Question };
