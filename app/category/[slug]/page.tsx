
import Typography from "@/components/ui/typography";
import TopicLinks from "@/app/components/topic-links";
import { categoryTopics } from "@/lib/topics";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function McqsByCategory(props: Props) {
    const { slug } = await props.params;


    const topics = categoryTopics[slug] || [];

    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
            <Typography variant="h2" className="capitalize text-center">{slug.replace(/-/g, " ")} MCQs Topics</Typography>

            {topics.length > 0 && (
                <TopicLinks category={slug} topics={topics} />
            )}

        </div>

    );
}
