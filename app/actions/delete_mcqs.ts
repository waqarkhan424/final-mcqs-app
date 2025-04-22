"use server";

import prisma from "@/lib/prisma";

export async function delete_mcqs(id: string) {
    try {
        await prisma.question1.delete({
            where: { id },
        });
    } catch (err) {
        console.error("Error deleting question:", err);
    }
}
