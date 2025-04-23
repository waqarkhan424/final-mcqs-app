"use client";

import { upload_mcqs } from "../actions/upload_mcqs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function McqsUploader() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);


        const mcqs = [
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correctAnswer: "Pacific Ocean",
                category: "general-knowledge",
                topic: "World’s Famous Airlines – One-Liner"
            },
            {
                question: "Who wrote the national anthem of Pakistan?",
                options: ["Allama Iqbal", "Hafeez Jullundhri", "Faiz Ahmed Faiz", "Ahmed Faraz"],
                correctAnswer: "Hafeez Jullundhri",
                category: "general-knowledge",
                topic: "Languages MCQs"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Jupiter", "Mars", "Venus"],
                correctAnswer: "Mars",
                category: "general-knowledge",
                topic: "List of International Boundary Lines"
            }
        ];




        await upload_mcqs(mcqs);
        setLoading(false);
    };

    return (
        <Button
            onClick={handleUpload}
            disabled={loading}
        >
            {loading ? "Uploading..." : "Upload MCQs"}
        </Button>
    );
}
