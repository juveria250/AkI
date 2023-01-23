import { Home, Profile, SignIn, SignUp, } from "@/pages";
import PageCourses from "./widgets/layout/page-courses";
import WhyUs from "./widgets/layout/why-us";
import { BookOpenIcon, BuildingLibraryIcon, CommandLineIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
  {
    icon: BookOpenIcon,
    name: "courses",
    path: "/page-courses",
    element: <PageCourses />,
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "why us?",
    path: "/why-us",
    element: <WhyUs />,
  },
  // {
  //   icon: CommandLineIcon,
  //   name: "Comments",
  //   path: "/page history",
  //   element: <App />,
  // },
];

export default routes;
