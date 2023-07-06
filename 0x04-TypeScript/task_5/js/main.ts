interface MajorCredits {
  credits: number;
  _majorCreditBrand: void;
}

interface MinorCredits {
  credits: number;
  _minorCreditBrand: void;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
   return subject1.credits + subject2.credits;
  
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
   return subject1.credits + subject2.credits;
};
