import FontTest from "@/components/FontTest";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Huru',
	description: '탕후루로 보는 2000년대 공감 테스트',
	icons: {
		icon: '/img/testIcon.png',
	},
	keywords: ['탕후루', '2000년대', '추억', '테스트', '과일탕후루', '왕가탕후루'],
	openGraph: {
		title: '탕후루 테스트',
		description: '탕후루로 보는 2000년대 공감 테스트',
		url: '',
		siteName: 'Huru',
		images: [],
		type: 'website',
	},
};
export default function Home() {
  return (
    <div>
      <FontTest/>
    </div>
  )
}
