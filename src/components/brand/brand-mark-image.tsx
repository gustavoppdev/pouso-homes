export function BrandMarkImage({
  size,
  fill,
  stroke,
}: {
  size: number;
  fill: string;
  stroke: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill={fill} />
      <rect x="6" y="8.5" width="14" height="7" stroke={stroke} strokeWidth="1.6" />
      <rect x="12" y="15.5" width="14" height="7" stroke={stroke} strokeWidth="1.6" />
    </svg>
  );
}
