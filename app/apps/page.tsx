import { Divider } from "@nextui-org/react";
import AppItem from "@/app/apps/app-item";

export default function Page() {
  return (
    <div className="container px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="text-center text-4xl md:text-6xl font-bold leading-tighter tracking-tighter mb-8 md:mb-16 font-heading">
        Quality crafted apps
      </div>
      <Divider orientation="horizontal" />
      <div>
        <AppItem />
      </div>
    </div>
  );
}
