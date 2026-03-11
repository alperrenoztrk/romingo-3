import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";

const mascots = [mascot1, mascot2, mascot3];

interface Props {
  index?: number;
  className?: string;
}

export default function MascotFace({ index = 0, className = "w-20 h-20" }: Props) {
  const src = mascots[index % mascots.length];
  return (
    <img
      src={src}
      alt="Romingo maskot"
      className={`object-contain drop-shadow-lg ${className}`}
    />
  );
}
