// export function initKakao() {
// 	try {
// 		if (!window.Kakao.isInitialized()) {
// 			console.log('api 키 세팅완료');
// 			window.Kakao.init(process.env.NEXT_PUBLIC_API_KEY);
// 		}
// 	} catch (error) {
// 		console.error('Error initializing Kakao:', error);
// 	}
// }

export async function onClickShareKakaoTalk() {
	console.log('공유하기 버튼 실행');
	try {
		await window.Kakao.Share.sendScrap({
			requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
			templateId: 101453, // 메시지템플릿 번호
		});
	} catch (error) {
		console.error('Error sharing on KakaoTalk:', error);
	}
}

export async function onClickShareResult1KakaoTalk(title: string, content: string, result:number) {
	if (window.Kakao) {
		try {
			if (window.Kakao.Share) {
				await window.Kakao.Share.sendScrap({
					requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
					templateId: 101455, // 메시지템플릿 번호
					templateArgs: {
						THU: `https://huruhuru.netlify.app/img/result1thu${result}.png`,
						TITLE: `🍊 나의 탕후루는... ${title} 탕후루!`, // 제목 텍스트
						DESC: content, // 설명 텍스트
						BTN: '추억여행하러 가기',
					},
				});
			}
		} catch (error) {
			console.error('Error sharing result 1 on KakaoTalk:', error);
		}
	}
}

export async function onClickShareResult2KakaoTalk(title: string, content: string) {
	if (window.Kakao) {
		try {
			if (window.Kakao.Share) {
				await window.Kakao.Share.sendScrap({
					requestUrl: 'https://huruhuru.netlify.app/', // 페이지 url
					templateId: 101455, // 메시지템플릿 번호
					templateArgs: {
						THU: 'https://huruhuru.netlify.app/img/result2thu.png',
						TITLE: title, // 제목 텍스트
						DESC: content, // 설명 텍스트
						BTN: '기록 깨러가기',
					},
				});
			}
		} catch (error) {
			console.error('Error sharing result 2 on KakaoTalk:', error);
		}
	}
}
