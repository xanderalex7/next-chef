interface CardProps {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
}

function Card({ title = "", text = "", image }: CardProps) {
  const img = image ? (
    <img className="w-full" src={image.src} alt={image.alt} />
  ) : null;

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-teal-600 p-5">
      <div className="font-bold text-xl mb-2">{title}</div>
      {img}
      <div className="py-4">
        <p className="text-teal-100 text-base">{text}</p>
      </div>
    </div>
  );
}

export default Card;
