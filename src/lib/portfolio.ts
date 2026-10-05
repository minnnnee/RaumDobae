import fs from "node:fs";
import path from "node:path";

// 시공 사례 분류. public/portfolio/<folder> 에 사진을 넣으면 자동으로 표시됩니다.
export const portfolioCategories = [
  { folder: "apartment", label: "아파트" },
  { folder: "officetel", label: "오피스텔" },
  { folder: "new-build", label: "신축" },
  { folder: "commercial", label: "상가 · 사무실" },
  { folder: "repair", label: "부분 도배 · 보수" },
] as const;

export type PortfolioPhoto = {
  src: string;
  caption: string;
  category: string;
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const ROOT = path.join(process.cwd(), "public", "portfolio");

/**
 * 파일 이름에서 설명 문구를 만든다. 예: "01_광교 에듀하임 32평.jpg" → "광교 에듀하임 32평"
 * "apt1.jpg"처럼 영문+번호뿐인 이름은 설명 없이 표시한다.
 */
function toCaption(file: string) {
  const caption = file
    .normalize("NFC")
    .replace(IMAGE_EXT, "")
    .replace(/^\d+[_\-.\s]+/, "")
    .replace(/[_]+/g, " ")
    .trim();
  return /^[A-Za-z\-]*\d*$/.test(caption) ? "" : caption;
}

export function getPortfolio(): PortfolioPhoto[] {
  return portfolioCategories.flatMap(({ folder, label }) => {
    const dir = path.join(ROOT, folder);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, "ko", { numeric: true }))
      .map((f) => ({
        src: `/portfolio/${folder}/${encodeURIComponent(f)}`,
        caption: toCaption(f),
        category: label,
      }));
  });
}
