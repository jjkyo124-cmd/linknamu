export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "장기호",
  bio: "풀스택 개발자 : 요즘은 ai 개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "1", label: "깃허브", url: "https://github.com" },
  { id: "2", label: "링크드인", url: "https://linkedin.com" },
  { id: "3", label: "네이버 블로그", url: "https://blog.naver.com" },
];
