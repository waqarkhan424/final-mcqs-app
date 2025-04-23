"use server";

import prisma from "@/lib/prisma";
import slugify from "slugify";


export async function upload_mcqs(mcqs: {
    question: string;
    options: string[];
    correctAnswer: string;
    category: string;
    topic: string;
}[]) {


    const formattedMcqs = mcqs.map((mcq) => ({
        ...mcq,
        topic: slugify(mcq.topic, { lower: true, strict: true }),
    }));

    try {
        await prisma.question1.createMany({
            data: formattedMcqs,
        });




        console.log("MCQs uploaded successfully");

    } catch (error) {

        console.error("Failed to upload MCQs", error)
    }
}
