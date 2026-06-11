import { useState } from "react";
import { IoStar } from "react-icons/io5";

function StarRating({ onChange, value = 0 }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (value) => {
    setHoverRating(value);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
    setIsHovering(false);
  };

  const handleClick = (value) => {
    onChange(value);
    setIsHovering(false);
  };

  return (
    <div className="flex" dir="ltr">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={starValue} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              checked={Number(value) === starValue}
              readOnly
            />
            <IoStar
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              className={`2xs:size-5 size-4.5 mx-0.5 transition-colors duration-200 ease-in-out ${
                (isHovering && starValue <= hoverRating) ||
                (!isHovering && starValue <= (Number(value) || 0))
                  ? "text-amber-400"
                  : "text-muted"
              }`}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
