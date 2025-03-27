import { ParticleField, HexagonGrid, GlowingOrbs, CyberLines } from "../BackgroundComponents/BackgroundComponents";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <ParticleField />
      <HexagonGrid />
      <GlowingOrbs />
      <CyberLines />
      
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(#3B82F6_1px,transparent_1px),linear-gradient(to_right,#3B82F6_1px,transparent_1px)] bg-[size:54px_54px] animate-[gridPulse_20s_linear_infinite]" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundEffects;