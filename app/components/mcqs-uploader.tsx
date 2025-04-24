"use client";

import { upload_mcqs } from "../actions/upload_mcqs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function McqsUploader() {
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        setLoading(true);

        //////////////////////////////////////////////////////////////////////////////////////////

        const mcqs = [

            // {
            //     question: "Who is considered the father of Public Administration?",
            //     options: ["Henry Fayol", "Frederick Taylor", "Woodrow Wilson", "Max Weber"],
            //     correctAnswer: "Woodrow Wilson",
            //     category: "general-knowledge",
            //     topic: "public-administration-mcqs"
            // },
            // {
            //     question: "Which approach to Public Administration emphasizes structure and rules?",
            //     options: ["Behavioral Approach", "Classical Approach", "Human Relations Approach", "Modern Approach"],
            //     correctAnswer: "Classical Approach",
            //     category: "general-knowledge",
            //     topic: "public-administration-mcqs"
            // },
            // {
            //     question: "POSDCORB is a concept in Public Administration given by:",
            //     options: ["Luther Gulick", "Herbert Simon", "Chester Barnard", "Henri Fayol"],
            //     correctAnswer: "Luther Gulick",
            //     category: "general-knowledge",
            //     topic: "public-administration-mcqs"
            // },
            // {
            //     question: "Which thinker is associated with the bureaucratic theory?",
            //     options: ["Karl Marx", "Max Weber", "Frederick Taylor", "Woodrow Wilson"],
            //     correctAnswer: "Max Weber",
            //     category: "general-knowledge",
            //     topic: "public-administration-mcqs"
            // },
            // {
            //     question: "What is the smallest prime number?",
            //     options: ["0", "1", "2", "3"],
            //     correctAnswer: "2",
            //     category: "general-knowledge",
            //     topic: "number-system-mcqs"
            // },









            {
                question: "Who is known as the founder of Public Administration?",
                options: ["Max Weber", "Frederick Taylor", "Woodrow Wilson", "Henry Fayol"],
                correctAnswer: "Woodrow Wilson",
                category: "general-knowledge",
                topic: "public-administration-mcqs"
            },
            {
                question: "Which administrative theory is focused on rules and hierarchy?",
                options: ["Human Relations", "Modern", "Classical", "Behavioral"],
                correctAnswer: "Classical Approach",
                category: "general-knowledge",
                topic: "public-administration-mcqs"
            },
            {
                question: "Who developed the concept of POSDCORB?",
                options: ["Henri Fayol", "Luther Gulick", "Peter Drucker", "Herbert Simon"],
                correctAnswer: "Luther Gulick",
                category: "general-knowledge",
                topic: "public-administration-mcqs"
            },
            {
                question: "Which scholar gave the theory of bureaucracy?",
                options: ["Frederick Taylor", "Karl Marx", "Max Weber", "Luther Gulick"],
                correctAnswer: "Max Weber",
                category: "general-knowledge",
                topic: "public-administration-mcqs"
            },


            {
                question: "What is the smallest old number?",
                options: ["0", "1", "2", "3"],
                correctAnswer: "2",
                category: "general-knowledge",
                topic: "number-system-mcqs"
            }


        ];




        ///////////////////////////////////////////////////////////////////////////////////////////

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
