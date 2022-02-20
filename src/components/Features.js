import React from 'react';
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
					<Flex variant='wrapper'>
						<Box
							bg={'primary'}
							textAlign={'center'}
							my={2}
							flexWrap='wrap'
							flex={'1 1 350px'}
							p={20}
							sx={{
								display: 'flex',
                                flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: '37px',
								borderRadius: '5px',
							}}
						>
							<Box
								sx={{
									outline: '5px solid white',
									outlineOffset: '-15px',
                                    flex:'1',
									display: ['block', 'flex', 'flex'],
								}}
							>
								<Image
									width={[1, 2/3, 2/3]}
									key={data.id}
									src={data.img}
								/>

								<Box
									display={['block', 'block', 'flex']}
									flexDirection='row'
									bg='primary'
								>
									<Text textAlign='center' key={data.id}>
										{data.title}
									</Text>
									<Text
										fontSize={[20, 30, 40]}
										p={40}
										maxWidth={['50%, 50%, 50%']}
										alignText='center'
									>
										{data.text}
									</Text>
								</Box>
							</Box>
						</Box>
					</Flex>
				);
			})}
		</>
	);
};

export default Features;
