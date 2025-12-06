import Image from 'next/image';
import { Container } from '../layout/Container';

export function ConorHighlightSection() {
  const bullets = [
    '13+ years of hands-on talent development across both agency and corporate environments',
    'Insider knowledge of competitive hiring landscapes — especially in high-growth industries',
    'Trusted partnership style that balances honesty, patience, and forward momentum',
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/headshots/Conor-headshot.webp"
              alt="Conor Boland, Chief Talent Officer at Purple Unicorn"
              width={400}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4f2170] mb-2">
                Conor Boland
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                Chief Talent Officer
              </p>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Conor has built a reputation as a go-to advisor for evolving professionals, stemming from his 12+ years of experience in talent identification and career advancement.
              </p>
              <p>
                He's known for his roll-up-your-sleeves immersive style - combining empathy, accountability, and real-world strategy, helping all levels of professionals unlock their next chapter. His journey began in the competitive world of agency recruiting, giving him a sharp lens into what it takes to win in today's employment market.
              </p>
              <p>
                Conor has impacted the talent caliber at companies like Ford, Amazon, Chewy, and Hitachi. Whether supporting first-time managers to executive organization leaders aiming higher.
              </p>
            </div>
            <div className="pt-4 space-y-3">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                  <p className="text-slate-700">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
