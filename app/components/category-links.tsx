
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";



import {
    BookOpenText,
    Monitor,
    BookType,
    Landmark,
    Calculator,
    FlaskConical,
    Atom,
    MoonStar,
    Newspaper,
    BadgeCheck
} from "lucide-react";






const categories = [
    { key: "english", label: "English", icon: BookType, color: "text-pink-600" },
    { key: "general-knowledge", label: "General Knowledge", icon: BookOpenText, color: "text-yellow-600" },
    { key: "current-affairs", label: "Current Affairs", icon: Newspaper, color: "text-blue-600" },
    { key: "pakistan-studies", label: "Pakistan Studies", icon: Landmark, color: "text-red-600" },
    { key: "islamic-studies", label: "Islamic Studies", icon: MoonStar, color: "text-orange-600" },
    { key: "mathematics", label: "Mathematics", icon: Calculator, color: "text-purple-600" },
    { key: "everyday-science", label: "Everyday Science", icon: FlaskConical, color: "text-cyan-600" },
    { key: "computer", label: "Computer", icon: Monitor, color: "text-teal-600" },
    { key: "iq", label: "IQ / Logical Reasoning", icon: Atom, color: "text-indigo-600" },
];




const pastPapers = [
    { key: "fia", label: "FIA", icon: BadgeCheck, color: "text-emerald-600" },
    { key: "ib", label: "Intelligence Bureau", icon: BadgeCheck, color: "text-lime-600" },
    { key: "nab", label: "NAB", icon: BadgeCheck, color: "text-green-600" },
    { key: "anti-corruption", label: "Anti-Corruption", icon: BadgeCheck, color: "text-pink-600" },
    { key: "education", label: "Education Department", icon: BadgeCheck, color: "text-cyan-600" },
    { key: "ppsc", label: "PPSC", icon: BadgeCheck, color: "text-rose-600" },
    { key: "fpsc", label: "FPSC", icon: BadgeCheck, color: "text-indigo-600" },
    { key: "spsc", label: "SPSC", icon: BadgeCheck, color: "text-violet-600" },
    { key: "police", label: "Police", icon: BadgeCheck, color: "text-blue-600" },
];





export default function CategoryLinks() {
    const router = useRouter();

    return (


        <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

            <div>
                <Typography variant="h2" className="mb-6 text-center">
                    Choose a Subject to Begin
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Card
                                key={cat.key}
                                onClick={() => router.push(`/category/${cat.key}`)}
                                className="cursor-pointer bg-yellow-50 transition rounded-xl border-none shadow-sm"
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

            <div>
                <Typography variant="h2" className="mb-6 text-center">
                    Past Paper MCQs
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {pastPapers.map((paper) => {
                        const Icon = paper.icon;
                        return (
                            <Card
                                key={paper.key}
                                onClick={() => router.push(`/category/${paper.key}`)}
                                className="cursor-pointer bg-blue-50 transition rounded-xl border-none shadow-sm"
                            >
                                <CardContent className="p-5 flex items-center gap-3 font-medium text-blue-700 underline underline-offset-2">
                                    <Icon className={`w-5 h-5 ${paper.color}`} />
                                    {paper.label}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

        </div>








    );
}
