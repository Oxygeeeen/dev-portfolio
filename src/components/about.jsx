/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  BsFileCodeFill,
  BsGithub,
  BsLinkedin,
  BsStarFill,
  BsTwitter,
} from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';
import { SocialLink } from './social-link';

export function About() {
  return (
    <Stack as="section" spacing="10" pb="8">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "6", md: "2" }}
      >
        <HStack spacing="8" flex="1">
          <Avatar
            boxShadow="lg"
            size="xl"
            name="Abdulbaasit Isah"
            src="assets/profile.jpeg"
          />
          <Stack spacing="1">
            <Heading as="h1" size="lg" color="blue.600">
              Abdulbaasit Isah
            </Heading>
            <Text fontSize="lg" color="gray.500">
              Software Engineer (UI)
            </Text>
          </Stack>
        </HStack>

        <HStack spacing="2">
          <SocialLink
            label="Email"
            icon={<MdMail />}
            href="mailto:lumina.stride@gmail.com"
          />
          <SocialLink
            label="Twitter"
            icon={<BsTwitter />}
            href="https://twitter.com/AbdulbaasitIsah"
          />
          <SocialLink
            label="LinkedIn"
            icon={<BsLinkedin />}
            href="https://www.linkedin.com/in/isah-abdulbaasit-a96946245/"
          />
          <SocialLink
            label="Github"
            icon={<BsGithub />}
            href="https://github.com"
          />
        </HStack>
      </Stack>

      <Text fontSize="lg" lineHeight="tall">
        Over 12 years working as a software engineer with a focus on UI
        development. Specialize in crafting APIs for seamless communication,
        leveraging SSG for optimal web performance, and utilizing CSS
        preprocessors for efficient stylesheet development.
      </Text>

      <Box>
        <Heading fontSize="sm" textTransform="uppercase" pb="3">
          Career Highlights
        </Heading>
        <Stack spacing="2">
          <List spacing={2}>
            <ListItem>
              <ListIcon as={BsStarFill} color="blue.500" />
              Meta-Certified Developer
            </ListItem>
            <ListItem>
              <ListIcon as={BsFileCodeFill} color="blue.500" />
              Expert in developing responsive User Interfaces
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillApi} color="blue.500" />
              Proficient in producing and consuming RESTful APIs
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Stack>
  );
}
