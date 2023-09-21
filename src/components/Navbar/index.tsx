import React from "react";

import {
    Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link,
    // Button,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import { Mode } from "..";
import { menus } from "./menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Nav onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground">
                        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                            <path
                                clipRule="evenodd"
                                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                        <p className="font-bold text-inherit">ACME</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex gap-4 flex-1"
                justify="start"
            >
                {
                    menus.map((menu) => (
                        <NavbarItem key={menu.name}>
                            <Link color="foreground" href={menu.href}>
                                {menu.name}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Mode />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menus.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Nav>
    );
}

export default Navbar;
