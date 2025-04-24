"use server";

import prisma from "@/lib/prisma";
import slugify from "slugify";

//  Normalize answers: lowercase + remove spaces/punctuation
function normalizeAnswer(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();
}

export async function upload_mcqs(mcqs: {
    question: string;
    options: string[];
    correctAnswer: string;
    category: string;
    topic: string;
}[]) {
    const insertCount = { success: 0, skipped: 0 };

    for (const mcq of mcqs) {
        const slugTopic = slugify(mcq.topic, { lower: true, strict: true });

        //  Fetch existing correctAnswers for this topic
        const existing = await prisma.question1.findMany({
            where: { topic: slugTopic },
            select: { correctAnswer: true },
        });

        const normalizedExistingAnswers = existing.map((q) =>
            normalizeAnswer(q.correctAnswer)
        );

        const currentNormalizedAnswer = normalizeAnswer(mcq.correctAnswer);

        // Skip if normalized correctAnswer already exists
        if (normalizedExistingAnswers.includes(currentNormalizedAnswer)) {
            insertCount.skipped++;
            console.log("Skipped (duplicate answer):", mcq.correctAnswer);
            continue;
        }

        //  Insert new question
        await prisma.question1.create({
            data: {
                ...mcq,
                topic: slugTopic,
            },
        });

        insertCount.success++;
    }

    console.log(
        `Upload complete: ${insertCount.success} inserted, ${insertCount.skipped} skipped.`
    );
}
