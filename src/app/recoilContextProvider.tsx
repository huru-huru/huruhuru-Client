"use client";

import { RecoilRoot, atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const exampleAtom = atom({
	key: 'isLogin',
	default: false,
	effects_UNSTABLE: [persistAtom],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}