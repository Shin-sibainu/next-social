import { Home, User, Bell, MessageSquare, Settings } from "lucide-react";

export const SIDEBAR_ITEMS = [
  { label: "ホーム", icon: Home, path: "/" },
  { label: "プロフィール", icon: User, path: "/profile" },
  { label: "通知", icon: Bell, path: "/notifications" },
  { label: "メッセージ", icon: MessageSquare, path: "/messages" },
  { label: "設定", icon: Settings, path: "/settings" },
];
