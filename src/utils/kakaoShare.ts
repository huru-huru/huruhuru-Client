export function initKakao() {
	// 선언되지 않았을 때만 실행하도록 if문으로 체크
	if (window.Kakao) {
		if (!window.Kakao.isInitialized()) {
			window.Kakao.init(process.env.NEXT_PUBLIC_API_KEY);
		}
	}
}

export async function onClickShareKakaoTalk() {
	if (window.Kakao) {
		if (window.Kakao.Share) {
			await window.Kakao.Share.sendScrap({
				requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
				templateId: 101453, // 메시지템플릿 번호
			});
		}
	}
}


export async function onClickShareResult1KakaoTalk(title:string, content:string) {
	if (window.Kakao) {
		if (window.Kakao.Share) {
			await window.Kakao.Share.sendScrap({
				requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
				templateId: 101455, // 메시지템플릿 번호
                templateArgs: {
                    TITLE: `🍊 나의 탕후루는... ${title}탕후루!`, // 제목 텍스트
                    DESC: content, // 설명 텍스트
                    BTN: '추억여행하러 가기'
                  },
			});
		}
	}
}
export async function onClickShareResult2KakaoTalk(title:string, content:string) {
	if (window.Kakao) {
		if (window.Kakao.Share) {
			await window.Kakao.Share.sendScrap({
				requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
				templateId: 101455, // 메시지템플릿 번호
                templateArgs: {
                    TITLE: title, // 제목 텍스트
                    DESC: content, // 설명 텍스트
                    BTN: '기록 깨러가기'
                  },
			});
		}
	}
}
