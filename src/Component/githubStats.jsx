import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubStats() {
  return (
    <Box
      //   id="projects"
      mt="4rem"
      //   border="1px solid white"
      ml={{ base: "0rem",sm:"0.5rem", md: "15rem", lg: "16rem", xl: "17rem" }}
      w={{ base: "100%", md: "70%", lg: "73%", xl: "80%" }}
      display="flex"
      flexDirection="column"
      scrollBehavior="smooth"
      gap="4rem"
      //   padding="1rem"
    >
      <Heading color="rgb(49, 130, 206)" fontSize={{ base: "3xl", md: "5xl" }}>
        Github Stats
      </Heading>
      <Box className="github" alignItem="center">
        <Box
          bgColor="white"
          alignItems="center"
          textAlign="center"
          w={{ base: "80%", md: "80%", lg: "80%" }}
          m="auto"
          p={5}
          borderRadius="5px"
        >
          <GitHubCalendar
            username="officialShaifaliJ"
            className="react-activity-calendar"
            margin="auto"
          />
        </Box>
        <Box
          alignItem="center"
          p="20px"
          gap={5}
          //   border="1px solid white"
          textAlign="center"
          //   w='70%'
        >
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=officialShaifaliJ&theme=tokyonight&border_radius=10.6"
            alt="state2"
            mt={4}
            w="70%"
            m="auto"
          />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com?user=officialShaifaliJ&border_radius=10.6&theme=tokyonight"
            alt="state1"
            m="auto"
            mt={4}
            w="70%"
            id="github-streak-stats"
          />
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=officialShaifaliJ&layout=compact&card_width=600&theme=tokyonight&border_radius=10.6"
            id="github-top-langs"
            w="70%"
            m="auto"
            mt={4}
            alt="s3"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default GithubStats;
