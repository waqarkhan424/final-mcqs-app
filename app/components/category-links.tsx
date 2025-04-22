
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";



import {
    BookOpenText,
    Monitor,
    Languages,
    BookType,
    Landmark,
    Calculator,
    FlaskConical,
    Atom,
    MoonStar,
    Globe,
    Newspaper,
    BadgeCheck
} from "lucide-react";



const categories = [
    { key: "general-knowledge", label: "General Knowledge", icon: BookOpenText, color: "text-yellow-600" },
    { key: "current-affairs", label: "Current Affairs", icon: Newspaper, color: "text-blue-600" },
    { key: "ppsc", label: "PPSC", icon: BadgeCheck, color: "text-emerald-600" },

    { key: "everyday-science", label: "Everyday Science", icon: FlaskConical, color: "text-cyan-600" },
    { key: "general-science", label: "General Science", icon: Atom, color: "text-indigo-600" },
    { key: "math", label: "Math", icon: Calculator, color: "text-purple-600" },

    { key: "pak-study", label: "Pak Study", icon: Landmark, color: "text-red-600" },
    { key: "geography", label: "Geography", icon: Globe, color: "text-green-600" },
    { key: "islamic-study", label: "Islamic Study", icon: MoonStar, color: "text-orange-600" },

    { key: "english", label: "English", icon: BookType, color: "text-pink-600" },
    { key: "urdu", label: "Urdu", icon: Languages, color: "text-rose-600" },

    { key: "computer", label: "Computer", icon: Monitor, color: "text-teal-600" },
];








export default function CategoryLinks() {
    const router = useRouter();

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">


            <Typography variant="h2" className="mb-6 text-center">
                Choose a Subject to Begin
            </Typography>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <Card
                            key={cat.key}
                            onClick={() => router.push(`/mcqs/${cat.key}`)}
                            className="cursor-pointer bg-yellow-50 transition rounded-xl border-none shadow-sm"
                        // className="cursor-pointer bg-yellow-50 transition-transform transform hover:-translate-y-1 hover:shadow-md rounded-xl border-none"
                        >
                            <CardContent className="p-5 flex items-center gap-3 font-medium text-blue-600 underline underline-offset-2">
                                <Icon className={`w-5 h-5 ${cat.color}`} />
                                {cat.label} MCQs
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
