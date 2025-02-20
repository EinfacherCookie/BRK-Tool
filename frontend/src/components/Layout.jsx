import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<Box>
			<Navbar />
			<main>
				<Box minHeight={'58vh'}>{children}</Box>
			</main>
			<Footer />
		</Box>
	);
};

export default Layout;
