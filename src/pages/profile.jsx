import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        {/* <div className="bg-profile-background absolute top-0 h-full w-full bg-
        [url('/img/background-1.jpg')] bg-cover bg-center" /> */}
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
                        // src="/img/team-2.jpg"
                        src="https://lh5.googleusercontent.com/p/AF1QipO-hJdM0E4ViYbq03iO5mjB7XT2iSJwNb5-mglR=w1080-k-no"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  {/* <Button className="bg-blue-400"></Button> */}
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    {/* <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography> */}
                     {/* </div> */}
                   </div> 
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                  A.K.I GOREGAON
                </Typography>
                <div className="mb-12 flex items-center justify-center gap-2">
                  <div class="mapouter">
                    <div class="gmap_canvas">
                      <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="100%" marginwidth="0" src="https://maps.google.com/maps?width=564&amp;height=353&amp;hl=en&amp;q=A.K.I GOREGAON RAIGARH INDIA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                        <a href="https://www.gachacute.com/">
                          </a>
                          </div>
                  </div>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    GOREGAON, MANGAON, RAIGARH
                  </Typography>
                  </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    FOR ADMISSION CONTACT:
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  Principle AKI Jr.college Goregaon PhNo :02140-250213 
                  <br></br>
                  Mobile: 9764358649/8999661907/8446413843
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    HIGH SCHOOL AND JUNIOUR COLLEGE
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Education! Race with No Finish Line.
                    </Typography>
                    {/* <Button variant="text">Show more</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="bg-blue-gray-50/50">
        <Footer />
      </div> */}
    </>
  );
}

export default Profile;
