"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { useMemo } from "react";
import { BackPath, Title } from "../enums";
import BreadcrumbWithCustomSeparator from "./BreadcrumbWithCustomSeparator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const NAV_LINKS = [
  { label: Title.Characters, href: BackPath.Characters },
  { label: Title.Locations, href: BackPath.Locations },
  { label: Title.Episodes, href: BackPath.Episodes },
];

const IGNORED_SEGMENTS = ["favorites"];

const Navigation: FC = () => {
  const pathname = usePathname();
  const segments = useMemo(
    () =>
      pathname.split("/").filter((seg) => seg && !IGNORED_SEGMENTS.includes(seg)),
    [pathname]
  );
  type Breadcrumb = { label: string; href?: string; };
  const breadcrumbs: Breadcrumb[] = useMemo(
    () => [
      { label: Title.Home, href: BackPath.Home },
      ...segments.map((seg, idx) => {
        const nav = NAV_LINKS.find((item) => item.href.replace("/", "") === seg);
        const label = nav ? nav.label : decodeURIComponent(seg);
        const href = "/" + segments.slice(0, idx + 1).join("/");
        return idx < segments.length - 1 ? { label, href } : { label };
      }),
    ],
    [segments]
  );

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {NAV_LINKS.map((nav) => (
            <NavigationMenuItem key={nav.href}>
              <Link
                href={nav.href}
                className={`text-lg font-semibold transition-colors ${pathname.startsWith(nav.href)
                  ? "text-amber-300"
                  : "text-white hover:text-amber-300"
                  }`}
                aria-label='Navigation link'
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