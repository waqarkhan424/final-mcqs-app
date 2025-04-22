import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";

interface Props {
    params: { category: string; topic: string };
}

export default async function McqsByTopic({ params }: Props) {
    const { category, topic } = params;

    const decodedTopic = decodeURIComponent(topic); // handle URL-safe topic

    const questions = await prisma.question1.findMany({
        where: {
            category,
            topic: decodedTopic,
        },
    });

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <Typography variant="h2" className="text-center capitalize">
                {decodedTopic}
            </Typography>
            <EditDeleteMcqsList questions={questions} />
        </div>
    );
}
