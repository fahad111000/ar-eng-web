
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

import { LuMenu, LuX } from "react-icons/lu";

const NAME = "AR Engineering Solutions";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#commitment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActive("#top");
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      bg="white"
      borderBottom="1px solid"
      borderColor={scrolled ? "#E2E8E3" : "transparent"}
      boxShadow={scrolled ? "0 4px 18px rgba(25,40,32,0.07)" : "none"}
      transition="box-shadow 0.25s ease, border-color 0.25s ease"
    >
      <Box
        maxW="1280px"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
      >
        <Flex
          minH={{ base: "68px", md: "78px" }}
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <Link
            href="#top"
            display="flex"
            alignItems="center"
            gap="3"
            onClick={closeMenu}
            _hover={{ textDecoration: "none" }}
            flexShrink="0"
          >

            <Box>
              <Image src="/ar-logo.jpeg" alt="AR Engineering Solutions" h="40px" />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Flex
            as="nav"
            display={{ base: "none", md: "flex" }}
            align="center"
            gap={{ md: "5", lg: "8" }}
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  position="relative"
                  py="3"
                  fontSize="sm"
                  fontWeight={isActive ? "700" : "500"}
                  color={isActive ? "#344B3E" : "#68746B"}
                  textDecoration="none"
                  transition="color 0.2s ease"
                  _hover={{
                    color: "#344B3E",
                    textDecoration: "none",
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "5px",
                    left: "0",
                    width: isActive ? "100%" : "0%",
                    height: "2px",
                    bg: "#B58A43",
                    transition: "width 0.2s ease",
                  }}
                  _focusVisible={{
                    outline: "2px solid #B58A43",
                    outlineOffset: "4px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Flex>

          {/* Mobile Toggle */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            variant="ghost"
            color="#344B3E"
            size="lg"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <LuX /> : <LuMenu />}
          </IconButton>
        </Flex>

        {/* Mobile Navigation */}
        {open && (
          <Stack
            display={{ base: "flex", md: "none" }}
            gap="1"
            pb="4"
            pt="2"
            borderTop="1px solid #EDF0ED"
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  px="4"
                  py="3"
                  borderRadius="md"
                  fontSize="sm"
                  fontWeight={isActive ? "700" : "500"}
                  color={isActive ? "#344B3E" : "#68746B"}
                  bg={isActive ? "#F0F3EF" : "transparent"}
                  _hover={{
                    color: "#344B3E",
                    bg: "#F0F3EF",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>
        )}
      </Box>
      
    </Box>
    
  );
}
