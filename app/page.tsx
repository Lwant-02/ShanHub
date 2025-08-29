import { FeatureCard } from "@/components/FeatureCard";
import { NeonBadge } from "@/components/NeonBadge";
import { ParticleText } from "@/components/ParticleText";
import ShimmerButton from "@/components/ShimmerButton";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 justify-center items-center py-20">
      <section className="flex flex-col w-full h-full gap-7 justify-center items-center">
        <NeonBadge color="green" className="text-center">
          ယိၼ်းလီႁပ်ႉတွၼ်ႊယူႇၶႃႈ 👋
        </NeonBadge>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center">
            <ParticleText text="Discover, learn, and connect with Shan tools in one hub" />
          </div>
          <p className="text-center xl:text-3xl text-xl font-bold opacity-80">
            Made for the Shan community, ShanHub brings useful tools and
            resources together to make learning and using Shan easier.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <ShimmerButton
            text="Start Exploring"
            color="green"
            link="/dashboard"
          />
        </div>
      </section>

      <section className="flex flex-col w-full h-full gap-7 justify-center items-center mt-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="xl:text-4xl text-2xl font-bold ">Key Features</h1>
          <p className="text-center text-lg opacity-80">
            ShanHub offers a range of features to enhance your Shan learning and
            usage experience.
          </p>
        </div>
        {/* <div className="grid xl:grid-cols-4 grid-cols-1 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((feature, index) => (
            <FeatureCard key={index}>
              <h2 className="text-xl font-bold">{feature}</h2>
            </FeatureCard>
          ))}
        </div> */}
      </section>
    </div>
  );
}
