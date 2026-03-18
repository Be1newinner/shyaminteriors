import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allServices } from "@/offline_data";

async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = allServices[slug];

  const otherServices = Object.values(allServices)
    .filter(Boolean)
    .filter((service) => service.slug !== slug);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-4xl text-center">Service not found.</p>
      </main>
    );
  }

  return (
    <section className="mt-30 sm:mt-50">
      <h1 className="text-4xl font-bold text-center py-10 sm:text-9xl">
        {service?.title}
      </h1>

      <div className="w-full h-[60vw] relative sm:h-screen">
        <Image
          className="object-cover"
          src={service?.heroImage}
          alt="service-01"
          fill
        />
      </div>

      {/* text part */}
      <div className="mt-10 px-4 sm:flex sm:gap-10 sm:px-30">
        <div className="sm:w-[60%]">
          <div>
            <h3 className="text-3xl font-bold pt-7 pb-5 sm:text-6xl sm:font-light sm:text-center">
              SERVICES OVERVIEW
            </h3>
            <p className="font-sans text-[#666666] font-semibold sm:text-xl sm:max-w-[90%]">
              {service?.overview}
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold pt-7 pb-5 sm:text-6xl sm:font-light sm:text-center">
              DESIGN PROCESS
            </h3>
            <p className="font-sans text-[#666666] font-semibold sm:text-xl sm:max-w-[90%]">
              {service?.process}
            </p>
          </div>
          {/* image part 1 */}
          <div className="relative h-[70svh] w-full my-10 sm:w-[90%] sm:h-[120svh]">
            <Image
              className="object-cover"
              src={service?.images[0]}
              alt="service-01"
              fill
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-9 ">
            <div className="flex justify-center items-center h-[40vw] w-full sm:h-[20vh]">
              <div className="relative h-[40vw] w-[90%] sm:h-[20vh]">
                <Image
                  className="object-contain"
                  src="/service/award-badge.webp"
                  alt="award-badge"
                  fill
                />
              </div>
            </div>

            <p className="text-[#666666] font-semibold sm:max-w-[85%] font-sans sm:font-bold">
              Working for almost 10 years, when that presents a skilled team is
              dedicated to creating unique and functional designs that enhance
              the lives of live and work in them.
            </p>
          </div>
        </div>

        {/* awards part */}
        <div className="sm:w-[40%]">
          {/* other links part */}
          <div className="bg-[#2d2d2d] px-4 my-10">
            <h4 className="text-4xl font-bold pt-7 pb-5">OTHER SERVICES</h4>
            <ul className="*:hover:text-white">
              {otherServices.map((item) => (
                <li
                  key={item.slug}
                  className="flex justify-between items-center py-5 border-b-[0.5px] border-[#666666] group"
                >
                  <Link
                    className="text-2xl font-sans text-[#666666]"
                    href={`/services/${item.slug}`}
                  >
                    {item.title}
                  </Link>

                  <ArrowRight
                    size={28}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* double image part */}
          <div className="flex flex-col justify-center items-center gap-10 ">
            <div className="relative h-[70svh] w-full sm:h-[95svh]">
              <Image
                className="object-cover"
                src={service?.images[1]}
                alt="service-01"
                fill
              />
            </div>
            <div className="relative h-[70svh] w-full sm:h-[95svh]">
              <Image
                className="object-cover"
                src={service?.images[2]}
                alt="service-01"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* video part */}

      <div className="w-full mt-20 h-[30svh] relative sm:h-[95svh]">
        <video
          className="object-cover w-full h-full inset-0"
          src="/assets/interior-designer.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
}

export default ServiceSlugPage;
