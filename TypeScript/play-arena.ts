type MultipleChoiceLesson = {
    kind: "multiple-choice"; // Discriminant property
    question: string;
    studentAnswer: string;
    correctAnswer: string;
};

type CodingLesson = {
    kind: "coding"; // Discriminant property
    studentCode: string;
    solutionCode: string;
};

type Lesson = MultipleChoiceLesson | CodingLesson;

function isCorrect(lesson: Lesson): boolean {
    switch (lesson.kind) {
        case "multiple-choice":
            return lesson.studentAnswer === lesson.correctAnswer;
        case "coding":
            return lesson.studentCode === lesson.solutionCode;
    }
}

// console.log(isCorrect());

