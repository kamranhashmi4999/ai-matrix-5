"use client"

import { Button, Input } from "@mantine/core";
import { useState } from "react";

const ChatbotForm = ({ index, respondData, setFormAnswers }: { index: number, respondData: any, setFormAnswers: Function }) => {
    const [formValues, setFormValues] = useState<any>({ ...respondData, questions: respondData.questions.map((question: any) => ({ ...question, answer: '' })) });
    const handleInputChange = (value: any, question: string) => {
        const questionIndex = formValues.questions.findIndex((q: any) => q.question === question);
        if (questionIndex !== -1) {
            const updatedQuestions = [...formValues.questions];
            if (updatedQuestions[questionIndex].type === 'yes_no') {
                updatedQuestions[questionIndex] = {
                    question,
                    answer: value,
                };
            } else if (updatedQuestions[questionIndex].type === 'checkboxes') {
                let answer: string[] = [];
                if (typeof updatedQuestions[questionIndex].answer === 'string') {
                    answer = (updatedQuestions[questionIndex].answer as string).split(', ');
                }
                if (answer.includes(value)) {
                    answer = answer.filter((item) => item !== value)
                } else {
                    answer.push(value);
                }
                updatedQuestions[questionIndex] = {
                    question,
                    answer: answer.length > 1 ? answer.join(', ') : answer[0],
                };
            } else {
                updatedQuestions[questionIndex] = {
                    question,
                    answer: value,
                }
            }
            setFormValues({
                ...formValues,
                questions: updatedQuestions,
            });
        }
    };

    const submitForm = (e: any) => {
        e.preventDefault()
        setFormAnswers(formValues.questions)
        console.log(formValues.questions)
    }

    return (
        <form onSubmit={submitForm} className="my-4 w-full rounded-lg p-6 text-xs">
            {formValues.questions.map((question: any) => {
                if (question.type === 'multiple_choice') {
                    return (
                        <div key={question.question} className="mb-8">
                            <label className="mb-3">{question.question}</label>
                        </div>
                    );
                } else if (question.type === 'checkboxes') {
                    return (
                        <div key={question.question} className="my-8">
                            <label className="mb-3">{question.question}</label>
                        </div>
                    );
                } else if (question.type === 'yes_no') {
                    return (
                        <div key={question.question} className="my-8">
                            <label className="mb-3">{question.question}</label>
                        </div>
                    );
                } else if (question.type === 'text_area') {
                    return (
                        <div key={question.question} className="my-8">
                            <label className="mb-3">{question.question}</label>
                        </div>
                    );
                } else if (question.type === 'range_selector') {
                    return (
                        <div key={question.question} className="my-8">
                            <label className="mb-3">{question.question}</label>
                        </div>
                    );
                } else if (question.type === 'input') {
                    return (
                        <div key={question.question} className="my-8">
                            <label className="mb-3">{question.question}</label>
                            <Input
                                placeholder="Enter your answer"
                                onChange={(value: any) => handleInputChange(value, question.question)}
                            />
                        </div>

                    );
                } else {
                    return null
                }
            })}
            <div className="w-full flex justify-end">
                {formValues.questions.length > 0 && <Button className="cursor-pointer" type="submit">Answer Without Questions</Button>}
            </div>
        </form>
    )
}

export default ChatbotForm