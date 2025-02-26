import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Center,
	Heading,
	HStack,
	Button,
	Icon,
	CloseButton,
	Separator,
	Text,
	Stack,
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Turn as Hamburger } from 'hamburger-react';

import {
	MenuContent,
	MenuItem,
	MenuItemCommand,
	MenuRoot,
	MenuTrigger,
} from './ui/menu';

import {
	DrawerActionTrigger,
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from './ui/drawer';
import { LuMenu, LuUser } from 'react-icons/lu';

const navbarItems = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Services', link: '/services' },
	{ name: 'Contact', link: '/contact' },
];

const Navbar = () => {
	const location = useLocation();
	const [DrawerOpen, setDrawerOpen] = useState(false);
	const [MenuOpen, setMenuOpen] = useState(false);

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
							<NavLink to='/'>
								<img src='https://placehold.co/260x80' alt='logo' />
							</NavLink>
						</motion.div>
					</Box>
					<Box mt={'10px'} ml={'10px'} hideFrom={'xl'} cursor={'pointer'}>
						<motion.div whileTap={{ scale: 0.9 }} cursor={'pointer'}>
							<NavLink to='/'>
								<img src='https://placehold.co/80x80' alt='logo' />
							</NavLink>
						</motion.div>
					</Box>
				</Box>
				<Box width={'75%'} height={'100px'} pr={'20px'} hideBelow={'md'}>
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
								<DrawerRoot
									open={DrawerOpen}
									onOpenChange={(e) => setDrawerOpen(e.open)}
								>
									<DrawerBackdrop />
									<DrawerTrigger asChild>
										<Avatar.Root variant={'solid'} size={'xl'}>
											<Avatar.Fallback name='Maxi Mustermann' />
										</Avatar.Root>
									</DrawerTrigger>
									<DrawerContent>
										<DrawerHeader>
											<Heading
												as='h2'
												size='xl'
												color='gray.800'
												overflow={'hidden'}
												fontWeight={'bold'}
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
										</DrawerHeader>
										<DrawerBody>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua.
											</p>
										</DrawerBody>
										<DrawerFooter>
											<DrawerActionTrigger asChild>
												<Button variant='outline'>Cancel</Button>
											</DrawerActionTrigger>
										</DrawerFooter>
										<DrawerCloseTrigger />
									</DrawerContent>
								</DrawerRoot>
							</Box>
						</motion.div>

						<motion.div
							whileTap={{ scale: 0.9 }}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
						>
							<MenuRoot>
								<MenuTrigger asChild>
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
								</MenuTrigger>
								<MenuContent>
									<MenuItem value='new-txt-a'>
										New Text File <MenuItemCommand>⌘E</MenuItemCommand>
									</MenuItem>
									<MenuItem value='new-file-a'>
										New File... <MenuItemCommand>⌘N</MenuItemCommand>
									</MenuItem>
									<MenuItem value='new-win-a'>
										New Window <MenuItemCommand>⌘⇧N</MenuItemCommand>
									</MenuItem>
									<MenuItem value='open-file-a'>
										Open File... <MenuItemCommand>⌘O</MenuItemCommand>
									</MenuItem>
									<MenuItem value='export-a'>
										Export <MenuItemCommand>⌘S</MenuItemCommand>
									</MenuItem>
								</MenuContent>
							</MenuRoot>
						</motion.div>
					</HStack>
				</Box>
				<Box hideFrom={'md'} width={'75%'} height={'100px'} pr={'20px'}>
					<HStack justifyContent={'flex-end'} height={'100%'}>
						<DrawerRoot
							size={'full'}
							open={MenuOpen}
							onOpenChange={(e) => setMenuOpen(e.open)}
						>
							<DrawerBackdrop />
							<DrawerTrigger asChild>
								<Icon fontSize={'40px'}>
									<Hamburger toggled={MenuOpen} toggle={setMenuOpen} />
								</Icon>
							</DrawerTrigger>
							<DrawerContent>
								<DrawerHeader>
									<DrawerTitle>Willkommen, Max Mustermann!</DrawerTitle>
								</DrawerHeader>
								<DrawerBody>
									{navbarItems.map((item, index) => (
										<Box key={index} cursor={'pointer'} mt={'10px'}>
											<motion.div
												whileTap={{ scale: 0.9 }}
												transition={{ duration: 0.2, type: 'tween' }}
												whileHover={{ scale: 1.1 }}
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												exit={{ scale: 0 }}
											>
												<NavLink to={item.link}>
													<DrawerActionTrigger asChild>
														<Heading
															as='h1'
															size='2xl'
															color={
																isActive(item.link) ? 'red.500' : 'gray.500'
															}
															fontWeight='medium'
															_hover={{ color: 'red.500' }}
															borderLeft={
																isActive(item.link) && '2px solid red'
															}
															pl={'5px'}
															ml={isActive(item.link) ? '13px' : '15px'}
														>
															{item.name}
														</Heading>
													</DrawerActionTrigger>
												</NavLink>
											</motion.div>
										</Box>
									))}
									<HStack mt={'20px'}>
										<Separator flex='1' />
										<Text flexShrink='0'>Dein Benutzer</Text>
										<Separator flex='1' />
									</HStack>
									<HStack mt={'10px'} gap={2}>
										<Avatar.Root variant={'solid'} size={'xl'}>
											<Avatar.Fallback name='Max Mustermann' />
										</Avatar.Root>
										<Stack gap={0}>
											<Heading
												as='h3'
												size='xl'
												color='gray.800'
												overflow={'hidden'}
												fontWeight={'bold'}
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
										</Stack>
									</HStack>
									{/* 📝 Hier können weitere Menüpunkte hinzugefügt werden */}
								</DrawerBody>
								<DrawerFooter>
									<DrawerActionTrigger asChild>
										<Button variant='outline'>Cancel</Button>
									</DrawerActionTrigger>
									<Button>Save</Button>
								</DrawerFooter>
								<DrawerCloseTrigger />
							</DrawerContent>
						</DrawerRoot>
					</HStack>
				</Box>
			</HStack>
		</Box>
	);
};

export default Navbar;
