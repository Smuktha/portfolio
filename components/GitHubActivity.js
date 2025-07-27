import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

export default function GitHubActivity() {
  return (
    <section className="bg-darkBg text-white py-20 px-6 font-body">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading text-white">
          📊 GitHub Activity
        </h2>
        <p className="text-subtleText text-lg mb-10">
          Here’s a glimpse of my recent contributions and coding streaks. I love pushing consistent commits and building cool things.
        </p>

        {/* GitHub Calendar */}
        <div className="bg-[#1A1A1D] border border-neutral-800 rounded-xl p-8">
          <GitHubCalendar
            username="Smuktha"
            colorScheme="dark"
            blockSize={14}
            blockMargin={6}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
}
