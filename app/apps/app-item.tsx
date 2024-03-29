import { Card, CardBody, Image, Chip } from "@nextui-org/react";
import KhmerGPTLogo from "@/assets/logo/khmergpt.png";

export default function AppItem() {
  return (
    <Card isPressable isHoverable className="w-full">
      <CardBody>
        <div className="flex items-center ">
          <div className="w-[128px] flex-shrink-0 p-3 ">
            <Image
              src={KhmerGPTLogo.src}
              alt="KhmerGPT"
              width={128}
              height={128}
              sizes="128px"
            />
          </div>
          <div className="flex flex-col justify-start p-3 gap-2">
            <div className="text-2xl sm:text-3xl font-bold">KhmerGPT</div>
            <div className="text-gray-700 dark:text-gray-200/90 text-lg sm:text-xl sm:leading-tight leading-tight">
              Discover & Share with AI-powered Tools
            </div>
            <div className="flex gap-3">
              <Chip color="default" size="sm">
                free
              </Chip>
              <Chip color="primary" size="sm">
                PWA
              </Chip>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
