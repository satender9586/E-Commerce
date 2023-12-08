import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Image, Input, Textarea } from "@chakra-ui/react";
import { SinginputValidation } from "../Validation/validationFuncltion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  const datas = useSelector((state) => state.userProfileData);
  const [formerror, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
    landmark: "",
  });

  console.log(datas);
  //   -------------from data collect from input field-------

  const inputfielddataCollectHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setformError(SinginputValidation(formData));
  };

  useEffect(() => {
    if (Object.keys(formerror) == 0 && isSubmit) {
      console.log(formerror, "sabhi field bhari hai");
    } else {
      console.log(formerror, "kuch field kali hai");
    }
  }, []);

  const steps = [{ title: "Shipping Address" }, { title: "Payments" }];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Layout>
      <Box height={"100vh"} padding={"0 5%"}>
        <Box>
          <Stepper my={"2rem"} index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack w={"100%"}>
              <form onSubmit={formSubmitHandler}>
                <CardBody>
                  <Heading fontSize={"40px"} size="md">
                    Shipping Address
                  </Heading>
                  <Stack mt={"1rem"} direction={"row"} spacing={3}>
                    <Box width={"100%"}>
                      <Input
                        border={"1px solid #C0C0C0"}
                        placeholder="Full Name"
                        name="name"
                        py={"25px"}
                        type="text"
                        value={datas[1].name}
                      ></Input>
                      <Text color={"red"}>{formerror.name}</Text>
                    </Box>

                    <Box width={"100%"}>
                      <Input
                        border={"1px solid #C0C0C0"}
                        placeholder="Phone No"
                        name="phone"
                        py={"25px"}
                        type="number"
                        value={datas[1].phone}
                      ></Input>
                      <Text color={"red"}>{formerror.phone}</Text>
                    </Box>
                  </Stack>
                  <Stack mt={"1rem"} direction={"row"} spacing={3}>
                    <Input
                      border={"1px solid #C0C0C0"}
                      placeholder="State"
                      name="state"
                      py={"25px"}
                      type="text"
                      onChange={inputfielddataCollectHandler}
                      value={formData.state}
                    ></Input>
                    <Input
                      border={"1px solid #C0C0C0"}
                      placeholder="city"
                      name="city"
                      py={"25px"}
                      type="text"
                      value={formData.city}
                      onChange={inputfielddataCollectHandler}
                    ></Input>
                  </Stack>
                  <Stack mt={"1rem"} direction={"row"} spacing={3}>
                    <Textarea
                      border={"1px solid #C0C0C0"}
                      placeholder="Address"
                      resize={"none"}
                      name="address"
                      value={datas[1].address}
                      onChange={inputfielddataCollectHandler}
                    ></Textarea>
                  </Stack>
                  <Stack mt={"1rem"} direction={"row"} spacing={3}>
                    <Input
                      border={"1px solid #C0C0C0"}
                      placeholder="Pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={inputfielddataCollectHandler}
                      py={"25px"}
                      type="text"
                    ></Input>
                    <Input
                      border={"1px solid #C0C0C0"}
                      placeholder="LandMark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={inputfielddataCollectHandler}
                      py={"25px"}
                      type="text"
                    ></Input>
                  </Stack>
                </CardBody>

                <CardFooter>
                  <Button
                    border={"1px solid #C0C0C0"}
                    fontSize={"18px"}
                    p={"25px 40px"}
                    variant="solid"
                    colorScheme="blue"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default PlaceOrder;
