import React from "react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Progess() {
  return <div style ={{}}>
    <div style = {{display: "flex", alignItems: "center"}}><img src = "data:image/png;base64,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" alt = "" width= "200px"/></div>
    <div style= {{display: "flex",flexDirection: "column",  marginBotton: "40px", alignItems:"flex-start", width: "50%", margin: "50px auto"}}>
        <li>Name: Tanmay </li>
        <li>Class: 7th</li>
        <li>Board: CBSE</li> 
        <li>Days Active: 8th jan to 12 Jan 2023</li>
        <li style = {{backgroundColor: "coral"}}>Problem Statement: Memorises concepts, due to which it get stores for short period of time</li>
        <li style = {{backgroundColor: "lightgreen", marginTop: "5px"}}>Positive traits: Shown improvemnt in conceptual devlopement</li>
    </div>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' style ={{marginTop: "40px", width: "50%", margin: "50px auto"}}>
  <Card>
    <CardHeader>
      <Heading size='md'> TEST - 1</Heading>
    </CardHeader>
    <CardBody>
      <Text>Concepts were not much cleared. Was memorising.
      Conducted on - 10th January 2023
      </Text>
    </CardBody>
    <CardFooter>
    <Link href='https://drive.google.com/file/d/1MgSKW4TitzXbK-f7JNW1Req5yZKa1gsp/view?usp=share_link' isExternal>Test paper soft copy<ExternalLinkIcon mx='2px' /><Button>View here</Button></Link>

    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>TEST - 2</Heading>
    </CardHeader>
    <CardBody>
      <Text>Conducted on - 11th January 2023</Text>
    </CardBody>
    <CardFooter>
    <Link href='https://chakra-ui.com' isExternal>Test-2 link here <ExternalLinkIcon mx='2px' /><Button>View here</Button></Link>

    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> TEST - 3</Heading>
    </CardHeader>
    <CardBody>
      <Text>Answer Framing has improved.
        Conducted on - 12th January 2023
      </Text>
    </CardBody>
    <CardFooter>
    <Link href='https://drive.google.com/file/d/1LsqcVOoaFGQqx50CkNeu5Azn1WR5Fg1U/view?usp=share_link' isExternal>Test paper soft copy <ExternalLinkIcon mx='2px' /><Button>View here</Button></Link>

    </CardFooter>
  </Card>
</SimpleGrid>
  </div>;
}

