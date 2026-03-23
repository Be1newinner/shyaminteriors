import { allProjects } from "@/offline_data/index";
import Image from "next/image";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = allProjects[slug];

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-glorify text-[var(--color-text)]">
          Project not found.
        </p>
      </main>
    );
  }
  const [heroImage, ...galleryImages] = data.images;
  const parseSize = (v: string) => parseInt(v, 10);

  return (
    <main className="min-h-screen flex mt-20 md:mt-45">
      {/* ── Hero Title ── */}
      <section className="px-2 sm:px-8 md:px-12  pt-12  flex flex-col justify-center items-center gap-20">
        {/* ── Hero Section ── */}
        <section className="w-full">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-medium leading-tight md:leading-none font-glorify uppercase text-[var(--color-text)] text-center px-4">
            {data.title}
          </h1>

          {/* ── Hero Image ── */}
          <div className="w-full overflow-hidden py-4 md:py-8">
            <Image
              src={data.images[0].src}
              alt={data.images[0].alt}
              width={parseSize(data.images[0].width)}
              height={parseSize(data.images[0].height)}
              className="w-full h-[60vw] md:h-[40vw] min-h-[250px] max-h-[700px] object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Description ── */}
        <section className="flex flex-col justify-center items-center gap-10 md:gap-20 w-full">
          {/* ── About the project ── */}
          <section>
            <div className="flex flex-col gap-3">
              <div
                key={data.description[0].subtitle}
                className="flex flex-col lg:flex-row gap-8 lg:gap-5 w-full items-start justify-center p-4 md:p-5"
              >
                <h2 className="w-full lg:w-1/2 text-4xl md:text-[3.5rem] uppercase tracking-widest font-bold font-glorify text-[var(--color-text)]  pb-2">
                  {data.description[0].subtitle}
                </h2>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) ">
                    {data.description[0].content[0]}
                  </p>
                  <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) ">
                    {data.description[0].content[1]}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Gallery ── */}
          <section className="flex flex-col justify-center items-center w-full px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="w-full md:w-1/2">
                <Image
                  src={data.images[1].src}
                  alt={data.images[1].alt}
                  width={parseSize(data.images[1].width)}
                  height={parseSize(data.images[1].height)}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={data.images[2].src}
                  alt={data.images[2].alt}
                  width={parseSize(data.images[2].width)}
                  height={parseSize(data.images[2].height)}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* ── Design concept ── */}
          <section>
            <div className="flex flex-col gap-3">
              <div
                key={data.description[1].subtitle}
                className="flex flex-col lg:flex-row gap-8 lg:gap-5 w-full items-start justify-center p-4 md:p-5"
              >
                <h2 className="w-full lg:w-1/2 text-4xl md:text-[3.5rem] uppercase tracking-widest font-bold font-glorify text-[var(--color-text)]  pb-2">
                  {data.description[1].subtitle}
                </h2>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4">
                  <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) ">
                    {data.description[1].content[0]}
                  </p>
                  <div className="flex flex-col gap-3 ps-2 md:ps-5">
                    <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) flex flex-row items-center gap-3">
                      <Image
                        src="/images/icon/check-mark.png"
                        alt="checkmark"
                        width={20}
                        height={20}
                        className="w-5 h-5 shrink-0"
                      />
                      {data.description[1].content[1]}
                    </p>
                    <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) flex flex-row items-start gap-3">
                      <Image
                        src="/images/icon/check-mark.png"
                        alt="checkmark"
                        width={20}
                        height={20}
                        className="w-5 h-5 mt-1 shrink-0"
                      />
                      {data.description[1].content[2]}
                    </p>
                    <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) flex flex-row items-start gap-3">
                      <Image
                        src="/images/icon/check-mark.png"
                        alt="checkmark"
                        width={20}
                        height={20}
                        className="w-5 h-5 mt-1 shrink-0"
                      />
                      {data.description[1].content[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Gallery ── */}
          <section className="flex w-full flex-col justify-center items-center gap-5 px-4 md:px-10">
            <div className="w-full ">
              <Image
                src={data.images[3].src}
                alt={data.images[3].alt}
                width={parseSize(data.images[3].width)}
                height={parseSize(data.images[3].height)}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div className="w-full md:w-1/2">
                <Image
                  src={data.images[4].src}
                  alt={data.images[4].alt}
                  width={parseSize(data.images[4].width)}
                  height={parseSize(data.images[4].height)}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={data.images[5].src}
                  alt={data.images[5].alt}
                  width={parseSize(data.images[5].width)}
                  height={parseSize(data.images[5].height)}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* ── Finishing & Touches ── */}
          <section>
            <div className="flex flex-col gap-3">
              <div
                key={data.description[2].subtitle}
                className="flex flex-col lg:flex-row gap-8 lg:gap-5 w-full items-start justify-center p-4 md:p-5"
              >
                <h2 className="w-full lg:w-1/2 text-4xl md:text-[3.5rem] uppercase tracking-widest font-bold font-glorify text-[var(--color-text)]  pb-2">
                  {data.description[2].subtitle}
                </h2>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) ">
                    {data.description[2].content[0]}
                  </p>
                  <p className="text-lg md:text-[20px] leading-relaxed text-(--color-text-muted) ">
                    {data.description[2].content[1]}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
