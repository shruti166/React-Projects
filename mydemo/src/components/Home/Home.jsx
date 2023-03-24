import React, { useState, useEffect } from "react";
import './Home.css';
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Heading,
  Text,
  CardFooter,

} from "@chakra-ui/react";

export default function Home() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('https://developer.nrel.gov/api/transportation-incentives-laws/v1.json?api_key=84cRecMjia66wewfe0cBcwWpfn7t53DJSdFSJY4R')
    .then((res) => setResult(res.data.result))
    .catch((err) => console.log(err))
  }, [])
  console.log(result);

  return (
    
    <div >
     
     <div className = "container" style = {{}}>
      {result.map((elem) => {
        return (
          <div key={elem.id}>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(500px, 2fr))"
            >
              <Card>
                <CardHeader>
                  <Heading size="md" color="teal" fontWeight="bold">{elem.id} - {elem.title} : {elem.state}</Heading>
                </CardHeader>
                <CardBody>
                  <Text  noOfLines={5}>{elem.plaintext}</Text>
                </CardBody> 
                <CardFooter>
                  <Text as='mark'>{elem.amended_date}</Text>
                  
                </CardFooter>
              </Card>
            </SimpleGrid>
          </div>
        );
      })}
    </div>
    </div>
  );
}
