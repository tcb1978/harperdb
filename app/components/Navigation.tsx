"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { EntityBackPath, EntityTitle } from "../enums";
import BreadcrumbWithCustomSeparator from "./BreadcrumbWithCustomSeparator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const NAV_LINKS = [
  { label: EntityTitle.Characters, href: EntityBackPath.Characters },
  { label: EntityTitle.Locations, href: EntityBackPath.Locations },
  { label: EntityTitle.Episodes, href: EntityBackPath.Episodes },
];

const IGNORED_SEGMENTS = ["favorites"];

const Navigation: FC = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(
    (seg) => seg && !IGNORED_SEGMENTS.includes(seg)
  );
  const breadcrumbs = [
    { label: EntityTitle.Home, href: EntityBackPath.Home },
    ...segments.map((seg, idx) => {
      const nav = NAV_LINKS.find((item) => item.href.replace("/", "") === seg);
      const label = nav ? nav.label : decodeURIComponent(seg);
      const href = "/" + segments.slice(0, idx + 1).join("/");
      return idx < segments.length - 1
        ? { label, href }
        : { label };
    }),
  ];

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {NAV_LINKS.map((nav) => (
            <NavigationMenuItem key={nav.href}>
              <Link
                href={nav.href}
                className="text-lg font-semibold text-white hover:text-amber-300 transition-colors"
              >
                {nav.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <BreadcrumbWithCustomSeparator items={breadcrumbs} />
    </>
  );
};

export default Navigation;