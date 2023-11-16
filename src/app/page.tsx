import FontTest from '@/components/FontTest';
import LandingSection from '@/components/landing/Landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '학교 앞 탕후루',
	description: '탕후루로 보는 2000년대 공감 테스트',
	icons: {
		icon: '/img/testIcon.png',
	},
	keywords: [
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
		title: '탕후루 테스트',
		description: '탕후루로 보는 2000년대 공감 테스트',
		url: 'https://huruhuru.netlify.app/',
		siteName: 'Huru',
		images: [
			{
				url: 'https://huruhuru.netlify.app/img/testOGBanner.png',
			},
		],
		type: 'website',
	},
};

export default function Home() {
	return (
		<div>
			<LandingSection />
		</div>
	);
}
