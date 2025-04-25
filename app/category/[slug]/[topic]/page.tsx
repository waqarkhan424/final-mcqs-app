import prisma from "@/lib/prisma";
import EditDeleteMcqsList from "@/app/components/edit-delete-mcqs-list";
import Typography from "@/components/ui/typography";
import { categoryTopics } from "@/lib/topics";
import slugify from "slugify"

interface Props {
    params: { slug: string; topic: string };

}

export default async function McqsByTopic(props: Props) {
    const { slug, topic } = await props.params;


    const decodedTopic = decodeURIComponent(topic);

    const originalTopics = categoryTopics[slug] || [];
    const originalTopic = originalTopics.find(
        (t) => slugify(t, { lower: true, strict: true }) === decodedTopic
    );




    const questions = await prisma.question1.findMany({
        where: {
            category: slug,
            topic: decodedTopic,
        },
    });

    return (

        <div className="px-4 pt-12 pb-20 sm:pt-16 sm:pb-28 max-w-5xl mx-auto space-y-6">
            <div className="pb-4 space-y-2 text-left">
                <Typography variant="h2" className="capitalize">
                    {originalTopic || decodedTopic.replace(/-/g, " ")}
                </Typography>
            </div>

            <EditDeleteMcqsList questions={questions} />
        </div>

    );
}
