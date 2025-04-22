"use client";

import Link from "next/link";

export default function TopicLinks({ category, topics }: { category: string, topics: string[] }) {

    return (
        <div className="space-y-3">
            <ol className="list-decimal pl-5 space-y-1">
                {topics.map((topic, idx) => (
                    <li key={idx}>

                        <Link
                            href={`/mcqs/${category}/${encodeURIComponent(topic)}`}
                            className="text-blue-700 underline font-medium hover:text-blue-900"
                        >
                            {topic}
                        </Link>

                    </li>
                ))}
            </ol>
        </div>
    );
}
