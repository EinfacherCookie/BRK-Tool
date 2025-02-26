import React from 'react';
import { Avatar, Box, Center, Heading, HStack } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navbarItems = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Services', link: '/services' },
	{ name: 'Contact', link: '/contact' },
];

const Navbar = () => {
	const location = useLocation();

	const isActive = (path) => {
		if (path === '/') {
			return location.pathname === '/';
		}

		return location.pathname.startsWith(path);
	};

	return (
		<Box>
			<HStack gap={0}>
				<Box width={'25%'} height={'100px'}>
					{/* 🖼️ Logo wird zwischen xl und darunter getauscht um für die Mobile Version optimal angezeigt zu werden */}
					<Box mt={'10px'} ml={'10px'} hideBelow={'xl'}>
						<motion.div whileTap={{ scale: 0.9 }} cursor={'pointer'}>
							<img src='https://placehold.co/260x80' alt='logo' />
						</motion.div>
					</Box>
					<Box mt={'10px'} ml={'10px'} hideFrom={'xl'} cursor={'pointer'}>
						<motion.div whileTap={{ scale: 0.9 }} cursor={'pointer'}>
							<img src='https://placehold.co/80x80' alt='logo' />
						</motion.div>
					</Box>
				</Box>
				<Box width={'75%'} height={'100px'} pr={'20px'}>
					<HStack justifyContent={'flex-end'} height={'100%'}>
						<Center mr={'20px'}>
							{navbarItems.map((item, index) => (
								<Box key={index} height={'100%'} cursor={'pointer'}>
									<motion.div
										whileTap={{ scale: 0.9 }}
										transition={{ duration: 0.2, type: 'tween' }}
										whileHover={{ scale: 1.1 }}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
									>
										<NavLink to={item.link}>
											<Heading
												as='h2'
												size='xl'
												color={isActive(item.link) ? 'red.500' : 'gray.500'}
												fontWeight='medium'
												_hover={{ color: 'red.500' }}
												borderLeft={isActive(item.link) && '2px solid red'}
												pl={'5px'}
												ml={isActive(item.link) ? '13px' : '15px'}
											>
												{item.name}
											</Heading>
										</NavLink>
									</motion.div>
								</Box>
							))}
						</Center>
						<motion.div whileTap={{ scale: 0.9 }}>
							<Box
								hideFrom={'xl'}
								borderRadius={'full'}
								boxShadow={'xl'}
								cursor={'pointer'}
							>
								<Avatar.Root variant={'solid'} size={'xl'}>
									<Avatar.Fallback name='Maxi Mustermann' />
								</Avatar.Root>
							</Box>
						</motion.div>

						<motion.div
							whileTap={{ scale: 0.9 }}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
						>
							<Box
								width={'250px'}
								hideBelow={'xl'}
								bg={'gray.100'}
								borderRadius={'full'}
								p={'5px'}
								boxShadow={'xl'}
								cursor={'pointer'}
							>
								<HStack>
									<Avatar.Root variant={'solid'} size={'xl'}>
										<Avatar.Fallback name='Max Mustermann' />
									</Avatar.Root>
									<Box>
										<Heading
											as='h2'
											size='md'
											color='gray.800'
											overflow={'hidden'}
											width={'180px'}
											whiteSpace={'nowrap'}
											textOverflow={'ellipsis'}
										>
											Max Mustermann
										</Heading>
										<Box color={'gray.500'}>
											<Heading
												as='h3'
												size='sm'
												overflow={'hidden'}
												width={'160px'}
												whiteSpace={'nowrap'}
												textOverflow={'ellipsis'}
											>
												Software Developer
											</Heading>
										</Box>
									</Box>
								</HStack>
							</Box>
						</motion.div>
					</HStack>
				</Box>
			</HStack>
		</Box>
	);
};

export default Navbar;
