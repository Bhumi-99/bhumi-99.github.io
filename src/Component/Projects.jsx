import GitHubCalendar from "react-github-calendar";
import s from "../images/cosmo.jpg";
import d from "../images/desk.jpg";
import b from "../images/bigBite.jpg";
import koovs from "../images/KOOVS.jpg";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
export default function Projects() {
  const projectData = [
    {
      Title: "Koovs",
      projectImg: koovs,
      desc: "Koovs is an e-commerce fashion brand which fulfills all fashion needsin one platform. E-Commerce, Clothing & Apparel",
      techStack: [
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        // "https://image.shutterstock.com/image-vector/react-emblem-blue-atom-on-260nw-1568210053.jpg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "mongodb",
        "express",
      ],
      githublink: "https://github.com/officialShaifaliJ/assorted-desk-4504",
      deployedlink: "https://ephemeral-platypus-7df5f7.netlify.app/",
    },

    {
      Title: " Desktime",
      projectImg: d,
      desc: "DeskTime is a time tracking tool with additional features for workforce management. These features can help you build a successfull team that consistently achieves its goals.",
      techStack: [
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "HTML",
        "CSS",
        "Javascript",
      ],
      githublink: "https://github.com/palabhi017/terrific-language-9890",
      deployedlink: "https://time-always.netlify.app/",
    },

    {
      Title: "Blue Apron",
      projectImg: b,
      desc: " Blue Apron.com is meal kit service that delivers 2–4 recipes to yourdoor each week, along with all the proportioned ingredients you need to make the meals.",
      techStack: [
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        // "https://image.shutterstock.com/image-vector/react-emblem-blue-atom-on-260nw-1568210053.jpg",
        "HTML",
        "CSS",
        "Javascript",
        "React",
      ],
      githublink: "https://github.com/officialShaifaliJ/satisfying-scale-7625",
      deployedlink: "https://newbigbite.netlify.app/",
    },

    {
      Title: "Sephora",
      projectImg: s,
      desc: "Sephora is an e-commerce global beauty chain user friendly website which offers a wide range of classic cosmetic products which include every kind of skincare ,makeup ,fragrance ,body and hair care and many more you can find for yourself.",
      techStack: [
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        // "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "HTML",
        "CSS",
        "Javascript",
      ],
      githublink: "https://github.com/officialShaifaliJ/zesty-whistle-6002",
      deployedlink: "https://dapper-cheesecake-326981.netlify.app/",
    },
  ];

  return (
    <Box
      id="projects"
      mt="4rem"
      //   border="1px solid white"
      ml={{ base: "1rem", md: "15rem", lg: "16rem", xl: "17rem" }}
      w={{ base: "100%", md: "70%", lg: "73%", xl: "80%" }}
      display="flex"
      flexDirection="column"
      scrollBehavior="smooth"
      gap="4rem"
      //   padding="1rem"
    >
      <Heading
        // className="heading-color"
        color="rgb(49, 130, 206)"
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          md: "repeat(1,1fr)",
          lg: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        ml={{ sm: "2.2rem", md: "2rem", lg: "0.8rem", xl: "2rem" }}
        gap={6}
        p={{ sm: "15px", md: "1px" }}
        justifyContent="space-between"
      >
        {projectData.map((project, i) => {
          return (
            <Box
              className="project-card"
              color="grey"
              //   border="1px solid lightGrey"
              width="90%"
              scrollBehavior="smooth"
              borderRadius="10px"
              p="10px"
              boxShadow="lightgrey 0px 3px 3px 0px"
              mt={2}
            >
              <Heading className="project-title" color="skyblue" as="h3">
                {project.Title}
              </Heading>

              <Image
                src={project.projectImg}
                alt={project.Title}
                borderRadius="5px"
                mt={4}
              />

              <Box
                display="flex"
                flexWrap="wrap"
                //   border="1px solid white"
                width="100%"
                gap={2}
                my={3}
                alignItems="center"
              >
                {project.techStack.map((e, i) => {
                  return (
                    // <Image
                    //   className="skills-card-img"
                    //   src={e}
                    //   w={{ base: "10%", md: "5%" }}
                    //   alt={`${project.Title + i}`}
                    // />
                    <Text
                      fontSize="5px"
                      px={2}
                      borderRadius={"20px"}
                      bgColor="skyblue"
                      color="rgb(4, 4, 54)"
                    >
                      {e}
                    </Text>
                  );
                })}
              </Box>

              <Text
                className="project-description"
                fontSize={{ base: "15px", sm: "18px" }}
                textAlign="left"
                mt={2}
              >
                {project.desc}
              </Text>

              {/* <Box
                className="project-tech-stack"
                textAlign="left"
                // display='grid'
                mt={3}
              >
                <Text fontSize="15px" fontWeight="600" color="skyblue">
                  Tech Stack{" "}
                </Text>
                
              </Box> */}

              <Box className="deployed" textAlign="left" my={3}>
                {/* <Text fontSize="15px" fontWeight="600" color="skyblue">
                  Deployed Links{" "}
                </Text> */}
                <Box
                  display="flex"
                  //   border="1px solid white"
                  width="100%"
                  mt={2}
                >
                  <a
                    href={project.githublink}
                    className="project-github-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://img.icons8.com/fluency/1x/github.png"
                      w={{ base: "50%", md: "55%" }}
                      alt={`${project.Title + "githublink"}`}
                    />
                  </a>
                  <a
                    href={project.deployedlink}
                    className="project-deployed-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/1x/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
                      alt="cosmo"
                      w={{ base: "100%", md: "100%" }}
                      className={`${project.Title + "project-deployed-link"}`}
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

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
