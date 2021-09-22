import {
	Flex,
	Heading,
	Stack,
	Spacer,
	Button,
	ButtonGroup,
	useColorMode,
	useColorModeValue,
	IconButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const NavBar: React.FC = () => {
	const { toggleColorMode } = useColorMode()
	const color = useColorModeValue(<SunIcon />, <MoonIcon />)
	return (
		<Flex height="8vh" backgroundColor="#4169e1">
			<Flex align="center" marginLeft="5">
				<Heading>0xDePaul</Heading>
			</Flex>
			<Spacer />
			<Flex>
				<Stack
					direction="row"
					align="center"
					spacing="5"
					marginRight="10"
				>
					<ButtonGroup size="lg">
						<Button>Home</Button>
						<Button>Get Started</Button>
						<Button>About</Button>
						<Button>Discord</Button>
						<IconButton
							aria-label="color mode switch"
							icon={color}
							onClick={toggleColorMode}
						></IconButton>
					</ButtonGroup>
				</Stack>
			</Flex>
		</Flex>
	)
}
