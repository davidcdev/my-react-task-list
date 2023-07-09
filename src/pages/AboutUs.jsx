import { Flex, Heading, VStack, Text, Card, CardBody } from "@chakra-ui/react"

export default function AboutUs () {
    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' mt={{base:'80px'}}>
            <Heading as='h1' size='xl'>
                About Us
            </Heading>

            <VStack mt='40px' maxW='75ch' spacing='6' mx='8px'w={{ base:'300px', md:'60ch', lg:'75ch'}}>
                <Text mt='12px' px='6' fontSize={{ base: '16px', md:'18px' }}>
                    <Text as='b'>Productive Day</Text> is a ToDo List App created to provide an easy way to organize your tasks and be more productive through the day 🤩
                </Text>

                    <Card mt='40px' w='100%' boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md:'18px' }}>
                            In the Home page you will see the report of how many pending and completed tasks you do have for the day 🔍
                        </CardBody>
                    </Card>
                    <Card w='100%' boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md:'18px' }}>
                            You can switch to dark mode by clicking the icon at the top-left that has a 🌙
                        </CardBody>
                    </Card>
                    <Card boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md:'18px' }}>
                            You can add tasks with a title and a description (optional) by clicking the Add button that has a ➕ sign or by pressing the "Intro" key in your keyboard
                        </CardBody>
                    </Card>
                    <Card boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md:'18px' }}>
                            You can mark them as completed by clicking on the checkbox ✅, you will notice how it changes its appearance!
                        </CardBody>
                    </Card>
                    <Card boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md:'18px' }}>
                            If you added a description, you can see it by clicking on the arrow 🔽 at the right side of the title
                        </CardBody>
                    </Card>
                    <Card w='100%' boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md: '18px' }}>
                            To delete them you click on the "trash" 🗑️ icon at the right side of the card
                        </CardBody>
                    </Card>
                    <Card boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md: '18px' }}>
                            Did you noticed about the notifications? Yes, a notification will be displayed confirming the action you just did 😁 
                        </CardBody>
                    </Card>
                    <Card mb='40px' boxShadow='md'>
                        <CardBody fontSize={{ base: '16px', md: '18px' }}>
                            Don't worry if you close the tab or the browser! The tasks you didn't delete will remain in your list when you open the tab again 😌
                        </CardBody>
                    </Card>

                <Text color='gray' mb={{base:'100px', md:'20px'}} fontSize={{ base: '16px', md: '18px' }}>This app was built with ReactJS and Chakra-UI</Text>
            </VStack>
        </Flex> 
    )
}