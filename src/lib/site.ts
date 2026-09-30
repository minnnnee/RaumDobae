// 사업장 정보와 외부 링크는 이 파일에서만 수정하면 사이트 전체에 반영됩니다.
export const site = {
  name: "라움도배",
  nameEn: "RAUM DOBAE",
  // 도메인을 연결하면 이 주소만 바꾸면 됩니다.
  url: "https://raum-dobae.vercel.app",
  slogan: "깔끔한 마감에 집중합니다",
  ceo: "김지현",
  phone: "010-6862-1116",
  address: {
    line1: "광교 에듀타운로 101",
    line2: "에듀102동 1층 101호",
    note: "에듀하임 1309오피스텔 내 상가",
  },
  links: {
    // TODO: 실제 카카오톡 오픈채팅(상담) 링크로 교체
    kakaoChat: "https://open.kakao.com/o/",
    // TODO: 실제 카카오톡 채널 링크로 교체 (예: https://pf.kakao.com/_xxxxx)
    kakaoChannel: "https://pf.kakao.com/",
    blog: "https://blog.naver.com/raum-dobae-kr",
    // TODO: 실제 인스타그램 계정 링크로 교체
    instagram: "https://www.instagram.com/",
  },
} as const;

export const telHref = `tel:${site.phone.replaceAll("-", "")}`;
