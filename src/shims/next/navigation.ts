// src/shims/next/navigation.ts
import { useNavigate as rrNavigate, useLocation as rrLocation } from "react-router-dom";

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (href: string) => navigate(href),
    replace: (href: string) => navigate(href, { replace: true }),
    back: () => navigate(-1),
  };
}

export const useNavigate = rrNavigate;
export const useLocation = rrLocation;
export const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};
