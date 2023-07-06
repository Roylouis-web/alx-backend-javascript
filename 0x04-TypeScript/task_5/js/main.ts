interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'subject1',
  };
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'subject2',
  };
};
