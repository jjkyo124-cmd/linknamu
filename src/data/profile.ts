export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "홍길동",
  bio: "한 줄 소개를 입력해주세요",
  avatarUrl: "",
};

export const links: LinkItem[] = [
  { id: "1", label: "깃허브", url: "https://github.com" },
  { id: "2", label: "링크드인", url: "https://linkedin.com" },
  { id: "3", label: "네이버 블로그", url: "https://blog.naver.com" },
];
