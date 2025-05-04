import Link from "next/link";
import type { FC } from "react";
import { EntityBackPath, EntityTitle } from "../enums";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const Navigation: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6 RIGHTHERE">
        <NavigationMenuItem>
          <Link
            href={EntityBackPath.Characters}
            className="text-lg font-semibold text-primary-background hover:text-amber-300 transition-colors"
          >
            {EntityTitle.Characters}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={EntityBackPath.Locations}
            className="text-lg font-semibold text-primary-background hover:text-amber-300 transition-colors"
          >
            {EntityTitle.Locations}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={EntityBackPath.Episodes}
            className="text-lg font-semibold text-primary-background hover:text-amber-300 transition-colors"
          >
            {EntityTitle.Episodes}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  );
};

export default Navigation;