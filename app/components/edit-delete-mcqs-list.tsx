"use client";

import { useState } from "react";
import { delete_mcqs } from "@/app/actions/delete_mcqs";
import { update_mcqs } from "@/app/actions/update_mcqs";

import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";



export default function EditDeleteMcqsList({ questions }: { questions: any[] }) {
    return (
        <>
            {questions.map((q) => (
                <EditDeleteMCQ key={q.id} q={q} />
            ))}
        </>
    );
}

function EditDeleteMCQ({ q }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const [question, setQuestion] = useState(q.question);
    const [options, setOptions] = useState(q.options);
    const [correctAnswer, setCorrectAnswer] = useState(q.correctAnswer);
    const [deleted, setDeleted] = useState(false);

    if (deleted) return null;

    async function handleDelete() {
        await delete_mcqs(q.id);
        setDeleted(true);
    }

    async function handleSave() {
        await update_mcqs(q.id, {
            question,
            options,
            correctAnswer,
        });
        setIsEditing(false);
    }

    return (


        <div className="space-y-2 pb-6 border-b border-muted">
            <Typography variant="h3">
                {isEditing ? (
                    <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
                ) : (
                    q.question
                )}
            </Typography>

            <ul className="list-none pl-2 space-y-0.5">
                {options.map((opt: string, idx: number) => (
                    <li key={idx}>
                        {String.fromCharCode(65 + idx)}.{" "}
                        {isEditing ? (
                            <Input
                                value={opt}
                                onChange={(e) => {
                                    const newOptions = [...options];
                                    newOptions[idx] = e.target.value;
                                    setOptions(newOptions);
                                }}
                            />
                        ) : (
                            <span
                                className={
                                    opt === correctAnswer
                                        ? "text-green-700 font-semibold"
                                        : ""
                                }
                            >
                                {opt}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            {isEditing && (
                <>
                    <Label className="mt-2 block">Correct Answer:</Label>
                    <Input
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                    />
                </>
            )}

            {process.env.NODE_ENV !== "production" && (
                <div className="flex gap-4 mt-2">
                    {isEditing ? (
                        <>
                            <Button size="sm" onClick={handleSave}>
                                Save
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* <Button size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
                            <Button size="sm" variant="destructive" onClick={handleDelete}>
                                Delete
                            </Button> */}
                        </>
                    )}
                </div>
            )}
        </div>




    );
}
