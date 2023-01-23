import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
export function PageCourses() {
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qWv3hQuKst50f3mP4LrPyMoMPf_exGiHi0JdNYNilo8SILM5FQUrkwBeX3ujFW4GS8Q&usqp=CAU"
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
              <ScrollAnimationWrapper>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Courses We Offered:
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  Primary with Upper Primary & Secondary & Higher Secondary:(Urdu & Semi-English)
                  <br></br>
                  Primary: GRADE-V
                  <br></br>
                  Upper Primary: GRADE-VI to VIII
                  <br></br>
                  Secondary: GRADE-IX TO X
                  <br></br>
                  Higher Secondary: GRADE-XI to XII(Arts,Commerce & Science)
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                    Other Courses:
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  Vocational Training Courses
                  <br></br>
                  Recognized by:
                  <br></br>
                  Maharashtra State Board of Vocational Education & Examintions(MSBVEE) Government of Maharshtra
                  <br></br>
                  Desk Top Publishing
                  <br></br>
                  &
                  <br></br>
                  Air Conditioning & Refrigaration Mechanic
                  <br></br>
                  Qualification: SSC 
                   <br></br>
                   Duration: 6 Months
                   <br></br>
                   (PERSON WHO HAVE ALREADY TAKEN ADMISSION IN OTHER COURSES/INSTITUTIONS CAN ALSO TAKE ADMISSION IN ABOVE COURSES SIMULTANOUSLY)
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Typography className="font-medium text-blue-gray-700">
                  </Typography>
                </div>
              </div>
              </ScrollAnimationWrapper>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    “Education is the key that unlocks the golden door to freedom.”
                    <br></br>
                     —George Washington Carver
                    </Typography>
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

export default PageCourses;























  
//       <Typography variant="h6" color="white" className="text-center">Air Conditioning & Refrigaration Mechanic</Typography>

//       <Typography variant="h6" color="white" className="text-center">
//         Qualification: SSC 
//       </Typography>
//       <Typography variant="h6" color="white" className="text-center">
//         Duration: 6 Months
//       </Typography>
//       <Typography variant="small" color="white" className="text-center">
//         (PERSON WHO HAVE ALREADY TAKEN ADMISSION IN OTHER COURSES/INSTITUTIONS CAN ALSO TAKE ADMISSION IN ABOVE COURSES SIMULTANOUSLY)
//       </Typography>
//   </div>
//   </section>
//     </Fragment>
//     </div>
//     // </div>
//     // </div>
//     // </div>
    
//   );
// }