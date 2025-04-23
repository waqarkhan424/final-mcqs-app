import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import { categoryTopics } from "@/lib/topics";
import slugify from "slugify"

interface Props {
    params: { category: string; topic: string };
}

export default async function McqsByTopic(props: Props) {
    const { category, topic } = await props.params;

    const decodedTopic = decodeURIComponent(topic);

    const originalTopics = categoryTopics[category] || [];
    const originalTopic = originalTopics.find(
        (t) => slugify(t, { lower: true, strict: true }) === decodedTopic
    );




    const questions = await prisma.question1.findMany({
        where: {
            category,
            topic: decodedTopic,
        },
    });

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <Typography variant="h2" className="text-center capitalize">
                {originalTopic || decodedTopic.replace(/-/g, " ")}
            </Typography>
            <EditDeleteMcqsList questions={questions} />
        </div>
    );
}
