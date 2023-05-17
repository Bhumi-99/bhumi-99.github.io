import s from '../images/45.jpg';
import CV from "../images/CV.pdf"
import React from 'react';
import {
  Button,
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import {BsDownload} from 'react-icons/bs';
const LinkItems = [
  { name: 'Home', icon: FiHome, class: "nav-link home", l: "#home" },
  { name: 'About', icon: FiStar, class: "nav-link about", l: "#about" },
  { name: 'Skills', icon: FiCompass, class: "nav-link skills", l: "#skills" },
  { name: 'Projects', icon: FiTrendingUp, class: "nav-link projects", l: "#projects" },
  { name: 'Contacts', icon: FiSettings, class: "nav-link contact", l: "#contact" },
  // {name:'Resume',icon:FiStar,class:"nav-link resume",l:"https://drive.google.com/file/d/1m-5h1Is4mNkilVLdVOFL7cg8Pegx4CkL/view?usp=share_link"}
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box id="nav-menu">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  function resume() {
        window.open(
          "https://drive.google.com/file/d/1CoeUohXyB-Cfaj-yVdQ3RVCvAAXW4M1s/view?usp=share_link",
          "_blank"
        );
      }
    
  return (
    <Box
      display="block"
      // border={"1px solid"}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      position="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" margin>
          <Image src={s} />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {/* <Flex> */}
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClose={onClose}  className={link.class} to={link.l}>
          {link.name}
        </NavItem>
      ))}
      <Flex>

       <Button id="resume-button-1" 
           className="nav-link resume"
           onClick={()=>{
            resume();
            onClose();
           }}
          align={'center'}
           pr={{base:"62%",sm:"75%",md:"40%",lg:"42%"}}
           mx="5"
           py='6'
           pl="6"
           borderRadius="lg"
          //  role="group"
           cursor="pointer"
           marginTop="2rem"
           color='white'
           rounded={'10px'}
           bg="blue.500"
            // fontSize="15px"
           boxShadow={
             '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
           }
           _hover={{
             bg: 'blue.50',
             color: 'blue.500',
             border: "1px"
           }}
            >
             
            <a
              id="resume-link-1"
              href={CV}
              download="Shaifali-Resume"
              target="_blank"
              // rel="noreferrer"
           fontSize="17px"
              >
             <Icon
            mr="4"
            fontSize="20px"
            _groupHover={{
              color: 'blue.500',
            }}
            as={BsDownload}
          /> Resume
            </a>
          </Button>
              </Flex>
        {/* </Flex> */}

    </Box>
  );
};

const NavItem = ({ icon, className,onClose, to, children, ...rest }) => {
  return (
    <Link href={to} className={className}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={onClose}
    >
      <Flex
        align="center"
        p="3"
        mx="5"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize="19px"
        marginTop="2rem"
        bg="blue.500"
        color='white'
        rounded={'10px'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.50',
          color: 'blue.500',
          border: "1px"
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="20px"
            _groupHover={{
              color: 'blue.500',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      py={'1rem'}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="space-between"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image
        src={s}
        mx={2}
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        width="120px"
        height="39px"
      />
    </Flex>
  );
};