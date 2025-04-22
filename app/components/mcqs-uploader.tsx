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
                question: "60% of a number is added to 120, the result is the same number. Find the number?",
                options: ["300", "200", "400", "500"],
                correctAnswer: "300",
                category: "math",
                topic: "Percentage MCQs"
            },
            {
                question: "What is the capital of France?",
                options: ["Paris", "Berlin", "Madrid", "London"],
                correctAnswer: "Paris",
                category: "general-knowledge",
                topic: "World Capitals MCQs"
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4",
                category: "math",
                topic: "Basic Arithmetic MCQs"
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
