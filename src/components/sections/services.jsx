
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { services } from "../../data/services.js";
import ServiceCard from "../common/serviceCard.jsx";

export default function Services() {
  return (
    <Box
      id="services"
      bg="#F7F8F6"
      py={{ base: "14", md: "20" }}
    >
      <Container maxW="1160px">

        <Box
          maxW="760px"
          mb={{ base: "10", md: "12" }}
        >

          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="700"
            letterSpacing="-0.035em"
            lineHeight="1.15"
            color="#1D2D3D"
            mb="4"
          >
            Our Engineering Services
          </Heading>

{/* 
          <Text
            fontSize="xl"
            fontWeight="700"
            letterSpacing="0.16em"
            color="#A77D37"
            mb="3"
          >
            OUR EXPERTISE
          </Text> */}

          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.8"
            color="#747D82"
            maxW="680px"
          >
            We provide comprehensive engineering solutions,
            combining innovative design, technical expertise
            and professional project delivery to turn ideas
            into reliable results.
          </Text>
        </Box>

        {/* Services Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: 4, md: 5 }}
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              {...service}
            />
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}
