import React from "react";
import { Link } from "react-router-dom";
import { Highlight, Heading } from '@chakra-ui/react'
import { Card, CardHeader, CardBody,  Stack, Text,Box, StackDivider, Button } from '@chakra-ui/react'


export default function Home() {

    
    return <div> <Heading style = {{ backgroundColor: "black", color: "white"}}>
        <Highlight
        query='7 jan to 14 jan 2023'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
        >
        TARGETTED STUDENT FOR WEEK 1:  7 jan to 14 jan 2023
        </Highlight>
    </Heading>
    <Card style = {{ margin : "50px auto", width: "50%"}}>
  <CardHeader style = {{}}>
    <Heading size='md'>STUDENT DETAILS</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name
        </Heading>
        <Text pt='2' fontSize='sm'>
          Tanmay (7TH CBSE)
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name of School
        </Heading>
        <Text pt='2' fontSize='sm'>
          National public school
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          Regularly coming for offline extra class for science. Has shown consistent improvement.
        </Text>
      </Box>
      <Box>
      <Heading size='xs' textTransform='uppercase'>
          Weekly Progress report
        </Heading >
        <Text pt='2' fontSize='sm'>
        <Button ><Link to = "/progress">SHOW PROGRESS</Link></Button>
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

<Card style = {{ margin : "50px auto", width: "50%"}}>
  <CardHeader style = {{}}>
    <Heading size='md'>STUDENT DETAILS</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name
        </Heading>
        <Text pt='2' fontSize='sm'>
         Akriti (7TH CBSE)
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name of School
        </Heading>
        <Text pt='2' fontSize='sm'>
          -
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          Did not showed interst in coming up for classes due to distance issue, school ends late.
        </Text>
        
      </Box>
      <Box>
      <Heading size='xs' textTransform='uppercase'>
          Weekly Progress report
        </Heading >
        <Text pt='2' fontSize='sm'>
        <Button ><Link to = "/progress">NOT AVAILABLE</Link></Button>
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

    
  </div>;
}


 
