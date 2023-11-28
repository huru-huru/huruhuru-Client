export function initKakao() {
	// 선언되지 않았을 때만 실행하도록 if문으로 체크
    if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.NEXT_PUBLIC_API_KEY);
        }
      }
}

export async function onClickShareKakaoTalk() {
	const link = typeof window !== 'undefined' ? window.location.href : '';
	await window.Kakao.Share.sendDefault({
		objectType: 'text',
		text: `탕후루 어쩌구 테스트...`,
		link: {
			mobileWebUrl: link,
			webUrl: link,
		},
	});
}

