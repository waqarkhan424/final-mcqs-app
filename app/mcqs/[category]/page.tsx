import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import TopicLinks from "@/app/components/topic-links";
import { categoryTopics } from "@/lib/topics";

interface Props {
    params: Promise<{ category: string }>;
}

export default async function McqsByCategory(props: Props) {
    const { category } = await props.params;

    const questions = await prisma.question1.findMany({
        where: { category },
    });

    const topics = categoryTopics[category] || [];

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <Typography variant="h2" className="capitalize text-center">{category.replace(/-/g, " ")} MCQs Topics</Typography>

            {topics.length > 0 && (
                <TopicLinks category={category} topics={topics} />
            )}

            <EditDeleteMcqsList questions={questions} />
        </div>

    );
}
