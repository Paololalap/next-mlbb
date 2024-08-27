import Image from "next/image";

import { Search } from "@/components/Search";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

export default function Homepage() {
  return (
    <main>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Mobile Legends Characters List</CardTitle>
          <Search />
        </CardHeader>
        <CardContent>
          <div className="flex h-8 items-center justify-center gap-x-5">
            <ul className="flex gap-x-2">
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Gold Lane"
                >
                  <Image
                    src="/gold-lane.png"
                    fill
                    alt="gold lane"
                    className="p-2"
                  />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Exp Lane"
                >
                  <Image
                    src="/exp-lane.png"
                    fill
                    alt="exp lane"
                    className="p-2"
                  />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Mid Lane"
                >
                  <Image
                    src="/mid-lane.png"
                    fill
                    alt="mid lane"
                    className="p-2"
                  />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Roamer"
                >
                  <Image src="/roamer.png" fill alt="roamer" className="p-2" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Jungler"
                >
                  <Image
                    src="/jungler.png"
                    fill
                    alt="jungler"
                    className="p-2"
                  />
                </Toggle>
              </li>
            </ul>

            <Separator orientation="vertical" />

            <ul className="flex gap-x-2">
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Tank"
                >
                  <Image src="/tank-role.png" fill alt="tank" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Support"
                >
                  <Image src="/support-role.png" fill alt="support" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Marksman"
                >
                  <Image src="/marksman-role.png" fill alt="marksman" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Mage"
                >
                  <Image src="/mage-role.png" fill alt="mage" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Assassin"
                >
                  <Image src="/assassin-role.png" fill alt="assassin" />
                </Toggle>
              </li>
              <li className="size-10">
                <Toggle
                  className="relative size-full border border-input"
                  title="Fighter"
                >
                  <Image src="/fighter-role.png" fill alt="fighter" />
                </Toggle>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <div className="grid-cols-12">
        <div></div>
      </div>
    </main>
  );
}
