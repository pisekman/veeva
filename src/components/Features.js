import React from 'react'
import {
	Box,
	Flex,
	Text,
	Image,
	Heading,
} from 'rebass/styled-components';
import data from '../data';


const Features = () => {
    return (
        <>
         {data.map((data, i) => {
				return (
					<Flex variant='wrapper' width={'1'}>
						<Box
							flexDirection='column'
							bg={'primary'}
							textAlign={'center'}
							my={2}
							flexWrap='wrap'
							flex='1'
							p={20}
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: '37px',
								borderRadius: '5px',
							}}
						>
							<Text textAlign='center' key={data.id}>
								{data.title}
							</Text>
							<Box
								sx={{
									outline: '5px solid white',
									outlineOffset: '-15px',
												flex: '1 1 350px',
									display:'block',
								}}
							>
								<Box
									display={['block', 'block', 'flex']}
									flexDirection='row'
									bg='primary'
								>
									<Image
										width={[1,1, '110%']}
                                        key={data.id}
										src={data.img}
									/>
									<Text fontSize={[20, 30, 40]} p={40} maxWidth={['50%, 50%, 50%']} alignText='center'> 
										{data.text}
									</Text>
								</Box>
							</Box>
						</Box>
					</Flex>
				);
			})}   
        </>
    )
}

export default Features
