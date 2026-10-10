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
    // 카카오톡 채널 "라움도배" 1:1 채팅
    kakaoChat: "https://pf.kakao.com/_xbgVFX/chat",
    blog: "https://blog.naver.com/raum-dobae-kr",
  },
} as const;

export const telHref = `tel:${site.phone.replaceAll("-", "")}`;
