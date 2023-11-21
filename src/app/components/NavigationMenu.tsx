"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const company: { title: string; href: string; description: string }[] = [
  {
    title: "Contact",
    href: "/contact",
    description:
      "Reach out to us via email, LinkedIn, or X. We'd love to get in touch!",
  },
  {
    title: "Team",
    href: "/team",
    description:
      "Get to know the team at Brock Software. One word to describe us? Pragmatic.",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Find out what we've been up to. We post about our projects and trends in tech.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "We're always looking for talented people to join our team.",
  },
];

export default function () {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100/50 to-gray-100 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/images/black_emblem.png"
                      alt="color logo no bg"
                      width="30"
                      height="30"
                    />
                    <div className="mb-2 mt-2 text-lg font-medium">
                      Brock Software
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Building web apps at the speed of light.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/web-apps" title="Web apps">
                Build modern web apps with the latest and fastest technologies.
              </ListItem>
              <ListItem href="/consulting" title="Consulting">
                Need an expert to bounce ideas off of? We can help with that.
              </ListItem>
              <ListItem href="/contracting" title="Contracting">
                Hire us out for your next web application project.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {company.map((c) => (
                <ListItem key={c.title} title={c.title} href={c.href}>
                  {c.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/showcase" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Showcase
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-100-foreground focus:bg-gray-100 focus:text-gray-100-foreground",
            className
          )}
          {...props}
        >
          <div className="font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
