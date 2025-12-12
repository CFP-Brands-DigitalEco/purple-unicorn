import Image from 'next/image';
import { Container } from '../layout/Container';

interface TeamMemberHighlightSectionProps {
  name: string;
  title: string;
  imageSrc: string;
  paragraphs: string[];
  bullets: string[];
}

export function TeamMemberHighlightSection({
  name,
  title,
  imageSrc,
  paragraphs,
  bullets,
}: TeamMemberHighlightSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <Image
                src={imageSrc}
                alt={name}
                width={450}
                height={550}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#4f2170] mb-2">
                {name}
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                {title}
              </p>
            </div>

            <div className="space-y-4 text-slate-800 text-lg leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {bullets.length > 0 && (
              <div className="pt-4 space-y-3">
                {bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#4f2170] font-bold text-xl mt-1">✓</span>
                    <p className="text-slate-800">{bullet}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
