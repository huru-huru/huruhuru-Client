import { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import RecoidContextProvider from './recoilContextProvider';
import Script from 'next/script';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
	verification: {
		google: 'EOz8bF08VwtMDtyyB7n5kcMxUo5ARoeoIqnIeC8_haM',
	},
	title: '학교 앞 탕후루',
	description: '탕후루로 보는 2000년대 공감 테스트',
	authors: [{ name: '추억탕후루 중앙대' }],
	creator: '추억탕후루',
	publisher: '추억탕후루',
	icons: {
		icon: '/img/testIcon.png',
	},
	keywords: [
		'학교 앞 탕후루',
		'탕후루 테스트',
		'중앙대 탕후루',
		'탕후루',
		'2000년대',
		'추억',
		'테스트',
		'과일탕후루',
		'왕가탕후루',
		'후루후루',
		'추억테스트',
		'심리테스트',
		'mbti',
	],
	openGraph: {
		title: '학교 앞 탕후루',
		description: '탕후루로 보는 2000년대 공감 테스트 하러가기!',
		url: 'https://huruhuru.netlify.app/',
		siteName: '학교 앞 탕후루',
		images: [
			{
				url: 'https://huruhuru.netlify.app/img/hurutest_ogimg.png',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<StyledComponentsRegistry>
				<body>
					{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
						<GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
					) : null}
					<RecoidContextProvider>{children}</RecoidContextProvider>
				</body>
				<Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
			</StyledComponentsRegistry>
		</html>
	);
}

declare global {
	interface Window {
		Kakao: any;
	}
}
