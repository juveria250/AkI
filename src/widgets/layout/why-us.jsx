import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { StarIcon } from "@heroicons/react/24/outline";
export function WhyUs() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://lh5.googleusercontent.com/p/AF1QipO-hJdM0E4ViYbq03iO5mjB7XT2iSJwNb5-mglR=w1080-k-no')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="https://t4.ftcdn.net/jpg/05/12/70/39/360_F_512703994_0MwIzaTYBrClCTyFqKcFcSKE1OJ4r2UF.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                   </div> 
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                𝑾𝒆’𝒓𝒆 𝒄𝒐𝒎𝒎𝒊𝒕𝒕𝒆𝒅 𝒕𝒐 𝑬𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒂𝒏𝒅 𝑨𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒃𝒂𝒔𝒆𝒅 𝒍𝒆𝒂𝒓𝒏𝒊𝒏𝒈 𝒂𝒏𝒅 𝒕𝒐 𝒔𝒆𝒓𝒗𝒆 𝒚𝒐𝒖 𝒘𝒊𝒕𝒉 𝒒𝒖𝒂𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒗𝒂𝒍𝒖𝒆 𝑬𝒅𝒖𝒄𝒂𝒕𝒊𝒐𝒏.
                </Typography>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  1.We Love What We Do
                  <br></br>
                  Our Teachers come to work smiling and ready to build your children’s dream.
                  They have a passion for remodeling and are qualified to work on your Expectation.
                  </Typography>
                </div>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  2.We Truly Care
                  <br></br>
                  The right care can ensure the success of any remodeling effort.
                   We believe in partnership & trust and work with you to create a great space.
                  </Typography>
                </div>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  3.Leave it to us
                  <br></br>
                  Doing it yourself doesn’t always pan out. 
                  Rely on our knowledge and experience instead. Your remodeling plan is in the best of hands
                  </Typography>
                </div>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  4.Our Promise to U
                  <br></br>
                  We promise to always provide value and outstanding service, regardless of your lifestyle need,
                   design preference, or budget constraint.
                  </Typography>
                </div>
               </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    “Education is the most powerful weapon which you can use to change the world.”
                    <br></br>
                    -Nelson Mandela
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;



