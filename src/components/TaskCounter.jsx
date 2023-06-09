import { Flex, Card, CardBody } from '@chakra-ui/react'
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function TaskCounter ({ taskList }) {
    const [parent] = useAutoAnimate();

    return (
        <Flex flexDir={{base:'column', lg:'row'}} justify='space-evenly' alignItems='center' my={{base: '50px', lg:'100px'}} w={{md:'50%'}} ref={parent}>
            <Card mt='40px' w={{base:'300px', md:'350px'}} boxShadow='md' _hover={{transform:'translateY(-1px)'}}>
                <CardBody fontSize={{ base: '16px', md:'18px' }}>
                        You have {taskList.filter((task) => task.isCompleted === false).length} pending tasks for today.
                </CardBody>
            </Card>
            <Card mt={{base:'32px', lg:'40px'}} w={{base:'300px', md:'350px'}} boxShadow='md' _hover={{transform:'translateY(-1px)'}}>
                <CardBody fontSize={{ base: '16px', md:'18px' }}>
                        You have {taskList.filter((task) => task.isCompleted === true).length} completed tasks today.
                </CardBody>
            </Card>
        </Flex>
    )
}