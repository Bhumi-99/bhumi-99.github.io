import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    Image,
    useColorModeValue,
    Input,
    IconButton,
  } from '@chakra-ui/react';
  import { MdMailOutline, MdOutlineSupportAgent } from "react-icons/md";
  import { BsTruck, BsFillCreditCard2FrontFill } from "react-icons/bs";
  import { GiReceiveMoney } from "react-icons/gi";

  
export default function Contacts (){
    return <div id="contact">
        <h1>
            <Image src="https://cliply.co/wp-content/uploads/2019/03/371903340_LOCATION_MARKER_400.gif" alt="contact" width="100px"/>
            Contact</h1>
        
        <Container as={Stack} maxW={'full'} py={10} align={'center'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2,lg:4 }} justifyContent={'space-evenly'} >
{/* 
          <Stack align={'flex-start'} borderRadius={'10px'} padding={'0.5rem'}>
            <Link href={'location'}  display={'flex'} w={'full'}  alignItems={'center'}>
                <Image src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/1x/external-location-user-interface-flatart-icons-flat-flatarticons-1.png" alt="github"/>
                <Text  fontSize={{base:'25px',md:'18px',lg:'15px'}} color={'#718096'}>Delhi,India</Text>
            </Link>
          </Stack> */}

          <Stack align={'flex-start'} borderRadius={'10px'} padding={'0.5rem'}>
          <Link href="https://github.com/bhumi-99" w={'full'} display={'flex'} alignItems={'center'} id="contact-github">
              <Image src="https://img.icons8.com/fluency/1x/github.png" alt="github" w={{base:"15%",sm:"15%",md:'17%',lg:"18%"}}/>
              <Text fontSize={{base:'17px',md:'17px',lg:'15px'}} color={'#718096'}>shaifali-99</Text>
             </Link>
          </Stack>

          <Stack align={'flex-start'} borderRadius={'10px'} padding={'0.5rem'}>
          <Link href="https://www.linkedin.com/in/bhumi-610a66249/" w={'full'}  display={'flex'} alignItems={'center'} id="contact-linkedin">
              <Image src="https://img.icons8.com/fluency/1x/linkedin-circled.png" alt="linkedin" w={{base:"15%",sm:"15%",md:'17%',lg:"18%"}}/>
              <Text fontSize={{base:'17px',md:'17px',lg:'15px'}} color={'#718096'}>Shaifali</Text>
             </Link>
          </Stack>

          <Stack align={'flex-start'} borderRadius={'10px'} padding={'0.5rem'}>
             <Link href={'9205098967'} id="contact-phone" w={'full'}  display={'flex'} alignItems={'center'}>
              <Image src="https://img.icons8.com/fluency/1x/phone-contact.png" alt="phone"w={{base:"15%",sm:"15%",md:'17%',lg:"18%"}}/>
              <Text  fontSize={{base:'17px',md:'17px',lg:'15px'}} color={'#718096'}>+919205098967</Text>
             </Link>
          </Stack>

          <Stack align={'flex-start'} borderRadius={'10px'} padding={'0.5rem'}>
          <Link href="https://mail.google.com/mail/u/0/#compose=new"   display={'flex'} alignItems={'center'} w={{base:'50%',md:'60%',lg:"70%"}} id="contact-email">
              <Image src="https://img.icons8.com/fluency/1x/apple-mail.png" alt="email"w={{base:"35%",sm:"30%",md:'20%',lg:"22%"}}/>
              <Text  fontSize={{base:'17px',md:'17px',lg:'15px'}} color={'#718096'}>shaifali02000@gmail.com</Text>
             </Link>
          </Stack>

        </SimpleGrid>
      </Container>
    </div>
}



// <Stack direction={{base:'column',md:'column',lg:'row'}}  w={{base:'80%',md:'70%',lg:"70%"}} m={'auto'} align={'left'}>
//             <Link href={'location'} w={{base:'50%',md:'60%',lg:"70%"}} display={'flex'} alignItems={'center'}>
//              <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/1x/external-location-user-interface-flatart-icons-flat-flatarticons-1.png" alt="github"/>
//              <text  fontSize={{base:'25px',md:'20px',lg:'15px'}}>Delhi,India</text>
//             </Link>

//             <Link href="https://github.com/shaifali-99"  display={'flex'} alignItems={'center'}  w={{base:'50%',md:'60%',lg:"70%"}} id="contact-github">
//              <img src="https://img.icons8.com/fluency/1x/github.png" alt="github"/>
//              <text  fontSize={{base:'25px',md:'20px',lg:'15px'}}>shaifali-99</text>
//             </Link>

//             <Link href="https://www.linkedin.com/in/shaifali-610a66249/"   display={'flex'} alignItems={'center'} w={{base:'50%',md:'60%',lg:"70%"}} id="contact-linkedin">
//              <img src="https://img.icons8.com/fluency/1x/linkedin-circled.png" alt="linkedin"/>
//              <text  fontSize={{base:'25px',md:'20px',lg:'15px'}}>Shaifali</text>
//             </Link>

//             <Link href={'9205098967'} id="contact-phone"  display={'flex'} alignItems={'center'} w={{base:'50%',md:'60%',lg:"70%"}}>
//              <img src="https://img.icons8.com/fluency/1x/phone-contact.png" alt="phone"/>
//              <text  fontSize={{base:'25px',md:'20px',lg:'15px'}}>+919205098967</text>
//             </Link>
            
//             <Link href="https://mail.google.com/mail/u/0/#compose=new"   display={'flex'} alignItems={'center'} w={{base:'50%',md:'60%',lg:"70%"}} id="contact-email">
//              <img src="https://img.icons8.com/fluency/1x/apple-mail.png" alt="email"/>
//              <text  fontSize={{base:'25px',md:'20px',lg:'15px'}}>shaifali02000@gmail.com</text>
//             </Link>
//         </Stack>