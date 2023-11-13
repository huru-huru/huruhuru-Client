import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import RecoidContextProvider from './recoilContextProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<RecoidContextProvider>{children}</RecoidContextProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
