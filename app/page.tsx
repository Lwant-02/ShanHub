import { NeonBadge } from "@/components/NeonBadge";
import { ParticleText } from "@/components/ParticleText";

export default function Page() {
  return (
    <section className="min-h-screen w-full justify-center items-center pt-20">
      <div className="max-w-6xl mx-auto xl:px-0 px-3 h-full">
        <div className="flex flex-col w-full h-full gap-7 justify-center items-center">
          <NeonBadge color="green" className="text-center">
            ယိၼ်းလီႁပ်ႉတွၼ်ႊယူႇၶႃႈ 👋
          </NeonBadge>
          <div className="flex flex-col gap-4 justify-center items-center">
            <ParticleText text="ShanHub" />
            <p className="text-center text-2xl font-bold">
              ShanHub ၼႆႉ ပဵၼ် တီႈၸူႉတုမ်ႊ ဢႅပ်ႉပလီၵေးသိၼ်းတႆးႁဝ်း လႄႈ <br />
              ၶူင်ႊသၢင်ႈမႃး တႃႇပီႈၼွင်ႉတႆးႁဝ်း ႁႂ်ႈပေႃးၸႂ်ႉလႆႈ ငၢႆႈငႅမ်ႈၼႆၶႃႈ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
