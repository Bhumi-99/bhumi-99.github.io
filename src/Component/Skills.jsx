import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Skills() {
  const skillArr = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      name: "HTML",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      name: "CSS",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      name: "Mongo db",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node js",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      name: "React",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      name: "Express js",
    },
    {
      src: "https://img.icons8.com/color/1x/git.png",
      name: "Git",
    },
    {
      src: "https://img.icons8.com/color/1x/npm.png",
      name: "NPM",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFqKBepkWTU0NDn07QiNera1ixJ0GPlEG4jp0t51iPatxolNj7A3F0itsPg38X7285B0&usqp=CAU",
      name: "Redux",
    },
    {
      src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
      name: "Typescript",
    },
  ];
  return (
    <Box
      id="skills"
      mt="4rem"
      scroll-behavior="smooth"
      ml={{ base: "1px", md: "12rem", lg: "13rem", xl: "15rem" }}
      w={{ base: "100%", md: "80%",lg:"75%",xl:"85%" }}
    >
      <Heading
        // className="heading-color"
        color="rgb(49, 130, 206)"
        font-weight="bold"
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        Skills
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        // border="1px solid white"
        gap={2}
        mt={6}
      >
        {skillArr.map((e) => {
          return (
            <Box
              className="skills-card"
              //   border="1px solid white"
              borderRadius="10px"
              textAlign="center"
              transition="all 1s"
              fontSize="12px"
              p={2}
            >
              <Image
                className="skills-card-img"
                src={e.src}
                alt={e.name}
                w="70px"
                m="auto"
              />
              <Text className="skills-card-name" pl={1} mt={2} color="grey">
                {e.name}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
