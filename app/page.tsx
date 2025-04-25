import McqsUploader from "./components/mcqs-uploader";
import CategoryLinks from "./components/category-links";
import Typography from "@/components/ui/typography";


export default function Home() {

  return (

    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <Typography variant="h2" className="text-2xl font-bold">
          Welcome to <span className="text-primary font-serif">one</span><span className="text-muted-foreground font-serif">paper</span>
        </Typography>
        <Typography className="text-muted-foreground text-sm sm:text-base">
          Prepare for government jobs with topic-wise One Paper MCQs – English, GK, Current Affairs, Islamic Studies, Math, Computer, and more.
        </Typography>
      </div>

      <CategoryLinks />

      {/* <McqsUploader /> */}

    </div>


  );
}
