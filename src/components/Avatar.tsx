import style from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  // propriedades estão sendo recebidas por desestruturação
  // o hasrborder = true é para deixar um valor default
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      {...props}
    />
  );
}
